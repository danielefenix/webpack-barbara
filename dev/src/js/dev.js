define([
    'loglevel',
    'jquery',
    'underscore',
    '../../../src/js/index'
], function (log, $, _, Tool) {

    'use strict';

    var s = {},
        environment = "develop";

    function Dev() {
        console.clear();

        this._importThirdPartyCss();

        log.setLevel('trace');

        this.start();
    }

    Dev.prototype.start = function () {

        log.trace("Test started");

        this._render();

    };

    Dev.prototype._render = function () {

       var barbara = new Tool();

    };

    // utils

    Dev.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require("bootstrap-loader");


        //dropdown selector
        require("../../../node_modules/selectize/dist/css/selectize.bootstrap3.css");
        // fenix-ui-filter
        require("../../../node_modules/fenix-ui-filter/dist/fenix-ui-filter.min.css");
        // fenix-ui-dropdown
        require("../../../node_modules/fenix-ui-dropdown/dist/fenix-ui-dropdown.min.css");

        // bootstrap-table
        require("../../../node_modules/bootstrap-table/dist/bootstrap-table.min.css");

        //tree selector
        require("../../../node_modules/jstree/dist/themes/default/style.min.css");

        // fenix-ui-table-creator
        require("../../../node_modules/fenix-ui-table-creator/dist/fenix-ui-table-creator.min.css");

        // jquery-grid for fenix-ui-metadata-viewer
        require("../../../node_modules/jquery-treegrid-webpack/css/jquery.treegrid.css");

        // iDangerous swiper
        require("../../../node_modules/swiper/dist/css/swiper.min.css");

        // fenix-ui-visualization-box
        require("../../../node_modules/fenix-ui-visualization-box/dist/fenix-ui-visualization-box.min.css");

        // fenix-ui-catalog
        require("../../../node_modules/fenix-ui-catalog/dist/fenix-ui-catalog.min.css");

        //fenix-ui-analisys
        require("../../../node_modules/fenix-ui-analysis/dist/fenix-ui-analysis.min.css");

    };

    return new Dev();

});