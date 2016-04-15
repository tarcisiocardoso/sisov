System.register(["./Animation/AnimationListener", './Animation/Animation', "./Tooltip/Tooltip", "./CodeHighlighter/CodeHighlighter"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnimationListener_1, Animation_1, Tooltip_1, CodeHighlighter_1;
    var FUELUI_DIRECTIVE_PROVIDERS;
    var exportedNames_1 = {
        'FUELUI_DIRECTIVE_PROVIDERS': true
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
            function (AnimationListener_1_1) {
                AnimationListener_1 = AnimationListener_1_1;
                exportStar_1(AnimationListener_1_1);
            },
            function (Animation_1_1) {
                Animation_1 = Animation_1_1;
                exportStar_1(Animation_1_1);
            },
            function (Tooltip_1_1) {
                Tooltip_1 = Tooltip_1_1;
                exportStar_1(Tooltip_1_1);
            },
            function (CodeHighlighter_1_1) {
                CodeHighlighter_1 = CodeHighlighter_1_1;
                exportStar_1(CodeHighlighter_1_1);
            }],
        execute: function() {
            exports_1("FUELUI_DIRECTIVE_PROVIDERS", FUELUI_DIRECTIVE_PROVIDERS = [
                Tooltip_1.TOOLTIP_PROVIDERS,
                Animation_1.Animation,
                AnimationListener_1.AnimationListener,
                CodeHighlighter_1.CodeHighlighter
            ]);
        }
    }
});
//# sourceMappingURL=directives.js.map