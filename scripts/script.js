
let userExperience = {

  sliderHeader: function (element) {
    element.slick({
      dots: true,
      infinite: true,
      prevArrow: false,
      nextArrow: false,
      vertical: true,
      adaptiveHeight: true,
      speed: 140
    })
  },
  sliderNews: function (element) {
    element.slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      responsive: [
        {
          breakpoint: 1121,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  },
  smoothScroll: function (link) {
    document.querySelectorAll(link).forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  },

  showMobileMenu: function (button, element) {
    document.addEventListener('DOMContentLoaded', nav)
    function nav() {
      button.addEventListener('click', () => {
        element.classList.toggle('show')
      })
    }
  }
};



userExperience.sliderHeader($('.header__slider'))
userExperience.sliderNews($('.main__news-slider'))
userExperience.smoothScroll('.header__scroll-btn')
userExperience.smoothScroll('.nav__link')
userExperience.showMobileMenu(document.querySelector('.btn-mobile'), document.querySelector('.nav'))


function initMap() {
  const monticello = { lat: 40.756166554354614, lng: -73.99380147671307 };
  const map = new google.maps.Map(
    document.getElementById("map"),
    {
      mapId: "e72adc885951f8c5",
      zoom: 15,
      center: monticello ,
    }
  );

  let marker = new google.maps.Marker({
    position: monticello, map: map, icon: {
      url: './img/Pin.png',
      scaledSize: new google.maps.Size(100, 100), 
      anchor: new google.maps.Point(50, 50) 
    }
})
    
  window.initMap = initMap;



  marker.addListener("mouseover", function () {
    setBounce(marker);
  });

  function setBounce(marker) {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

}



