System.register(["./Alert/Alert.Demo", "./Carousel/Carousel.Demo", "./Collapse/Collapse.Demo", "./DatePicker/DatePicker.Demo", "./DatePicker/DateRangePicker.Demo", "./Dropdown/Dropdown.Demo", "./InfiniteScroller/InfiniteScroller.Demo", "./Modal/Modal.Demo", "./Pagination/Pagination.Demo", "./Progress/Progress.Demo", "./TableSortable/TableSortable.Demo"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Alert_Demo_1, Carousel_Demo_1, Collapse_Demo_1, DatePicker_Demo_1, DateRangePicker_Demo_1, Dropdown_Demo_1, InfiniteScroller_Demo_1, Modal_Demo_1, Pagination_Demo_1, Progress_Demo_1, TableSortable_Demo_1;
    var FUELUI_DEMO_COMPONENT_PROVIDERS;
    var exportedNames_1 = {
        'FUELUI_DEMO_COMPONENT_PROVIDERS': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (Alert_Demo_1_1) {
                Alert_Demo_1 = Alert_Demo_1_1;
                exportStar_1(Alert_Demo_1_1);
            },
            function (Carousel_Demo_1_1) {
                Carousel_Demo_1 = Carousel_Demo_1_1;
                exportStar_1(Carousel_Demo_1_1);
            },
            function (Collapse_Demo_1_1) {
                Collapse_Demo_1 = Collapse_Demo_1_1;
                exportStar_1(Collapse_Demo_1_1);
            },
            function (DatePicker_Demo_1_1) {
                DatePicker_Demo_1 = DatePicker_Demo_1_1;
                exportStar_1(DatePicker_Demo_1_1);
            },
            function (DateRangePicker_Demo_1_1) {
                DateRangePicker_Demo_1 = DateRangePicker_Demo_1_1;
                exportStar_1(DateRangePicker_Demo_1_1);
            },
            function (Dropdown_Demo_1_1) {
                Dropdown_Demo_1 = Dropdown_Demo_1_1;
                exportStar_1(Dropdown_Demo_1_1);
            },
            function (InfiniteScroller_Demo_1_1) {
                InfiniteScroller_Demo_1 = InfiniteScroller_Demo_1_1;
                exportStar_1(InfiniteScroller_Demo_1_1);
            },
            function (Modal_Demo_1_1) {
                Modal_Demo_1 = Modal_Demo_1_1;
                exportStar_1(Modal_Demo_1_1);
            },
            function (Pagination_Demo_1_1) {
                Pagination_Demo_1 = Pagination_Demo_1_1;
                exportStar_1(Pagination_Demo_1_1);
            },
            function (Progress_Demo_1_1) {
                Progress_Demo_1 = Progress_Demo_1_1;
                exportStar_1(Progress_Demo_1_1);
            },
            function (TableSortable_Demo_1_1) {
                TableSortable_Demo_1 = TableSortable_Demo_1_1;
                exportStar_1(TableSortable_Demo_1_1);
            }],
        execute: function() {
            exports_1("FUELUI_DEMO_COMPONENT_PROVIDERS", FUELUI_DEMO_COMPONENT_PROVIDERS = [
                Alert_Demo_1.ALERT_DEMO_PROVIDERS,
                Carousel_Demo_1.CAROUSEL_DEMO_PROVIDERS,
                Collapse_Demo_1.COLLAPSE_DEMO_PROVIDERS,
                DatePicker_Demo_1.DATEPICKER_DEMO_PROVIDERS,
                DateRangePicker_Demo_1.DATERANGEPICKER_DEMO_PROVIDERS,
                Dropdown_Demo_1.DROPDOWN_DEMO_PROVIDERS,
                InfiniteScroller_Demo_1.INFINITESCROLLER_DEMO_PROVIDERS,
                Modal_Demo_1.MODAL_DEMO_PROVIDERS,
                Pagination_Demo_1.PAGINATION_DEMO_PROVIDERS,
                Progress_Demo_1.PROGRESS_DEMO_PROVIDERS,
                TableSortable_Demo_1.TABLESORTABLE_DEMO_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=demoComponents.js.map