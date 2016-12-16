export default class DemoDirective implements angular.IDirective {

    static instance(): angular.IDirective {
        return new DemoDirective;
    }

    restrict: string = 'E';

    template: string = `<h1>Hello!</h1>`;

    link(scope: myApp.DemoDirective, elements: angular.IAugmentedJQuery, attrs: angular.IAttributes) {
        console.log(attrs);
    }

}