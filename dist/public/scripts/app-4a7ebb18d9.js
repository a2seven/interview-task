angular.module('appTemplates', []).run(['$templateCache', function($templateCache) {$templateCache.put('app/components/users-page/userEdit.html','<div class="container">\n\t<div class="users-edit__wrapper wrapper">\n\t\t<div class="users-edit">\n\t\t\t<div class="users-edit__header">\n\t\t\t\t<h2>{{vmEUsers.title}}</h2>\n\t\t\t\t<breadcrumbs data="vmEUsers.breadcrumbs"></breadcrumbs>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="users-edit__form">\n\t\t\t<user-form user="vmEUsers.user" on-save="vmEUsers.onSave" roles="vmEUsers.roles"></user-form>\n\t\t</div>\n\t</div>\n</div>');
$templateCache.put('app/components/users-page/users.html','<div class="container">\n  <div class="users-list__wrapper wrapper">\n    <div class="users-list__header">\n      <div>\n        <h2>User list</h2>\n        <breadcrumbs data="vmUsers.breadcrumbs"></breadcrumbs>\n      </div>\n      <div>\n        <a class="btn btn-success btn-lg" ui-sref="userAdd" >\n          <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>&nbsp;Add User\n        </a>\n      </div>\n    </div>\n    <div class="users-list">\n      <ulist users="vmUsers.users" on-remove="vmUsers.remove" on-edit="vmUsers.goToEdit"></ulist>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('app/components/welcome-page/welcome.html','<div class="welcome__wrapper">\n  <div class="welcome" ng-class="{appear: welcomeVm.appear}">\n    <h1>{{\'welcome.helloWorld\' | translate}}</h1>\n    <p>{{\'welcome.text\' | translate}}</p>\n    <div class="welcome__btns">\n      <button ng-click="welcomeVm.goToUserList()" class="btn btn-primary btn-block btn-lg">{{\'welcome.getStartedBtn\' | translate}}</button>\n    </div>\n  </div>\n</div>\n\n');
$templateCache.put('app/modules/common/errors/errors.html','');
$templateCache.put('app/components/users-page/directives/breadcrumbs/breadcrumbs.html','<ul class="breadcrumbs">\n  <li class="breadcrumbs__item" ng-repeat="val in brcVm.data">\n    <a ng-if="val.url != \'\'" ui-sref="{{val.url}}">{{val.name}}</a>\n    <span ng-if="val.url == \'\'" ui-sref="{{val.url}}">{{val.name}}</span>\n  </li>\n</ul>');
$templateCache.put('app/components/users-page/directives/user-filter/userFilter.html','<div class="users-list__filter">\n\t<form class="form-inline">\n\t\t<div class="form-group">\n\t\t\t<div class="input-group">\n\t\t\t\t<span class="input-group-addon" id="basic-addon1">\n\t\t\t\t\t<span class="glyphicon glyphicon-search" aria-hidden="true"></span>\n\t\t\t\t</span>\n\t\t\t\t<input ng-change="ufilterVm.update()" style="width: 300px" type="text" ng-model="ufilterVm.filter.search" class="form-control" placeholder="Type here to search" aria-describedby="basic-addon1">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<!-- <label class="sr-only" for="exampleInputPassword3">Password</label> -->\n\t\t\t<!-- <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password"> -->\n\t\t\t<ui-select on-select="ufilterVm.update()" ng-model="ufilterVm.filter.role" title="Choose a role" search-enabled="false" style="width: 200px">\n\t\t\t\t<ui-select-match placeholder="Select or search a role in the list...">{{$select.selected.name}}</ui-select-match>\n\t\t\t\t<ui-select-choices repeat="role in ufilterVm.roles | filter: $select.search">\n\t\t\t\t\t<span ng-bind-html="role.name | highlight: $select.search"></span>\n\t\t\t\t</ui-select-choices>\n\t\t\t</ui-select>\n\t\t</div>\n\t</form>\n</div>');
$templateCache.put('app/components/users-page/directives/users-list/usersList.html','<div ng-if="ulistVm.users.length > 0" class="users-list__table">\n  <user-filter users="ulistVm.users" on-update="ulistVm.onUpdate"></user-filter>\n  <table class="table table-striped">\n    <thead>\n      <th>Firstname</th>\n      <th>Lastname</th>\n      <th>Email</th>\n      <th>Role</th>\n      <th>&nbsp;</th>\n    </thead>\n    <tbody>\n      <tr ng-repeat="val in ulistVm.users | usearch:ulistVm.filter">\n        <td>{{val.fname}}</td>\n        <td>{{val.lname}}</td>\n        <td>{{val.email}}</td>\n        <td>{{val.role.name}}</td>\n        <td class="text-right">\n          <button ng-click="ulistVm.onEdit(val._id)" class="btn btn-default" type="submit">\n            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>\n            edit\n          </button>\n          <button ng-click="ulistVm.onRemove(val._id)" class="btn btn-danger" type="submit">\n            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>\n            remove\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div ng-if="ulistVm.users.length == 0" class="users-list__empty">\n  <img src="https://ouch-cdn.icons8.com/preview/819/a75c989b-ea17-456d-9e9a-a6a2d07c8428.png" />\n  No users in Database\n</div>\n\n');
$templateCache.put('app/components/users-page/directives/user-form/userForm.html','<form name="aForm" class="edit-form" novalidate>\n\t<div class="form-group" ng-class="{\'has-error\': aForm.fname.$invalid && aForm.fname.$dirty}">\n\t\t<label for="exampleInputEmail1">User firstname</label>\n\t\t<input type="text" class="form-control" name="fname" ng-pattern="uformVm.validationRules.onlyLetters" ng-model="uformVm.user.fname" required placeholder="First name">\n\t\t<ng-messages for="aForm.fname.$error" ng-show="aForm.fname.$invalid && aForm.fname.$dirty">\n\t\t\t<span ng-show="aForm.fname.$error.required" class="error-text">This field is required</span>\n\t\t\t<span ng-show="aForm.fname.$error.pattern" class="error-text">First name can not contains numbers or symbols</span>\n    </ng-messages>\n\t</div>\n\t<div class="form-group" ng-class="{\'has-error\': aForm.lname.$invalid && aForm.lname.$dirty}">\n\t\t<label for="exampleInputPassword1">User lastname</label>\n\t\t<input type="text" class="form-control" name="lname" ng-pattern="uformVm.validationRules.onlyLetters" ng-model="uformVm.user.lname" required placeholder="Last name">\n\t\t<ng-messages for="aForm.lname.$error" ng-show="aForm.lname.$invalid && aForm.lname.$dirty">\n\t\t\t<span ng-show="aForm.lname.$error.required" class="error-text">This field is required</span>\n\t\t\t<span ng-show="aForm.lname.$error.pattern" class="error-text">Last name can not contains numbers or symbols</span>\n    </ng-messages>\n\t</div>\n\t<div class="form-group" ng-class="{\'has-error\': aForm.email.$invalid && aForm.email.$dirty}">\n\t\t<label for="exampleInputPassword1">User email</label>\n\t\t<input type="email" class="form-control" name="email" ng-model="uformVm.user.email" required placeholder="email">\n\t\t<ng-messages for="aForm.email.$error" ng-show="aForm.email.$invalid && aForm.email.$dirty">\n\t\t\t<span ng-show="aForm.email.$error.required" class="error-text">This field is required</span>\n\t\t\t<span ng-show="aForm.email.$error.email" class="error-text">Invalid email address</span>\n    </ng-messages>\n\t</div>\n\t<div class="form-group">\n\t\t<label for="exampleInputPassword1">Select a Role</label>\n\t\t<!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->\n\t\t<ui-select ng-model="uformVm.user.role" title="Choose a role" search-enabled="false">\n\t\t\t<ui-select-match placeholder="Select or search a role in the list...">{{$select.selected.name}}</ui-select-match>\n\t\t\t<ui-select-choices repeat="role in uformVm.roles | filter: $select.search">\n\t\t\t\t<span ng-bind-html="role.name | highlight: $select.search"></span>\n\t\t\t\t<!-- <small ng-bind-html="country.code | highlight: $select.search"></small> -->\n\t\t\t</ui-select-choices>\n\t\t</ui-select>\n\t</div>\n\t<div class="edit-form__buttons">\n\t\t<a ui-sref="users" class="btn btn-default">Cancel</a>\n\t\t<button ng-disabled="!aForm.$valid" ng-click="uformVm.send()" type="submit" class="btn btn-success">Save</button>\n\t</div>\n</form>');}]);
(function() {
  'use strict';

  angular
    .module('app', [
      'ngAnimate',
      'common',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ui.router',
      'ui.select',
      'pascalprecht.translate',
      'tmh.dynamicLocale',
      'appTemplates'
    ]);

})();

(function() {
	'use strict';

	angular
		.module('app')
		.directive('userForm', function() {
			return {
				restrict: 'E',
				templateUrl: 'app/components/users-page/directives/user-form/userForm.html',
				controller: UserFormCtrl,
				controllerAs: 'uformVm',
				bindToController: {
					user: '<',
					roles: '<',
					onSave: '<',
				},
			};
		});

	UserFormCtrl.$inject = [];

	function UserFormCtrl() {
		var vm = this;

		vm.validationRules = {
			onlyLetters: '[a-zA-Z]+',
		};

		vm.send = function() {
			vm.onSave(vm.user);
		}
	}
})();
  
(function() {
  'use strict';

  angular
    .module('app')
    .filter('usearch', () => {
      return (input, terms) => {
        const contains = (obj, term) => {
          const concat = [obj.fname, obj.lname, obj.email].join('').toLowerCase();
          return concat.includes(term);
        }
        
        const res = input.filter((item) => {
          if (terms.role.name === 'All') {
            if (contains(item, terms.search)) {
              return item;
            }
          }
          if (item.role._id === terms.role._id) {
            if (contains(item, terms.search)) {
              return item;
            }
            // return item;
          }
        });
        return res;
      }
    });

  angular
    .module('app')
    .directive('ulist', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/users-page/directives/users-list/usersList.html',
        controller: UsersListCtrl,
        controllerAs: 'ulistVm',
        bindToController: {
          users: '=',
          onEdit: '<',
          onRemove: '<',
        },
      };
    });

  UsersListCtrl.$inject = [];

  function UsersListCtrl() {
    const vm = this;
    vm.filter = {
      role: { name: 'All' },
			search: '',
    };

    vm.onUpdate = (filter) => {
      vm.filter = filter;
    }
  }
})();

(function() {
	'use strict';

	angular
		.module('app')
		.directive('userFilter', function() {
			return {
				restrict: 'E',
				templateUrl: 'app/components/users-page/directives/user-filter/userFilter.html',
				controller: UserFilterCtrl,
				controllerAs: 'ufilterVm',
				bindToController: {
					users: '<',
					onUpdate: '<',
				},
			};
		});
	
	UserFilterCtrl.$inject = ['usersService'];
	function UserFilterCtrl(usersService) {
		const vm = this; 
		vm.filter = {
			role: { name: 'All' },
			search: '',
		};

		vm.update = () => {
			vm.onUpdate(vm.filter);
		}
		
		// getting list of roles
		usersService.getRoles().then((roles) => {
			vm.roles = [{ name: 'All' }].concat(roles.data);
		});


	}
	

})();
  
(function() {
	'use strict';

	angular
		.module('app')
		.directive('breadcrumbs', function() {
			return {
				restrict: 'E',
				templateUrl: 'app/components/users-page/directives/breadcrumbs/breadcrumbs.html',
				controller: BreadcrumbsCtrl,
				controllerAs: 'brcVm',
				bindToController: {
					data: '<',
				},
			};
		});

	BreadcrumbsCtrl.$inject = [];

	function BreadcrumbsCtrl() {

	}
})();
  
(function() {
  'use strict';

  angular
    .module('common', [
      'ui.router',
      'appTemplates',
      'ui-notification',
    ])
    .config(["NotificationProvider", function(NotificationProvider) {
      NotificationProvider.setOptions({
        delay: 3000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
      });
    }]);

})();

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

// (function() {
//   'use strict';

//   angular
//     .module('common')
//     .directive('errors', function() {
//       return {
//         restrict: 'E',
//         templateUrl: 'app/modules/common/errors/errors.html',
//         controller: ErrorsCtrl,
//         controllerAs: 'errorsVm',
//         bindToController: true
//       };
//     });

//   ErrorsCtrl.$inject = ['api'];

//   function ErrorsCtrl(api) {
//     var vm = this;
//     // vm.errors = api.get
//   }

// })();

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

        this.$get = ["$http", "$q", "Notification", function($http, $q, Notification) {
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
        }];
      });

})();


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

(function() {
	'use strict';

	angular
		.module('app')
		.controller('UserEditCtrl', UserEditCtrl);

	UserEditCtrl.$inject = [
		'usersService',
		'user',
		'roles',
		'$timeout',
	];

	function UserEditCtrl(usersService, user, roles, $timeout) {
		var vm = this;
		vm.user = user.data;
		vm.roles = roles.data;
		vm.title = 'Edit user';
		var sending = false;


		vm.breadcrumbs = [
			{
				name: 'Users',
				url: 'users',
			},
			{
				name: 'Edit User',
				url: '',
			}
		];

		vm.onSave = function(user) {
			if(!sending) {
				sending = true;
				usersService.update(user).then(function(){
					// protection against the fool
					$timeout(function(){
						sending = false;
					}, 500);
				});
			}
		}
	}
})();
  
(function() {
	'use strict';

	angular
		.module('app')
		.controller('UserAddCtrl', UserAddCtrl);

    UserAddCtrl.$inject = [
			'usersService',
			'roles',
			'$timeout',
			'$location',
		];

	function UserAddCtrl(usersService, roles, $timeout, $location) {
		var vm = this;
		vm.user = {
			lname: '',
			fname: '',
			email: '',
			role: '',
		};
		vm.roles = roles.data;
		vm.title = 'Add user';
		var sending = false;


		vm.breadcrumbs = [
			{
				name: 'Users',
				url: 'users',
			},
			{
				name: 'Add New User',
				url: '',
			}
		];

		vm.onSave = function(user) {
			if(!sending) {
				sending = true;
				usersService.add(user).then(function(res){
					// protection against the fool
					$timeout(function(){
						sending = false;
						// go to usel list
						if(res && res.success) {
							$location.path( "/users" );
						}
					}, 500);
				});
			}
		}
	}
})();
  
(function() {
  'use strict';

  angular
    .module('app')
    .run(run);

  run.$inject = [
    '$window',
    '$translate',
    'tmhDynamicLocale'
  ];

  function run($window, $translate, tmhDynamicLocale) {

    // Get lang from browser
    var nav = $window.navigator;
    var lang = nav.language || nav.browserLanguage || nav.systemLanguage || nav.userLanguage;

    if (lang.length > 2) {
      lang = lang.substring(0, 2);
    }

    // Set lang to i18n modules
    var lng = lang.toLowerCase();
    $translate.use(lng);
    tmhDynamicLocale.set(lng);
  }
})();

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
        users: ["usersService", function(usersService) {
          return usersService.getUsers();
        }]
      }
    });

    $stateProvider.state('userEdit', {
      name: 'userEdit',
      url: '/users/:id',
      templateUrl: 'app/components/users-page/userEdit.html',
      controller: 'UserEditCtrl',
      controllerAs: 'vmEUsers',
      resolve: {
        user: ["usersService", "$stateParams", function(usersService, $stateParams) {
          var id = $stateParams.id;
          return usersService.getUserById(id);
        }],
        roles: ["usersService", function(usersService) {
          return usersService.getRoles();
        }]
      }
    });

    $stateProvider.state('userAdd', {
      name: 'userAdd',
      url: '/users/new',
      templateUrl: 'app/components/users-page/userEdit.html',
      controller: 'UserAddCtrl',
      controllerAs: 'vmEUsers',
      resolve: {
        roles: ["usersService", function(usersService) {
          return usersService.getRoles();
        }]
      }
    });

    $urlRouterProvider.otherwise('/');
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = [
    '$translateProvider',
    'tmhDynamicLocaleProvider',
    '$httpProvider',
    '$compileProvider',
    'apiProvider',
  ];

  function config($translateProvider, tmhDynamicLocaleProvider, $httpProvider, $compileProvider, apiProvider) {

    // Angular perfs best practices
    $httpProvider.useApplyAsync(true);
    $compileProvider.debugInfoEnabled(false);
    apiProvider.setUrl('/api/');

    // i18n angular-translate
    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/app-locale_',
      suffix: '.json'
    });
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.fallbackLanguage('en');
    $translateProvider.useLocalStorage();

    // i18n angular-dynamic-locale
    tmhDynamicLocaleProvider.localeLocationPattern('/i18n/angular/angular-locale_{{locale}}.js');
  }
})();
