<<<<<<< HEAD
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
=======
require.config({  
    paths: {    
        jQuery: '/js/libs/jquery',    
        Underscore: '/js/libs/underscore',    
        Backbone: '/js/libs/backbone',  
        bootstrap: 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js',
        text: '/js/libs/text',    
        templates: '../templates'  },
    shim: {    
        'Backbone': ['Underscore', 'jQuery'],    
        'bootstrap': ['jQuery'],
        'gdl': ['Backbone']  
    } 
});

require(['gdl'], function(gdl) {  
    gdl.initialize(); 
}); 
>>>>>>> 1412796dff6af25dc2eafcafc841af878181c2f5
