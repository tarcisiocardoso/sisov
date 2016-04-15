System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StringHelper;
    return {
        setters:[],
        execute: function() {
            StringHelper = (function () {
                function StringHelper() {
                }
                StringHelper.escapeHtml = function (html) {
                    var that = this;
                    return String(html).replace(/[<>"'\/]/g, function (s) {
                        return that.entityMap[s];
                    });
                };
                StringHelper.entityMap = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': '&quot;',
                    "'": '&apos;',
                    "/": '&#x2F;'
                };
                return StringHelper;
            }());
            exports_1("StringHelper", StringHelper);
        }
    }
});
//# sourceMappingURL=StringUtils.js.map