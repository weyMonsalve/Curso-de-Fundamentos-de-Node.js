const { exec, spawn } = require('child_process');

// exec('dir', (error, stdout, stderr) => {
//     if (error) {
//         console.error(`Error ejecutando el comando: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.error(`Error en la ejecución: ${stderr}`);
//         return;
//     }
//     console.log(`Salida del comando: ${stdout}`);
// });




let proceso = spawn('cmd', ['/c', 'dir']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log('¿Esta muerto?');
    console.log(process.killed);
    console.log(dato.toString())
});


proceso.on('exit', function() {
    console.log('el proceso termino');
    console.log(proceso.killed);
})