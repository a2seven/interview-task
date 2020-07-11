(function() {
  'use strict';

  angular
    .module('app')
    .controller('UsersCtrl', UsersCtrl);

  UsersCtrl.$inject = [
    'usersService',
    '$scope',
    'users',
    '$location',
  ];

  function UsersCtrl(usersService, $scope, users, $location) {
    var vm = this;
    vm.users = users.data;

    vm.breadcrumbs = [{
      name: 'Users',
      url: ''
    }]

    vm.goToEdit = function(id) {
      $location.path( ['/users', id].join('/') );
    }

    vm.remove = function(id) {
      usersService.delete(id).then((res) => {
        if (res && res.success) {
          vm.users = vm.users.filter((res) => res._id != id);
        }
      });
    }
  }
})();
