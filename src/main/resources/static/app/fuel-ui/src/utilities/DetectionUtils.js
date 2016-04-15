System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MobileDetection;
    return {
        setters:[],
        execute: function() {
            MobileDetection = (function () {
                function MobileDetection() {
                }
                MobileDetection.isAndroid = function () {
                    return navigator.userAgent.match(/Android/i) != null;
                };
                MobileDetection.isBlackBerry = function () {
                    return navigator.userAgent.match(/BlackBerry/i) != null;
                };
                MobileDetection.isIOS = function () {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i) != null;
                };
                MobileDetection.isOpera = function () {
                    return navigator.userAgent.match(/Opera Mini/i) != null;
                };
                MobileDetection.isWindows = function () {
                    return navigator.userAgent.match(/IEMobile|WPDesktop/i) != null;
                };
                MobileDetection.isAny = function () {
                    return (this.isAndroid() || this.isBlackBerry() || this.isIOS() || this.isOpera() || this.isWindows());
                };
                return MobileDetection;
            }());
            exports_1("MobileDetection", MobileDetection);
        }
    }
});
//# sourceMappingURL=DetectionUtils.js.map