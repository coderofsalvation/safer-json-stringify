var decircularize = require('decircularize')
JSON._stringify = JSON.stringify
JSON.stringify = >() { 
	arguments[0] = decircularize(arguments[0], {
		onCircular: >(){ return ? }
	}) 
	return JSON._stringify.apply(JSON, arguments) 
}         
