System.register(["./Animation/Animation.Demo", "./Tooltip/Tooltip.Demo", "./CodeHighlighter/CodeHighlighter.Demo"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Animation_Demo_1, Tooltip_Demo_1, CodeHighlighter_Demo_1;
    var FUELUI_DEMO_DIRECTIVE_PROVIDERS;
    var exportedNames_1 = {
        'FUELUI_DEMO_DIRECTIVE_PROVIDERS': true
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
            function (Animation_Demo_1_1) {
                Animation_Demo_1 = Animation_Demo_1_1;
                exportStar_1(Animation_Demo_1_1);
            },
            function (Tooltip_Demo_1_1) {
                Tooltip_Demo_1 = Tooltip_Demo_1_1;
                exportStar_1(Tooltip_Demo_1_1);
            },
            function (CodeHighlighter_Demo_1_1) {
                CodeHighlighter_Demo_1 = CodeHighlighter_Demo_1_1;
                exportStar_1(CodeHighlighter_Demo_1_1);
            }],
        execute: function() {
            exports_1("FUELUI_DEMO_DIRECTIVE_PROVIDERS", FUELUI_DEMO_DIRECTIVE_PROVIDERS = [
                Animation_Demo_1.ANIMATION_DEMO_PROVIDERS,
                Tooltip_Demo_1.TOOLTIP_DEMO_PROVIDERS,
                CodeHighlighter_Demo_1.CODEHIGHLIGHTER_DEMO_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=demoDirectives.js.map