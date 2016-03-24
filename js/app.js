$(function () {
  
  



  function animateIn(element, animate) {
    var i = 0;
    var animation = setInterval(function () {
      if (i <= element.length) {
        $(element[i]).removeClass('hidden').addClass('animated '+animate);
        i++;
      } else {
        clearInterval(animation);
      }
    }, 250);
  }
  
  $("nav a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    var offset = $(id).offset().top;
    $("body").animate({
      scrollTop: offset
    }, 750);
  });

  var t = $("#intro").offset().top;
  var h = $("#intro").css("height");
  var s = t + parseInt(h.replace("px", ""));

  $(window).on("scroll", function (e) {
    e.preventDefault();
    setTimeout(function () {
      if ($(document).scrollTop() >= s) {
        $("nav").addClass('sticky');
      } else {
        $("nav.sticky").removeClass("sticky");
      }
    }, 250);
  });
  $(window).on('load', function () {
    setTimeout(function () {
      //    var untype = setInterval(function () {
      //      var loading = $("#loading").text().trim().split("");
      //      if (loading.length <= 0) {
      //        clearInterval(untype);
      $("#loading").fadeOut();
      animateIn($("#intro").find('a'),'slideInUp');
      typing();
      //      }
      //      loading.pop(0, 1);
      //      loading = loading.join("");
      //      $("#loading").html('<h1 class="pulse"><em>' + loading + '</h1></em>');
      //    },128);
    }, 1000);
  });

  function typing() {
    var counter = 0;
    var intro = "Hi, I'm <strong>Paul John Diwa</strong>.<br> I'm passionate in web development and aspiring to be a successful full stack web developer.".split("");
    var type = setInterval(function () {
      if (counter <= intro.length) {
        $("#intro__text").html(intro.slice(0, counter).join("") + '<span id="pointer" style="width:1px; border:1px solid #fff"></span>');
        counter++;
      } else {
        clearInterval(type);
        $("#pointer").remove();
      }
    }, 50);
  }


});
