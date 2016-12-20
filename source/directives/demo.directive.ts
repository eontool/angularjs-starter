export default class DemoDirective implements angular.IDirective {

    restrict: string;

    constructor(
        private $compile: angular.ICompileService
    ) {
        this.restrict = 'A';
    }

    public link(scope: myApp.DemoDirective, elements: angular.IAugmentedJQuery, attrs: angular.IAttributes) {

        console.log(scope);
        console.log(elements);
        console.log(attrs);

        let html: string = '<h1>' + '1' + '</h1>';

        elements.append(this.$compile(html)(scope));
    }

    static instance(): angular.IDirectiveFactory {
        let directive: angular.IDirectiveFactory = ($compile: angular.ICompileService) => new DemoDirective($compile);
        directive.$inject = ['$compile'];
        return directive;
    }

}