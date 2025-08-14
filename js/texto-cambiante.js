
  document.addEventListener('DOMContentLoaded', () => {
    const animWrap = document.querySelector('.anim-wrap');
    const titulo   = animWrap.querySelector('.titulo-presentacion');
    const descripcion = animWrap.querySelector('.descripcion-presentacion');
    const prevBtn  = document.getElementById('prev-btn');
    const nextBtn  = document.getElementById('next-btn');

    const versiones = [
      {
        titulo: "Cada elección importa",
        descripcion: `Al elegir una planta, no solo embellecés un espacio, ayudás al planeta a respirar.<br>
        Creemos en una forma de vivir más verde, consciente y conectada con la naturaleza.<br> 
        Porque cada planta suma, porque el futuro también se planta.`
      },
      {
        titulo: "Árboles de Calidad Cultivados en Tandil",
        descripcion: `Ofrecemos especies forestales de la más alta calidad, cultivadas localmente en Tandil con prácticas responsables.<br>
        Esto asegura la adaptación y el vigor de cada ejemplar en su nuevo entorno.`
      }
    ];

    let actual = 0;
    let intervaloId;
    const animDur = 500; // coincide con 0.5s de CSS

    function aplicarVersion(idx) {
      // 1) Salida por la izquierda
      animWrap.classList.add('animate-out-left');

      setTimeout(() => {
        // 2) Cambiar contenido mientras está oculto
        titulo.innerHTML       = versiones[idx].titulo;
        descripcion.innerHTML  = versiones[idx].descripcion;

        // 3) Entrar desde la derecha
        animWrap.classList.remove('animate-out-left');
        animWrap.classList.add('animate-in-right');

        // 4) Limpiar la clase de entrada después de la animación
        setTimeout(() => {
          animWrap.classList.remove('animate-in-right');
        }, animDur);
      }, animDur);
    }

    function reiniciarIntervalo() {
      clearInterval(intervaloId);
      intervaloId = setInterval(() => {
        actual = (actual + 1) % versiones.length;
        aplicarVersion(actual);
      }, 15000);
    }

    // Mostrar versión inicial sin animación
    titulo.innerHTML      = versiones[0].titulo;
    descripcion.innerHTML = versiones[0].descripcion;
    reiniciarIntervalo();

    // Botones manuales reinician timer y aplican animación
    prevBtn.addEventListener('click', () => {
      actual = (actual - 1 + versiones.length) % versiones.length;
      aplicarVersion(actual);
      reiniciarIntervalo();
    });
    nextBtn.addEventListener('click', () => {
      actual = (actual + 1) % versiones.length;
      aplicarVersion(actual);
      reiniciarIntervalo();
    });
  });

