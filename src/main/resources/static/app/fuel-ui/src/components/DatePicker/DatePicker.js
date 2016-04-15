System.register(["angular2/core", "angular2/common", "./DatePickerCalendar", "../InfiniteScroller/InfiniteScroller", "../../utilities/DetectionUtils"], function(exports_1, context_1) {
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
    var core_1, core_2, common_1, DatePickerCalendar_1, InfiniteScroller_1, DetectionUtils_1;
    var DatePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (DatePickerCalendar_1_1) {
                DatePickerCalendar_1 = DatePickerCalendar_1_1;
            },
            function (InfiniteScroller_1_1) {
                InfiniteScroller_1 = InfiniteScroller_1_1;
            },
            function (DetectionUtils_1_1) {
                DetectionUtils_1 = DetectionUtils_1_1;
            }],
        execute: function() {
            DatePicker = (function () {
                function DatePicker(modal) {
                    this._minDate = new Date(1900, 0, 1);
                    this._maxDate = new Date(2200, 0, 1);
                    this.valueChange = new core_2.EventEmitter();
                    this._inputDate = "";
                    this.calendarDisplayed = false;
                    this.calendarX = 1;
                    this.calendarY = 1;
                    this.calendarHeight = DetectionUtils_1.MobileDetection.isAny() || window.innerWidth <= 480 || window.outerWidth <= 480 ? "auto" : "300px";
                    this.calendarMonths = [];
                    this._preGenMonths = 2;
                    this.modal = modal.nativeElement;
                }
                Object.defineProperty(DatePicker.prototype, "minDate", {
                    get: function () { return this._minDate; },
                    set: function (value) {
                        this._minDate = this.handleDateInput(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(DatePicker.prototype, "maxDate", {
                    get: function () { return this._maxDate; },
                    set: function (value) {
                        this._maxDate = this.handleDateInput(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DatePicker.prototype, "value", {
                    set: function (value) {
                        this._selectedDate = this.handleDateInput(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DatePicker.prototype, "selectedDate", {
                    get: function () { return this._selectedDate; },
                    set: function (value) {
                        this._selectedDate = value;
                        this._inputDate = value.toLocaleDateString();
                        this.valueChange.next(this.selectedDate);
                        this.hideCalendar();
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(DatePicker.prototype, "inputDate", {
                    get: function () { return this._inputDate; },
                    set: function (value) {
                        this._inputDate = value;
                        this._selectedDate = new Date(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                DatePicker.prototype.ngOnInit = function () {
                    var _this = this;
                    var currentDate = this.selectedDate != null ? this.selectedDate : new Date();
                    this.calendarMonths = [
                        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
                        new Date(currentDate.getFullYear(), currentDate.getMonth())
                    ];
                    for (var i = 0; i < this._preGenMonths; i++) {
                        var earliestDate = this.calendarMonths[0];
                        var latestDate = this.calendarMonths[this.calendarMonths.length - 1];
                        if (this.canPrevMonth)
                            this.calendarMonths.unshift(new Date(earliestDate.getFullYear(), earliestDate.getMonth() - 1));
                        if (this.canNextMonth)
                            this.calendarMonths.push(new Date(latestDate.getFullYear(), latestDate.getMonth() + 1));
                    }
                    setTimeout(function () {
                        if (_this.calendarScroller == null)
                            return;
                        var scrollToMonth = _this.calendarMonths.findIndex(function (m) {
                            return m.getFullYear() == currentDate.getFullYear()
                                && m.getMonth() == currentDate.getMonth();
                        });
                        _this.calendarScroller.container.scrollTop =
                            _this.calendarScroller.itemQuery.toArray()[scrollToMonth].element.offsetTop - 20;
                        _this.calendarScroller.scrollToIndex(scrollToMonth);
                    }, 1);
                };
                DatePicker.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.modal.addEventListener('click', function (e) {
                        if (e.srcElement.className.indexOf('modal') != -1)
                            _this.hideCalendar();
                    });
                };
                DatePicker.prototype.handleDateInput = function (value) {
                    if (value instanceof Date && !isNaN(value.valueOf()))
                        return value;
                    else
                        return new Date(value);
                };
                DatePicker.prototype.showCalendar = function (event) {
                    if (event != null) {
                        var clickedRect = event.srcElement.parentElement.getBoundingClientRect();
                        this.calendarX = clickedRect.left;
                        if (screen.height - clickedRect.bottom <= 500) {
                            this.calendarY = (clickedRect.top);
                        }
                        else {
                            this.calendarY = 0;
                        }
                    }
                    this.ngOnInit();
                    this.calendarDisplayed = true;
                };
                DatePicker.prototype.hideCalendar = function () {
                    this.calendarDisplayed = false;
                };
                Object.defineProperty(DatePicker.prototype, "canPrevMonth", {
                    get: function () {
                        var currentDate = this.calendarMonths[0];
                        var prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
                        var compareDate = new Date(this._minDate.getFullYear(), this._minDate.getMonth());
                        return prevDate >= compareDate;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DatePicker.prototype, "canNextMonth", {
                    get: function () {
                        var currentDate = this.calendarMonths[this.calendarMonths.length - 1];
                        var nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
                        var compareDate = new Date(this._maxDate.getFullYear(), this._maxDate.getMonth());
                        return nextDate <= compareDate;
                    },
                    enumerable: true,
                    configurable: true
                });
                DatePicker.prototype.disablePrev = function () {
                    return this.calendarScroller ? this.calendarScroller.isTop() : false;
                };
                DatePicker.prototype.disableNext = function () {
                    return this.calendarScroller ? this.calendarScroller.isBottom() : false;
                };
                DatePicker.prototype.scrollPrevMonth = function () {
                    var _this = this;
                    if (this.calendarScroller.topIndex == 0)
                        this.addPrevMonth();
                    setTimeout(function () {
                        _this.calendarScroller.scrollToIndex(_this.calendarScroller.topIndex - 1);
                    }, 10);
                };
                DatePicker.prototype.scrollNextMonth = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.calendarScroller.scrollToIndex(_this.calendarScroller.topIndex + 1);
                    }, 10);
                };
                DatePicker.prototype.addNextMonth = function () {
                    if (!this.canNextMonth)
                        return;
                    var lastMonth = this.calendarMonths[this.calendarMonths.length - 1];
                    var nextMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1);
                    this.calendarMonths.push(nextMonth);
                };
                DatePicker.prototype.addPrevMonth = function () {
                    if (!this.canPrevMonth)
                        return;
                    var firstMonth = this.calendarMonths[0];
                    var prevMonth = new Date(firstMonth.getFullYear(), firstMonth.getMonth() - 1);
                    this.calendarMonths.unshift(prevMonth);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], DatePicker.prototype, "label", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], DatePicker.prototype, "minDate", null);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], DatePicker.prototype, "maxDate", null);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Function)
                ], DatePicker.prototype, "dateFilter", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], DatePicker.prototype, "valueChange", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], DatePicker.prototype, "value", null);
                __decorate([
                    core_2.ViewChild(InfiniteScroller_1.InfiniteScroller), 
                    __metadata('design:type', InfiniteScroller_1.InfiniteScroller)
                ], DatePicker.prototype, "calendarScroller", void 0);
                DatePicker = __decorate([
                    core_1.Component({
                        selector: "date-picker",
                        styleUrls: ["/app/fuel-ui/src/components/DatePicker/DatePicker.css"],
                        templateUrl: "/app/fuel-ui/src/components/DatePicker/DatePicker.html",
                        directives: [DatePickerCalendar_1.DatePickerCalendar, InfiniteScroller_1.INFINITE_SCROLLER_PROVIDERS, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], DatePicker);
                return DatePicker;
            }());
            exports_1("DatePicker", DatePicker);
        }
    }
});
//# sourceMappingURL=DatePicker.js.map