# Página Comunitaria: Cairo Gym

> **Materia:** Desarrollo de Aplicaciones Web y Móviles 
> **Institución:** Escuela Superior Politécnica del Litoral (ESPOL)  
> **Proyecto:** Proyecto 02 - Explorando la cultura con la web
> **Integrantes:**
> - Integrante 1: Santiago Maldonado - Zycro137
> - Integrante 2: Ronald Padilla - ronalvld
> 
> **Enlace del Repositorio:** https://github.com/Zycro137/Proyecto-2-DAWM.git

---

## 1. Descripción y Contexto

El presente proyecto consiste en, mediante un levantamiento y análisis de datos, promover e incentivar la integración de la comunidad en prácticas deportivas dentro del **Gimnasio Cairo Gym**.

El objetivo es visibilizar la actividad deportiva, promover hábitos saludables, como entrenamientos de fuerza, resistencia cardiovascular y movilidad para todas las edades, informando basándose en encuestas y entrevistas realizadas a 24 miembros de la comunidad.

---

## 2. Organización del Contenido del Sitio Web

A partir de los resultados de las 24 encuestas realizadas, se estructuró la información en las siguientes secciones:

| Nombre de la Sección | Propósito de la Sección | Datos e Información que se Presentarán |
| :--- | :--- | :--- |
| **Cabecera (`#inicio`)** | Facilitar la navegación interna entre las diferentes secciones de la página y fijar la identidad del gimnasio en el extremo superior de la pantalla. | Logotipo de Cairo Gym, enlaces ancla hacia las secciones principales: Nosotros, Estadísticas, Servicios, Horarios. |
| **Identidad Comunitaria (`#nosotros`)** | Justificar la relevancia del gimnasio como el único espacio deportivo del sector e inclusivo para todas las edades. | Breve reseña del gimnasio en el barrio, declaración de misión comunitaria, enfoque en salud preventiva y rango de usuarios atendidos (jóvenes, adultos y adultos mayores). |
| **Métricas Clave (`#estadisticas`)** | Respaldar la propuesta con datos reales y transparentes recopilados durante el levantamiento de información. | Contadores y datos cuantitativos de las encuestas: **24 participantes**, distribución de objetivos (**41.7% hipertrofia**, **29.2% salud articular/cardio**, **16.7% pérdida de peso**), frecuencia promedio (**3 a 5 días/semana**) y 100% de percepción de impacto positivo en la comunidad. |
| **Servicios y Áreas (`#servicios`)** | Detallar las modalidades de entrenamiento disponibles adaptadas a las necesidades expresadas por los usuarios. | Bloques con iconos descriptivos: Zona de Peso Libre y Musculación, Área Cardiovascular, Rutinas de Movilidad/Tercera Edad y Programa de Inducción Guiada para Nuevos Miembros (solución a la timidez/falta de técnica reportada). |
| **Horarios y Afluencia (`#horarios`)** | Optimizar la asistencia para evitar las horas pico reportadas por los encuestados y fomentar la comodidad del usuario. | Horario de atención (Lunes a Sábado), tabla de afluencia por franjas horarias con semáforo de concurrencia: Mañana (Baja concurrencia / Recomendado), Mediodía (Moderada), Tarde/Noche (Alta concurrencia - 58% de usuarios). |
| **Voces de la Comunidad (`#testimonios`)** | Generar confianza y sentido de pertenencia a través de la retroalimentación cualitativa de usuarios reales. | Citas textuales extraídas de las encuestas destacando el compañerismo, la salud mental, el progreso físico y el rol social de Cairo Gym en el barrio. |
| **Pie de Página (`footer`)** | Cerrar el documento con información legal, derechos de autor y créditos correspondientes. | Aviso de derechos reservados (© 2026 Cairo Gym), atribución de la plantilla a HTML5 UP y créditos del equipo de desarrollo de ESPOL. |

---

## 3. Selección y evaluación de la plantilla (HTML5 UP)

Se revisaron tres plantillas gratuitas de HTML5 UP: Massively, Spectral e Hyperspace. Se compararon sus características visuales, navegación, adaptación a dispositivos móviles y posibilidades de personalización para elegir la más adecuada para el proyecto.

### Tabla comparativa de plantillas candidatas

| Criterio | Massively | Spectral | Hyperspace |
|---|---|---|---|
| **Diseño** | Estilo editorial, con títulos grandes, imágenes y bloques de contenido. | Diseño oscuro y llamativo, con banners y secciones de distintos estilos. | Diseño moderno con una barra lateral y secciones de colores contrastantes. |
| **Navegación** | Menú horizontal ubicado debajo de la portada. | Menú desplegable que permite acceder a las secciones. | Menú lateral que se adapta a pantallas pequeñas. |
| **Organización del contenido** | Permite destacar una introducción y organizar artículos o secciones con imágenes y textos. | Presenta el contenido en bloques visuales con diferentes fondos. | Organiza la información en secciones diferenciadas a lo largo de la página. |
| **Adaptabilidad** | Diseño responsivo para computadores, tabletas y celulares. | Diseño responsivo que reorganiza sus elementos según la pantalla. | Diseño responsivo que ajusta su navegación y contenido a dispositivos móviles. |
| **Personalización** | Permite modificar textos, imágenes, colores y contenido HTML y CSS. | Permite adaptar sus secciones y estilos visuales. | Permite modificar los colores, la distribución y los elementos de cada sección. |

### Justificación de la elección: Massively

Se eligió **Massively** porque permite presentar la información de manera clara y visual, empezando con una portada llamativa y continuando con secciones que combinan imágenes y textos. Estas características son útiles para mostrar el gimnasio de la comunidad, explicar los beneficios de hacer ejercicio y motivar a más personas a participar.

Además, su diseño responsivo facilita que los habitantes puedan consultar la página desde sus celulares. También permite personalizar las imágenes, los colores y los textos para relacionarlos con la actividad física y la identidad de la comunidad. Por estas razones, se consideró una opción adecuada para promocionar el único gimnasio de la zona y fomentar un estilo de vida más saludable.
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
├── css/
│   ├── estilo.css           
├── index.html                  # Landing page principal personalizada
└── README.md                   # Documentación completa del proyecto
