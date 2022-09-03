function Valor() {
    //variable donde escribiremos
    var e = document.getElementById("Escribir");
    //variable que guarda el tamaño de la matriz obtenido
    //desde el form en html
    var a = parseFloat(document.getElementById("NumeroF").value);
    var b = parseFloat(document.getElementById("NumeroC").value);

    var matriz = [a * b];
    var mayor = 0, menor = 0;
    for (var i = 0; i < a * b; i++) {
        matriz[i] = parseInt(Math.random() * 100);
        //Imprime un espacio para que se posicione al lado
        e.innerHTML += matriz[i] + " ";
        //Si el módulo de la división entre el número del contador (+1 para que comience desde 1)
        //y entre el número de columnas es igual a cero, imprime un salto

        if (((i + 1) % b) == 0) {
            e.innerHTML += "<br>";
        }         
    }
    /*Se iguala a la expresión .apply, se pasa toda la matriz para
    que la función encuentre el argumento mayor y menor número*/
    mayor = Math.max.apply(null, matriz);
    menor = Math.min.apply(null, matriz);

    e.innerHTML += "<h1>El número mayor es: " + mayor + "</h1>"
    e.innerHTML += "<h1>El número menor es: " + menor + "</h1>"
}
function Reset() {
    location.reload();
}
