const os = require('os');

// console.log(os.arch());
// console.log(os.platform());

// console.log(os.cpus().length);

// console.log(os.constants);

const SIZE = 1024;

function kb(bytes) { return bytes / SIZE }

function mb(bytes) { return kb(bytes) / SIZE }

function gb(bytes) { return mb(bytes) / SIZE }


console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));



console.log(gb(os.homedir()));
console.log(gb(os.tmpdir()));
console.log(gb(os.hostname()));
console.log(gb(os.networkInterfaces()));

const interfaces = os.networkInterfaces();

console.log(interfaces)