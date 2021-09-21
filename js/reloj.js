let fecha = document.querySelector('#fecha')
let hora = document.querySelector('#hora')

function obtenerFecha(){
    let date = new Date();
/*
console.log(date);
console.log(date.getMonth()); //Comienza desde cero porque devuelve un Array
console.log(date.getDay()); //numero del día de la semana (arranca Domingo=0, Lunes=1)
console.log(date.getDate()); //numero del dia (16)
console.log(date.getFullYear()); //devuelve el año
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
*/
//hay metodos para obtener horas, minutos y segundos.

//console.log(fecha);
//console.log(hora);

let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

fecha.innerHTML = `${diasSemana[date.getDay()]} ${date.getDate()} de ${meses[date.getMonth()]} del ${date.getFullYear()}`

//modificar segundos
let segundos = date.getSeconds();
let horas = date.getHours();
let minutos = date.getMinutes();

if(horas < 10){
    horas = '0' + horas;
}

if(minutos < 10){
    minutos = '0' + minutos;
}

if(segundos < 10){
    segundos = '0' + segundos;
}
// modificar hora

hora.innerHTML = `${horas}:${minutos}:${segundos}`
}

setInterval(obtenerFecha, 1000);

//funcion para el onclick
function cambiarColor(color){
    console.log('cambiar color');
    switch(color){
        case 'rosa':
            fecha.className = 'fecha relojRosa';
            hora.className = 'hora relojRosa';
            break;
        case 'verde':
            fecha.className = 'fecha relojVerde';
            hora.className = 'hora relojVerde';
            break;
        case 'celeste':
            fecha.className = 'fecha relojCeleste'
            hora.className = 'hora relojCeleste'
            break;
        default:
            fecha.className = 'fecha relojVerde';
            hora.className = 'hora relojVerde';
    }
}