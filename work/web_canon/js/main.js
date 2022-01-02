$(function(){

    // --------------헤더 메뉴
    $('.cover1').mouseenter(function(){
        $('.cover').stop().animate({'height':312},400);
        
        
    });

    $('.cover1').mouseleave(function(){
        $('.cover').stop().animate({'height':0},400);
      
    });


//-------------------- 팝업 검색창
//헤더 돋보기 클릭
$('.header_top .search').click(function(){
    $('.search_pop ').fadeIn();
    $('body').css('overflow','hidden')
})
$('.search_close').click(function(){
    $('.search_pop ').fadeOut();
    $('body').css('overflow','visible')

});
//통합검색
$('.btn_all').click(function(){
    $('.search_slide').slideToggle();

});





// ----------------------------메인슬라이드
    $('.visual').slick({
        autoplay:true,
        dots:true,
        arrows:false,
        
    });


    let mains=0;
    $('.btn_main').click(function(){
      if(mains==0){
        $('.btn_main').addClass('on');
        $('.visual').slick('slickPause');

        mains=1;

      }else{
          $('.btn_main').removeClass('on');
          $('.visual').slick('slickPlay');
        main=0;
      }  
    });
    //section1 왼쪽 배너리스트--------------------------
    $('.banner_list').slick({
        arrows:false,
        dots:true
    });

    let swi=0;
     $('.btn_p').click(function(){
        if(swi==0){
            $('.btn_p').addClass('on');
            $('.banner_list').slick('slickPlay');
            swi=1;
        }else{
            $('.btn_p').removeClass('on'); 
            $('.banner_list').slick('slickPause');
            swi=0;
        }
    });    

     //section1 오른쪽 info배너_왼쪽-------------------------------
     $('.info_left').slick({
        autoplay:true,
        arrows:false,
        dots:true
     });

     let infos=0
     $('.btn_p_info1').click(function(){
         if(infos==0){
         $('.btn_p_info1').addClass('on');
         $('.info_left').slick('slickPause');
         infos=1;
        }else{
            $('.btn_p_info1').removeClass('on');
            $('.info_left').slick('slickPlay');
            infos=0;
        }
     });

    //section1 오른쪽 info배너_오른쪽-----------------------------------
    $('.info_right').slick({
        arrows:false,
        dots:true
    });
     
    let infos2=0;
    $('.btn_p_info2').click(function(){
        if(infos2==0){
            $('.btn_p_info2').addClass('on');
            $('.info_right').slick('slickPlay');
            infos2=1;
        }else{
            $('.btn_p_info2').removeClass('on');
            $('.info_right').slick('slickPause');
            infos2=0;
        }
    });

    
     //section2 오른쪽 배너리스트
    $('.pro_list').slick({
        slidesToShow:2, //슬라이드당 2개씩
        slidesToScroll:2, //스크롤 2개씩
        arrows:false,
        dots:true
      });

     let sw=0 
     $('.btn_pause').click(function(){
        if(sw==0){
            $('.btn_pause').addClass('on');
            $('.pro_list').slick('slickPlay');
            sw=1;
        }else{
            $('.btn_pause').removeClass('on'); 
            $('.pro_list').slick('slickPause');
            sw=0;
        }   
     }); 

    //section3 세로 슬라이드
    $('.note').slick({
        autoplay:true,
        vertical:true
    });

    let notes=0;
    $('.btn_note').click(function(){
        if(notes==0){
            $('.btn_note').addClass('on');
            $('.note').slick('slickPause');
            notes=1;
        }else{
            $('.btn_note').removeClass('on');
            $('.note').slick('slickPlay');
            notes=0;
        }
    });

    //footer 사이트맵
    let site=0
    $('.btn_sitemap').click(function(){
        $('.btn_sitemap').toggleClass('on')

        if(site==0){
        $('.footer_site').animate({'height':430})
        $('.sitemap_list').stop().slideDown();
            site=1;
    }else{
        $('.footer_site').animate({'height':36})
        $('.sitemap_list').stop().slideUp();
        site=0;
    }
        

    });

});

