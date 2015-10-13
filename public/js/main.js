requirejs.config({
	paths: {
		'jquery' : '../node_modules/jquery/dist/jquery.min',
		'underscore' : '../node_modules/underscore/underscore-min',
		'backbone': '../node_modules/backbone/backbone'

	},
	
	shim: {

		enforceDefine: true
	}

});

require([ 'app' ,], function(App){
	
	App.initialize();

});