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
