function calcularPulsacion(){
    
    var edad= document.getElementById("txtidentificacion").value;

    var Nombre= document.getElementById("txtname").value;

    var edad= parseInt(document.getElementById("txtedad").value);

    let d= document.getElementById("dlist").value;

    let Sexo= d.value;

    var pulsacion= 0;

    if(d= "Masculino"){
    
      pulsacion = (210 - edad) / 10;
      document.getElementById("lblname").innerText='Nombre: '+ Nombre;
      document.getElementById("lblpulsacion").innerText ='Pulsacion: '+pulsacion;
    }
    else{
        if (d="Femenino"){
            pulsacion = (220 - edad) / 10;
            document.getElementById("lblname").innerText='Nombre: '+ Nombre;
            document.getElementById("lblpulsacion").innerText ='Pulsacion: '+pulsacion;
        }
    }

}