"use strict";
class DemoDirective {
    constructor($compile) {
        this.$compile = $compile;
        this.restrict = 'A';
    }
    link(scope, elements, attrs) {
        console.log(scope);
        console.log(elements);
        console.log(attrs);
        let html = '<h1>' + '1' + '</h1>';
        elements.append(this.$compile(html)(scope));
    }
    static instance() {
        let directive = ($compile) => new DemoDirective($compile);
        directive.$inject = ['$compile'];
        return directive;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DemoDirective;
