define(function(require) {
   var Grupo =Backbone.Model.extend({
        defaults:{
         estudiante: "",
		 numeroDeGrupo: "",
		 curso:""
	    }
   });
   return Grupo;
});