const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.main-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('bg-white');
      } else {
        navbar.classList.remove('bg-white');
      }
    });
  }
};

export { initUpdateNavbarOnScroll };
