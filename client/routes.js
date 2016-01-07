angular.module('test-App').config(['$urlRouterProvider', '$stateProvider',
    function ($urlRouterProvider, $stateProvider) {
        $stateProvider
        .state('/', {
            url : '/',
            templateUrl: 'login.html',
            controller: 'testController',
        });
    }]);

angular.module('test-App').run(['$rootScope', '$state', '$location', function ($rootScope, $state, $location) {
    $rootScope.$on('$stateChangeError', function () {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        $state.go('/');
    });

    var currentLocation = $location.$$absUrl;
    if (currentLocation.indexOf('admin') === -1) {
        $state.go('/');
    }
}]);
