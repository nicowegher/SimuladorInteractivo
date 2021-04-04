// VALORES INICIALES
let rooms = 10;
let starter = 35;
let advanced = 60;
let pro = 100;
document.getElementById("starter").innerHTML = starter;
document.getElementById("advanced").innerHTML = advanced;
document.getElementById("pro").innerHTML = pro;

// PRECIO DEL PLAN POR HABITACION
let priceStarterXHab =3.5;
let priceAdvancedXHab =6;
let priceProXHab =10;

// FUNCION CALCULAR PRECIO
function calcularPrecio () {
    let rooms = document.querySelector(`#rooms`) ? Number(document.querySelector(`#rooms`).value) : 1;
    let starter = rooms * priceStarterXHab;
    let advanced = rooms * priceAdvancedXHab;
    let pro = rooms * priceProXHab;
    console.log(starter);
    console.log(advanced);
    console.log(pro);
    document.getElementById("starter").innerHTML = starter;
    document.getElementById("advanced").innerHTML = advanced;
    document.getElementById("pro").innerHTML = pro;
}