precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantidad = document.querySelector(".cantidad").innerHTML;
let total = document.querySelector(".valor-total");

function aumentarProducto(){
    let cantidadActual = parseInt(cantidad);
    cantidadActual+=1;
    cantidad = cantidadActual;
    document.querySelector(".cantidad").innerHTML = cantidad;
}

function disminuirProducto(){
    let cantidadActual = parseInt(cantidad);
    // Si bien no se exige la validacion para una cantidad de productos negativa, creo que es necesario agregar la validacion
    if(cantidadActual === 0){
        cantidad = 0;
        document.querySelector(".cantidad").innerHTML = cantidad;
    }else{
        cantidadActual-=1;
        cantidad = cantidadActual;
        document.querySelector(".cantidad").innerHTML = cantidad;
    }
    // Si no se quisiera considerar la validacion, aunque eso permita una cantidad de productos no negativa, el codigo seria el siguiente para ambos casos
    // cantidadActual-=1;
    // cantidad = cantidadActual;
    // document.querySelector(".cantidad").innerHTML = cantidad;
}