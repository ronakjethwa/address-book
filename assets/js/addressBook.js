angular.module('addressBook', [])
    .controller('MainCtrl', function($scope, $http) {
        $scope.name = "Address Book";
        $scope.sort = "Sort by";
        $scope.contactFormName = "New Contact";
        $scope.list = [];
        $scope.modifyField = true;
        $scope.viewField = true;

        $http.get("assets/result.json").
        success(function(response) {
            $scope.list = response.result;
            console.log(response.result);
        });

        $scope.addBook = function() {
            var bookObject = {};
            bookObject.firstName = $scope.firstName;
            bookObject.lastName = $scope.lastName;
            bookObject.phone = $scope.telephone;
            bookObject.address1 = $scope.address1;
            bookObject.address2 = $scope.address2;
            bookObject.city = $scope.city;
            bookObject.state = $scope.state;
            bookObject.zipcode = $scope.zipcode;
            bookObject.email = $scope.email;



            $scope.list.push(bookObject);
        };

        $scope.editingData = [];

        for (var i = 0, length = $scope.list.length; i < length; i++) {
            $scope.editingData[$scope.list[i].id] = false;
        }


        $scope.modify = function(entry) {
            $scope.editingData[entry.id] = true;
        };


        $scope.update = function(entry) {
            $scope.editingData[entry.id] = false;

        };

        $scope.removeRow = function(firstName) {
            var index = -1;
            var comArr = eval($scope.list);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].firstName === firstName) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            $scope.list.splice(index, 1);
        };


    });