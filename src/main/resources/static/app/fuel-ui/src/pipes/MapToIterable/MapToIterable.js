System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MapToIterablePipe, MAPTOITERABLE_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MapToIterablePipe = (function () {
                function MapToIterablePipe() {
                }
                MapToIterablePipe.prototype.transform = function (dict, args) {
                    if (args === void 0) { args = []; }
                    var a = [];
                    for (var key in dict) {
                        if (dict.hasOwnProperty(key)) {
                            a.push({ key: key, val: dict[key] });
                        }
                    }
                    return a;
                };
                MapToIterablePipe = __decorate([
                    core_1.Pipe({
                        name: 'mapToIterable'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapToIterablePipe);
                return MapToIterablePipe;
            }());
            exports_1("MapToIterablePipe", MapToIterablePipe);
            exports_1("MAPTOITERABLE_PROVIDERS", MAPTOITERABLE_PROVIDERS = [
                MapToIterablePipe
            ]);
        }
    }
});
//# sourceMappingURL=MapToIterable.js.map