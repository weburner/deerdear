angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.login_modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.login_modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.login_modal.show();
    };


    $ionicModal.fromTemplateUrl('templates/register.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.register_modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeRegister = function () {
      $scope.register_modal.hide();
    };

    // Open the register modal
    $scope.register = function () {
      $scope.register_modal.show();
    };


    $ionicModal.fromTemplateUrl('templates/forgot-password.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.forgot_password_modal = modal;
    });

    // Triggered in the forgotPassword modal to close it
    $scope.closeForgotPassword = function () {
      $scope.forgot_password_modal.hide();
    };

    // Open the forgotPassword modal
    $scope.forgotPassword = function () {
      $scope.forgot_password_modal.show();
    };


    $ionicModal.fromTemplateUrl('templates/profile.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.profile_modal = modal;
    });

    // Triggered in the profile modal to close it
    $scope.closeProfile = function () {
      $scope.profile_modal.hide();
    };

    // Open the profile modal
    $scope.profile = function () {
      $scope.profile_modal.show();
    };


    $ionicModal.fromTemplateUrl('templates/my-favor.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.my_favor = modal;
    });

    // Triggered in the myFavor modal to close it
    $scope.closeMyFavor = function () {
      $scope.my_favor.hide();
    };

    // Open the myFavor modal
    $scope.myFavor = function () {
      $scope.my_favor.show();
    };


    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };

    $scope.stylePage = function(){
      $state.go('app.style');
    };

    $scope.comments = function(){
      $state.go('app.comments');
    };

    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'vertical'
    });

  });