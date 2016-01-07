angular
.module('test-App')
.controller('testController', Dashboard);
Dashboard.$inject = ['$scope','$rootScope','$interval'];

angular.isUndefinedOrNull = function(val) { return angular.isUndefined(val) || val === null; };

function Dashboard($scope, $rootScope,
 $interval) {
    localStorage.setItem('auth0Login', false);

    $scope.loginInitiated = false;
    $scope.loginUserWithAuth0 = loginUserWithAuth0;

      $rootScope.$watch('loggingIn', function(newValue) {
        if (newValue){
            $scope.loginInitiated = true;
            $scope.verifyLogin = $interval(function() {
                if (angular.isUndefinedOrNull($rootScope.currentUser) &&
                    angular.isUndefinedOrNull(localStorage['Meteor.userId'])) {
                    $scope.loginInitiated = false;
                    $interval.cancel($scope.verifyLogin);
                }
            }, 5000);
        }
    });

    function loginUserWithAuth0(argument) {
        Meteor.loginWithAuth0();
    }
}


