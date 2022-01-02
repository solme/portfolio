
$(function(){
  $('.gnb').mouseenter(function(){
    $('header').stop().animate({'height':411},400);
    $('.depth2').stop().slideDown();
    $('.line').show();
});
$('header').mouseleave(function(){
  $('header').stop().animate({'height':160},400);
  $('.depth2').stop().slideUp();
  $('.line').hide();
});
   

$('.m_gnb li').click(function(){
        
  $(this).toggleClass('on')
  $(this).siblings().removeClass('on')
  $('.m_depth2').stop().slideUp();
  $(this).find('.m_depth2').stop().slideToggle();

});


$('.m_btn').click(function(){
  $('.cover').fadeIn();  
  $('body,html').css('overflow','hidden')
  $('.m_gnb').animate({'left':0})
  $('.m_close').show();
}) 

$('.cover, .m_close').click(function(){
  $('.cover').fadeOut();  
  $('body,html').css('overflow','auto')
  $('.m_gnb').animate({'left':'-100%'})
  $('.m_close').hide();
})

  $('.visual').slick({
   autoplay:true,
   dots:true
  });

  $('.best_slide').slick({
    autoplay:true,
    vertical:true
   });

   $('.open_slide').slick({
    autoplay:true,
    vertical:true,
    slidesToShow: 4,
    slidesToScroll: 1
   });

   $(window).scroll(function() {
    $(".quick").stop().animate({"top" : ($(window).scrollTop() + 120) + "px"   }, 300);
  });



  $(window).resize(function(){

    let num = $(this).width();
    console.log(num);
    // 모바일이미지로 교체
    if(num<=765){
      $('.photo1 img').attr('src','images/m_visual_00.png');
      $('.photo2 img').attr('src','images/m_visual_01.png');
      $('.photo3 img').attr('src','images/m_visual_02.png');

  
      
//pc이미지로교체
    }else{
      $('.photo1 img').attr('src','images/visual_00.png');
      $('.photo2 img').attr('src','images/visual_01.png');
      $('.photo3 img').attr('src','images/visual_02.png');


      // $('.gnb').mouseenter(function(){
      //   $('header').stop().animate({'height':411},400);
      //   $('.depth2').stop().slideDown();
      //   $('.line').show();
      // });
      // $('header').mouseleave(function(){
      //   $('header').stop().animate({'height':160},400);
      //   $('.depth2').stop().slideUp();
      //   $('.line').hide();
      // });
      

    }

});

//새로고침해도 이벤트유지
let num = $(window).width();
console.log('가로사이즈',num);

// 모바일이미지로 교체
if(num<=765){
  $(".photo1 img").attr('src','images/m_visual_00.png');
  $(".photo2 img").attr('src','images/m_visual_01.png');
  $(".photo3 img").attr('src','images/m_visual_02.png');

//pc이미지로교체
}else{
  $(".photo1 img").attr('src','images/visual_00.png');
  $(".photo2 img").attr('src','images/visual_01.png');
  $(".photo3 img").attr('src','images/visual_02.png');


//   $('.gnb').mouseenter(function(){
//     $('header').stop().animate({'height':411},400);
//     $('.depth2').stop().slideDown();
//     $('.line').show();
// });
// $('header').mouseleave(function(){
//   $('header').stop().animate({'height':160},400);
//   $('.depth2').stop().slideUp();
//   $('.line').hide();
// });

}


const line = document.querySelector('.line');
console.log(line);
const links = document.querySelectorAll('.gnb a')
console.log(links)
const colors = ['#674d8e','#a991c4']

for(let i = 0; i < links.length; i++){

	links[i].addEventListener('mouseenter',mouseenterFunc);
	};
	
	function mouseenterFunc(){
	//parentNode 부모요소
	//classList.conatins 해당클래스를 가지고 있음
	//classList.contains -> addClass
	// classList.remove -> removeClass
		if(!this.parentNode.classList.contains('on')){
			
			for(let i=0; i<links.length; i++){

				if(links[i].parentNode.classList.contains('on')){
					links[i].parentNode.classList.remove('on');
				}
			
			}
			this.parentNode.classList.add('on');
			// this.style.opacity=1;


			//links요소의 가로사이즈 높이값
			const width = this.getBoundingClientRect().width;
			console.log("Width= " + width);
			const height = this.getBoundingClientRect().height;
			console.log("Height= " + height);
			
				//x y 좌표값
			const left = this.getBoundingClientRect().left;
			console.log("Left= " + left);
			const top = this.getBoundingClientRect().top;
			console.log("Top= " + top);
			
			//border 값 삽입
			line.style.width = width + "px";
			line.style.height = height + "px";
			line.style.left = left + "px";
			line.style.top = top + "px";

			
			console.log(Math.floor(Math.random()*2));
			
			line.style.borderColor = colors[Math.floor(Math.random()*2)];
      
		}

	}
  








});