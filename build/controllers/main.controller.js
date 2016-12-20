"use strict";
class MainCtrl {
    constructor($http) {
        this.$http = $http;
        this.myTitle = "Hello from MainCtrl";
    }
}
MainCtrl.$inject = [
    "$http",
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainCtrl;
