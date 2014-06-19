/*define(['views/index'], function(indexView) {
    var initialize = function() {
        indexView.render();
    }
    return {
        initialize: initialize
    };
});*/

define(['routers/router'], function(router) {
    var initialize = function() {
        checkLogin(runApplication);
    };
    var checkLogin = function(callback) {
        /*$.ajax("/account/authenticated", {
            method: "GET",
            success: function() {
                return callback(true);
            },
            error: function(data) {
                return callback(false);
            }
        });*/
        callback(true);
    };
    var runApplication = function(authenticated) {
        if (!authenticated) {
            window.location.hash = 'login';
        }
        else {
            //window.location.hash = 'index';
            window.location.hash = 'docentes';
        }
        var enrutador = new router();
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});