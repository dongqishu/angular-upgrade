(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    ProductController.$inject = [];
    function ProductController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            console.log("product controller")
         }
    }
})();