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
  