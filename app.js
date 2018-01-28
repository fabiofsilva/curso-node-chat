/* importar as configurações do servidor */
var app = require('./config/server.js');

/* parametrizar a porta de escuta */
var server = app.listen(8000, function(){
	console.log('Servidor rodando na porta 8000');
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

	socket.on('msgParaServidor', function(data){
		socket.broadcast.emit('msgParaCliente', data);

		if (data.apelido_atualizado == '0') {
			socket.broadcast.emit('incluirParticipante', data);
		}
	});
});

