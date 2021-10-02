
var cantidad;
var costoFinal;
var costoUnidad;

var sumar = function(){
    var xl = parseFloat(document.getElementById('xl').value);
    var l = parseFloat(document.getElementById('l').value);
    var m = parseFloat(document.getElementById('m').value);
    var s = parseFloat(document.getElementById('s').value);
    var costoText = document.getElementById('costoTotal');
    var catidadText = document.getElementById('cantidadTotal');
   var sumaUNo = xl + l;
   var sumaDos = m + s;
   
    var sumaDelLosModelos = sumaUNo + sumaDos;
    console.log(sumaDelLosModelos);
    var precioTotal; 

   if(sumaDelLosModelos >= 1){
     precioTotal = 120 * sumaDelLosModelos;
     if (isNaN(precioTotal)) {
        costoText.innerHTML = 'Sumando...'
    }else{
        catidadText.innerHTML = "120Bs"
        costoText.innerHTML = precioTotal;
        costoUnidad = "120Bs";
    }
   }
       if(sumaDelLosModelos >= 3){
        precioTotal = 110 * sumaDelLosModelos;
        if (isNaN(precioTotal)) {
            
            costoText.innerHTML = 'Sumando...'
        }else{
            costoText.innerHTML = precioTotal;
            catidadText.innerHTML = "110Bs"
            costoUnidad = "110Bs";
        }
            
        
       }
           if (sumaDelLosModelos >= 6) {
               precioTotal = 100 * sumaDelLosModelos;
               if (isNaN(precioTotal)) {
                costoText.innerHTML = 'Sumando...'
            }else{
                costoText.innerHTML = precioTotal;
                catidadText.innerHTML = "100Bs";
                costoUnidad = "100Bs";
            }
           }
               if(sumaDelLosModelos >= 12){
                   precioTotal = 0;
                   precioTotal = 90 * sumaDelLosModelos;
                   console.log("Percio total", precioTotal);
                      if (isNaN(precioTotal)) {
        costoText.innerHTML = 'Sumando...'
    }else{
        catidadText.innerHTML = "90Bs"
        costoText.innerHTML = precioTotal;
        costoUnidad = "90Bs";
    }
               }
                   if (sumaDelLosModelos >= 24) {
                       precioTotal = 85 * sumaDelLosModelos
                       if (isNaN(precioTotal)) {
                        costoText.innerHTML = 'Sumando...'
                    }else{
                        catidadText.innerHTML = "85Bs"
                        costoText.innerHTML = precioTotal;
                        costoUnidad = "85Bs";
                    }
                   } 
               
           
       
   
   
    costoFinal = precioTotal;
    cantidad = sumaDelLosModelos;

}

var getData = function(){
    event.preventDefault();
    var xl = document.getElementById('xl').value;
    var l = document.getElementById('l').value;
    var m = document.getElementById('m').value;
    var s = document.getElementById('s').value;
    var departamento = document.getElementById('departamentoselect').value;
    console.log(xl + l, m, s, departamento);

    if(xl <= "0" && l <= "0" && m <= "0" && s <= "0"){
        document.getElementById('xl').focus();
        alert("El pedido minimo es de 1 unidad")
    }else{
        window.open(`https://api.whatsapp.com/send?phone=++59176576474&text=*EL%20JUEGO%20DEL%20CALAMAR*%0A%0A*PEDIDO*:%20${cantidad}%0A%0A*PRECIO%20UNIDAD*:%20${costoUnidad}%0A%0A*TALLAS*:%0A*XL:*%20${xl}%0A*L:*%20${l}%0A*M:*%20${m}%0A*S:*%20${s}%0A%0A*DEPARTAMENTO*:%20${departamento}%0A%0A%0A*PRECIO%20TOTAL*:%20${costoFinal}`, '_blank')
    }
}
