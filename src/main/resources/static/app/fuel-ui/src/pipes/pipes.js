System.register(["./Format/Format", "./MapToIterable/MapToIterable", "./OrderBy/OrderBy", "./Range/Range"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Format_1, MapToIterable_1, OrderBy_1, Range_1;
    var FUELUI_PIPE_PROVIDERS;
    var exportedNames_1 = {
        'FUELUI_PIPE_PROVIDERS': true
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
            function (Format_1_1) {
                Format_1 = Format_1_1;
                exportStar_1(Format_1_1);
            },
            function (MapToIterable_1_1) {
                MapToIterable_1 = MapToIterable_1_1;
                exportStar_1(MapToIterable_1_1);
            },
            function (OrderBy_1_1) {
                OrderBy_1 = OrderBy_1_1;
                exportStar_1(OrderBy_1_1);
            },
            function (Range_1_1) {
                Range_1 = Range_1_1;
                exportStar_1(Range_1_1);
            }],
        execute: function() {
            exports_1("FUELUI_PIPE_PROVIDERS", FUELUI_PIPE_PROVIDERS = [
                Format_1.FORMAT_PROVIDERS,
                MapToIterable_1.MAPTOITERABLE_PROVIDERS,
                OrderBy_1.ORDERBY_PROVIDERS,
                Range_1.RANGE_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=pipes.js.map