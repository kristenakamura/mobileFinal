// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


var app = angular.module('kiva', ['ionic', 'ngCordova', 'kiva.controllers', 'kiva.services', 'kiva.filters'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider, $compileProvider) {

$compileProvider.directive('compile', function ($compile) {
        // directive factory creates a link function
        return function (scope, element, attrs) {
          scope.$watch(
              function (scope) {
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
              },
              function (value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
              }
          );
        };
      });

$stateProvider
 .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'tab-home': {
          templateUrl: "templates/home.html",
          controller: 'homeCtrl'
        }
      }
    })
    .state('tabs.blog', {
      url: "/blog",
      views: {
        'tab-blog': {
          templateUrl: "templates/blog.html",
          controller: 'blogCtrl'
        }
      }
    })
    .state('tabs.twitter', {
      url: "/twitter",
      views: {
        'tab-twitter': {
          templateUrl: "templates/twitter.html",
          controller: 'twitterCtrl'
        }
      }
    });


  $urlRouterProvider.otherwise('tab/home');

  $ionicConfigProvider.tabs.position('bottom');

  $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

});
