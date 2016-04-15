System.register(['./DateUtils', './DetectionUtils', './ElementUtils', './StringUtils'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (DateUtils_1_1) {
                exportStar_1(DateUtils_1_1);
            },
            function (DetectionUtils_1_1) {
                exportStar_1(DetectionUtils_1_1);
            },
            function (ElementUtils_1_1) {
                exportStar_1(ElementUtils_1_1);
            },
            function (StringUtils_1_1) {
                exportStar_1(StringUtils_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=utilities.js.map