define(['models/docente', 'views/DocenteVista'], function(Docente, DocenteVista) {
    var ListaDocentes = Backbone.View.extend({
        el: 'div.container', 
        initialize: function (docentes){
           this.docentes = docentes;
           this.render();
        }, 
        render: function(){
            this.docentes.each(function(docente){
                this.renderDocente(docente)
            }, this);
        },
        renderDocente: function(docente){
            var vistaDocente = new DocenteVista({model:docente});
            this.$el.append(vistaDocente.render().el);
        }
    })
    return ListaDocentes;
});