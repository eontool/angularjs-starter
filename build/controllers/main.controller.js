"use strict";
var MainCtrl = (function () {
    function MainCtrl($http) {
        this.$http = $http;
        this.myTitle = "Hello from MainCtrl";
    }
    MainCtrl.$inject = [
        "$http"
    ];
    return MainCtrl;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainCtrl;
