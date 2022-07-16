var pesos_mxn = document.getElementById("input_mxn");
var pesos_arg = document.getElementById("input_arg");
var pesos_col = document.getElementById("input_col");

var boton_mxn = document.getElementById("button_mxn");
var boton_arg = document.getElementById("button_arg");
var boton_col = document.getElementById("button_col");

var clear_button_mxn = document.getElementById("clear_mxn");
var clear_button_arg = document.getElementById("clear_arg");
var clear_button_col = document.getElementById("clear_col");

boton_mxn.addEventListener("click", botonMexico);
boton_arg.addEventListener("click", botonArgentina)
boton_col.addEventListener("click", botonColombia);

clear_button_mxn.addEventListener("click", clean_mxn);
clear_button_arg.addEventListener("click", clean_arg);
clear_button_col.addEventListener("click", clean_col);

var fin_mxn = document.getElementById("output_mxn");
var fin_arg = document.getElementById("output_arg");
var fin_col = document.getElementById("output_col");

function botonMexico() {
    valor_dolar = 19.88
    dolares = pesos_mxn.value / valor_dolar;
    fin_mxn.innerHTML = "TIenes $" + (dolares.toFixed(2)) + " dolares";
}

function botonArgentina() {
    valor_dolar = 145.67
    dolares = pesos_arg.value / valor_dolar;
    fin_arg.innerHTML = "Tienes $" + (dolares.toFixed(2)) + " dolares";
}

function botonColombia() {
    valor_dolar = 4239.49
    dolares = pesos_col.value / valor_dolar;
    fin_col.innerHTML = "TIenes $" + (dolares.toFixed(2)) + " dolares";
}

function clean_mxn() {
    fin_mxn.innerHTML = "";
    pesos_mxn.value = "";
}   

function clean_arg() {
    fin_arg.innerHTML = "";
    pesos_arg.value = "";
}

function clean_col() {
    fin_col.innerHTML = "";
    pesos_col.value = "";
}

var top_secret = document.getElementById("mensaje_secreto");

top_secret.addEventListener("click", mensajeSecreto);

function mensajeSecreto() {
    alert("Mensaje secreto para confirmar que Juan es alucin");
}