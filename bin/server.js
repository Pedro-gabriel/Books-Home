//para iniciar o programa use npm run dev para não precisa fica abrindo e fechando o server
'use strict' // corretor de codigo
const app = require('../src/app');
const debug = require('debug')('pedro:server');
const http = require('http');//bibliotecas npm install 

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`Api rodando na porta` + port);

//funções
function normalizePort(val) {// função para normaliza a porta
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}

function onError(error){ //controle de erros
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port == 'string' ?
        'Pipe' + port :
        'Port' + port;
    
    switch(error.code){
        case    'EACCES':
            console.error(bind + 'requise elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {// pega as informações do servidor e start no debug
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe' + addr
    : 'port' + addr.port;
    debug('Listening on' + bind);
}