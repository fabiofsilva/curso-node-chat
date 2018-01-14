/* leitura do arquivo de configuração do ambiente */
var result = require('dotenv').config();

if (result.error) {
  throw result.error;
}

/* importar o módulo do framework express */
var express = require('express');
/* importar o módulo consign */
var consign = require('consign');
/* importar o módulo body-parser */
var bodyParser = require('body-parser');
/* importar o módulo express-validator */
var expressValidator = require('express-validator');
/* iniciar o objeto express */
var app = express();
/* configuração do ejs */
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
/* configurar o diretório das views */
app.set('views', './app/views');
/* configurar os midllewares */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({'extended': true}));
app.use(expressValidator());
/* configurar o autoload */
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);
/* exportar o objeto app */
module.exports = app;



