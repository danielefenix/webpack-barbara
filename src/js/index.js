define([
    "jquery",
    "fenix-ui-filter",
    "fenix-ui-analysis",
    "toastr"
], function ($, Filter, Analysis) {

    function App(){

        this._testAnalysis();
    }


    App.prototype._testAnalysis = function () {

            var analysis = new Analysis({
                el: '#fx-analysis-container'
            });
        };

    return App;

});