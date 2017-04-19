var decircularize = require('decircularize')
JSON._stringify = JSON.stringify
JSON.stringify = function() { 
	arguments[0] = decircularize(arguments[0], {
		onCircular: function(){ return undefined }
	}) 
	return JSON._stringify.apply(JSON, arguments) 
}         
