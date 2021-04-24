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

// PLANES (OBJETOS CON CLASES Y ARRAYS)
class Plan {
    constructor (nombre, features ,callToAction){
        this.nombre = nombre;
        this.features = features;
        this.callToAction = callToAction;
    }
}

const starterPlan = new Plan("Starter", ["10 usuarios incluidos","2GB de espacio","Soporte por email","Acceso al centro de ayuda"],"Empieza Gratis");
const advancedPlan = new Plan("Advanced", ["Feature 1","Feature 2","Feature 3","Feature 4"], "Empieza Ahora");
const proPlan = new Plan("Pro", ["Feature 1","Feature 2","Feature 3","Feature 4"], "Habla con Ventas");

// USO DE VARIABLES EN EL HTML
document.getElementById("starter.nombre").innerHTML = starterPlan.nombre;
document.getElementById("advanced.nombre").innerHTML = advancedPlan.nombre;
document.getElementById("pro.nombre").innerHTML = proPlan.nombre;

document.getElementById("starter.CTA").innerHTML = starterPlan.callToAction;
document.getElementById("advanced.CTA").innerHTML = advancedPlan.callToAction;
document.getElementById("pro.CTA").innerHTML = proPlan.callToAction;