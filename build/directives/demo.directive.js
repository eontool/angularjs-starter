"use strict";
var DemoDirective = (function () {
    function DemoDirective() {
        this.restrict = 'E';
        this.template = "<h1>Hello!</h1>";
    }
    DemoDirective.instance = function () {
        return new DemoDirective;
    };
    DemoDirective.prototype.link = function (scope, elements, attrs) {
        console.log(attrs);
    };
    return DemoDirective;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DemoDirective;
