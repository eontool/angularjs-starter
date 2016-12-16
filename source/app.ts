import * as angular from 'angular';
import * as jQuery from 'jquery';
import MainCtrl from './controllers/main.controller';
import MainService from './services/main.service';
import demoDirective from './directives/demo.directive';

window.$ = window.jQuery = jQuery;

angular
    .module('mainApp', [])
    .controller('MainCtrl', MainCtrl)
    .service('MainService', MainService)
    .directive('demoDirective', demoDirective.instance);
