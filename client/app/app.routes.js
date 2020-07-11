(function() {
  'use strict';

  angular
    .module('app')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state('welcome', {
      url: '/',
      template: '<welcome></welcome>',
    });

    $stateProvider.state('users', {
      name: 'users',
      url: '/users',
      templateUrl: 'app/components/users-page/users.html',
      controller: 'UsersCtrl',
      controllerAs: 'vmUsers',
      resolve: {
        users: function(usersService) {
          return usersService.getUsers();
        }
      }
    });

    $stateProvider.state('userEdit', {
      name: 'userEdit',
      url: '/users/:id',
      templateUrl: 'app/components/users-page/userEdit.html',
      controller: 'UserEditCtrl',
      controllerAs: 'vmEUsers',
      resolve: {
        user: function(usersService, $stateParams) {
          var id = $stateParams.id;
          return usersService.getUserById(id);
        },
        roles: function(usersService) {
          return usersService.getRoles();
        }
      }
    });

    $stateProvider.state('userAdd', {
      name: 'userAdd',
      url: '/users/new',
      templateUrl: 'app/components/users-page/userEdit.html',
      controller: 'UserAddCtrl',
      controllerAs: 'vmEUsers',
      resolve: {
        roles: function(usersService) {
          return usersService.getRoles();
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  }
})();
