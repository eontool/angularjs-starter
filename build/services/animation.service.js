"use strict";
class Animation {
    constructor() {
        this.loadingContainer = document.getElementById('loading');
        this.spinner = new Spinner().spin();
    }
    //private containerElement: JQuery = $('.container');
    loading(value) {
        if (value) {
            //this.buttonElements.prop('disabled', true);
            //this.loadingContainer.fadeIn(250);
            console.log('animation start!');
            console.log(this.loadingContainer);
            this.spinner.spin(this.loadingContainer);
        }
        else {
            //this.buttonElements.prop('disabled', false);
            //this.loadingContainer.fadeOut(250);
            this.spinner.stop();
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Animation;
