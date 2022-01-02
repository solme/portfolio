$(function(){

    const swiper = new Swiper('.swiper', {
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


  let sw=0;
  $('.btn_pause').click(function(){
    if(sw==0){
      $('.btn_pause').addClass('on');
      swiper.autoplay.stop()
      sw=1;
    }else{
      $('.btn_pause').removeClass('on');
      swiper.autoplay.start()
      sw=0;
    }

  });    

  // --------------모바일메뉴
  $('.tab_menu li').click(function(){
    $(this).addClass('on').siblings().removeClass('on')
    let num = $(this).index();
    console.log(num);

    $('.bottom_menu .tab_con .list').eq(num).show().siblings().hide();
  });
  
  $('.tab_con .con>li>a').click(function(){
    console.log('클릭');
    $(this).parent().toggleClass('on');
    $(this).next().slideToggle('on');
  });

  
$('.m_btn').click(function(){
  
    $('.m_menu').animate({'left':0});
    $('.cover_h').fadeIn();
   $('body').css('overflow','hidden');
   

});

$('.btn_close').click(function(){
  $('.m_menu').animate({'left':-345});
  $('.cover_h').fadeOut();
  $('body').css('overflow','visible')
})

// $('.m_search').click(function(){
//   $('.search_pop').slideToggle(300);
// });

//검색버튼에 키보드 입력 이벤트
$('.search_wrap input').keyup(function(){
  let num = ($(this).val().length)
  console.log(num);
  if(num){
    $('.cover, .btn_reset').show();
  
  }else{
    $('.cover, .btn_reset').hide();
  }

});
  $('.btn_reset').click(function(){

    $('.search_wrap input').val('');
    $('.cover, .btn_reset').hide();
  });

$('.m_search').click(function(){
  $('.m_search').toggleClass('on')
 $('.search_wrap').slideToggle();
});



});

// let sw = 0;
// $('.m_btn').click(function(){
//     if(sw==0){
//     $('.cover').stop().fadeIn(300);
//     $('.gnb_wrap').animate({'left':0});
//     $('.wrap').animate({'left':278});
//     $('.m_btn').addClass('on');
//     sw = 1; 
//     }else{
//     $('.cover').stop().fadeOut(300);
//     $('.gnb_wrap').animate({'left':-278});
//     $('.wrap').animate({'left':0});
//     $('.m_btn').removeClass('on');
//     sw = 0;    
//     }
    
// });