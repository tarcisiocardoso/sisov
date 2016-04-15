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
    var AnimationListener, ANIMATION_LISTENER_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AnimationListener = (function () {
                function AnimationListener() {
                    this.animationStart = new core_1.EventEmitter();
                    this.animationEnd = new core_1.EventEmitter();
                }
                AnimationListener.prototype.animationStarted = function ($event) {
                    this.animationStart.next($event);
                };
                AnimationListener.prototype.animationEnded = function ($event) {
                    this.animationEnd.next($event);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AnimationListener.prototype, "animationStart", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AnimationListener.prototype, "animationEnd", void 0);
                AnimationListener = __decorate([
                    core_1.Directive({
                        selector: '[.animated]',
                        host: {
                            '(animationstart)': 'animationStarted($event)',
                            '(webkitAnimationStart)': 'animationStarted($event)',
                            '(oanimationstart)': 'animationStarted($event)',
                            '(MSAnimationStart)': 'animationStarted($event)',
                            '(animationend)': 'animationEnded($event)',
                            '(webkitAnimationEnd)': 'animationEnded($event)',
                            '(oanimationend)': 'animationEnded($event)',
                            '(MSAnimationEnd)': 'animationEnded($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], AnimationListener);
                return AnimationListener;
            }());
            exports_1("AnimationListener", AnimationListener);
            exports_1("ANIMATION_LISTENER_PROVIDERS", ANIMATION_LISTENER_PROVIDERS = [
                AnimationListener
            ]);
        }
    }
});
//# sourceMappingURL=AnimationListener.js.map