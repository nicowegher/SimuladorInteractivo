let priceStarterXHab =3.5;
let priceAdvancedXHab =6;
let priceProXHab =10;
let rooms = prompt("Cuantas habitaciones tiene tu hotel?");
console.log(rooms);
parseInt(rooms);
let starter = rooms * priceStarterXHab;
let advanced = rooms * priceAdvancedXHab;
let pro = rooms * priceProXHab;
console.log(starter);
console.log(advanced);
console.log(pro);

document.getElementById("starter").innerHTML = starter;
document.getElementById("advanced").innerHTML = advanced;
document.getElementById("pro").innerHTML = pro;



// Función para el Starter

    // function starter() {
    //     if(document.getElementById('starter').checked===true)  
    // }


// Functions For 49 Dollors

// function one() {
//     if (document.getElementById('one').checked === true) {
//         document.getElementById('btn-1').innerHTML = '<a href="low_49.html">Select <b>$49</b></a>';
//         document.getElementById('show').innerHTML = 
//         '<h4>49</h4>';
//     }
// }

// function two() {
//     if (document.getElementById('two').checked === true) {
//         document.getElementById('btn-1').innerHTML = '<a style="background-color: #F7B32B;" href="high_200.html">Select <b>$200</b></a>';
//         document.getElementById('show').innerHTML = 
//         '<h4>200</h4>';
//     }
// }

// // Functions For 99 Dollors

// function three() {
//     if (document.getElementById('three').checked === true) {
//         document.getElementById('btn-2').innerHTML = '<a href="low_99.html">Select <b>$99</b></a>';
//         document.getElementById('show').innerHTML = 
//         '<h4>99</h4>';
//     }
// }

// function four() {
//     if (document.getElementById('four').checked === true) {
//         document.getElementById('btn-2').innerHTML = '<a style="background-color: #F7B32B;" href="high_119.html">Select <b>$119</b></a>';
//         document.getElementById('show').innerHTML = 
//         '<h4>119</h4>';
//     }
// }
