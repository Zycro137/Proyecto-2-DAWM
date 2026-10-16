# 🏋️‍♂️ Landing Page Comunitaria: Cairo Gym

> **Materia:** Desarrollo de Aplicaciones Web y Móviles (DAWM)  
> **Institución:** Escuela Superior Politécnica del Litoral (ESPOL)  
> **Proyecto:** Proyecto 02 - Explorando la cultura con la web
> **Integrantes:**  
> - Integrante 1: [Nombre y Apellidos] - [Usuario GitHub]  
> - Integrante 2: [Nombre y Apellidos] - [Usuario GitHub]  
> 
> **Enlace del Repositorio:** [URL del repositorio en GitHub]  
> **Demostración en vivo (GitHub Pages):** [URL de GitHub Pages si aplica]

---

## 📌 1. Descripción y Contexto del Proyecto

El presente proyecto consiste en el análisis, planificación y desarrollo de una primera versión funcional de una *landing page* para el **Gimnasio Cairo Gym**, el único centro de acondicionamiento físico de nuestra comunidad. 

El objetivo es visibilizar la actividad deportiva comunitaria, promover hábitos saludables (entrenamiento de fuerza, resistencia cardiovascular y movilidad para todas las edades) y resolver problemas de información detectados mediante un levantamiento de datos (encuestas y entrevistas a 24 miembros de la comunidad).

---

## 📊 2. Organización del Contenido del Sitio Web

A partir de los resultados de las 24 encuestas realizadas (cubriendo usuarios desde menores de 18 años hasta adultos mayores de 60 años, y personal del centro), se estructuró la información en las siguientes secciones:

| Nombre de la Sección | Propósito de la Sección | Datos e Información que se Presentarán |
| :--- | :--- | :--- |
| **Cabecera / Hero (`#inicio`)** | Captar el interés del visitante y comunicar la propuesta de valor comunitaria de forma inmediata. | Logotipo de Cairo Gym, titular principal (*"Fortaleciendo la salud de nuestra comunidad"*), lema, llamada a la acción principal (CTA: *"Conoce nuestros horarios"* / *"Únete hoy"*) e imagen de fondo representativa. |
| **Identidad Comunitaria (`#nosotros`)** | Justificar la relevancia del gimnasio como el único espacio deportivo del sector e inclusivo para todas las edades. | Breve reseña del gimnasio en el barrio, declaración de misión comunitaria, enfoque en salud preventiva y rango de usuarios atendidos (jóvenes, adultos y adultos mayores). |
| **Métricas Clave (`#estadisticas`)** | Respaldar la propuesta con datos reales y transparentes recopilados durante el levantamiento de información. | Contadores y datos cuantitativos de las encuestas: **24 participantes**, distribución de objetivos (**41.7% hipertrofia**, **29.2% salud articular/cardio**, **16.7% pérdida de peso**), frecuencia promedio (**3 a 5 días/semana**) y 100% de percepción de impacto positivo en la comunidad. |
| **Servicios y Áreas (`#servicios`)** | Detallar las modalidades de entrenamiento disponibles adaptadas a las necesidades expresadas por los usuarios. | Bloques con iconos descriptivos: Zona de Peso Libre y Musculación, Área Cardiovascular, Rutinas de Movilidad/Tercera Edad y Programa de Inducción Guiada para Nuevos Miembros (solución a la timidez/falta de técnica reportada). |
| **Horarios y Afluencia (`#horarios`)** | Optimizar la asistencia para evitar las horas pico reportadas por los encuestados y fomentar la comodidad del usuario. | Horario de atención (Lunes a Sábado), tabla de afluencia por franjas horarias con semáforo de concurrencia: Mañana (Baja concurrencia / Recomendado), Mediodía (Moderada), Tarde/Noche (Alta concurrencia - 58% de usuarios). |
| **Voces de la Comunidad (`#testimonios`)** | Generar confianza y sentido de pertenencia a través de la retroalimentación cualitativa de usuarios reales. | Citas textuales extraídas de las encuestas destacando el compañerismo, la salud mental, el progreso físico y el rol social de Cairo Gym en el barrio. |
| **Contacto y Consulta (`#contacto`)** | Proveer un canal directo para que nuevos vecinos consulten planes, horarios o resuelvan dudas. | Formulario accesible (campos: Nombre, Correo electrónico, Rango de edad/Motivo de interés, Mensaje y casilla de consentimiento), información de ubicación física y enlaces a redes sociales. |
| **Pie de Página (`footer`)** | Cerrar el documento con información legal, derechos de autor y créditos correspondientes. | Aviso de derechos reservados (© 2026 Cairo Gym), atribución de la plantilla a HTML5 UP y créditos del equipo de desarrollo de ESPOL. |

---

## 🎨 3. Selección y Evaluación de la Plantilla (HTML5 UP)

Se exploraron y analizaron tres plantillas gratuitas y responsivas del catálogo de [HTML5 UP](https://html5up.net/), evaluando su viabilidad técnica y conceptual:

### Tabla Comparativa de Plantillas Candidatas

| Criterio | Plantilla 1: **Stellar** | Plantilla 2: **Spectral** | Plantilla 3: **Hyperspace** |
| :--- | :--- | :--- | :--- |
| **Estructura** | Disposición vertical *one-page* muy limpia. Integra de fábrica bloques para métricas/estadísticas, destacados (*spotlights*), listas en cuadrícula y formulario al final. | Estructura vertical con hero banner a pantalla completa, secciones de contraste alternado y bloques modulares para características. | Estructura dividida: barra lateral fija a la izquierda (*sidebar*) y área de contenido en bloques de colores sólidos a la derecha. |
| **Navegación** | Barra de navegación superior fija (*sticky nav*) que acompaña el scroll del usuario con resaltado automático de sección activa. | Menú desplegable lateral oculto tipo *drawer* (botón hamburguesa). Requiere un clic extra para ver las secciones. | Menú vertical permanente en el lateral izquierdo en resoluciones de escritorio; pasa arriba en pantallas móviles. |
| **Diseño Visual** | Tipografía sobria, estética moderna, fondos contrastantes elegantes y balance perfecto entre texto y componentes visuales. | Diseño cinematográfico, oscuro, elegante y de alto impacto visual centrado en banners e imágenes grandes. | Diseño contemporáneo con paleta de colores brillantes/neón y degradados pronunciados. |
| **Adaptabilidad (Responsive)** | Totalmente responsiva; el menú y la cuadrícula de estadísticas se adaptan de forma natural y fluida a cualquier resolución móvil. | Altamente adaptable a pantallas móviles mediante su menú lateral y bloques apilables. | Totalmente responsiva, aunque la barra lateral fija consume espacio horizontal útil en tablets y portátiles pequeños. |
| **Facilidad de Personalización** | **Muy alta**. Código HTML5 semántico bien indentado, CSS estructurado con variables fáciles de modificar y módulos independientes. | **Media**. El comportamiento del menú desplegable y los cortes visuales inclinados de las secciones requieren más tiempo de ajuste. | **Media-Alta**. El esquema de color por capas y la barra lateral demandan reajustes CSS específicos para no saturar visualmente. |

### Justificación de la Elección: **Plantilla Stellar**

Se determinó que **Stellar** es la opción más idónea para el proyecto por las siguientes razones:
1. **Soporte nativo para métricas:** La plantilla incluye un componente nativo de contadores y estadísticas (`<ul class="statistics">`), lo que permite presentar de forma directa y visual los datos cuantitativos obtenidos de las encuestas sin necesidad de librerías externas.
2. **Navegación directa y accesible:** Su barra fija superior (*sticky navigation*) ofrece una experiencia de usuario clara e intuitiva, permitiendo al usuario saltar directamente a los horarios, servicios o formulario sin abrir menús ocultos.
3. **Semántica y facilidad de mantenimiento:** Su código fuente hace un uso ejemplar de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), lo cual facilita la personalización en pareja y asegura buenas prácticas de accesibilidad.

---

## 🛠️ 4. Tecnologías y Herramientas Utilizadas

* **HTML5:** Marcado semántico y accesible para la estructura del contenido.
* **CSS3:** Hojas de estilo provistas por la plantilla, adaptadas con colores corporativos e identidad del gimnasio.
* **JavaScript:** Scripts ligeros incluidos en la plantilla para la navegación suave (*smooth scroll*), menú adaptable y efectos de visualización.
* **Git & GitHub:** Sistema de control de versiones y repositorio público para la colaboración en equipo.
* **Google Sheets:** Recopilación, tabulación y análisis de las encuestas realizadas a la comunidad.

---

## 📁 5. Estructura del Repositorio

```text
├── assets/
│   ├── css/
│   │   ├── main.css            # Estilos principales adaptados
│   │   └── fontawesome-all.min.css
│   ├── js/
│   │   ├── main.js             # Lógica de navegación y responsive
│   │   ├── jquery.min.js
│   │   └── util.js
│   └── webfonts/               # Fuentes e iconografía
├── images/                     # Recursos visuales del gimnasio y placeholders
│   ├── hero-bg.jpg
│   ├── instalacion-pesas.jpg
│   └── comunidad.jpg
├── index.html                  # Landing page principal personalizada
└── README.md                   # Documentación completa del proyecto
