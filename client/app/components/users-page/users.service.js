(function() {
  'use strict';

  angular
    .module('app')
    .service('usersService', UsersService);

  UsersService.$inject = ['$http', 'api'];

  function UsersService($http, api) {
    var self = this;

    // get list of users from BE
    this.getUsers = function() {
      return api.get('users');
    };

    // get users by id from BE
    this.getUserById = function(id) {
      return api.get(['users', id].join('/'));
    };

    // get list of roles from BE
    this.getRoles = function(id) {
      return api.get(['roles', id].join('/'));
    };

    // add new user from BE
    this.add = function(user) {
      return api.post('users', {}, user, 'User successfully added');
    };

    // update user data
    this.update = function(user) {
      return api.put(['users', user._id].join('/'), {}, user, 'User has been updated');
    };

    // delete user data
    this.delete = function(id) {
      return api.delete(['users', id].join('/'), {}, 'User has been removed');
    };

    return self;
  }

})();
