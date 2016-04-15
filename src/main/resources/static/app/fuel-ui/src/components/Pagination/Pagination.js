System.register(['angular2/core', 'angular2/common', '../../pipes/Range/Range'], function(exports_1, context_1) {
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
    var core_1, common_1, Range_1;
    var Pagination, PAGINATION_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Range_1_1) {
                Range_1 = Range_1_1;
            }],
        execute: function() {
            Pagination = (function () {
                function Pagination() {
                    this.currentPage = 1;
                    this.pagesAtOnce = 5;
                    this.totalPages = 10;
                    this.currentPageChange = new core_1.EventEmitter();
                    this.pagesBlank = [];
                    this.setPage(this.currentPage);
                }
                Pagination.prototype.ngOnChanges = function (changes) {
                    this.setPage(this.currentPage);
                };
                Pagination.prototype.setPage = function (newPage) {
                    if (newPage < 1 || newPage > this.totalPages)
                        return;
                    this.currentPage = newPage;
                    //Shift pagination stuffs
                    if (this.currentPage - Math.ceil(this.pagesAtOnce / 2) < 0 || this.totalPages - this.pagesAtOnce <= 0) {
                        this.startingIndex = 0;
                        this.endingIndex = this.pagesAtOnce;
                    }
                    else if (this.totalPages - this.currentPage <= this.pagesAtOnce - Math.ceil(this.pagesAtOnce / 2)) {
                        this.startingIndex = this.totalPages - this.pagesAtOnce;
                        this.endingIndex = this.totalPages;
                    }
                    else {
                        this.startingIndex = this.currentPage - Math.ceil(this.pagesAtOnce / 2);
                        this.endingIndex = this.startingIndex + this.pagesAtOnce < this.totalPages
                            ? this.startingIndex + this.pagesAtOnce
                            : this.totalPages;
                    }
                    this.currentPageChange.next(this.currentPage);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pagination.prototype, "currentPage", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pagination.prototype, "pagesAtOnce", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pagination.prototype, "totalPages", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Pagination.prototype, "currentPageChange", void 0);
                Pagination = __decorate([
                    core_1.Component({
                        selector: 'pagination',
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        properties: [
                            "totalPages: total-pages",
                            "pagesAtOnce: pages-at-once"
                        ],
                        styleUrls: ['components/Pagination/Pagination.css'],
                        templateUrl: 'components/Pagination/Pagination.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        pipes: [common_1.SlicePipe, Range_1.RangePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Pagination);
                return Pagination;
            }());
            exports_1("Pagination", Pagination);
            exports_1("PAGINATION_PROVIDERS", PAGINATION_PROVIDERS = [
                Pagination
            ]);
        }
    }
});
//# sourceMappingURL=Pagination.js.map