(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./controllers/mainCtrl":2,"angular":"angular","jquery":"jquery"}],2:[function(require,module,exports){
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

},{}]},{},[1]);
