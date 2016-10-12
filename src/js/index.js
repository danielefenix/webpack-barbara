define([
    "jquery",
    "fenix-ui-filter",
    "fenix-ui-analysis",
    "toastr"
], function ($, Filter, Toastr, Analysis) {

    function App(){

        //import CSS
        this._importThirdPartyCss();

        this._testJquery();

        this._testFilter();

        this._testAnalysis();

        this._testToastr();
    }

    App.prototype._testJquery = function () {
        $("#test").html("Ciao!");
    };

    App.prototype._testFilter = function () {

        var filter = new Filter({
            el : "#test",
            items : {
                drop : {
                    selector : {
                        id: "dropdown",
                        source : [
                            {value : "1", label : "Item 1"},
                            {value : "2", label : "Item 2"}
                        ]
                    }
                },
                checkbox : {
                    selector : {
                        id: "input",
                        type : "checkbox",
                        source : [
                            {value : "1", label : "Item 1"},
                            {value : "2", label : "Item 2"}
                        ]
                    }
                }
            }
        })
    };


    App.prototype._testAnalysis = function () {

            var analysis = new Analysis({
                container: document.querySelector('#fx-analysis-container'),
                // listenToCatalog: {
                //     active: true,
                //     event: 'fx.widget.catalog.select'
                // },
                // stack: {
                //     active: true,
                //     container: document.querySelector('#fx-modules-stack-container')
                // },
                // session: {
                //     active: false
                // }
            }).init();
        };

    App.prototype._testToastr = function () {

        Toastr.info('Are you the 6 fingered man?')
    };

    App.prototype._importThirdPartyCss = function () {

        //dropdown selector
        require("../../node_modules/selectize/dist/css/selectize.css");

        require("../../node_modules/toastr/build/toastr.min.css");

    };

    return new App();

});