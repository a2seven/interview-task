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
