function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla, bla, bla, bla...');
        callbackHablar();
    }, 1000)
}


function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}


function conversasion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversasion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }

}
//--------------
console.log('Iniciando proceso');
hola('wbeimar ', function(nombre) {
    conversasion(nombre, 3, function() {
        console.log('Proceso terminado')
    });
});