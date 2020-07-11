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
  