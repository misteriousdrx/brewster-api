function Controlador(){
	this.id = undefined;
	this.nome = undefined;
	this.status = undefined;

	this.temperatura = {
		minima : undefined,
		maxima : undefined,
		ideal : undefined
	};
}

Controlador.prototype.getHistorico = function(id){

};

Controlador.prototype.getHistoricoHoje = function(id){

};

Controlador.prototype.getTemperatura = function(id){
	this.temperatura.ideal = 30;
	this.temperatura.minima = 28;
	this.temperatura.maxima = 32;

	return this.temperatura;
};

module.exports = Controlador;