function total(){
    var precio =200;
    var desc = 1;
    
    var cantidad = parseFloat(document.getElementById('cantidad').value);                
    var descuento = parseInt(document.getElementById('descuento').value);
    
    if (cantidad>0){
        switch (descuento) {
        case 0:
            desc=0.2;
            break;
        case 1:
            desc=0.5;
            break;
        case 2:
            desc=0.85;
            break;    
        default:
            desc=1;
            break;
    }
    var resultado = parseFloat(cantidad*precio*desc)                
    document.getElementById('resultado').value = "Total a Pagar : $ "+resultado;
    }
    else{
        alert("Debe ingresar la cantidad de tickets")
        document.getElementById('resultado').value = "Total a Pagar : $ "
    }             
}

function borrar(){
    
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('email').value = "";
    document.getElementById('cantidad').value = "";
    document.getElementById('descuento').value = "0";
    document.getElementById('resultado').value = "Total a Pagar : $ "    
}

function resumen(){
    
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var cantidad = document.getElementById('cantidad').value;
    var desc = document.getElementById('descuento').value;
    var resultado = document.getElementById('resultado').value;

    if(nombre!=""&&apellido!=""&&email!=""&&cantidad!=""&&desc!=null&&resultado!=null){
        alert("***TE ESPERAMOS***")
    }else{
        alert("No olvide completar todos los campos")
    }
    
}            