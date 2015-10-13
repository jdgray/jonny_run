define([

	'jquery',
	'underscore',
	'backbone'

], function ($, _, Backbone) {


    var HomeView = Backbone.View.extend({

        //Setup DOM Elements
        el: $('body'),

        //Bind Events			
        events: {
            "click .email-signup": "signup",
        },

        initialize: function () {

            console.log('start the game');

            this.render();

        },

        render: function () {

        },


    });

    return HomeView;

});