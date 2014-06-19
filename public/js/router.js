define(
function(require) {
  var GdlRouter = Backbone.Router.extend({
    currentView: null,

    routes: {
      'index': 'index',
      'login': 'login',
      'register': 'register',
      'forgotpassword': 'forgotpassword',
      'profile/:id': 'profile',
      'contacts/:id': 'contacts'
    },

    changeView: function(view) {
      if ( null != this.currentView ) {
        this.currentView.undelegateEvents();
      }
      this.currentView = view;
      this.currentView.render();
    },

    index: function() {
    },

    addcontact: function() {
//      this.changeView(new AddContactView());
    },

    login: function() {
//      this.changeView(new LoginView());
    },

    forgotpassword: function() {
//      this.changeView(new ForgotPasswordView());
    },

    register: function() {
//      this.changeView(new RegisterView());
    },

    profile: function(id) {
    },

    contacts: function(id) {
    }
  });

  return new GdlRouter();
});