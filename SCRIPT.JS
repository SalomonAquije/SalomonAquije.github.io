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
 console.log("tamaño del array=",vTexto3,length);
 vTexto3[23].insertAdjacentHTML("beforeend", "<br>tamaño de h2=" + vTexto3.length);
 let totalh2=vTexto3.length;
 console.log("Valor de totalh2=",totalh2);
 console.log("tipo de variable totalh2=", typeof totalh2);

}

window.vTexto1="";
function FAgregarTextoPermanente()
{
 let textoAdicional = "Texto adicional para concatenar";
 vTexto1=vTexto1 + textoAdicional;
 console.log("tipo de variable de vTexto1 =",typeof vTexto1);
 console.log(vTexto1);

}


function FcreateH1()
{
var elemento =document.getElementById("idCrearH1");
var nuevoH1 =document.createElement("h1");
var texto =document.createTextNode("Texto colocado en linea");
nuevoH1.appendChild(texto);
elemento.appendChild(nuevoH1);

}

function FCapturarNombre(){

   const vTexto1 = document.getElementById("nombre");
   const vTexto2 = document.querySelectorAll("input.datosPersonales");
  // usar input para clases relacioandas a cajas de texto, etc
   vTexto1.style.color="red";
   
   var valor1 =vTexto1.value; // value obtiene el contenido de la caja de texto nombre
   var valor2 ="";
    vTexto3.value=valor1;
   document.getElementById("observacion").value = valor1;//textarea ya captura el nombre
  //foreach recorre todo el contenido del array de la clase datosPersonales
   vTexto2.forEach(input => {
        valor2 =valor2 + `${input.name}: ${input.value}\n`; 
     });

   document.getElementById('observacion').value = valor2;
   console.log('El valor del nombre es:', valor1);
}