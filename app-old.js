


const http = require('http');


http.createServer( (req, res) => {

    res.write('Hola Mundo');
    res.end();

})
.listen(8099);

console.log('Escuchando en el puerto: 8099');