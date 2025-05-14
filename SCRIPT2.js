let VarGlobal1="texto de variable global";



function FCambioColor(){
    var varTemporal= "texto temporal";
    let vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.textContent= "Texto cambiado por Funcion FCambioColor";
    vTexto1.style.color="red";
    vTexto1.insertAdjacentHTML("beforeEnd",
                            " <br>Este texto es adicional <br>");
    vTexto1.style.backgroundColor="green";
    console.log(vTexto1.innerText);
    vTexto1.insertAdjacentHTML("beforeEnd", VarGlobal1);
    //la variable global se puede utilizar dentro de cualquier funcion

}
vTexto1= "Texto fuera de funcion"; //vTexto1 no es la variable de la funcion
console.log(vTexto1);
//console.log(varTemporal); // varTemporal no esta deifnido afuera de funcion


function FCambioClase1(){
let vTexto2=document.getElementsByClassName("classDOM1");
vTexto2[1].innerText="Elemento [1] del arreglo \n de clase classDOM1";
vTexto2[1].style.color="white";
console.log("Tamaño del array=",vTexto2.length);
console.log("Tipo de variable vTexto2",typeof vTexto2[1]);
//indice 1 es el 2do elemento
}

function FCambioTag1() {
    let vTexto3 =document.getElementsByTagName("h2");
    vTexto3[0].innerHTML="Elemento 1er h2 cambiado por TagDom1";
    vTexto3[13].innerHTML="Elemento ultimo h2 cambiado por TagDom1";
    vTexto3[13].style.color="magenta";
    //indice 10 es el 11vo elemento h2
    console.log("Tamaño del array=",vTexto3.length);
    vTexto3[13].insertAdjacentHTML("beforeEnd", "<br>tamaño de h2 =" + vTexto3.length);
    let totalh2=vTexto3.length;
    console.log("Valor de totalh2=",totalh2);
    console.log("tipo de variable totalh2=", typeof totalh2);
}

 window.vTexto1="";

function FAgregarTextoPermanente()
{
  let textoAdicional ="\nTexto adicional para concatenar";
  vTexto1 = vTexto1 + textoAdicional;
  console.log("tipo de variable de vTexto1 =",typeof  vTexto1);
  console.log(vTexto1);
}



function FcrearH1()
{
var elemento =document.getElementById("idCrearH1");
var nuevoH1 =document.createElement("H1");
var texto = document.createTextNode("Texto colocado en linea");
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
        valor2 = valor2 + `${input.name}: ${input.value} : ${input.id}  \n`;  // alt+96 
        input.style.border="2px solid orange";
      // para comillas tipotexto permiten colocar variables del form y convertirlas a texto mediante $
      });

      vTexto2[1].style.backgroundColor="green";
    document.getElementById('observacion').value = valor2;
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
    { let rpta2 =prompt("Ingrese el numero de fila a eliminar",'');
      vTextoClass[rpta2].remove();  // eliminar la class de posicion [rpta2]
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


function FValidarCiclo()
{
  //var varciclo =document.getElementById("Segundo");
  const varciclo =document.getElementsByName("ciclo");

  for (let i = 0; i < varciclo.length; i++) {
    if (varciclo[i].checked==true) {
      //alert("Seleccionaste: " + varciclo[i].value);
      document.getElementById('observacion').value = varciclo[i].value;
      return; // Detener el bucle una vez que se encuentre el seleccionado
    }
  }
 
}









function FCrearDatosCiclo()  
{
const radios = document.querySelectorAll('input[name="ciclo"]');

radios.forEach(function(radio) {
   radio.addEventListener('change', function(event) {
    console.log("Ciclo seleccionado:", event.target.value);
    const cantidad = event.target.value;
  //event es el evento, target es el elemento radio, value es su valor del radio
   // radio es el elemento radio
   //
    document.getElementById('observacion').value = cantidad;
  });
}
);
}

///////


document.addEventListener("DOMContentLoaded", () => {  
  const radios = document.querySelectorAll('input[name="ciclo"]');

radios.forEach(function(radio) {
   radio.addEventListener('change', function(event) {
    console.log("Ciclo seleccionado:", event.target.value);
    const cantidad = event.target.value;
  //event es el evento, target es el elemento radio, value es su valor del radio
   // radio es el elemento radio
   //
    document.getElementById('observacion').value = cantidad;
  });
}
);
  });



//////

document.addEventListener("DOMContentLoaded", () => {
  const numCole = document.getElementById("numColegios");
  document.getElementById("numColegios").addEventListener("input",(event)=> {
    let content ="";
    const cantR=event.target.value;
    const vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.innerText= cantR;   
    document.getElementById('observacion').value = cantR;
    for(let i=0; i<cantR ;i++)
    {
      content=content + `<div> <label> Colegio ${i+1} </label>
                          <input type="text" id="cole[${i}" > </div>`;
    }
  document.getElementById("DetalleColegios").innerHTML=content;
  
  });
  });

 function FVerificacion() {

    let nombre1 =prompt("Ingresa tu primer nombre",'');
    let nombre2 =prompt("Ingresa tu segundo nombre",'');
    let apellido1 =prompt("Ingresa tu primer apellido",'');
    let apellido2 =prompt("Ingresa tu segundo apellido",'');

    let longitud1 = nombre1.length;
    let longitud2 = nombre2.length;
    let longitudapellido1 = apellido1.length;
    let longitudapellido2 = apellido2.length;

    let textoconcat="";

        if( longitud1<longitud2 )
 {

  alert("El primer nombre:" +nombre1 + "es menor al segundo nombre:"+ nombre2)

   textoconcat = nombre2 + nombre1; // concatenado y asignado a txtoconcat

 }
 else
 { if(longitud1 > longitud2)
     {
      alert("El primer nombre:" +nombre1 + "es mayor al segundo nombre:"+ nombre2 )
      textoconcat = nombre1 + nombre2; // concatenado y asignado a txtoconcat

     }
     else // caso por defecto igual
     {
       alert("El primer nombre:" +nombre1 + "es IGUAL en longitud al segundo nombre:"+ nombre2)
       textoconcat = nombre1 + nombre2; // da lo mismo el orden del concatenado
     }

 }


 ////conicionales para apellido
 if( longitudapellido1 < longitudapellido2 )
    {
   
     alert("El primer apellido:" +apellido11 + "es menor al segundo apellido:"+ apellido2)
   
      textoconcat = apellido2 + apellido1; // concatenado y asignado a txtoconcat
   
    }
    else
    { if(longitudapellido1 > longitudapellido2)
        {
         alert("El primer apellido:" +apellido1 + "es mayor al segundo apellido:"+ apellido2 )
         textoconcat = apellido1 + apellido2; // concatenado y asignado a txtoconcat
   
        }
        else // caso por defecto igual
        {
          alert("El primer apellido:" +apellido1 + "es IGUAL en longitud al segundo apellido:"+ apellido2)
          textoconcat = apellido1 + apellido2; // da lo mismo el orden del concatenado
        }
   
    }








  alert("apellido concatenado :"+textoconcat);









 }