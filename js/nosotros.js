document.querySelectorAll('.slide') // busca TODAS las tarjetas (divs con clase "slide")
  .forEach(slide => {               // las recorre una por una (slide es cada tarjeta individual)
    
    slide.addEventListener('mouseenter', () => {
      // cuando el mouse entra a una tarjeta:
      slide.style.transform = 'scale(1.05)';      // agranda un poco la tarjeta (zoom)
      slide.style.boxShadow = '0 12px 24px rgba(0,0,0,0.3)'; // sombra más fuerte
    });

    slide.addEventListener('mouseleave', () => {
      // cuando el mouse sale:
      slide.style.transform = 'scale(1)';         // vuelve al tamaño original
      slide.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';  // sombra normal
    });

  });