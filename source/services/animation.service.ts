export default class Animation {

    private loadingContainer: HTMLElement = document.getElementById('loading');

    private spinner = new Spinner().spin();
    //private containerElement: JQuery = $('.container');

    loading(value: boolean): void {
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