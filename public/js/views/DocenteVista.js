var DocenteVista;

DocenteVista = Backbone.View.extend({
    tagName: 'div',
    className: 'docente',
    render: function() {
        this.$el.html("<p>" + (this.model.escape('nombre')) + "</p>");
        return this;
    }
});