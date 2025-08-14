const plantas = [
  {
    titulo: "Eucaliptus Viminalis",
    descripcion: "De rápido crecimiento y gran altura, ideal para cortinas forestales y producción de biomasa.",
    imagen: "../plantas/eucaliptus_viminalis.jpg"
  },
  {
    titulo: "Eucaliptus Camaldulensis",
    descripcion: "Conocido por su resistencia y capacidad para adaptarse a suelos húmedos y secos.",
    imagen: "../plantas/eucaliptus_camaldulensis.jpg"
  },
  {
    titulo: "Eucaliptus Syderoxilon",
    descripcion: "Posee madera dura y flores llamativas que también atraen polinizadores.",
    imagen: "../plantas/eucaliptus_syderoxilon.jpg"
  },
  {
    titulo: "Eucaliptus Cinerea",
    descripcion: "Muy valorado en jardinería por su follaje gris plateado y aroma agradable.",
    imagen: "../plantas/eucaliptus_cinerea.jpg"
  },
  {
    titulo: "Casuarinas",
    descripcion: "Árboles resistentes al viento, ideales para cortinas forestales y zonas costeras.",
    imagen: "../plantas/casuarina.jpg"
  },
  {
    titulo: "Álamos",
    descripcion: "Crecen rápido y ofrecen sombra densa, perfectos para alineaciones y barreras visuales.",
    imagen: "../plantas/alamo.jpg"
  },
  {
    titulo: "Sauces",
    descripcion: "Muy decorativos, adaptables a zonas húmedas, aportan frescura y sombra.",
    imagen: "../plantas/sauce.jpg"
  },
  {
    titulo: "Acacia Blanca",
    descripcion: "Produce flores aromáticas y se adapta bien a suelos pobres, muy ornamental.",
    imagen: "../plantas/acacia_blanca.jpg"
  },
  {
    titulo: "Fresnos",
    descripcion: "De copa amplia y follaje denso, ideales para parques y avenidas.",
    imagen: "../plantas/fresno.jpg"
  },
  {
    titulo: "Robles",
    descripcion: "Árboles majestuosos y longevos, símbolo de resistencia y elegancia.",
    imagen: "../roble-comun.jpg"
  },
  {
    titulo: "Otras variedades",
    descripcion: `También ofrecemos una amplia variedad de <strong>plantas arbustivas ornamentales</strong>. 
    <a href="#contacto">Consultá aquí para más información</a>.`,
    imagen: "../plantas/arbustivas_varias.jpg"
  }
];

let index3 = 0;
const plantasContenido = document.getElementById('plantasContenido');

function actualizarPlantas() {
  plantasContenido.style.opacity = 0;
  setTimeout(() => {
    const item = plantas[index3];
    plantasContenido.innerHTML = `
      <img src="${item.imagen}" alt="${item.titulo}" class="imagen-planta" />
      <h3>${item.titulo}</h3>
      <p>${item.descripcion}</p>
    `;
    plantasContenido.style.opacity = 1;
  }, 200);
}

document.getElementById('prevBtn3').addEventListener('click', () => {
  index3 = (index3 - 1 + plantas.length) % plantas.length;
  actualizarPlantas();
});

document.getElementById('nextBtn3').addEventListener('click', () => {
  index3 = (index3 + 1) % plantas.length;
  actualizarPlantas();
});

actualizarPlantas();
