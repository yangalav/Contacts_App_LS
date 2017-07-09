contacts.controller('ContactsController', function($scope, $http, $location, $anchorScroll, Contact) {
  var refresh = function(){
    Contact.query().$promise.then(function(data) {
      $scope.contactlist = data;
      $scope.contact = {};
      console.log(data);
    });
  }

  refresh();

  $scope.goToBottom = function() {
      $location.hash('bottom');
      $anchorScroll();
    };

  $scope.addContact = function() {
    console.log('makin post requesttt, here is the dataaaa ' + JSON.stringify($scope.contact));
    Contact.save({}, $scope.contact).$promise.then(function(data) {
      console.log('dis our data ' + data);
      refresh();
    });
  }

});
