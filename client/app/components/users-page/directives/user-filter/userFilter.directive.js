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
  