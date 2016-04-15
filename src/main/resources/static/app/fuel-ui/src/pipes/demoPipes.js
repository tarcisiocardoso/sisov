System.register(["./Format/Format.Demo", "./MapToIterable/MapToIterable.Demo", "./OrderBy/OrderBy.Demo", "./Range/Range.Demo"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Format_Demo_1, MapToIterable_Demo_1, OrderBy_Demo_1, Range_Demo_1;
    var FUELUI_DEMO_PIPE_PROVIDERS;
    var exportedNames_1 = {
        'FUELUI_DEMO_PIPE_PROVIDERS': true
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
            function (Format_Demo_1_1) {
                Format_Demo_1 = Format_Demo_1_1;
                exportStar_1(Format_Demo_1_1);
            },
            function (MapToIterable_Demo_1_1) {
                MapToIterable_Demo_1 = MapToIterable_Demo_1_1;
                exportStar_1(MapToIterable_Demo_1_1);
            },
            function (OrderBy_Demo_1_1) {
                OrderBy_Demo_1 = OrderBy_Demo_1_1;
                exportStar_1(OrderBy_Demo_1_1);
            },
            function (Range_Demo_1_1) {
                Range_Demo_1 = Range_Demo_1_1;
                exportStar_1(Range_Demo_1_1);
            }],
        execute: function() {
            exports_1("FUELUI_DEMO_PIPE_PROVIDERS", FUELUI_DEMO_PIPE_PROVIDERS = [
                Format_Demo_1.FORMAT_DEMO_PROVIDERS,
                MapToIterable_Demo_1.MAPTOITERABLE_DEMO_PROVIDERS,
                OrderBy_Demo_1.ORDERBY_DEMO_PROVIDERS,
                Range_Demo_1.RANGE_DEMO_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=demoPipes.js.map