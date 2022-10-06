/* Le solicitamos al cliente que ingrese el precio del producto que quiere comprar para calcular el IVA*/

while(true){
    var precioCosto = parseFloat (prompt("ingrese el precio del producto")); 
    if (!isNaN (precioCosto) && precioCosto != null && precioCosto != ""){
        break; 
    }
    else{
        alert ("no es numero"); 
        continue; 
    }
}

precioCostoA = precioCosto.toFixed(2); 
alert ("el precio del producto a calcular es: " + precioCostoA)
console.log ("el precio del producto a calcular es: " + precioCostoA)

/* sumar el iva al producto*/ 
function calcularIva (precioCosto) {
    return (precioCosto * 0.21)
}
var iva = calcularIva(precioCosto); 
ivaM= iva.toFixed(2); 

alert ("El IVA del producto ingresado es: " + ivaM); 
console.log ("El IVA del producto ingresado es: " + ivaM); 

/* sumarle el IVA al precio del producto con IVA*/

function SumarIva(precioCosto){
    return (precioCosto + (precioCosto * 0.21)); 
}
var precioConIva = SumarIva(precioCosto);
precioConIvaM = precioConIva.toFixed(2);

alert ("El precio del producto con IVA incluido es: " + precioConIvaM);
console.log ("El precio del producto con IVA incluido es: " + precioConIvaM);

/* Calcular precio sugerido de venta*/

function CalculaPrecioVenta (precioConIva){
    return (precioConIva * 1.25)
}
var PrecioVenta = CalculaPrecioVenta (precioConIva);
PrecioVentaM = PrecioVenta.toFixed(2); 

alert ("El precio sugerido de venta del producto es: " + PrecioVentaM); 
console.log ("El precio sugerido de venta del producto es: " + PrecioVentaM);

