document.addEventListener("DOMContentLoaded", function () {
    fetch("../Java-Script/equipos.json") // Cargar datos desde JSON
        .then(response => response.json())
        .then(data => {
            const equipoSelect = document.getElementById("equipoSelect");
            const ctx = document.getElementById("rendimientoChart").getContext("2d");
            let rendimientoChart; // Variable para almacenar el gráfico

            // Llenar el select con los nombres de los equipos
            data.forEach(equipo => {
                let option = document.createElement("option");
                option.value = equipo.equipo;
                option.textContent = equipo.equipo;
                equipoSelect.appendChild(option);
            });

            // Función para actualizar el gráfico
            function actualizarGrafico(equipoSeleccionado) {
                const equipo = data.find(e => e.equipo === equipoSeleccionado);
                if (!equipo) return;

                // Calcular porcentajes de rendimiento
                const totalPartidos = equipo.pj || 1; // Evita división por 0
                const ganados = (equipo.pg / totalPartidos) * 100;
                const empatados = (equipo.pe / totalPartidos) * 100;
                const perdidos = (equipo.pp / totalPartidos) * 100;

                // Datos del gráfico
                const datos = {
                    labels: ["Ganados", "Empatados", "Perdidos"],
                    datasets: [{
                        label: "Rendimiento (%)",
                        data: [ganados, empatados, perdidos],
                        backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
                        borderColor: ["#1e7e34", "#d39e00", "#bd2130"],
                        borderWidth: 1
                    }]
                };

                // Destruir el gráfico anterior si existe
                if (rendimientoChart) rendimientoChart.destroy();

                // Crear el gráfico de barras
                rendimientoChart = new Chart(ctx, {
                    type: "bar", // ⚠️ Cambié "pie" por "bar"
                    data: datos,
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { display: false } // Ocultar leyenda
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    callback: function (value) {
                                        return value + "%"; // Agregar % a los valores
                                    }
                                }
                            }
                        }
                    }
                });
            }

            // Mostrar el gráfico del primer equipo al inicio
            if (data.length > 0) {
                actualizarGrafico(data[0].equipo);
            }

            // Cambiar el gráfico cuando se selecciona otro equipo
            equipoSelect.addEventListener("change", function () {
                actualizarGrafico(this.value);
            });

        })
        .catch(error => console.error("Error al cargar los datos:", error));
});
