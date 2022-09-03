function Calculo() {
    var libros = parseFloat(document.getElementById("Libros").value);
    var cuadernos = parseFloat(document.getElementById("Cuadernos").value);
    var plumas = parseFloat(document.getElementById("Plumas").value);

    var escribir = document.getElementById("Escribir");
    var result = 0;

    if (libros < 0){
        libros*=-1;
    }
    if (cuadernos < 0){
        cuadernos*=-1;
    }
    if (plumas < 0){
        plumas*=-1;
    }
    result = (libros * 100) + (cuadernos * 15.50) + (plumas * 2.35);
    escribir.innerHTML += "<h3>Libros: "+libros+" * 100$ = "+(libros*100)+"$</h3>"
    escribir.innerHTML += "<h3>Cuadernos: "+cuadernos+" * 15.50$ = "+(cuadernos*15.50)+"$</h3>"
    escribir.innerHTML += "<h3>Plumas: "+plumas+" * 2.35$ = "+(plumas*2.35)+"$</h3>"
    escribir.innerHTML += "<h3>La venta totala fue de " + result;
}
function Reset() {
    location.reload();
}