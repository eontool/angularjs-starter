
export default class MainCtrl {

    static $inject: string[] = [
        "$http",
    ];

    constructor(
        private $http: angular.IHttpService
    ) {
    }

    private myTitle: string = "Hello from MainCtrl";

}