module.exports.iniciaChat = function(application, request, response) {
	var dadosForm = request.body;

	request.assert('apelido', 'Apelido é obrigatório').notEmpty();
	request.assert('apelido', 'Apelido deve conter entre 3 e 15 caracteres').len(3, 15);

	var erros = request.validationErrors();

	if (erros) {
		response.render('index', {'validacao': erros});
		return;
	}

	response.render('chat');
}