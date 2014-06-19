define(['collections/ColeccionDocentes', 'views/ListaDocentes', 'models/docente'], function(ColeccionDocentes, ListaDocentes, Docente) {
    var rutas = Backbone.Router.extend({
        routes: {
            "docentes": 'verDocentes'
        },
        verDocentes: function() {
            var docente = new Docente({nombre:'Jaime'});
            ColeccionDocentes.add(docente);
            this.loadview(new ListaDocentes(ColeccionDocentes));
        },
        loadView: function(nuevaVista) {
            this.view && this.view.remove();
            this.view = nuevaVista;
        }
    });
    return rutas;
});    