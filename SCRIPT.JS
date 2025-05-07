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
   const vTexto3 = document.getElementById("clave");

  // usar input para clases relacioandas a cajas de texto, etc
   vTexto1.style.color="red";
   
   var valor1 =vTexto1.value; // value obtiene el contenido de la caja de texto nombre
   var valor2 =""; //tipo string 
   vTexto3.value=valor1; // asigna el nombre a la clave 
   
 
   //foreach recorre todo el contenido del array de la clase datosPersonales
   vTexto2.forEach(input => {
       valor2 =valor2 +  `${input.name}: ${input.value} : ${input.id} \n`;  // alt+96 
       input.style.border="2px solid orange";
     //para comillas tipotexto permiten colocar variables del form y convertirlas a texto mediante $
     });

     vTexto2[1].style.border="2px solid green";
   document.getElementById("observacion").value = valor2;
   console.log('El valor del nombre es:', valor1);
}





function FUsoFor1()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  for(let i=0 ; i< vTextoClass.length ; i++ )
  {
    vTextoClass[i].style.border ="2px solid red" ;
    vTextoTotal=vTextoTotal + vTextoClass[i].innerText+'-';

  } // fin de for
  var nuevoH1 =document.createElement("h1");
  var texto = document.createTextNode(vTextoTotal);
  nuevoH1.appendChild(texto);
  vTextoClass[3].appendChild(nuevoH1);
  
}  // fin de function

function FEliminarConcat()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  let rpta =prompt("Estas seguro de eliminar el texto concatenado?(S/N)",'');
  if (rpta=="S" || rpta=="s")  //  doble || significa o
    { vTextoClass[3].remove();  // eliminar la class de posicion [3]
      alert("CONCATENCION ELMINADA");
    }  
  else
    { if(rpta=="N" || rpta=="n")
      { alert("NO SE elimnará");
      }
      else
      { alert("OPCION INCORRECTA-INgresa nuevamente");
      }
    }
  //removeChild funciona cuando un nodo(class, id, etx) esta dentro de otro
}