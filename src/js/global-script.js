$(document).ready(function() {
  
});

$(document).ready(function() {
  $('.multiple-items').slick({
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.multiple-items').on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));
});

$(document).ready(function() {
  var myFullpage = new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    anchors: ['page-about', 
              'page-service', 
              'page-attend', 
              'page-buy', 
              'page-whyWe', 
              'page-news', 
              'page-contacts'],
    menu: '#menu',
    keyboardScrolling: false,
    fadingEffect: true,
    // scrollOverflow: true
    autoScrolling: false,
    paddingTop: '0em',
    paddingBottom: '0px',
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
  });
});

$('.main-number').each(function () {
   var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
   $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
   }, {
      duration: 3000,
      step: function (func) {
         $(this).text(parseFloat(func).toFixed(size));
      }
   });
});

var a = 0;
$(window).scroll(function() {
  var oTop = $('.buy').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.stat-number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});

$(document).ready(function(){
  $('.article__service__more .card-more').click(function(){
    $(".article__service__cards").addClass("article__service__cards--active");
    $(".article__service__more").addClass("d-none")
  });
});

$(document).ready(function(){
  $('.news__more .btn').click(function(){
    $(".news__row").addClass("news__row--active");
    $(".news__more").addClass("d-none")
  });
});

// $(document).ready(function(){
//   $('.toggle-menu').click(function(){
//     $(this).toggleClass('open');
//     slideout.close();
//   });
// });

// MAIN MENU
// var slideout = new Slideout({
//   'panel': document.getElementById('main'),
//   'menu': document.getElementById('menu'),
//   'side': 'right',
//   'padding': 256,
//   'tolerance': 70
// });
// document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
//   slideout.toggle();
// });
// function close(eve) {
//   eve.preventDefault();
//   slideout.close();
// }
// slideout
//   .on('beforeopen', function() {
//     this.panel.classList.add('panel-open');
//   })
//   .on('open', function() {
//     this.panel.addEventListener('click', close);
//   })
//   .on('beforeclose', function() {
//     this.panel.classList.remove('panel-open');
//     this.panel.removeEventListener('click', close);
//   });

