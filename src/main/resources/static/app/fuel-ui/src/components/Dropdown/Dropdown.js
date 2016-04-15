System.register(["angular2/core"], function(exports_1, context_1) {
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
    var Dropdown, DROPDOWN_COMPONENT_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Dropdown = (function () {
                function Dropdown() {
                    this.dropdownOpen = false;
                }
                Dropdown.prototype.toggleDropdown = function () {
                    this.dropdownOpen = !this.dropdownOpen;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Dropdown.prototype, "label", void 0);
                Dropdown = __decorate([
                    core_1.Component({
                        selector: "dropdown",
                        templateUrl: 'components/Dropdown/Dropdown.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Dropdown);
                return Dropdown;
            }());
            exports_1("Dropdown", Dropdown);
            exports_1("DROPDOWN_COMPONENT_PROVIDERS", DROPDOWN_COMPONENT_PROVIDERS = [
                Dropdown
            ]);
        }
    }
});
//# sourceMappingURL=Dropdown.js.map