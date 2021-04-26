// PROMPT PARA OBTENER NOMBRE DEL USUARIO
let usuario = prompt("Cual es tu nombre?");
console.log(usuario)
document.getElementById("usuario").innerHTML = usuario;

let habitaciones = 10;
console.log(habitaciones)

// CLASE PARA CREAR OBJETOS (PLANES) 
class Plan {
    constructor (nombre, features, callToAction, precioPorHab, precioPlan) {
        this.nombre = nombre;
        this.features = features;
        this.callToAction = callToAction;
        this.precioPorHab = precioPorHab;
        this.precioPlan = precioPlan;
    }
// METODO CUSTOM DENTRO DE LA CLASE PARA CALCULAR EL PRECIO DEL PLAN EN FUNCION DE LA HABITACIONES
    calcularPrecioPlan () {
        this.precioPlan = this.precioPorHab * habitaciones;
        console.log(this.precioPlan);
        switch (this.nombre) {
            case "Starter":
                document.getElementById("starter").innerHTML = starterPlan.precioPlan;
            case "Advance":
                document.getElementById("advance").innerHTML = advancePlan.precioPlan;
            case "Pro":
                document.getElementById("pro").innerHTML = proPlan.precioPlan;
            }
    }
}

// CREACION DE PLANES MEDIANTE CLASE
const starterPlan = new Plan ("Starter", ["10 users included", "2 GB of storage", "Email support", "Help center access"], "Empieza Gratis", 3, 30);
const advancePlan = new Plan ("Advance", ["Feature 1", "Feature 2", "Feature 3"], "Agenda una demo", 6, 60);
const proPlan = new Plan ("Pro", ["Feature 1", "Feature 2", "Feature 3"], "Habla con ventas", 10, 100);

// USO DE VARIABLES DE LOS OBJETOS EN EL HTML
document.getElementById("starter.nombre").innerHTML = starterPlan.nombre;
document.getElementById("advance.nombre").innerHTML = advancePlan.nombre;
document.getElementById("pro.nombre").innerHTML = proPlan.nombre;

document.getElementById("starter").innerHTML = starterPlan.precioPlan;
document.getElementById("advance").innerHTML = advancePlan.precioPlan;
document.getElementById("pro").innerHTML = proPlan.precioPlan;

document.getElementById("starter.CTA").innerHTML = starterPlan.callToAction;
document.getElementById("advance.CTA").innerHTML = advancePlan.callToAction;
document.getElementById("pro.CTA").innerHTML = proPlan.callToAction;

starterPlan.calcularPrecioPlan();
advancePlan.calcularPrecioPlan();
proPlan.calcularPrecioPlan();

// FUNCION PARA ACTUALIZAR PRECIO CUANDO CAMBIA LA CANTIDAD DE HABITACIONES
function updatePrecio() {
    habitaciones = document.querySelector(`#rooms`) ? Number(document.querySelector(`#rooms`).value) : 1;
    starterPlan.calcularPrecioPlan();
    advancePlan.calcularPrecioPlan();
    proPlan.calcularPrecioPlan();
    return
}


// EVENT LISTENER + CONDICIONAL CON ARRAY PUSH() EN LAS FUNCIONES INCLUIDAS DEL PLAN 
let botonStarter = document.getElementById("starter.CTA");
botonStarter.onclick = () => {
    if (confirm("Excelente elección " + usuario +". Te gustaría agregar al plan Starter un ejecutivo de cuenta? Despues de que nos des tu respuesta te indicaremos el contenido de tu plan") == true) {
        starterPlan.features.push("y Ejecutivo de cuenta!");
        alert("Perfecto, las funcionalidades de tu plan "+starterPlan.nombre+" son: " + starterPlan.features +". Muchas gracias!");
    }   else {
        alert("Entonces tu plan "+starterPlan.nombre+" solo queda con: "+starterPlan.features + ". Gracias!");
    }
}