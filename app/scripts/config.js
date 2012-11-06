require.config({
    deps: ["main"],

    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        json2: 'lib/json2',
        backbone: 'lib/backbone',
        marionette: 'lib/backbone.marionette'
    },

    shim: {
        backbone: {
            deps: ['jquery', 'underscore', 'json2'],
            exports: 'Backbone'
        }
    }
});
