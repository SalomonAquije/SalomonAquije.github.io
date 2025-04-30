let varGlobal1="texto de variable global";

function FCambioColor(){
   let vartemporal= "texto temporal";
   let vtexto1 = document.getElementById("ejmDOM1");
   vtexto1.textcontent= "texto cambiado por funcion FCambioColor";
   vtexto1.style.color="red";
   vtexto1.insertAdjacentHTML("beforeEnd", 
    "<br>Este texto es adicional<br>");
   vtexto1.style.backgroundcolor="green";

   vtexto1.insertAdjacentHTML("beforeend". varGlobal1);

}
vtexto1= "Texto fuera de funcion";
console.log(vtexto1);
console.log(vartemporal);

function FCambioClase1() {
 let vTexto2=document.getElementsByClassName("classDOM1");
 vTexto2[1].innerText="Elemento [1] del arreglo \n de clase classDOM1";
 vTexto2[1].style.color="white";
 console.log("Tamaño del array=" ,vTexto2.length);
 console.log("Tipo de variable vTexto2", typeof vTexto2[1]);

}

function FCambioTag1() {
 let vTexto3=document.getElementsByTagName("h2");
 vTexto3[0].innerHTML="Elemento h2 cambiado por TagDOM1";
 vTexto3[23].innerHTML="Elemento h2 cambiado por TagDOM1";
 vTexto3[23].style.color="managente";

}