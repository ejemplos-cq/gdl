var crearControladorDocente;

crearControladorDocente = function(_arg) {
  var docentes, nuevaVistaDocente;
  nuevaVistaDocente = _arg.nuevaVistaDocente, docentes = _arg.docentes;
  nuevaVistaDocente.on('create-docente', function(vista) {
    var docente = new Docente;
	docente.set('nombre',vista.getNombre());
    docentes.add(docente);
  });
  return {};
};