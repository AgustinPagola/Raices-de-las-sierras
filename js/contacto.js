// Navegación: hace clickeable toda la tarjeta con data-destino
document.addEventListener('click', (evento) => {
  const tarjeta = evento.target.closest('.tarjeta-consulta--enlace');
  if (tarjeta && tarjeta.dataset.destino) {
    const destino = tarjeta.dataset.destino;
    if (destino.startsWith('http')) {
      window.open(destino, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = destino; // tel: o mailto:
    }
  }
});

// Copiar correo al portapapeles
document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('boton-copiar-consultas');
  const correo = document.getElementById('correo-consultas');

  if (boton && correo) {
    boton.addEventListener('click', async () => {
      const texto = correo.textContent.trim();
      try {
        await navigator.clipboard.writeText(texto);
        const anterior = boton.textContent;
        boton.textContent = '¡Copiado!';
        setTimeout(() => (boton.textContent = anterior), 1400);
      } catch {
        // Fallback
        const area = document.createElement('textarea');
        area.value = texto;
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
        const anterior = boton.textContent;
        boton.textContent = '¡Copiado!';
        setTimeout(() => (boton.textContent = anterior), 1400);
      }
    });
  }
});
