document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav-link');
    const activeLink = document.querySelector('.nav-link.active');
  
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        if (activeLink) activeLink.classList.add('temp-remove');
      });
  
      link.addEventListener('mouseleave', () => {
        if (activeLink) activeLink.classList.remove('temp-remove');
      });
    });
  });
  