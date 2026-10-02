const convertirBtn =  document.getElementById("convertirBtn");
const tempIpt = document.getElementById("tempIpt");
const resultadoF = document.getElementById("resultadoF")
const resultadoK = document.getElementById("resultadoK")

convertirBtn.addEventListener("click", (e) => {
e.preventDefault();

let c = parseFloat(tempIpt.value);
let f = (c * 1.8) + 32;
let k = c + 273.15;


console.log("Grados Celcius: " + c.toFixed(2));
console.log("Grados Farenheit: " + f.toFixed(2));
console.log("Grados Kelvin: " + k.toFixed(2));

resultadoF.textContent = f.toFixed(2) + "°F"
resultadoK.textContent = k.toFixed(2) + "°K"

})






