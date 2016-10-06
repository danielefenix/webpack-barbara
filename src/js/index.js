define([
    "jquery",
    "fenix-ui-filter",
    "toastr"
], function ($, Filter, Toastr) {

    function App(){

        //import CSS
        this._importThirdPartyCss();

        this._testJquery();

        this._testFilter();

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