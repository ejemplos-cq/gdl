define(['collections/ColeccionDocentes'], function(ColeccionDocentes) {
    var rutas = Backbone.Router.extend({
        routes: {
            "docentes": 'verDocentes'
        },
        verDocentes: function() {
            var docentes=[{nombre:'Jaime'}];
            this.loadview(new ListaDocentes(docentes));
        },
        loadView: function(nuevaVista) {
            this.view && this.view.remove();
            this.view = nuevaVista;
        }
    });
    return rutas;
});    