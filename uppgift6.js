/*
Bilal Khan 891016-0335
ID:WEBPROG
Uppgift 6
Win 7
Sublime Text 2

Canvaset är baserat på kod från nedanstående länk.
Jag har sedan anpassat och lagt till i koden för att kunna: ändra defaultformen 
på penseln för att få den mer rundad, få med knappar som ändrar färg på penseln, 
förstorar och förminskar penseln samt knapp för att rensa canvaset.
Jag hade dessutom problem med att få penseln att rita direkt där pekaren var -
efter mycket sökande och trial-and-error fann jag en lösning genom att använda
offsetX/Y istället för clientX/Y.
http://perfectionkills.com/exploring-canvas-drawing-techniques/
*/

//Söker efter element för att koppla canvaset till javascriptet. Ger canvas 2d context vilket gör att man kan rita på canvaset. Skapar variabel nerKlickat.
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var nerKlickat;
var color = "#fd9c8e";

//Funktion när pekaren är nerklickad: använder metoder för att flytta "path" till en visst punkt på canvas.
canvas.onmousedown = function(e){
  nerKlickat = true;
  context.beginPath();
  context.moveTo(e.offsetX, e.offsetY);
}

//Funktion när pekaren flyttas: ritar mellan path-punkter så länge variabeln nerKlickat är True.
canvas.onmousemove = function(e){
  if (nerKlickat) {
    context.lineCap="round";
    context.lineTo(e.offsetX, e.offsetY); 
    context.strokeStyle=color;  
    context.stroke();
  }
}
//Funktion när pekaren slutar vara nerklickad: ändrar variabel nerKlickat till False.
canvas.onmouseup = function(){
  nerKlickat = false;
  context.closePath();
}
//Funktion för ändring av färg. Kallas på av knapp i html.
var changeColor = function(farg){
  color = farg;
}
//Funktion för rensning av canvas. Kallas på av knapp i html.
var clearCan = function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}
//Funktion för förstoring av "stroke:n". Kallas på av knapp i html.
var upSize = function(){
	context.lineWidth += 2
}
//Funktion för förminskning av "stroke:n". Kallas på av knapp i html.
var downSize = function(){
	context.lineWidth -= 2
}