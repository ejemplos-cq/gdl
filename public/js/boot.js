require.config({
    paths: {
        jQuery: '/js/libs/jquery',
        Underscore: '/js/libs/underscore',
        Backbone: '/js/libs/backbone',
        text: '/js/libs/text',
        templates: '../templates'

    },
    shim: {
        'Backbone': ['Underscore', 'jQuery'],
        'gdl': ['Backbone']
    }
});

require(['gdl'], function(gdl) {
    gdl.initialize();
});