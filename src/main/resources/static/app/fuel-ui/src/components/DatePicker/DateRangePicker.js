System.register(["angular2/core", "angular2/common", "../../utilities/DateUtils", "../../utilities/DetectionUtils", "./DatePicker", "./DatePickerCalendar", "../InfiniteScroller/InfiniteScroller"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, common_1, DateUtils_1, DetectionUtils_1, DatePicker_1, DatePickerCalendar_1, InfiniteScroller_1;
    var DateRangePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (DateUtils_1_1) {
                DateUtils_1 = DateUtils_1_1;
            },
            function (DetectionUtils_1_1) {
                DetectionUtils_1 = DetectionUtils_1_1;
            },
            function (DatePicker_1_1) {
                DatePicker_1 = DatePicker_1_1;
            },
            function (DatePickerCalendar_1_1) {
                DatePickerCalendar_1 = DatePickerCalendar_1_1;
            },
            function (InfiniteScroller_1_1) {
                InfiniteScroller_1 = InfiniteScroller_1_1;
            }],
        execute: function() {
            DateRangePicker = (function (_super) {
                __extends(DateRangePicker, _super);
                function DateRangePicker(modal) {
                    _super.call(this, modal);
                    this.valueChange = new core_2.EventEmitter();
                    this._dateTarget = false;
                    this.calendarHeight = DetectionUtils_1.MobileDetection.isAny() || window.innerWidth <= 480 || window.outerWidth <= 480 ? "auto" : "300px";
                    this.startDateChange = new core_2.EventEmitter();
                    this.endDateChange = new core_2.EventEmitter();
                    this._inputStartDate = "";
                    this._inputEndDate = "";
                    this.modal = modal.nativeElement;
                    /*this.selectedDate = new Date();
                    if(this.selectedDate < this._minDate)
                        this.selectedDate = this._minDate;*/
                }
                Object.defineProperty(DateRangePicker.prototype, "value", {
                    set: function (value) {
                        this._selectedDate = this.handleRangeInput(value).start;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DateRangePicker.prototype, "minDate", {
                    get: function () { return this._minDate; },
                    set: function (value) {
                        this._minDate = this.handleDateInput(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(DateRangePicker.prototype, "maxDate", {
                    get: function () { return this._maxDate; },
                    set: function (value) {
                        this._maxDate = this.handleDateInput(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DateRangePicker.prototype, "selectedDate", {
                    get: function () { return this._selectedDate; },
                    set: function (value) {
                        this._selectedDate = value;
                        if ((this._dateTarget && this.startDate != null && value < this.startDate)
                            || !this._dateTarget && this.endDate != null && value > this.endDate)
                            this._dateTarget = !this._dateTarget;
                        if (!this._dateTarget) {
                            this.inputStartDate = value.toLocaleDateString();
                            this.startDate = value;
                            if (this.startDateChange != null)
                                this.startDateChange.next(this._startDate);
                        }
                        else {
                            this.inputEndDate = value.toLocaleDateString();
                            this.endDate = value;
                            this.hideCalendar();
                            if (this.endDateChange != null)
                                this.endDateChange.next(this._endDate);
                        }
                        this._dateTarget = !this._dateTarget;
                        if (this.startDate != null && this.endDate != null) {
                            var startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate());
                            var endDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate());
                            this.valueChange.next(new DateUtils_1.DateRange(startDate, endDate));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(DateRangePicker.prototype, "startDate", {
                    get: function () { return this._startDate; },
                    set: function (value) {
                        this._startDate = this.handleDateInput(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DateRangePicker.prototype, "endDate", {
                    get: function () { return this._endDate; },
                    set: function (value) {
                        this._endDate = this.handleDateInput(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DateRangePicker.prototype, "inputStartDate", {
                    get: function () { return this._inputStartDate; },
                    set: function (value) {
                        this._inputStartDate = value;
                        this._selectedDate = new Date(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(DateRangePicker.prototype, "inputEndDate", {
                    get: function () { return this._inputEndDate; },
                    set: function (value) {
                        this._inputEndDate = value;
                        this._selectedDate = new Date(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                DateRangePicker.prototype.handleRangeInput = function (value) {
                    if (value instanceof DateUtils_1.DateRange)
                        return value;
                    else
                        throw "DateRangePicker error: input is not of type DateRange";
                };
                DateRangePicker.prototype.focusStartDate = function () {
                    this._dateTarget = false;
                };
                DateRangePicker.prototype.focusEndDate = function () {
                    this._dateTarget = true;
                };
                DateRangePicker.prototype.checkStartDateTarget = function () {
                    return !this._dateTarget;
                };
                DateRangePicker.prototype.checkEndDateTarget = function () {
                    return this._dateTarget;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DateRangePicker.prototype, "valueChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], DateRangePicker.prototype, "value", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], DateRangePicker.prototype, "minDate", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], DateRangePicker.prototype, "maxDate", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function)
                ], DateRangePicker.prototype, "dateFilter", void 0);
                __decorate([
                    core_2.ViewChild(InfiniteScroller_1.InfiniteScroller), 
                    __metadata('design:type', InfiniteScroller_1.InfiniteScroller)
                ], DateRangePicker.prototype, "calendarScroller", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DateRangePicker.prototype, "startLabel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DateRangePicker.prototype, "endLabel", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DateRangePicker.prototype, "startDateChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], DateRangePicker.prototype, "startDate", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DateRangePicker.prototype, "endDateChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], DateRangePicker.prototype, "endDate", null);
                DateRangePicker = __decorate([
                    core_1.Component({
                        selector: "date-range-picker",
                        styleUrls: ['/app/fuel-ui/src/components/DatePicker/DatePicker.css'],
                        templateUrl: '/app/fuel-ui/src/components/DatePicker/DateRangePicker.html',
                        directives: [DatePickerCalendar_1.DatePickerCalendar, InfiniteScroller_1.INFINITE_SCROLLER_PROVIDERS, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], DateRangePicker);
                return DateRangePicker;
            }(DatePicker_1.DatePicker));
            exports_1("DateRangePicker", DateRangePicker);
        }
    }
});
//# sourceMappingURL=DateRangePicker.js.map