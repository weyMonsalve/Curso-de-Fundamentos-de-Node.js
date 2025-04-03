console.log('Ver algo');
console.info('tambien ver algo');
console.error('error');
console.warn('ver errores potenciales');
console.table('Muestra modulos en forma de tabla');
console.group('Nos permite agrupara un monton de loops para decir que hacen parte de tal cosa')
console.count('veces');


let tabla = [

    {
        a: 1,
        b: 'z',
    },
    {
        a: 2,
        b: 'otra letra',
    }
]

console.table(tabla)


console.group('Conversacion');
console.log('Hola');
console.log('Bla,bla,bla');
console.log('Adios');
console.groupEnd('conversacion');
console.log('Otra cosa de otra funcion');



function function1() {
    console.group('funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    function2();
    console.log('hemos vuelto a la 1');
    console.groupEnd('funcion 1');
}

function function2() {
    console.group('funcion 2');
    console.log('Esto estamos en la funcion 2');
    console.groupEnd('funcion 2');
}

console.log('Empezamos');
function1();


console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');