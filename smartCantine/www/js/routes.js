angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('gKBuddy', {
    url: '/page1',
    templateUrl: 'templates/gKBuddy.html',
    controller: 'gKBuddyCtrl'
  })

  .state('menuOfTheDay', {
    url: '/menu',
    templateUrl: 'templates/menuOfTheDay.html',
    controller: 'menuOfTheDayCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});