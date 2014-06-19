define(function(require) {
    var Docente = Backbone.Model.extend({
        defaults: {
            nombre: ''
        }
    });
    return Docente;
});    