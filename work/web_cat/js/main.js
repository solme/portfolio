$(function(){

$('.section1 .btn_down').click(function(){
    $('body,html').animate({'scrollTop':1277},1000);

});

$('.section2 .btn_down2').click(function(){
    $('body,html').animate({'scrollTop':2302},1000);

});

$('.section3 .btn_down3').click(function(){
    $('body,html').animate({'scrollTop':3302},1000);

});

$('.section4 .btn_down4').click(function(){
    $('body,html').animate({'scrollTop':4442},1000);

});
$('.section5 .btn_down5').click(function(){
    $('body,html').animate({'scrollTop':5486},1000);

});
$('.section6 .btn_down6').click(function(){
    $('body,html').animate({'scrollTop':6486},1000);

});

$('.section7 .btn_down7').click(function(){
    $('body,html').animate({'scrollTop':7486},1000);

});

$('.section8 .btn_down8').click(function(){
    $('body,html').animate({'scrollTop':8469},1000);

});

$('.section9 .btn_down9').click(function(){
    $('body,html').animate({'scrollTop':9616},1000);

});

$('.section10 .btn_down10').click(function(){
    $('body,html').animate({'scrollTop':10693},1000);

});

$('.section11 .btn_down11').click(function(){
    $('body,html').animate({'scrollTop':11838},1000);

});

$('.section12 .btn_down12').click(function(){
    $('body,html').animate({'scrollTop':12686},1000);

});

// 페이지버튼 if
$('.quick li').click(function(){

$(this).addClass('on').siblings().removeClass('on');
let num = $(this).index();
console.log(num);

if(num==0){
    $('body,html').animate({'scrollTop':0},1000);
}else if(num==1){

    $('body,html').animate({'scrollTop':1277},1000);
}else if(num==2){

    $('body,html').animate({'scrollTop':2302},1000);
}else if(num==3){

    $('body,html').animate({'scrollTop':3302},1000);
}else if(num==4){

    $('body,html').animate({'scrollTop':4442},1000);
}else if(num==5){

    $('body,html').animate({'scrollTop':5482},1000);
}else if(num==6){

    $('body,html').animate({'scrollTop':6482},1000);
}else if(num==7){
    $('body,html').animate({'scrollTop':7482},1000);

}else if(num==8){
    $('body,html').animate({'scrollTop':8465},1000);

}else if(num==9){
    $('body,html').animate({'scrollTop':9612},1000);

}else if(num==10){
    $('body,html').animate({'scrollTop':10689},1000);

}else{
    $('body,html').animate({'scrollTop':11834},1000);
}
});

// 스크롤이벤트

//스크롤바의 위치가 1277보다 크면 header고정 시키고 스크롤바의 위치가 1277보다 작으면 header 고정 해제
    


$(window).scroll(function(){
    var num = $(document).scrollTop();
    console.log(num);

  
    if(num>=1277){
        $('.header').addClass('on')
    }else{
        $('.header').removeClass('on')
    }

    //스크롤바의 위치가 800-2302 애니메이션이 작동되고 (on)
    //800-2302 사이가 아니면 애니메이션 중단 (on클래스 제거)
    
    if(num>800 && num<2302){
        $('.m_case').addClass('on');
    }else if(num>0 && num<799){
        $('.m_case').removeClass('on');
    }
       // 섹션 3 고양이, 폰 이미지 애니메이션 동작↓    
    if(num>1700 && num < 3302){
        $('.cat').addClass('on');
        $('.phone').addClass('on');
    } else if(num>0 && num < 1700){
        $('.cat').removeClass('on');
        $('.phone').removeClass('on');
    }

    //섹션 4 핸드폰, 카드 이미지 애니메이션 동작
    if(num> 2800 && num<4442){
        $('.img_wrap').addClass('on');
        $('.img2').addClass('on');
    }else if(num>0 && num < 2800){
        $('.img_wrap').removeClass('on');
        $('.img2').removeClass('on');
    }
 
    //섹션 5 케이스 분리 애니메이션
    if(num> 3920 && num<5442){
        $('.uv_img').addClass('on');
        $('.ccover_img').addClass('on');
       
    }else if(num>0 && num < 3920){
        $('.uv_img').removeClass('on');
        $('.ccover_img').removeClass('on');
       
    }
  //섹션 6 애니
     if(num>5029 && num<5442){
    $('.case1').addClass('on');
    $('.case2').addClass('on');
    $('.circle').addClass('on');
   
    $('.line').addClass('on');
    $('.line2').addClass('on');
    }else if(num>0 && num <5029){
    $('.case1').removeClass('on')
    $('.case2').removeClass('on')
    $('.circle').removeClass('on')
    $('.line').removeClass('on')
    $('.line2').removeClass('on')
    }

    //섹션 7 그립감 보여주는 애니
    if(num>6000 && num<6442){
        $('.grip').addClass('on');
    }else if(num>0 && num <6000){
        $('.grip').removeClass('on')
    }

      //섹션 9 핸드폰열리는 애니
      if(num>8050 && num<9575){
        $('.left_img').addClass('on');
        $('.right_img').addClass('on'); 
        $('.tit').addClass('on');
    }else if(num>0 && num <8050){
        $('.left_img').removeClass('on');
        $('.right_img').removeClass('on'); 
        $('.tit').removeClass('on');
    }

    //섹션 10 애니
    if(num>9177 && num<10652){
        $('.case').addClass('on')
     
    }else if(num>0 && num <19177){
        $('.case').removeClass('on')
        
    }
 
    //섹션 11 좌우에서 핸드폰 날아오는 애니
    if(num>10189 && num<11796){
        $('.p_top').addClass('on')
        $('.p_bottom').addClass('on')
    }else if(num>0 && num <10189){
        $('.p_top').removeClass('on')
        $('.p_bottom').removeClass('on')
    }

    // 섹션 12 애니
    if(num>11343 && num<12640){
        $('.img_group').addClass('on')
     
    }else if(num>0 && num <11343){
        $('.img_group').removeClass('on')
        
    }

 //스크롤 할때 해당 페이지 버튼 on
    if(num>=0 && num<=1276){
        $('.quick li').removeClass('on');
        $('.quick li').eq(0).addClass('on');

    }else if(num>=1277 && num<=2301){
        $('.quick li').removeClass('on');
        $('.quick li').eq(1).addClass('on');

    }else if(num>=2302 && num<=3301){
        $('.quick li').removeClass('on');
        $('.quick li').eq(2).addClass('on');

    }else if(num>=3302 && num<=4441){
        $('.quick li').removeClass('on');
        $('.quick li').eq(3).addClass('on');

    }else if(num>=4442 && num<=5465){
        $('.quick li').removeClass('on');
        $('.quick li').eq(4).addClass('on');

    }else if(num>=5466 && num<=6465){
        $('.quick li').removeClass('on');
        $('.quick li').eq(5).addClass('on');

    }else if(num>=6466 && num <= 7465){
        $('.quick li').removeClass("on");
        $('.quick li').eq(6).addClass("on");
    }else if(num>=7466 && num <= 8448){
        $('.quick li').removeClass("on");
        $('.quick li').eq(7).addClass("on");
    }else if(num>=8449 && num <= 9558){
        $('.quick li').removeClass("on");
        $('.quick li').eq(8).addClass("on");
    }else if(num>=9559 && num <= 10652){
        $('.quick li').removeClass("on");
        $('.quick li').eq(9).addClass("on");
    }else if(num>=10652 && num <= 11700){
        $('.quick li').removeClass("on");
        $('.quick li').eq(10).addClass("on");
    }else{
        $('.quick li').removeClass("on");
        $('.quick li').eq(11).addClass("on");
    }
});
  //섹션 8 슬라이드
  
    $('.slider').slick({
      autoplay:true,
      fade:true
    });
  
    // 섹션 10 컬러


    $('.color .left li').click(function(e){
        let num = $(this).index();
        console.log(num);
        $('.color li').removeClass("on");
        $(this).addClass("on");
        $('.case li').removeClass("on");
        $('.left li').eq(num).addClass("on");
    });
    $('.color .right li').click(function(e){
        let num = $(this).index();
        console.log(num);
        $('.color li').removeClass("on");
        $(this).addClass("on");
        $('.case li').removeClass("on");
        $('.right li').eq(num).addClass("on");
    });







    //하이퍼링크 top으로 못가게 방지하는 명령
// $('.color .left').click(function(e){
//     e.preventDefault();
// });

// $('.color .right').click(function(e){
//     e.preventDefault();

// });



});
// 1 1277	
// 2 2302	
// 3 3302
// 4 4442
// 5 5442	
// 6 6442	
// 7 7442
// 8 8425
// 9 9575
// 10 10652
// 11 11792
// 12 12640


// 페이지버튼 switch 
    
// let num = $(this).index();
// console.log(num)
// switch(num){
//     case 0:
//         $('body,html').animate({'scrollTop':0},1000);
//     break;
//     case 1:
//         $('body,html').animate({'scrollTop':1277},1000);
//     break;

//     case 2:
//         $('body,html').animate({'scrollTop':2302},1000);
//     break;
//     case 3:
//         $('body,html').animate({'scrollTop':3302},1000);
//     break;
//     case 4:
//         $('body,html').animate({'scrollTop':4442},1000);
//     break;
//     case 5:
//         $('body,html').animate({'scrollTop':5482},1000);
//     break;
//     case 6:
//         $('body,html').animate({'scrollTop':6482},1000);
//     break;
//     case 7:
//         $('body,html').animate({'scrollTop':7482},1000);
//     break;
//     case 8:
//         $('body,html').animate({'scrollTop':8465},1000);
//     break;
//     case 9:
//         $('body,html').animate({'scrollTop':9612},1000);
//     break;
//     case 10:
//         $('body,html').animate({'scrollTop':10689},1000);
//     break;
//     default:
//         $('body,html').animate({'scrollTop':11834},1000);
// }