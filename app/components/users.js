(function() {
    'use strict';

    angular.module('component.users', [])
        .controller('UsersController', function(Users) {
            var vm = this;

            vm.users = Users.all();
        })
        .config(function($stateProvider) {
            $stateProvider
                .state('users', {
                    url: '/users',
                    templateUrl: 'components/users.html',
                    controller: 'UsersController as uc'
                });
        });
})();