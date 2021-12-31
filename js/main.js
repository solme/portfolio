$(function(){

  // $(document).ready(function(){
    $('#fullpage').fullpage({
      //options here
      autoScrolling:true,
      scrollHorizontally: true,
      anchors: ['home', 'web', 'mobile','responsive','design','contact'],
      sectionsColor: ['#f5f5f0', '#f5f5f0', '#f5f5f0','#f5f5f0','#f5f5f0','#f5f5f0'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['HOME', 'WEB','MOBILE','RESPONSIVE', 'DESIGN','CONTACT'],
      responsiveWidth: 1100,
      afterResponsive: function(isResponsive){

      }
  //     afterLoad: function(anchorLink, index){
  //       console.log("현재 섹션=  " + index);
  //       if(index==7){
  //         // alert("현재 포트폴리오의 마지막 페이지입니다")
  //       }
  //       //if에 on클래스 활용가능
  //       },
  //       afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
  // console.log("현재 슬라이드번호=" +slideIndex)
  //       }
    });  
    //methods
    $.fn.fullpage.setAllowScrolling(true);
  // });

  
  $('.line').click(function(){
  
    $('.line').toggleClass('on');
    $('.m_menu').toggleClass('on');

  });
  


  let sw = 0;
  $('.line').click(function(){
    if(sw==0){
      $('.gnb').slideDown();
      $('.a_home').show();
      $('.a_web').show();
      sw = 1; 
    
    }else{
    
      $('.gnb').slideUp();
      $('.a_home').hide();
      $('.a_web').hide();
      sw = 0;    
    }
    });
  



  //work
  $('.work_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:false,
    arrows: true,
    dots:true
    });



  $('.gmenu div').click(function(){
    $(this).addClass('on').siblings().removeClass('on')
  });

  $(".group1").colorbox({rel:'group1', width:"50%", height:"90%"});
  $(".ajax").colorbox();

  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    // layoutMode: 'fitRows'
    // masonry: {
    //     columnWidth: 200
    //   }
  });

  // 디자인 메뉴
  $('#sian').click(function(){
    $('.grid').isotope({ filter: '.sian' })
  });

  $('#icon').click(function(){
    $('.grid').isotope({ filter: '.icon' })
  });

  $('#banner').click(function(){
    $('.grid').isotope({ filter: '.banner' })

  });

  $('#all').click(function(){
    $('.grid').isotope({ filter: '*' })
  });

  // $('.grid-item').mouseenter(function(){
  //   $(this).find('.cover').fadeIn(300);
  // });

  // $('.grid-item').mouseleave(function(){
  //   $(this).find('.cover').fadeOut(300);
  // });

  $(".progress-bar").loading();				// you can load automatically
	$('.input').on('click', function () {		// use some events to control the loading like this 
		 $(".progress-bar").loading();

	});

 
  $(document).ready(function(){
    $(document).snowfall({
        image :"images/flake.png", 
        minSize: 2, 
        maxSize:9, 
        flakeCount : 130
    });
});



});
