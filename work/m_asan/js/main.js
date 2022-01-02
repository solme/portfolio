$(function(){
    let sw = 0;
    $('.m_btn').click(function(){
        if(sw==0){
        $('.cover').stop().fadeIn(300);
        $('.gnb_wrap').animate({'left':0});
        $('.wrap').animate({'left':278});
        $('.m_btn').addClass('on');
        sw = 1; 
        }else{
        $('.cover').stop().fadeOut(300);
        $('.gnb_wrap').animate({'left':-278});
        $('.wrap').animate({'left':0});
        $('.m_btn').removeClass('on');
        sw = 0;    
        }
        
    });

    $('.btn_close').click(function(){
        $('.cover').stop().fadeOut(300);
        $('.gnb_wrap').animate({'left':-278});
    });

    $('.m_search').click(function(){
        $('.search_wrap').show();
    });
    $('.btn_close').click(function(){
        $('.search_wrap').hide();
    });

    //모바일버튼 전환
    $('.m_btn').click(function(){

    });

 //슬라이드
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





});