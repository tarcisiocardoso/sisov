System.register(["./components/components", "./directives/directives", "./pipes/pipes", './utilities/utilities'], function(exports_1, context_1) {
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
            function (components_1_1) {
                exportStar_1(components_1_1);
            },
            function (directives_1_1) {
                exportStar_1(directives_1_1);
            },
            function (pipes_1_1) {
                exportStar_1(pipes_1_1);
            },
            function (utilities_1_1) {
                exportStar_1(utilities_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=fuel-ui.js.map