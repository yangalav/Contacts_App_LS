angular.module('appRoutes', ["ui.router"])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvder, $urlRouterProvider) {

    $stateProvider.state({
      name: 'contacts',
      url: '/',
      templateUrl: 'public/components/contacts/templates/contacts.template'
      controller: 'ContactsController'
    });

    $urlRouterProvider.otherwise('/');
  }]);
