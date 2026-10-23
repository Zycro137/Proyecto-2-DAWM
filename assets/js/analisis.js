/**
 * Script de Análisis de Datos - Cairo Gym
 * Este script procesa los resultados tabulados de las 24 encuestas 
 * de la comunidad y renderiza dinámicamente las estadísticas en el DOM.
 */

// Datos extraídos del análisis de la encuesta
const datosEncuesta = {
    totalEncuestados: 24,
    horarios: [
        { periodo: "Mañana", cantidad: 8, porcentaje: 33.33 },
        { periodo: "Mediodía", cantidad: 2, porcentaje: 8.33 },
        { periodo: "Tarde", cantidad: 7, porcentaje: 29.17 },
        { periodo: "Noche", cantidad: 7, porcentaje: 29.17 }
    ],
    motivos: [
        { objetivo: "Ganar masa muscular", cantidad: 8, porcentaje: 33.33 },
        { objetivo: "Mejorar mi salud", cantidad: 6, porcentaje: 25.00 },
        { objetivo: "Perder peso", cantidad: 4, porcentaje: 16.67 },
        { objetivo: "Condición física", cantidad: 3, porcentaje: 12.50 },
        { objetivo: "Bienestar/Recreación", cantidad: 3, porcentaje: 12.50 }
    ],
    frecuencia: [
        { dias: "1-2 veces por semana", cantidad: 3, porcentaje: 12.50 },
        { dias: "3-4 veces por semana", cantidad: 14, porcentaje: 58.33 },
        { dias: "5-6 veces por semana", cantidad: 7, porcentaje: 29.17 }
    ]
};

// Funciones de Renderizado en el DOM
document.addEventListener("DOMContentLoaded", () => {
    renderizarTablaHorarios();
    renderizarTablaMotivos();
    renderizarTablaFrecuencia();
    generarInsightsAutomáticos();
});

// Función para renderizar la tabla de horarios
function renderizarTablaHorarios() {
    const tbody = document.getElementById("tbody-horarios");
    if (!tbody) return;

    datosEncuesta.horarios.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.periodo}</strong></td>
            <td>${item.cantidad} usuarios</td>
            <td>${item.porcentaje}%</td>
        `;
        tbody.appendChild(tr);
    });
}

// Función para renderizar la tabla de motivos
function renderizarTablaMotivos() {
    const tbody = document.getElementById("tbody-motivos");
    if (!tbody) return;

    datosEncuesta.motivos.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.objetivo}</strong></td>
            <td>${item.cantidad} usuarios</td>
            <td>${item.porcentaje}%</td>
        `;
        tbody.appendChild(tr);
    });
}

// Función para renderizar la tabla de frecuencia
function renderizarTablaFrecuencia() {
    const tbody = document.getElementById("tbody-frecuencia");
    if (!tbody) return;

    datosEncuesta.frecuencia.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.dias}</strong></td>
            <td>${item.cantidad} usuarios</td>
            <td>${item.porcentaje}%</td>
        `;
        tbody.appendChild(tr);
    });
}

// Función para generar conclusiones automáticas basadas en el dato mayor
function generarInsightsAutomáticos() {
    const contenedor = document.getElementById("insights-automaticos");
    if (!contenedor) return;

    // Encontrar el motivo principal
    const motivoPrincipal = datosEncuesta.motivos.reduce((prev, current) => 
        (prev.cantidad > current.cantidad) ? prev : current
    );

    // Encontrar la frecuencia mayor
    const frecuenciaMayor = datosEncuesta.frecuencia.reduce((prev, current) => 
        (prev.cantidad > current.cantidad) ? prev : current
    );

    contenedor.innerHTML = `
        <blockquote>
            <strong>Conclusión del Análisis:</strong> Basado en la encuesta de ${datosEncuesta.totalEncuestados} usuarios del Gym, 
            el objetivo principal de la comunidad es <strong>${motivoPrincipal.objetivo.toLowerCase()}</strong> (${motivoPrincipal.porcentaje}%). 
            Además, la gran mayoría prefiere asistir <strong>${frecuenciaMayor.dias}</strong> (${frecuenciaMayor.porcentaje}%). 
            Estos datos reales justifican nuestro enfoque en áreas de musculación y en paquetes mensuales de 3 a 4 días.
        </blockquote>
    `;
}