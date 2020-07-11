(function() {
  'use strict';

  angular
    .module('common')
      .provider('api', function() {
        var options = {
          apiUrl: '',
        };

        this.setUrl = function(url) {
          options.apiUrl = url;
        }

        this.$get = function($http, $q, Notification) {
          var self = this;
          self.responseErrorHandlers = [];
          self.errors = [];

          self.getErrors = function() {
            return self.errors;
          }

          // handle success
          var defaultSuccessHandler = function(response, showNotify) {
            if (showNotify) {
              Notification.success(showNotify);
            }
            var result = angular.extend({}, { data: response.data, success: true });
            return result;
          };

          // handle errors
          var defaultErrorHandler = function(error) {
            var data = error.data.data.errors;
            angular.forEach(data, function(err) {
              Notification.error(err[0]);
            });
            
            return error.data;
            // angular.forEach(self.responseErrorHandlers, function(handler) {
            //     handler(error);
            // });
            // return $q.reject(error);
          };

          var url = function(name) {
            return options.apiUrl + name;
          };

          /**
           * Generic GET method call
           * @param name
           * @param {Object} [params]
           * @returns {Promise}
           */
          self.get = function(name, params) {
            return $http({
                method: 'GET',
                url: url(name),
                // cache: true,
                params:params
            }).then(function(res) { return defaultSuccessHandler(res, false) }, defaultErrorHandler);
          };

          /**
           * Generic POST method call
           * @param name
           * @param params
           * @param data
           * @param notification
           * @returns {Promise}
           */
          self.post = function(name, params, data, notification) {
              return $http({
                  method: 'POST',
                  url: url(name),
                  params: params,
                  data: data
              }).then(function(res) {
                return defaultSuccessHandler(res, notification);
              }, defaultErrorHandler);
          };

          /**
           * Generic DELETE method call
           * @param name
           * @param params
           * @param notification
           * @returns {Promise}
           */
          self.delete = function(name, params, notification) {
              return $http({
                  method: 'DELETE',
                  url: url(name),
                  params: params
              }).then(function(res) {
                return defaultSuccessHandler(res, notification);
              }, defaultErrorHandler);
          };

          /**
           * Generic PUT method call
           * @param name
           * @param params
           * @param data
           * @param notification
           * @returns HttpPromise
           */
          self.put = function(name, params, data, notification) {
              return $http({
                  method: 'PUT',
                  url: url(name),
                  params: params,
                  data: data
              }).then(function(res) {
                return defaultSuccessHandler(res, notification);
              }, defaultErrorHandler);
          };
          return self;
        };
      });

})();
