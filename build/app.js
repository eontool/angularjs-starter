"use strict";
//common libraries
const angular = require('angular');
require('angular-ui-router');
const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
//constants
const app_constants_1 = require('./constants/app.constants');
//setup
const routes_setup_1 = require('./setup/routes.setup');
const transitions_setup_1 = require('./setup/transitions.setup');
//controllers
const main_controller_1 = require('./controllers/main.controller');
//services
const animation_service_1 = require('./services/animation.service');
//import MainService from './services/main.service';
//import DemoDirective from './directives/demo.directive';
//services
const template_service_1 = require('./services/template.service');
angular
    .module('MainApp', ['ui.router', 'Templates'])
    .constant('AppConstants', app_constants_1.default.init)
    .config(routes_setup_1.default)
    .run(transitions_setup_1.default)
    .controller('MainCtrl', main_controller_1.default)
    .service('Animation', animation_service_1.default)
    .service('TemplateService', template_service_1.default);
//.service('MainService', MainService)
//.directive('demoDirective', DemoDirective.instance());
console.log('finish!');
