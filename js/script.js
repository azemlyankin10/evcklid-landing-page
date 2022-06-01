// burger
document.querySelector('#burger').addEventListener('click', function(){
  document.querySelector('#menu').classList.toggle('nav__list--active')
  document.querySelector('.header__burger').classList.toggle('header__burger--active')
})

// slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

})

// tab
document.querySelectorAll('.nav-steps__link').forEach(function(elem){
  elem.addEventListener('click', function(e){
    e.preventDefault()
    const path = e.currentTarget.dataset.tab
    document.querySelectorAll('.tabShow').forEach(function(elem){
      elem.classList.remove('tabShow')
    })
    document.querySelectorAll('.nav-steps__link--active').forEach(function(elem){
      elem.classList.remove('nav-steps__link--active')
    })
    document.querySelector(`[data-point="${path}"]`).classList.add('tabShow')
    document.querySelector(`[data-tab="${path}"]`).classList.add('nav-steps__link--active')
    document.querySelector(`[data-image="${path}"]`).classList.add('tabShow')
  })
})

// accordion
$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
    collapsible: true
  });
} );

