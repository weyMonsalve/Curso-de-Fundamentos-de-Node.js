const http = require('http');

http.createServer(function(req, res) {
    console.log('nueva peticion');
    console.log(req.url);


    res.writeHead(201, { 'content-type': 'text/plain' })

    //escribir respuesta al usuario
    res.write('Hola, ya se usar HTTP de NodeJS')

    res.end();
}).listen(3000);

console.log('Escuchando http en el puerto 3000');