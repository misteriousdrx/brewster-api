var express		= require('express');
var five		= require('johnny-five');
var bodyParser	= require('body-parser');
var Controlador = require('./models/Controlador');

var app			= express();

var PORT		= 3000;


// -------------------------------------------------------------------------------------------
// Configuracao de componentes eletronicos
// -------------------------------------------------------------------------------------------
// var board		= new five.Board({
// 	port : 'COM3'
// });

var lcd			= undefined;

var currentTemp	= {
	celsius : undefined,
	fahrenheit : undefined,
	kelvin : undefined
};

var setTemp		= {
	setPoint : undefined,
	min : undefined,
	max : undefined
};




var relayStatus	= false;
// -------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------
// Middleware interceptor to handle the json requests.
// -------------------------------------------------------------------------------------------
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Auth');
    res.setHeader('Access-Control-Expose-Headers', 'Auth');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// -------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------
// ROTAS FUNCIONAIS PARA A API
// -------------------------------------------------------------------------------------------

app.get('/', function(req, res){
	res.send('It works!');
});


app.get('/controlador/:id/status', function(req, res){
	var retorno = {
		status : 'Online'
	};
	
	res.status(200).send(retorno);
});

app.get('/controlador/:id/temperaturas', function(req, res){
	var controlador = new Controlador();

	var retorno = {
		ideal : 30.1,
		minima : 29.0,
		maxima : 31
	};

	res.status(200).send(retorno);
});

app.get('/controlador/:id/temperaturas/hoje', function(req, res){
	var temperaturas = [
		{
			'hora' : '08:00',
			'temperatura' : 28
		},
		{
			'hora' : '09:00',
			'temperatura' : 28.5
		},
		{
			'hora' : '10:00',
			'temperatura' : 29
		},
		{
			'hora' : '12:00',
			'temperatura' : 30
		},
		{
			'hora' : '13:00',
			'temperatura' : 30.5
		},
		{
			'hora' : '14:00',
			'temperatura' : 30
		},
		{
			'hora' : '15:00',
			'temperatura' : 35
		}
	];

	res.status(200).send(temperaturas);
});

app.get('/controlador/:id/temperaturas/historico', function(req, res){
	var temperaturas = [
		{
			'data' : '19/11',
			'minima' : 28,
			'maxima' : 31
		},
		{
			'data' : '20/11',
			'minima' : 28.5,
			'maxima' : 30.5
		},
		{
			'data' : '21/11',
			'minima' : 28.7,
			'maxima' : 31
		},
		{
			'data' : '22/11',
			'minima' : 29,
			'maxima' : 31.8
		},
		{
			'data' : '23/11',
			'minima' : 29.3,
			'maxima' : 30
		},
		{
			'data' : '24/11',
			'minima' : 28,
			'maxima' : 31
		},
		{
			'data' : '20/11',
			'minima' : 28,
			'maxima' : 31
		}
	];

	res.status(200).send(temperaturas);
});



app.post('/controlador/:id/temperatura', function(req, res){
	res.status(200).send('teste');
});





// app.get('/lcd/:texto', function(req, res){
// 	console.log(req.params.texto);
// 	lcd.clear();
// 	lcd.print(req.params.texto);
	
// 	res.send(200);
// })

// -------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------
// Configuracao do server http
// -------------------------------------------------------------------------------------------
app.listen(PORT, function(){
	console.log('Server started successfully');
});
// -------------------------------------------------------------------------------------------


/* board.on('ready', function(){
	// lcd = new five.LCD(
	// 	{ 
	// 		pins: [7, 8, 9, 10, 11, 12],
	// 		backlight: 13,
	// 		rows: 2,
	// 		cols: 16
	// 	}
	// );

	// lcd.cursor(0, 0).print('Hello');
	// lcd.cursor(1, 0).print('World'); 

	var thermometer = new five.Thermometer({
		controller: "DS18B20",
		pin: 2,
		freq : 1000
	  });
	
	  thermometer.on("change", function() {
		currentTemp.celsius = this.celsius;
		currentTemp.fahrenheit = this.fahrenheit;
		currentTemp.kelvin = this.kelvin;
	  });

}); */
