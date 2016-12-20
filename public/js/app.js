(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
//common libraries

var angular = require('angular');
require('angular-ui-router');
var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
//constants
var app_constants_1 = require('./constants/app.constants');
//setup
var routes_setup_1 = require('./setup/routes.setup');
var transitions_setup_1 = require('./setup/transitions.setup');
//controllers
var main_controller_1 = require('./controllers/main.controller');
//services
var animation_service_1 = require('./services/animation.service');
//import MainService from './services/main.service';
//import DemoDirective from './directives/demo.directive';
//services
var template_service_1 = require('./services/template.service');
angular.module('MainApp', ['ui.router', 'Templates']).constant('AppConstants', app_constants_1.default.init).config(routes_setup_1.default).run(transitions_setup_1.default).controller('MainCtrl', main_controller_1.default).service('Animation', animation_service_1.default).service('TemplateService', template_service_1.default);
//.service('MainService', MainService)
//.directive('demoDirective', DemoDirective.instance());
console.log('finish!');

},{"./constants/app.constants":2,"./controllers/main.controller":3,"./services/animation.service":4,"./services/template.service":5,"./setup/routes.setup":6,"./setup/transitions.setup":7,"angular":"angular","angular-ui-router":"angular-ui-router","jquery":"jquery"}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppConstants = function () {
    function AppConstants() {
        _classCallCheck(this, AppConstants);
    }

    _createClass(AppConstants, null, [{
        key: 'init',
        value: function init() {
            return {
                appName: 'Demo',
                appVersion: '1.0',
                serverUrl: 'http://127.0.0.1:3000'
            };
        }
    }]);

    return AppConstants;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppConstants;

},{}],3:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainCtrl = function MainCtrl($http) {
    _classCallCheck(this, MainCtrl);

    this.$http = $http;
    this.myTitle = "Hello from MainCtrl";
};

MainCtrl.$inject = ["$http"];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainCtrl;

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
    function Animation() {
        _classCallCheck(this, Animation);

        this.loadingContainer = document.getElementById('loading');
        this.spinner = new Spinner().spin();
    }
    //private containerElement: JQuery = $('.container');


    _createClass(Animation, [{
        key: 'loading',
        value: function loading(value) {
            if (value) {
                //this.buttonElements.prop('disabled', true);
                //this.loadingContainer.fadeIn(250);
                console.log('animation start!');
                console.log(this.loadingContainer);
                this.spinner.spin(this.loadingContainer);
            } else {
                //this.buttonElements.prop('disabled', false);
                //this.loadingContainer.fadeOut(250);
                this.spinner.stop();
            }
        }
    }]);

    return Animation;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Animation;

},{}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateService = function () {
    function TemplateService($templateCache) {
        _classCallCheck(this, TemplateService);

        this.$templateCache = $templateCache;
        //console.log($templateCache.info());
    }

    _createClass(TemplateService, [{
        key: "load",
        value: function load(file) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var template = _this.$templateCache.get(file);
                if (template) {
                    resolve(template);
                } else {
                    reject(false);
                }
            });
        }
    }]);

    return TemplateService;
}();

TemplateService.$inject = ['$templateCache'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TemplateService;

},{}],6:[function(require,module,exports){
"use strict";

function Routes($stateProvider, $urlRouterProvider, $httpProvider) {
    console.log("routesConfig");
    var viewPath = 'views/';
    var authState = {
        name: 'authState',
        url: '/',
        fileName: 'auth/index.html',
        resolve: {
            template: ['TemplateService', function (loadTemplate) {
                return loadTemplate.load(authState.fileName).then(function (data) {
                    return data;
                }, function (error) {
                    console.log(error);
                });
            }]
        },
        templateProvider: function templateProvider(template) {
            return template;
        }
    };
    $urlRouterProvider.otherwise('/');
    $stateProvider.state(authState);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;

},{}],7:[function(require,module,exports){
"use strict";

function Transitions($location, $transitions, Animation) {
    console.log("runConfig");
    $transitions.onBefore({}, function () {
        console.log("onBefore");
        Animation.loading(true);
    });
    $transitions.onStart({}, function () {
        console.log("onStart");
    });
    $transitions.onFinish({}, function () {
        console.log('onFinish');
    });
    $transitions.onError({}, function (error) {});
    $transitions.onSuccess({}, function () {
        console.log("onSuccess");
        Animation.loading(false);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Transitions;

},{}]},{},[1]);
