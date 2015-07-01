/*
===================================================
            AngularJS Application Code
===================================================
*/  
angular.module('addressBook', []);
    angular.module('addressBook', []).
    controller('MainCtrl', function($scope, $http) {
        $scope.name = "Address Book";
        $scope.sort = "Sort by";
        $scope.contactFormName = "New Contact";
        $scope.list = [];

        $http.get("http://front-end.oudemo.com/api/address/list/?apikey=107c47bf-27f1-44f7-8c6c-b65d758aea23").
        success(function(response) {
            $scope.list = response.result;
            //console.log(response.result);
        });

/*
===================================================
                Add Contact Function
===================================================
*/        
        $scope.addBook = function() {
            var bookObject = {};
            bookObject.firstName = $scope.firstName;
            bookObject.lastName = $scope.lastName;
            bookObject.phone = $scope.phone;
            bookObject.address = $scope.address;
            bookObject.address2 = $scope.address2;
            bookObject.city = $scope.city;
            bookObject.state = $scope.state;
            bookObject.zipcode = $scope.zipcode;
            bookObject.email = $scope.email;

            $scope.list.push(bookObject);

            $http({
                method: "post",
                url: "http://front-end.oudemo.com/api/address/new/",
                data: {
                    apikey: "107c47bf-27f1-44f7-8c6c-b65d758aea23",
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    email: $scope.email,
                    phone: $scope.phone,
                    address: $scope.address,
                    address2: $scope.address2,
                    city: $scope.city,
                    state: $scope.state,
                    zipcode: $scope.zipcode
                }
            });
        };

        $scope.editingData = [];

        for (var i = 0, length = $scope.list.length; i < length; i++) {
            $scope.editingData[$scope.list[i].id] = false;
        }

/*
===================================================
                Modify Contact Function
===================================================
*/    

        $scope.modify = function(entry) {
            $scope.editingData[entry.id] = true;
        };

        $scope.update = function(entry) {
            $scope.editingData[entry.id] = false;

            $http({
                method: "post",
                url: "http://front-end.oudemo.com/api/address/update/",
                data: {
                    apikey: "107c47bf-27f1-44f7-8c6c-b65d758aea23",
                    id: entry.id,
                    firstName: entry.firstName,
                    lastName: entry.lastName,
                    email: entry.email,
                    phone: entry.telephone,
                    address: entry.address,
                    address2: entry.address2,
                    city: entry.city,
                    state: entry.state,
                    zipcode: entry.zipcode
                }
            });
        };


/*
===================================================
                Delete Contact Function
===================================================
*/  

        $scope.removeRow = function(entry) {
            console.log("removeRow");
            $http.defaults.headers.put = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
            };
            $http({
                method: "post",
                url: "http://front-end.oudemo.com/api/address/delete/",
                data: {
                    "apikey": "107c47bf-27f1-44f7-8c6c-b65d758aea23",
                    "id": entry.id
                }
            }).
            success(function(response) {
                //console.log("removeRow");
                $scope.list.splice($scope.list.indexOf(entry), 1);
            });
        };
    });
