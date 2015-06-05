angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    console.log('In AppCtrl');

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
      $scope.login_modal.hide();
      $state.go('app.register');
      //$scope.register_modal.show();
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
      $scope.login_modal.hide();
      $state.go('app.forgot-password');
      //$scope.forgot_password_modal.show();
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

    $ionicModal.fromTemplateUrl('share-modal.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.share_modal = modal;
    });

    // Triggered in the Share modal to close it
    $scope.closeShareModal = function () {
      $scope.share_modal.hide();
    };

    // Open the Share modal
    $scope.openShareModal = function () {
      $scope.share_modal.show();
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

    $scope.stylePage = function () {
      $state.go('app.style');
    };

    $scope.listUnderTag = function(){
      $state.go('app.list-under-tag');
    };

    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'vertical'
    });

    $scope.mediaList = function () {
      $state.go('app.media-list');
    };

    $scope.mediaListTab = 1;
    $scope.listUnderTagTab = 1;

    $scope.showTab = function(val){
      $state.go('app.media-list');
      $scope.mediaListTab = val;
    };

    $scope.showListUnderTag = function(val){
      $state.go('app.list-under-tag');
      $scope.listUnderTagTab = val;
    };

    $scope.mediaPage = function () {
      $state.go('app.media-page');
    };

    $scope.comments = function () {
      $state.go('app.comments');
    };

    $scope.noComments = function () {
      $state.go('app.no-comment');
    };

    $scope.goToOtherPage = function(){
      alert('This will go to other page');
    };

    $scope.writeComment = function(){

    };

  });