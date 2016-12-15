export default class MainCtrl {
    
    static $inject = [
        "$http"
    ];

    constructor(
        private $http: angular.IHttpService
    ) {
    }

    private myTitle:string = "Hello from MainCtrl";

}