(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var angular = require('angular');
var jQuery = require('jquery');
var main_controller_1 = require('./controllers/main.controller');
var main_service_1 = require('./services/main.service');
var demo_directive_1 = require('./directives/demo.directive');
window.$ = window.jQuery = jQuery;
angular
    .module('mainApp', [])
    .controller('MainCtrl', main_controller_1.default)
    .service('MainService', main_service_1.default)
    .directive('demoDirective', demo_directive_1.default.instance);

},{"./controllers/main.controller":2,"./directives/demo.directive":3,"./services/main.service":4,"angular":"angular","jquery":"jquery"}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";
var DemoDirective = (function () {
    function DemoDirective() {
        this.restrict = 'E';
        this.template = "<h1>Hello!</h1>";
    }
    DemoDirective.instance = function () {
        return new DemoDirective;
    };
    DemoDirective.prototype.link = function (scope, elements, attrs) {
        console.log(attrs);
    };
    return DemoDirective;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DemoDirective;

},{}],4:[function(require,module,exports){
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

},{}]},{},[1]);
