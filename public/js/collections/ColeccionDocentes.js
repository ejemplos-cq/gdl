define(['models/docente'], function(Docente) {
    var ColeccionDocentes = Backbone.Collection.extend({
        model: Docente,
        url: '/docentes'
    });
    var coleccion = new ColeccionDocentes;
    return coleccion;
});    