System.register(['angular2/core', 'angular2/common', "../../directives/Animation/AnimationListener"], function(exports_1, context_1) {
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
    var core_1, common_1, AnimationListener_1;
    var Modal, MODAL_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (AnimationListener_1_1) {
                AnimationListener_1 = AnimationListener_1_1;
            }],
        execute: function() {
            Modal = (function () {
                function Modal(el) {
                    this.displayed = false;
                    this.closeOnUnfocus = true;
                    this.closeButton = true;
                    this.modalTitle = '';
                    this._el = el.nativeElement;
                }
                Modal.prototype.clickElement = function (e) {
                    if (this.closeOnUnfocus) {
                        if (e.srcElement.className == 'modal customFadeIn' || e.srcElement.className == 'modal-dialog')
                            this.showModal(false);
                    }
                };
                Modal.prototype.getElement = function () {
                    return this._el;
                };
                Modal.prototype.closeModal = function () {
                    return this.showModal(false);
                };
                Modal.prototype.showModal = function (isDisplayed) {
                    var _this = this;
                    var body = document.body;
                    if (isDisplayed === undefined) {
                        this.displayed = !this.displayed;
                    }
                    else {
                        this.displayed = isDisplayed;
                    }
                    if (this.displayed) {
                        body.classList.add('modal-open');
                    }
                    else {
                        body.classList.remove('modal-open');
                        if (this.closeOnUnfocus) {
                            this._el.childNodes[0].removeEventListener('click', function (e) {
                                if (e.srcElement.className == 'modal customFadeIn' || e.srcElement.className == 'modal-dialog')
                                    _this.showModal(false);
                            });
                        }
                    }
                    return false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Modal.prototype, "closeOnUnfocus", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Modal.prototype, "closeButton", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Modal.prototype, "modalTitle", void 0);
                Modal = __decorate([
                    core_1.Component({
                        selector: 'modal',
                        host: {
                            '(click)': 'clickElement($event)'
                        },
                        styleUrls: ['/app/fuel-ui/src/components/Modal/Modal.css'],
                        templateUrl: '/app/fuel-ui/src/components/Modal/Modal.html',
                        directives: [common_1.CORE_DIRECTIVES, AnimationListener_1.AnimationListener]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Modal);
                return Modal;
            }());
            exports_1("Modal", Modal);
            exports_1("MODAL_PROVIDERS", MODAL_PROVIDERS = [
                Modal
            ]);
        }
    }
});
//# sourceMappingURL=Modal.js.map