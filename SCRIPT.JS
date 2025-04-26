function FCambioColor(){

   let vtexto1 = document.getElementById("ejmDOM1");
   vtexto1.textcontent= "texto cambiado por funcion FCambioColor";
   vtexto1.style.color="red";
   vtexto1.insertAdjacentHTML("beforeEnd", 
    "<br>Este texto es adicional<br>");
   vtexto1.style.color="green";
}