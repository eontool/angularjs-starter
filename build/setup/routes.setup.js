"use strict";
function Routes($stateProvider, $urlRouterProvider, $httpProvider) {
    console.log("routesConfig");
    let viewPath = 'views/';
    let authState = {
        name: 'authState',
        url: '/',
        fileName: 'auth/index.html',
        resolve: {
            template: ['TemplateService', (loadTemplate) => {
                    return loadTemplate.load(authState.fileName).then((data) => {
                        return data;
                    }, (error) => {
                        console.log(error);
                    });
                }]
        },
        templateProvider: (template) => {
            return template;
        }
    };
    $urlRouterProvider.otherwise('/');
    $stateProvider.state(authState);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
