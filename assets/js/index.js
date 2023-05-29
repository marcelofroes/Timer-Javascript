//

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;
let minutos = 0;
let horas = 0;
let interval;

function atualizarRelogio() {
  segundos++;

  if (segundos >= 60) {
    segundos = 0;
    minutos++;

    if (minutos >= 60) {
      minutos = 0;
      horas++;
    }
  }
  const tempoFormatado = `${horas.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
  relogio.textContent = tempoFormatado;
}

iniciar.addEventListener("click", function () {
  relogio.style.color = "#000000";
  clearInterval(interval);
  interval = setInterval(atualizarRelogio, 1000);
});

pausar.addEventListener("click", function () {
  relogio.style.color = "#FF0000";
  clearInterval(interval);
});

zerar.addEventListener("click", function () {
  relogio.style.color = "#000000";
  clearInterval(interval);
  segundos = 0;
  minutos = 0;
  horas = 0;
  relogio.textContent = "00:00:00";
});
