// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
      })
      .state('app.media-page', {
        url: "/media-page",
        cache: false,
        views: {
          'menuContent': {
            templateUrl: "templates/media-page.html",
            controller: 'AppCtrl'
          }
        }
      })
      .state('app.media-list', {
        url: "/media-list",
        views: {
          'menuContent': {
            templateUrl: "templates/media-list.html",
            //controller: 'AppCtrl'
          }
        }
      })
      .state('app.style', {
        url: "/style",
        views: {
          'menuContent': {
            templateUrl: "templates/style-page.html",
            controller: 'AppCtrl'
          }
        }
      })
      .state('app.no-comment', {
        url: "/no-comment",
        views: {
          'menuContent': {
            templateUrl: "templates/no-comment.html",
            controller: 'AppCtrl'
          }
        }
      })
      .state('app.comments', {
        url: "/comments",
        views: {
          'menuContent': {
            templateUrl: "templates/comments.html",
            controller: 'AppCtrl'
          }
        }
      })
      .state('app.list-under-tag', {
        url: "/list-under-tag",
        views: {
          'menuContent': {
            templateUrl: "templates/list-under-tag.html",
            controller: 'AppCtrl'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/media-list');
  });
