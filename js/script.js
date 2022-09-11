const swiper = new Swiper('.swiper', {  
  slidesPerView: 3.75,
  spaceBetween: 25,
  slidesPerGroup: 2,
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
    autoplay: {
      delay: 4000,
    },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


  //  tabs
const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();

// menuburger

const iconBurger = document.querySelector('.header-nav');
if (iconBurger) {
    const menuburger = document.querySelector('.header-tel');
    iconBurger.addEventListener("click", function(e) {
      document.body.classList.toggle("lock");
      // iconBurger.classList.toggle("active");
      menuburger.classList.toggle("active");
    });
}
