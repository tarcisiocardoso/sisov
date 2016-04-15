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
    var core_1, core_2, common_1;
    var CarouselItem, Carousel, CAROUSEL_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CarouselItem = (function () {
                function CarouselItem() {
                    this.resetStatus();
                }
                CarouselItem.prototype.resetStatus = function () {
                    this.isActive = false;
                    this.exiting = false;
                    this.resetAnimation();
                };
                CarouselItem.prototype.resetAnimation = function () {
                    //this.outLeft = this.inLeft = this.outRight = this.inRight = false;
                    this.left = this.right = this.next = this.prev = false;
                };
                CarouselItem.prototype.animationStart = function () {
                };
                CarouselItem.prototype.animationEnd = function () {
                    if (this.exiting)
                        this.resetStatus();
                    else
                        this.resetAnimation();
                };
                CarouselItem.prototype.moveLeft = function () {
                    if (this.isActive) {
                        this.exiting = true;
                        this.left = true;
                    }
                    else {
                        this.isActive = true;
                        this.prev = true;
                    }
                };
                CarouselItem.prototype.moveRight = function () {
                    if (this.isActive) {
                        this.exiting = true;
                        this.right = true;
                    }
                    else {
                        this.isActive = true;
                        this.next = true;
                    }
                };
                CarouselItem.prototype.checkIfAnimating = function () {
                    return this.left || this.right || this.next || this.prev;
                };
                CarouselItem = __decorate([
                    core_1.Directive({
                        selector: '.carousel-item',
                        host: {
                            '[class.active]': 'isActive',
                            '[class.slide-out-left]': 'left',
                            '[class.slide-out-right]': 'right',
                            '[class.slide-in-right]': 'next',
                            '[class.slide-in-left]': 'prev',
                            '(animationstart)': 'animationStart()',
                            '(webkitAnimationStart)': 'animationStart()',
                            '(oanimationstart)': 'animationStart()',
                            '(MSAnimationStart)': 'animationStart()',
                            '(animationend)': 'animationEnd()',
                            '(webkitAnimationEnd)': 'animationEnd()',
                            '(oanimationend)': 'animationEnd()',
                            '(MSAnimationEnd)': 'animationEnd()',
                        },
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarouselItem);
                return CarouselItem;
            }());
            exports_1("CarouselItem", CarouselItem);
            Carousel = (function () {
                function Carousel() {
                    this.images = [];
                }
                Carousel.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this.imageQuery.changes.subscribe(function () { return _this.registerImages(); });
                    this.registerImages();
                };
                Carousel.prototype.registerImages = function () {
                    var _this = this;
                    this.images = [];
                    this.imageQuery.map(function (i) { return _this.images.push(i); });
                    var activeImage = this.getActiveImage();
                    if (this.images.length > 0 && activeImage == null)
                        setTimeout(function () { return _this.images[0].isActive = true; }, 1);
                };
                Carousel.prototype.setAllInactive = function () {
                    this.images.map(function (i) { return i.resetStatus(); });
                };
                Carousel.prototype.switchTo = function (image) {
                    var activeImage = this.getActiveImage();
                    if (this.images.indexOf(image) < this.images.indexOf(activeImage)) {
                        image.moveLeft();
                        activeImage.moveLeft();
                    }
                    else {
                        image.moveRight();
                        activeImage.moveRight();
                    }
                };
                Carousel.prototype.nextImage = function () {
                    if (this.checkIfAnimating())
                        return;
                    var activeImage = this.getActiveImage();
                    var index = this.getActiveIndex() + 1;
                    index = index >= this.images.length ? 0 : index;
                    activeImage.moveLeft();
                    this.images[index].moveLeft();
                };
                Carousel.prototype.prevImage = function () {
                    if (this.checkIfAnimating())
                        return;
                    var activeImage = this.getActiveImage();
                    var index = this.getActiveIndex() - 1;
                    index = index < 0 ? this.images.length - 1 : index;
                    activeImage.moveRight();
                    this.images[index].moveRight();
                };
                Carousel.prototype.checkIfAnimating = function () {
                    return this.images.reduce(function (prev, curr) { return curr.checkIfAnimating() || prev; }, false);
                };
                Carousel.prototype.getActiveIndex = function () {
                    var activeImage = this.getActiveImage();
                    if (activeImage == null)
                        return -1;
                    return this.images.indexOf(activeImage);
                };
                Carousel.prototype.getActiveImage = function () {
                    return this.images.reduce(function (prev, curr) { return curr.isActive ? curr : prev; }, null);
                };
                __decorate([
                    core_2.ContentChildren(CarouselItem), 
                    __metadata('design:type', core_2.QueryList)
                ], Carousel.prototype, "imageQuery", void 0);
                Carousel = __decorate([
                    core_1.Component({
                        selector: 'carousel',
                        styleUrls: ['components/carousel/carousel.css'],
                        templateUrl: 'components/carousel/carousel.html',
                        directives: [common_1.CORE_DIRECTIVES, CarouselItem],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], Carousel);
                return Carousel;
            }());
            exports_1("Carousel", Carousel);
            exports_1("CAROUSEL_PROVIDERS", CAROUSEL_PROVIDERS = [
                Carousel, CarouselItem
            ]);
        }
    }
});
//# sourceMappingURL=Carousel.js.map