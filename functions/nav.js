// const mainButton =document.querySelector('.nav-button');
// const mobileMenu=document.querySelector('.mobile_nav');
const mainButton = document.querySelector('.nav-button');
const mobileMenu = document.querySelector('.primary-navigation');

mainButton.addEventListener('click', () => {
  const isOpened = mainButton.getAttribute('aria-expanded');
   if (isOpened ==='false') {
    mainButton.setAttribute('aria-expanded', 'true');
   } else {
    mainButton.setAttribute('aria-expanded', 'false');
   }
   mobileMenu.classList.toggle('open');

   setTimeout(() => {
    mainButton.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
  }, 6000)
  }


)







// const primaryNav = document.querySelector('.primary-nav');
// const navToggle = document.querySelector('.mobile-nav-toggle');

// navToggle.