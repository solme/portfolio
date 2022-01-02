$(function(){
    $('#header').mouseenter(function(){
        $('#header').stop().animate({'height':411},400);
        $('.depth2').stop().slideDown();
        
    });

    $('#header').mouseleave(function(){
        $('#header').stop().animate({'height':145},400);
        $('.depth2').stop().slideUp();
    });

    $('.visual').slick({
        autoplay: true, //슬라이드 자동실행
        autoplaySpeed:3000, //자동실행 전환속도 1000초는 1초
        dots:true, //페이지버튼 보이기
        fade:true, //페이드인 페이드아웃
        //arrows:false //좌우버튼 false는 숨김 true는 보임
      });

      $('.new_slide').slick({
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,
        dots:true,     
               
    });

 
    $('.slide_list').slick({
        arrows:false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1
     });

     $('.site_inner').click(function(){
        $('.site_inner .list').stop().slideToggle();
      });

    // $('.list li').click(function(){
//     $(this).addClass('on');
//     $(this).siblings().removeClass('on');
// });


    // 탭슬라이드 숨기기
   


// 탭 버튼 이벤트



$('.list li').click(function(e){
  e.preventDefault();
  $(this).addClass('on').siblings().removeClass('on')

  let num = $(this).index();
  console.log(num);
  $('.slide_list').hide();
  $('.slide_list').eq(num).show()
  $('.slide_list').slick('setPosition');
});

   // customPaging : function(slider, i) {
//     var thumb = $(slider.$slides[i]).find('.slider-nav');
//     return thumb;
// }




$(window).scroll(function() {
  $(".scroll_banner").stop().animate({"top" : ($(window).scrollTop() + 520) + "px"   }, 300);
});
  

$(".quick_list li").mouseenter(function(){
  $(this).addClass('on').siblings().removeClass('on')

});

$(".quick_list li").mouseleave(function(){
  $(this).removeClass('on')

});

$('.btn_top').click(function(){
  $('body,html').animate({'scrollTop':0},400);
});

});

    