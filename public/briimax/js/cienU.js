
var cantidad;
var costoFinal;


var sumar = function(){
    var xl = parseInt(document.getElementById('xl').value);
    var l = parseInt(document.getElementById('l').value);
    var m = parseInt(document.getElementById('m').value);
    var s = parseInt(document.getElementById('s').value);
    var costoText = document.getElementById('costoTotal');
    var catidadText = document.getElementById('cantidadTotal');
    var sumaDelLosModelos = xl + l + m + s;
    var precioTotal = 80 * sumaDelLosModelos;


    if (isNaN(precioTotal)) {
        costoText.innerHTML = 'Sumando...'
    }else{
        costoText.innerHTML = precioTotal;
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
        window.open(`https://api.whatsapp.com/send?phone=++59176576474&text=*EL%20JUEGO%20DEL%20CALAMAR*%0A%0A*PEDIDO*:%20${cantidad}%0A%0A*TALLAS*:%0A*XL:*%20${xl}%0A*L:*%20${l}%0A*M:*%20${m}%0A*S:*%20${s}%0A%0A*DEPARTAMENTO*:%20${departamento}%0A%0A%0A*PRECIO%20TOTAL*:%20${costoFinal}`, '_blank')
    }
}