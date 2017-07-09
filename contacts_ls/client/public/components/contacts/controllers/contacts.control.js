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
    var numberIsValid = 1;
    var nums = '0123456789';
    var number = $scope.contact.phone_number.substring(1, $scope.contact.phone_number.length);

    //Checks if number string entered only contains numbers and no letters or special characters
    for(var i = 0; i < number.length; i++){
      if(nums.indexOf(number[i]) === -1){
        numberIsValid = 2;
      }
    }


    if($scope.contact.phone_number.length <= 16 && $scope.contact.phone_number.length >= 12 && $scope.contact.phone_number[0] == '+' && numberIsValid == 1){
      Contact.save({}, $scope.contact).$promise.then(function(data) {
        console.log('dis our data ' + data);
        refresh();
      });
    } else {
      alert("You must enter phone number in the format: '+12223334444'. Up to 15 digits allowed. Please include your country code");
    }
  }

  $scope.deleteContact = function(contact){
    console.log('we tryna delete ', JSON.stringify(contact.id))
    Contact.delete({ 'id': contact.id }).$promise.then(function(data) {
      refresh();
    });
  }

});
