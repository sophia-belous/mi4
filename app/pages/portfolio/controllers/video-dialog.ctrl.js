(function () {
    'use strict';

    angular.module('portfolio')
        .controller('VideoDialogCtrl', VideoDialogCtrl);

    function VideoDialogCtrl($scope, $mdDialog, $http, $timeout) {
        var vm = this;
        vm.close = close;

        function close() {
            $mdDialog.cancel();
        };
    }
})();
