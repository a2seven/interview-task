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
  