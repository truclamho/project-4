document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav-link');
    let activeLink = document.querySelector('.nav-link.active');
    
    const handleLinkHover = () => {
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          if (activeLink && activeLink !== link) {
            activeLink.classList.add('temp-remove'); 
          }
        });
    
        link.addEventListener('mouseleave', () => {
          if (activeLink) {
            activeLink.classList.remove('temp-remove');  
          }
    
          if (window.location.pathname.includes(link.getAttribute('href'))) {
            activeLink = link;
            link.classList.add('active');
          }
        });
      });
    };
    
    handleLinkHover();
    
    const setDate = () => {
      const dateBox = document.getElementById("current-date");
      const currentDate = new Date();
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      dateBox.innerText = currentDate.toLocaleDateString('en-US', options);
    };
    
    setDate();
    
    const typewriterEffect = () => {
      const typewriterSpan = document.querySelector('.typewriter span');
      const text = typewriterSpan.getAttribute('data-text'); 
      typewriterSpan.innerText = '';  
      let index = 0;
    
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          typewriterSpan.innerText += text[index];
          index++;
        } else {
          clearInterval(typingInterval); 
          setTimeout(() => {
            typewriterSpan.innerText = ''; 
            index = 0; 
            typewriterEffect(); 
          }, 1000); 
        }
      }, 100);
    };
    
    typewriterEffect();
  
    const images = document.querySelectorAll('#extra .image-1 img'); 
    const lightbox = document.querySelector('#lightbox');
    const lightboxImage = lightbox.querySelector('img'); 
  
    images.forEach(image => {
      image.addEventListener('click', (e) => {
        lightbox.style.display = 'flex';
        lightboxImage.src = e.target.src; 
      });
    });
  
    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  });
  