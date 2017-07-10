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
      if($scope.contact.id == undefined){
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
      } else {
        $scope.updateContact($scope.contact);
      }
  }

  $scope.deleteContact = function(contact){
    console.log('we tryna delete ', JSON.stringify(contact.id))
    Contact.delete({ 'id': contact.id }).$promise.then(function(data) {
      refresh();
    });
  }

  $scope.goToTop = function() {
      $location.hash('top');
      $anchorScroll();
  }

  $scope.editContact = function(contact){
    console.log('hahahahahahhahahahahahahahahahahahaha', contact.id)
    $scope.contact = contact;
  }

  $scope.updateContact = function(contact){
    console.log("HELO", { 'id': contact.id })
    Contact.update({ 'id': contact.id }, { 'name': contact.name, 'phone_number': contact.phone_number, 'image': contact.image }).$promise.then(function(data){
      console.log('lol updated')
      refresh();
    });
  }

//   $scope.addImage = function() {
//     var f = document.getElementById('file').files[0],
//         r = new FileReader();
//
//     r.onloadend = function(e) {
//       var data = e.target.result;
//       //send your binary data via $http or $resource or do anything else with it
//     }
//
//     r.readAsBinaryString(f);
// }

});
