var express = require('express');
var router = express.Router();

/* GET Lista de Docentes. */
router.get('/docentes', function(request, response) {
    /*return DocenteModel.find(function(err, docentes) {
        if (!err) {
            return response.send(docentes);
        }
        else {
            return console.log(err);
        }
    });*/
});
module.exports = router;