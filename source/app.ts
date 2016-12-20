//common libraries
import * as angular from 'angular';
import 'angular-ui-router';
import * as jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

//constants
import AppConstants from './constants/app.constants';

//setup
import Routes from './setup/routes.setup';
import Transitions from './setup/transitions.setup';

//controllers
import MainCtrl from './controllers/main.controller';


//services
import Animation from './services/animation.service';
//import MainService from './services/main.service';

//import DemoDirective from './directives/demo.directive';

//services
import TemplateService from './services/template.service';

angular
    .module('MainApp', ['ui.router', 'Templates'])
    .constant('AppConstants', AppConstants.init)
    .config(Routes)
    .run(Transitions)
    .controller('MainCtrl', MainCtrl)
    .service('Animation', Animation)
    .service('TemplateService', TemplateService);

//.service('MainService', MainService)
//.directive('demoDirective', DemoDirective.instance());

console.log('finish!');