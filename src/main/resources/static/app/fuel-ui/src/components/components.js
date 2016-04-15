System.register(["./Alert/Alert", "./Carousel/Carousel", "./DatePicker/DatePickerProviders", "./Modal/Modal", "./Pagination/Pagination", "./InfiniteScroller/InfiniteScroller", "./Dropdown/Dropdown", "./Collapse/Collapse", "./TableSortable/TableSortable", "./TableSortable/TableSortableColumn", "./TableSortable/TableSortableSorting"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Alert_1, Carousel_1, DatePickerProviders_1, Modal_1, Pagination_1, InfiniteScroller_1, Dropdown_1, Collapse_1, TableSortable_1;
    var FUELUI_COMPONENT_PROVIDERS;
    var exportedNames_1 = {
        'FUELUI_COMPONENT_PROVIDERS': true
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
            function (Alert_1_1) {
                Alert_1 = Alert_1_1;
                exportStar_1(Alert_1_1);
            },
            function (Carousel_1_1) {
                Carousel_1 = Carousel_1_1;
                exportStar_1(Carousel_1_1);
            },
            function (DatePickerProviders_1_1) {
                DatePickerProviders_1 = DatePickerProviders_1_1;
                exportStar_1(DatePickerProviders_1_1);
            },
            function (Modal_1_1) {
                Modal_1 = Modal_1_1;
                exportStar_1(Modal_1_1);
            },
            function (Pagination_1_1) {
                Pagination_1 = Pagination_1_1;
                exportStar_1(Pagination_1_1);
            },
            function (InfiniteScroller_1_1) {
                InfiniteScroller_1 = InfiniteScroller_1_1;
                exportStar_1(InfiniteScroller_1_1);
            },
            function (Dropdown_1_1) {
                Dropdown_1 = Dropdown_1_1;
                exportStar_1(Dropdown_1_1);
            },
            function (Collapse_1_1) {
                Collapse_1 = Collapse_1_1;
                exportStar_1(Collapse_1_1);
            },
            function (TableSortable_1_1) {
                TableSortable_1 = TableSortable_1_1;
                exportStar_1(TableSortable_1_1);
            },
            function (TableSortableColumn_1_1) {
                exportStar_1(TableSortableColumn_1_1);
            },
            function (TableSortableSorting_1_1) {
                exportStar_1(TableSortableSorting_1_1);
            }],
        execute: function() {
            exports_1("FUELUI_COMPONENT_PROVIDERS", FUELUI_COMPONENT_PROVIDERS = [
                Alert_1.ALERT_PROVIDERS,
                Carousel_1.CAROUSEL_PROVIDERS,
                DatePickerProviders_1.DATE_PICKER_PROVIDERS,
                Modal_1.MODAL_PROVIDERS,
                Pagination_1.PAGINATION_PROVIDERS,
                InfiniteScroller_1.INFINITE_SCROLLER_PROVIDERS,
                Dropdown_1.DROPDOWN_COMPONENT_PROVIDERS,
                Collapse_1.COLLAPSE_PROVIDERS,
                TableSortable_1.TABLESORTABLE_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=components.js.map