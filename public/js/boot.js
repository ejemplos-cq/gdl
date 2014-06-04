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