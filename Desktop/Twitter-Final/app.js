
function Enviar(){
var hoje = new Date ();
var msg = document.getElementById("mensagem").value;
document.getElementById("stilo").innerHTML += "<p>" + msg +   hoje   + "</p>";
}

 function Contador(valor){
 var quantidade = 140;
 var msg = valor.length;
 var rest = quantidade - msg;
 document.getElementById("Contador").innerHTML = rest;
 console.log(rest);
 }
