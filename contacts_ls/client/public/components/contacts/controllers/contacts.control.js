contacts.controller('ContactsController', ['$scope', function($scope, Contact) {
  Contact.query().$promise.then(function(data) {
    $scope.contacts = data;
  });
}]);
