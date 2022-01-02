$(function(){
    $('.visual').slick({
        autoplay:true,
        dots:true
      });

// -------------pc메뉴
    $('.gnb> li').mouseenter(function(){
        $(this).find('.depth2').stop().slideDown();

    });

    $('.gnb> li').mouseleave(function(){
        $(this).find('.depth2').stop().slideUp();

    });

    //----------모바일메뉴
  $('.m_menu').click(function(){
    $('.cover').fadeIn();  
    $('body,html').css('overflow','hidden')
    $('.m_menu_wrap').animate({'left':0})
  }) 

  $('.cover').click(function(){
    $('.cover').fadeOut();  
    $('body,html').css('overflow','auto')
    $('.m_menu_wrap').animate({'left':'-100%'})
  })


    $('.m_gnb> .dep0').click(function(){
        
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
        $('.depth2').stop().slideUp();
        $(this).find('.depth2').stop().slideToggle();
    
    });


  

    



    $('.collect div a').mouseenter(function(){
       let pre_src = $(this).find('img').attr('src');
        console.log(pre_src);
       let next_src = pre_src.replace('ot','ov');
        console.log(next_src)

        $(this).find('img').attr('src',next_src);
    });
   
    $('.collect div a').mouseleave(function(){
        let pre_src = $(this).find('img').attr('src');
         console.log(pre_src);
        let next_src = pre_src.replace('ov','ot');
         console.log(next_src)
 
         $(this).find('img').attr('src',next_src);
     });


    
    $('.list .sns li').mouseenter(function(){
        $(this).find('.cover').show();

    });

    $('.list .sns li').mouseleave(function(){
        $(this).find('.cover').hide();
    });

$(window).resize(function(){

    let num = $(this).width();
    console.log(num);
    // 모바일이미지로 교체
    if(num<=765){
       $(".photo3 img").attr('src','images/m_product.jpg');
//pc이미지로교체
    }else{
    $(".photo3 img").attr('src','images/product_ot.jpg');
    }

});

//새로고침해도 이벤트유지
let num = $(window).width();
console.log('가로사이즈',num);

// 모바일이미지로 교체
if(num<=765){
$(".photo3 img").attr('src','images/m_product.jpg');

//pc이미지로교체
}else{
$(".photo3 img").attr('src','images/product_ot.jpg');
}

$('.btn_f').click(function(){
    $('.f_list').slideToggle();
    
    });


});



