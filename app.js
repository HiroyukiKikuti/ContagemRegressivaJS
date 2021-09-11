var dataFutura = new Date("March 12, 2022 00:01")
var dias, horas, minutos, segundos;


setInterval(() => {
    var dataAtual = new Date()
    var segundos_f = (dataFutura - dataAtual) / 1000;

    dias = parseInt(segundos_f / 86400)
    segundos_f = segundos_f % 86400;
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dias').innerHTML = `${dias} Dias`;
    document.getElementById('horas').innerHTML = `${horas} Hrs`;
    document.getElementById('minutos').innerHTML = `${minutos} Min`;
    document.getElementById('segundos').innerHTML = `${segundos} Seg`;

    
 }, 1000);