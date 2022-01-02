
$(function(){
    $('.visual').slick({
        autoplay:true,
        dots:true
      });
      $('.notice_slide').slick({
        autoplay:true,
        dots:true,
        arrows:false
      });
  //윈도우창 브라우저를 사이즈 조절했을떄 이벤트
$(window).resize(function(){
    let num = $(this).width();
    console.log(num);
    if(num <= 750){
        $('main .visual .slick-prev,main .visual .slick-next').hide()
        $('main .visual .slick-dots').show()
    }else{
        $('main .visual .slick-prev,main .visual .slick-next').show()
        $('main .visual .slick-dots').hide()
    };
     //메인visual 이미지 교체 부분
    if(num<=750){
                // 모바일이미지교체
        $(".visual1 img").attr('src','images/visual01_m.jpg');
        $(".visual2 img").attr('src','images/visual02_m.jpg');
        $(".visual3 img").attr('src','images/visual03_m.jpg');
        $(".visual4 img").attr('src','images/visual04_m.jpg');
        $('.box1 img').attr('src','images/img_story01_m.jpg');
        $('.box2 img').attr('src','images/img_story02_m.jpg');
        $('.box3 img').attr('src','images/img_story03_m.jpg');
          //배너 슬라이드 이미지교체
        $('main .notice_slide .notice1 img').attr('src','images/img_blogevent160816_m.jpg');
        $('main .notice_slide .notice2 img').attr('src','images/img_facebookevent160816_m.jpg');
        $('main .notice_slide .notice3 img').attr('src','images/img_renewalevent1_m.jpg');
        $('main .notice_slide .notice4 img').attr('src','images/img_renewalevent2_m.jpg');

    }else{
          //pc이미지교체
        $(".visual1 img").attr('src','images/visual01.jpg');
        $(".visual2 img").attr('src','images/visual02.jpg');
        $(".visual3 img").attr('src','images/visual03.jpg');
        $(".visual4 img").attr('src','images/visual04.jpg');
        $('.box1 img').attr('src','images/img_story01.jpg');
        $('.box2 img').attr('src','images/img_story02.jpg');
        $('.box3 img').attr('src','images/img_story03.jpg');
        $('main .notice_slide .notice1 img').attr('src','images/img_blogevent160816.jpg');
        $('main .notice_slide .notice2 img').attr('src','images/img_facebookevent160816.jpg');
        $('main .notice_slide .notice3 img').attr('src','images/img_renewalevent1.jpg');
        $('main .notice_slide .notice4 img').attr('src','images/img_renewalevent2.jpg');
    };
});

  //브라우저 가로사이즈 크기 조절 상관없이(브라우저 이벤트가 없어도 새로고침하면 이전이벤트 유지
let num = $(window).width();
console.log('가로사이즈',num);
if(num<=750){
    $(".visual1 img").attr('src','images/visual01_m.jpg');
    $(".visual2 img").attr('src','images/visual02_m.jpg');
    $(".visual3 img").attr('src','images/visual03_m.jpg');
    $(".visual4 img").attr('src','images/visual04_m.jpg');
    $('.box1 img').attr('src','images/img_story01_m.jpg');
    $('.box2 img').attr('src','images/img_story02_m.jpg');
    $('.box3 img').attr('src','images/img_story03_m.jpg');
    $('main .notice_slide .notice1 img').attr('src','images/img_blogevent160816_m.jpg');
    $('main .notice_slide .notice2 img').attr('src','images/img_facebookevent160816_m.jpg');
    $('main .notice_slide .notice3 img').attr('src','images/img_renewalevent1_m.jpg');
    $('main .notice_slide .notice4 img').attr('src','images/img_renewalevent2_m.jpg');
}else{
    $(".visual1 img").attr('src','images/visual01.jpg');
    $(".visual2 img").attr('src','images/visual02.jpg');
    $(".visual3 img").attr('src','images/visual03.jpg');
    $(".visual4 img").attr('src','images/visual04.jpg');
    $('.box1 img').attr('src','images/img_story01.jpg');
    $('.box2 img').attr('src','images/img_story02.jpg');
    $('.box3 img').attr('src','images/img_story03.jpg');
    $('main .notice_slide .notice1 img').attr('src','images/img_blogevent160816.jpg');
    $('main .notice_slide .notice2 img').attr('src','images/img_facebookevent160816.jpg');
    $('main .notice_slide .notice3 img').attr('src','images/img_renewalevent1.jpg');
    $('main .notice_slide .notice4 img').attr('src','images/img_renewalevent2.jpg');
};
if(num <= 750){
    $('main .visual .slick-prev,main .visual .slick-next').hide()
    $('main .visual .slick-dots').show()
}else{
    $('main .visual .slick-prev,main .visual .slick-next').show()
    $('main .visual .slick-dots').hide()
};
$('.m_btn').click(function(){
    $('.cover').fadeIn();
    $('.m_gnb').animate({'left':0},500);
    $('body,html').addClass("on");
});
$('.cover').click(function(){
    $('.cover').fadeOut();
    $('.m_gnb').animate({'left':-250},500);
    $('body,html').removeClass("on");
});
$('footer .btn_top').click(function(){
    $('body,html').animate({'scrollTop':0},800);
});

});