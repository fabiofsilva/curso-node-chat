/* importar as configurações do servidor */
var app = require('./config/server.js');

/* parametrizar a porta de escuta */

app.listen(8000, function(){
	console.log('Servidor rodando na porta 8000');
});