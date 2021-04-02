function relogio(){

    var data = new Date();

var diase = data.getUTCDay();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();


var horas = data.getHours();
var minutos = data.getMinutes();
var segundos = data.getSeconds();
var periodo = horas >= 12 ? 'PM' : 'AM';
// se horas é igual a 12 então  1 valor (pm) caso não 2 valor (am)


if (horas<10) {
    horas = "0" + horas;
}
if (minutos<10) {
    minutos = "0" + minutos;
}
if (segundos<10) {
    segundos = "0" + segundos;
}




var  meses= new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

var semanas= new Array ("Domingo","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado");

document.getElementById("daysh").innerHTML= semanas[diase] + ",";
document.getElementById("dayh").innerHTML=dia;
document.getElementById("mesh").innerHTML=meses[mes] + "\tde";
document.getElementById("anoh").innerHTML=ano;


document.getElementById("hoursh").innerHTML=horas;
document.getElementById("minutesh").innerHTML=minutos;
document.getElementById("secondsh").innerHTML=segundos;
document.getElementById("periodoh").innerHTML=periodo;
}

var tempo = setInterval(relogio, 1000);
