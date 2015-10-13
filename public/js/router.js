define([

	'jquery',
	'underscore',
	'backbone'
	
],	function($, _, Backbone){

	
		var AppRouter = Backbone.Router.extend({
		
            routes: {
	            '' : 'home'
            },
            initialize: function() {
				 						    
				
            },
		});
		
		var initialize = function(){
						
			var router = new AppRouter();
						
			router.on('route:home', function(query){

				require(['views/home'], function (HomeView) {  	    
					var homeView = new HomeView();	
				});
			    
		  	});
	   
			Backbone.history.start({pushState: true});
		
		};
		
	return {
		
		initialize : initialize
		
	};
	
});

