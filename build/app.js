"use strict";
console.log('starting...');
//define vendor imports
var angular = require('angular');
var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
//controllers
var mainCtrl_1 = require('./controllers/mainCtrl');
//start angularjs main application
exports.app = angular.module('mainApp', []);
exports.app.controller('MainCtrl', mainCtrl_1.default);
console.log('app ready!');
