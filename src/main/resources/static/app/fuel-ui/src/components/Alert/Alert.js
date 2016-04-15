System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var Alert, ALERT_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Alert = (function () {
                function Alert(el) {
                    this.displayed = false;
                    this.closeButton = true;
                    this.type = 'success';
                    this.displayedChange = new core_1.EventEmitter();
                    this._el = el.nativeElement;
                }
                Alert.prototype.getElement = function () {
                    return this._el;
                };
                Alert.prototype.close = function () {
                    this.displayed = false;
                    this.displayedChange.next(null);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Alert.prototype, "displayed", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Alert.prototype, "closeButton", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Alert.prototype, "type", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Alert.prototype, "displayedChange", void 0);
                Alert = __decorate([
                    core_1.Component({
                        selector: 'alert',
                        styleUrls: ['/app/fuel-ui/src/components/Alert/Alert.css'],
                        templateUrl: '/app/fuel-ui/src/components/Alert/Alert.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Alert);
                return Alert;
            }());
            exports_1("Alert", Alert);
            exports_1("ALERT_PROVIDERS", ALERT_PROVIDERS = [
                Alert
            ]);
        }
    }
});
//# sourceMappingURL=Alert.js.map