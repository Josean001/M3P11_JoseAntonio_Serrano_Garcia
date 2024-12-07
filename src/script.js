function mostrarFechaHora() {
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const ahora = new Date();
  const diaSemana = diasSemana[ahora.getDay()];
  const dia = ahora.getDate();
  const mes = meses[ahora.getMonth()];
  const año = ahora.getFullYear();
  const hora = ahora.getHours().toString().padStart(2, "0");
  const minutos = ahora.getMinutes().toString().padStart(2, "0");
  const segundos = ahora.getSeconds().toString().padStart(2, "0");

  const texto = `Hoy es ${diaSemana}, ${dia} de ${mes} de ${año}, y son las ${hora}:${minutos}:${segundos} horas.`;
  document.getElementById("fechaHora").textContent = texto;
}

// Actualizar la fecha y hora cada segundo
setInterval(mostrarFechaHora, 1000);

// Mostrar la fecha y hora inmediatamente al cargar la página
mostrarFechaHora();
