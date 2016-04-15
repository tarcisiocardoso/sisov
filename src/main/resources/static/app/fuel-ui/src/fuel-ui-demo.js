System.register(["./components/demoComponents", "./directives/demoDirectives", "./pipes/demoPipes"], function(exports_1, context_1) {
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
            function (demoComponents_1_1) {
                exportStar_1(demoComponents_1_1);
            },
            function (demoDirectives_1_1) {
                exportStar_1(demoDirectives_1_1);
            },
            function (demoPipes_1_1) {
                exportStar_1(demoPipes_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=fuel-ui-demo.js.map