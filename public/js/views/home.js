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

            this.start();

        },

        render: function () {

        },

        start: function () {

            console.log(Phaser);

            var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update });

        },

        preload: function () {
        
        },

        create: function () {
        
        },

        update: function () {

        }

    });

    return HomeView;

});