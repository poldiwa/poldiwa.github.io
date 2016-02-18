   $(function () {
     $mainMenu = $('.main.menu');
     $mainMenu.visibility({
       type: 'fixed'
     });
     $('.special.cards .image').dimmer({
       on: 'hover'
     });
     $('.ui.sidebar').sidebar('attach events', '.menu.toggle .item');

     $('.menu').on('click', function (e) {
       e.preventDefault();
       var $href = $(e.target).attr("href");
       if ($href == undefined) {
         return false;
       }
       var segmentMargin = 14;
       var $pos = Math.round($($href).offset().top) - ($mainMenu.outerHeight() + segmentMargin);
       $('html, body').animate({
         scrollTop: $pos
       });
     });

   });
