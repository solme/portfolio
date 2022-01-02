$(function(){
$('.popup_close').click(function(){
  $('.popup').fadeOut(200);
});

    const main = new Swiper('.main_slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

     

// ---------------제품슬라이드 클래식 js
      const product = new Swiper('.product_slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });



// 탭슬라이드 숨기기
$('.product_wrap .product_slide:gt(0)').hide();

// 탭 버튼 이벤트
$('.btn_tab li').click(function(e){
  e.preventDefault();
  // $('.btn_tab li').removeClass('on')
  // $(this).addClass('on');
  $(this).addClass('on').siblings().removeClass('on')

  let num = $(this).index();
  console.log(num);

  $('.product_wrap .product_slide').eq(num).show().siblings().hide();

});

// $('.btn_tab li').click(function(){
//   let num = $(this).index();
//   console.log(num);
//   $('.product_slide').hide();
//   $('.product_slide').eq(num).show();

// });

$('.header .menu').click(function(){
  $('.m_menu').animate({'left':0},500)
  $('.cover').fadeIn()
  $('body').addClass('on')
});
$('.m_menu_close').click(function(){
  $('.m_menu').animate({'left':'-100%'},500)
  $('.cover').fadeOut()
  $('body').removeClass('on')
});

$('.m_gnb li').click(function(){
  $(this).toggleClass('on');
  $(this).siblings().removeClass('on')
  $(this).find('.depth2').stop().slideToggle()
  $(this).siblings().find('.depth2').slideUp()
});

//24시간 닫기
$('.popup').slideDown(500)
$('.popup_close').click(function(){         
  if($('input[name=today_close]').is(':checked')){     
      setCookie('subway', 'close', 1)                 
      $('.popup').slideUp(500);
  }else{
      $('.popup').slideUp(500);
  }

});

if(GetCookie('subway')=='close'){
  $('.popup').hide();
}
// }else{
//   $('.popup').show();
// }

// GetCookie
function GetCookie(name){
    var value=null, search=name+"=";
    if(document.cookie.length > 0){
       var offset=document.cookie.indexOf(search);
       if(offset != -1){
          offset+=search.length;
          var end=document.cookie.indexOf(";", offset);
          if(end == -1) end=document.cookie.length;
          value=unescape(document.cookie.substring(offset, end));
       }
    } return value;
 }

// SetCookie
 function setCookie(name, value, expiredays){
    var days=10;
    if(days){
       var date=new Date(); 
       date.setTime(date.getTime()+(days*24*60*60*1000));
       var expires="; expires="+date.toGMTString();
    }else{
       var expires=""; 
    }
    document.cookie=name+"="+value+expires+"; path=/";
 }

});