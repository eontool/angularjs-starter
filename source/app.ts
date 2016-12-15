console.log('starting...');

//define vendor imports
import * as angular from 'angular';
import * as jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

//controllers
import MainCtrl from './controllers/mainCtrl';

//start angularjs main application
export let app = angular.module('mainApp', []);

app.controller('MainCtrl', MainCtrl);

console.log('app ready!');
