angular
.module('test-App', [
    'angular-meteor',
    'ui.router',
    'ionic'
]);

function onReady() {
    angular.bootstrap(document, ['test-App']);
}

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}