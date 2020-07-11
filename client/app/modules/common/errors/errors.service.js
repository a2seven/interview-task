(function() {
  'use strict';

  angular
    .module('common')
    .service('errorService', errorService);

  errorService.$inject = ['api'];

  function errorService(api) {
    var self = this;
    self.errors = [];

    var init = function() {
      self.errors = api.getErrors();
    };
    init();


    return self;

    // vm.getThings = function() {
    //   $http.get('/api/things')
    //     .then(function(response) {
    //       vm.thingsList = response.data;
    //     });
    // };

    // vm.postThing = function() {
    //   $http.post('/api/things', vm.thing)
    //     .then(function() {
    //       vm.status = 'OK';
    //     });
    // };
  }
})();
