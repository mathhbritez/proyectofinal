Este proyecto fue desarrollado como trabajo final del curso de React.
El objetivo fue crear una aplicación totalmente funcional, responsiva y desplegada, utilizando:
React
React Router
Estados (useState)
Contexto o estado global
Consumo de APIs reales
Componentes reutilizables
Un formulario funcional
Buenas prácticas de código
Deploy en Vercel
La aplicación permite buscar, visualizar y navegar a través de datos provenientes de una API, manipulándolos mediante componentes dinámicos y navegación con parámetros.

🛠️ Tecnologías utilizadas
Frontend
React 18
React Router DOM 6
Vite
Zustand / Context API (para manejo de estado global)
Fetch API / Async-Await
CSS (estilos responsivos)
Herramientas
Git & GitHub
Vercel para deployment
npm (gestión de dependencias)

📱 Responsividad
La página se adaptó completamente para funcionar en pantallas:
320px (celulares pequeños)
375px – 425px (celulares modernos)
768px (tablets)
1024px – 1440px (notebooks)
1920px+ (monitores grandes)
Se utilizaron buenas prácticas como:
Flexbox / Grid
Unidades relativas (%, rem, vh)
Breakpoints para componentes clave

♿ Accesibilidad
Se respetaron lineamientos básicos:
Textos oscuros sobre fondos claros (alto contraste)
Tamaños de fuente legibles
Botones y elementos seleccionables accesibles
Navegación clara y consistente

🔧 Funcionalidades principales
✔️ Navegación con React Router DOM
Múltiples páginas
Rutas dinámicas
Search Params / parámetros en la URL

✔️ Manejo de estado
Estados locales (useState)
Estado global (Zustand o Contexto)

✔️ Consumo de API
Obtención de datos reales
Renderizado dinámico de resultados

✔️ Formulario funcional
Incluye validación y manejo de datos ingresados.

✔️ Componentes reutilizables
Tarjetas, contenedores, layouts, formularios, etc.

ESTUCTURA DEL PROYECTO:
src/
│── components/
│── pages/
│── context/ (o store/)
│── hooks/
│── assets/
│── App.jsx
│── main.jsx

🔹 1. Problemas con permisos y archivos durante el deploy

Se corrigieron permisos y se ajustó la configuración del build.

🔹 2. Vercel no encontraba los assets (CSS/JS en 404)

Solución:// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: "/",
});
Esto arregló rutas y carga de estáticos.

🔹 3. Configuración de rutas en producción

Vercel requiere base "/" para que React Router funcione sin romper.

🔹 4. Manejo de estados y datos asincrónicos

Se organizó el código para evitar renders innecesarios siguiendo los principios DRY y KISS.

git clone https://github.com/mathhbritez/proyectofinal
cd proyectofinal
npm install
npm run dev

El proyecto está desplegado en Vercel.
El comando configurado para deploy fue:"deploy": "gh-pages -d dist" y vercel usa: npm run build


