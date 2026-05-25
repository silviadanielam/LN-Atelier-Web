// Evita fallos si algún selector no existe en la página
const carrito = document.querySelector(".button");
if (carrito) {
  carrito.addEventListener("click", () => {
    alert("Producto agregado al carrito");
  });
}

const boton = document.querySelector(".frame-94");
if (boton) {
  boton.addEventListener("click", () => {
    boton.style.backgroundColor = "#9f2a60";
  });
}
const boton2 = document.querySelector(".frame-link");
if (boton2) {
  boton2.addEventListener("click", () => {
    boton2.style.backgroundColor = "#9f2a60";
  });
}
const boton3 = document.querySelector(".rectangle-27");
if (boton3) {
  boton3.addEventListener("click", () => {
    boton3.style.backgroundColor = "#9f2a60";
  });
}
const boton4 = document.querySelector(".rectangle-3");
if (boton4) {
  boton4.addEventListener("click", () => {
    boton4.style.backgroundColor = "#9f2a60";
  });
}
const boton5 = document.querySelector(".rectangle-28");
if (boton5) {
  boton5.addEventListener("click", () => {
    boton5.style.backgroundColor = "#9f2a60";
  });
}
const boton6 = document.querySelector(".rectangle-12");
if (boton6) {
  boton6.addEventListener("click", () => {
    boton6.style.backgroundColor = "#9f2a60";
  });
}

// Hacer editables múltiples campos visuales con placeholder (solo en la página Checkout)
(function () {
  const container = document.querySelector('.checkout');
  if (!container) return; // no ejecutar en otras páginas

  const fields = {
    '.rectangle-53': 'Escribe tus nombres',
    '.rectangle-532': 'Escribe tus apellidos',
    '.rectangle-54': 'Número de identificación',
    '.rectangle-533': 'Casa / Apartamento / etc.',
    '.rectangle-534': 'Código postal',
    '.rectangle-536': 'Teléfono',
    '.rectangle-537': 'Correo electrónico',
    '.rectangle-539': 'Dirección',
    '.rectangle-538': 'Información adicional'
  };

  Object.entries(fields).forEach(([selector, placeholder]) => {
    const el = container.querySelector(selector);
    if (!el) return;
    el.classList.add('editable-rect');
    el.setAttribute('contenteditable', 'true');
    el.tabIndex = 0;

    function renderPlaceholder() {
      if (!el.textContent.trim()) {
        el.classList.add('is-empty');
        el.innerHTML = `<span class="placeholder">${placeholder}</span>`;
      } else {
        el.classList.remove('is-empty');
      }
    }

    el.addEventListener('focus', () => {
      if (el.classList.contains('is-empty')) el.innerHTML = '';
    });

    el.addEventListener('blur', renderPlaceholder);

    el.addEventListener('keydown', (e) => {
      if (el.classList.contains('is-empty') && e.key.length === 1) {
        el.innerHTML = '';
        el.classList.remove('is-empty');
      }
    });

    renderPlaceholder();
  });
})();