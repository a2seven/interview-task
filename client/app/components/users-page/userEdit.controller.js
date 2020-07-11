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
  