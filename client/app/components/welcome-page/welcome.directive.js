(function() {
  'use strict';

  angular
    .module('app')
    .directive('welcome', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/welcome-page/welcome.html',
        controller: WelcomeCtrl,
        controllerAs: 'welcomeVm',
        bindToController: true
      };
    });

  WelcomeCtrl.$inject = [
    '$http',
    '$timeout',
    '$location',
  ];

  function WelcomeCtrl($http, $timeout, $location) {
    var vm = this;

    vm.thing = {};
    vm.status = '';
    vm.done = false;

    // small animation
    $timeout(function(){
      vm.appear = true;
    }, 100);

    vm.goToUserList = function() {
      $location.path( "/users" );
    };
  }
})();
