//Export here all custom type definitions and will be available globally.

interface Window {
    $: Object;
    jQuery: Object;
}

declare namespace myApp {


    interface DemoDirective extends angular.IScope{
        name: string;
    }

}