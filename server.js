var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8081;

app.use(bodyParser());
//app.use(express.static(__dirname + '/public'));

var accounts = {

	cayasso: {
		name: {
			first: 'Jonathan',
			last: 'Brumley'
		},
		age: 32
	},

	eushell: {
		name: {
			first: 'Eushell',
			last: 'Brumley'
		},
		age: 14
	}
};

app.post('/account', function (req, res) {
	console.log(req.body)
	var user = req.body.user;
	res.json(accounts[user]);
});

app.post('/login',function(req,res){
	var uname=req.body.username;
	var psw=req.body.password;

	if(uname==='vin.dev' && psw==='HelloWorld'){
		res.status(200).send('OK- Valid User');
	}
	else{
		res.status(401).send('Invalid user');
	}

});

app.listen(port, function () {
	console.log('listening on port %d', port);
});