const price = document.querySelectorAll('.price-tab');
let yearly = document.querySelector('#yearly');
let monthly = document.querySelector('#monthly');
for (let i = 0; i < price.length; i++) {
  price[i].onclick = function () {

    let el = 0;
    while (el < price.length) {
      price[el++].className = 'price-tab';
    }
    price[i].classList.add('active-tab');
    if (this.innerHTML === 'Monthly') {
      monthly.classList.add('cards-show');
      yearly.classList.remove('cards-show');
    } else {
      yearly.classList.add('cards-show');
      monthly.classList.remove('cards-show');
    }
  };
}



window.onload = function (e) {

  const cardContainer = document.querySelectorAll('.card-monthly');
  const cardContainerY = document.querySelectorAll('.card-yearly');
  for (let i = 0; i <= price.length; i++) {
    cardContainer[i].onmouseover = function () {
      let x = this.querySelector('.btn')
      x.style.backgroundColor = '#5b39c9';
      x.style.color = 'white';
    }
    cardContainer[i].onmouseout = function () {
      let x = this.querySelector('.btn')
      x.style.backgroundColor = '#ffffff';
      x.style.color = '#5b39c9';
    }
  }

  for (let i = 0; i <= price.length; i++) {
    cardContainerY[i].onmouseover = function () {
      let x = this.querySelector('.btn')
      x.style.backgroundColor = '#5b39c9';
      x.style.color = 'white';
    }
    cardContainerY[i].onmouseout = function () {
      let x = this.querySelector('.btn')
      x.style.backgroundColor = '#ffffff';
      x.style.color = '#5b39c9';
    }
  }
}




$(document).ready(function () {
  $('.owl-one').on('initialized.owl.carousel translate.owl.carousel', function (e) {
    idx = e.item.index;
    $('.owl-item.big').removeClass('center');
    $('.owl-item').eq(idx).addClass('center');
  });

  $('.owl-one').owlCarousel({
    center: true,
    margin: 0,
    loop: true,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        center: false
      },
      995: {
        items: 3
      }
    }
  })
});
$(document).ready(function () {
  var owl = $('.owl-two');
  owl.owlCarousel({
    margin: 0,
    loop: true,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 5000,
    responsive: {
      9: {
        items: 1
      }
    }
  })
});
$(document).ready(function () {
  var owl = $('.owl-three');
  owl.owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    loop: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      9: {
        items: 1
      }
    }
  })
});

jQuery(document).ready(function () {
  jQuery('.toggle-nav').click(function (e) {
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');

    e.preventDefault();
  });
});
$(document).ready(function () {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});