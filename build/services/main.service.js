"use strict";
var MainService = (function () {
    function MainService($http) {
        this.$http = $http;
    }
    /**
     * mainMethod
     */
    MainService.prototype.mainMethod = function () {
    };
    MainService.$inject = [
        '$http'
    ];
    return MainService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainService;
