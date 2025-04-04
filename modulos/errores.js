function otraFuncion() {
    serompe();
}

function serompe() {
    3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function() {
        try {
            return 3 + z
        } catch (err) {
            console.log('Error en mi funcion asincrona')
            cb(err)
        }
    });
}

try {
    //otraFuncion();
    seRompeAsincrona(function(err) {
        console.log(err.message)
    });
} catch (error) {
    console.log('Vaya, algo se ha roto...');
    console.error(error.message);
    console.log('Pero no pasa nada, lo hemos capturado')
}

console.log('Esto de aqui esta al final.')