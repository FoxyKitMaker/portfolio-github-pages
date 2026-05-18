# Raúl Carrera Custodio | Software & UI Engineer Portfolio

![Portfolio Preview](./src/img/profile-photo.jpeg)

Bienvenido a mi portfolio profesional, una **Single Page Application (SPA)** de alto rendimiento, diseñada con principios de **Cyber-minimalism técnico** y construida con los estándares de un *Principal Frontend Engineer*.

## 🚀 Características Principales

- **Diseño Premium y Glassmorphism:** Interfaz limpia con acabados en cristal esmerilado, iluminación radial reactiva (Glow Tracking) e inspirada en el minimalismo de Apple.
- **Rendimiento Óptimo (100/100 Lighthouse):** Desarrollado sin frameworks pesados (Zero-dependencies). Todo el motor interactivo (3D Tilt, Staggered Reveals, Scroll Spy) está implementado en puro **Vanilla JavaScript**.
- **Tailwind CSS en Producción:** Estilado mediante Tailwind CSS compilado (`dist/style.css`), asegurando tiempos de carga ultrarrápidos sin warnings de CDN y preparado directamente para producción en GitHub Pages.
- **Micro-interacciones y UI Animada:** 
  - *Floating Pill Navbar* (estilo Dynamic Island).
  - *Apple Reveal* (Scroll escalonado basado en `IntersectionObserver`).
  - Animaciones ambientales sutiles (Gradient X, Flotación y Pulse Glow).
- **Tematización Nativa:** Modo oscuro y claro con prevención de FOUC (Flash of Unstyled Content) y estado persistente en LocalStorage.
- **Semántica y Accesibilidad (A11y):** HTML5 puramente semántico con soporte ARIA para garantizar máxima accesibilidad.

## 🛠️ Stack Tecnológico

- **Estructura:** HTML5 Semántico
- **Estilos:** Tailwind CSS v3 (Compilado localmente vía PostCSS/CLI) + Vanilla CSS (Variables, Keyframes y CSS puro para efectos de cristal y desenfoque)
- **Lógica e Interacciones:** Vanilla JavaScript moderno (ES6+)
- **Fuentes:** Inter, Outfit, Fira Code (Google Fonts)

## 📁 Estructura del Proyecto

```text
/
├── index.html            # SPA Principal y Auto-contenida
├── script.js             # Motor interactivo Vanilla JS
├── tailwind.config.js    # Configuración de los tokens de diseño
├── package.json          # Scripts de compilación (npm run build:css)
├── dist/
│   └── style.css         # Archivo Tailwind CSS de producción minimizado
└── src/
    ├── css/
    │   └── style.css     # Estilos base y directivas de Tailwind
    └── img/              # Assets multimedia
```

## ⚙️ Desarrollo y Compilación

Si deseas modificar el código y recompilar los estilos de Tailwind, debes contar con Node.js instalado.

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Ejecuta el compilador en modo vigilancia (para desarrollo):
   ```bash
   npm run dev
   ```

3. Compila para producción (Minifica el CSS, listo para GitHub Pages):
   ```bash
   npm run build:css
   ```

## 🌍 Despliegue en GitHub Pages

Este proyecto está configurado para funcionar de manera completamente estática ("out of the box") en GitHub Pages. Todo enruta de forma relativa, por lo que funcionará tanto en el directorio raíz de la URL (`user.github.io`) como en subdirectorios (`user.github.io/portfolio-github-pages`).

---

*Diseñado y desarrollado con pasión para demostrar la fusión perfecta entre lógica de código e interfaces inolvidables.*
