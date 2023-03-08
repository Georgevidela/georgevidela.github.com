
//ocultar listas
var listaes = document.getElementById("lista1");
listaes.style.display="none";

var listaes = document.getElementById("lista2");
listaes.style.display="none";

var listaes = document.getElementById("lista3");
listaes.style.display="none";



//botones
var botones = document.getElementById("boton1");
botones.addEventListener("click", mostrar1);
var botones2 = document.getElementById("boton-1");
botones2.addEventListener("click", nomostrar1);

var botones = document.getElementById("boton2");
botones.addEventListener("click", mostrar2);
var botones2 = document.getElementById("boton-2");
botones2.addEventListener("click", nomostrar2);

var botones = document.getElementById("boton3");
botones.addEventListener("click", mostrar3);
var botones2 = document.getElementById("boton-3");
botones2.addEventListener("click", nomostrar3);

//funciones
function mostrar1(){
    lista1.style.display="block";
    boton1.style.display="none";};
function nomostrar1(){
    lista1.style.display="none";
    boton1.style.display="block";};

function mostrar2(){
    lista2.style.display="block";
    boton2.style.display="none";};
function nomostrar2(){
    lista2.style.display="none";
    boton2.style.display="block";};

function mostrar3(){
    lista3.style.display="block";
    boton3.style.display="none";};
function nomostrar3(){
    lista3.style.display="none";
    boton3.style.display="block";};