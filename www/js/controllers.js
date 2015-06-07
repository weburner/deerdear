angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, $ionicSlideBoxDelegate, $ionicPlatform) {

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
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.login_modal = modal;
      $scope.selectModal = modal;
      $scope.selectModalSlider = $ionicSlideBoxDelegate.$getByHandle('modalSlider');
      $scope.selectModalSlider.enableSlide(false);
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.login_modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.login_modal.show();
    };

    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      console.log('$stateChangeStart');
      $scope.closeLogin();
      $scope.closeShareModal();
      $scope.closeCommentModal();
    });

    $scope.openRegisterSlide = function(){
      $scope.selectModalSlider.slide(1);
    };

    $scope.openForgotPasswordSlide = function(){
      $scope.selectModalSlider.slide(2);
    };

    $scope.openLoginSlide = function(){
      $scope.selectModalSlider.slide(0);
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

    $ionicModal.fromTemplateUrl('templates/share-modal.html', {
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

    $ionicModal.fromTemplateUrl('templates/comment-modal.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.comment_modal = modal;
    });

    // Triggered in the Share modal to close it
    $scope.closeCommentModal = function () {
      $scope.comment_modal.hide();
    };

    // Open the Share modal
    $scope.openCommentModal = function () {
      $scope.comment_modal.show();
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
      $state.go('app.media-page',{},{reload : true});
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
      $scope.openCommentModal();
    };

  });