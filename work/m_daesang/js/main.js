$(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        mousewheel: {
            // invert: true,
          },
          speed: 400, //전환속도

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

      $('.btn_next').click(function(){
        swiper.slideNext(500);

      });
});