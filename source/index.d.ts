//Export here all custom type definitions and will be available globally.

interface Window {
    $: Object;
    jQuery: Object;
}

declare interface appConstants extends Object {
    appName: string;
    appVersion: string;
    serverUrl: string;
}

declare namespace myApp {


    interface DemoDirective extends angular.IScope {
        title: string;
    }

    interface TemplateService {
        load: (file: string) => Promise<string>
    }

    interface Animation{
        loading: (key: boolean) => void;
    }

}