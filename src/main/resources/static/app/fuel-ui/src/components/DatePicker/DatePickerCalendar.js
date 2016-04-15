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
    var DatePickerCalendar;
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
            DatePickerCalendar = (function () {
                function DatePickerCalendar() {
                    this.selectedDateChange = new core_2.EventEmitter();
                    this.dateTarget = null;
                    this.showMonth = true;
                }
                DatePickerCalendar.prototype.ngOnInit = function () {
                    this.buildWeeks(this.currentMonth || new Date());
                };
                DatePickerCalendar.prototype.checkSelectable = function (date) {
                    var dateNumber = parseInt(date);
                    if (isNaN(dateNumber))
                        return false;
                    var compareDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), dateNumber);
                    /*if(this.dateTarget != null && this.dateTarget
                        && typeof this.startDate != undefined && this.startDate != null
                        && compareDate < this.startDate) {
                        return false;
                    }
                    
                    if(this.dateTarget != null && !this.dateTarget
                        && typeof this.endDate != undefined && this.endDate != null
                        && compareDate > this.endDate) {
                        return false;
                    }*/
                    if (typeof this.dateFilter == "function" && !this.dateFilter(compareDate))
                        return false;
                    return compareDate >= this.minDate && compareDate <= this.maxDate;
                };
                DatePickerCalendar.prototype.checkSelectedDate = function (date) {
                    if (typeof this.selectedDate == undefined || this.selectedDate == null)
                        return false;
                    if (typeof this.startDate != undefined && this.startDate != null
                        && typeof this.endDate != undefined && this.endDate != null) {
                        var compareDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), parseInt(date));
                        return compareDate >= this.startDate && compareDate <= this.endDate;
                    }
                    return this.selectedDate.getFullYear() == this.currentMonth.getFullYear()
                        && this.selectedDate.getMonth() == this.currentMonth.getMonth()
                        && this.selectedDate.getDate().toString() == date;
                };
                DatePickerCalendar.prototype.checkStartDate = function (date) {
                    if (typeof this.startDate == undefined || this.startDate == null)
                        return false;
                    if (this.startDate == this.endDate)
                        return false;
                    return this.startDate.getFullYear() == this.currentMonth.getFullYear()
                        && this.startDate.getMonth() == this.currentMonth.getMonth()
                        && this.startDate.getDate().toString() == date;
                };
                DatePickerCalendar.prototype.checkEndDate = function (date) {
                    if (typeof this.endDate == undefined || this.endDate == null)
                        return false;
                    if (this.startDate == this.endDate)
                        return false;
                    return this.endDate.getFullYear() == this.currentMonth.getFullYear()
                        && this.endDate.getMonth() == this.currentMonth.getMonth()
                        && this.endDate.getDate().toString() == date;
                };
                DatePickerCalendar.prototype.selectDate = function (date) {
                    if (!this.checkSelectable(date))
                        return;
                    var dateNumber = parseInt(date);
                    this.selectedDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), dateNumber);
                    this.selectedDateChange.next(this.selectedDate);
                };
                DatePickerCalendar.prototype.buildWeeks = function (date) {
                    this.currentMonth = date;
                    var currentDay = new Date(this.currentMonth.toDateString());
                    currentDay.setDate(1);
                    currentDay.setDate(currentDay.getDate() - currentDay.getDay());
                    var lastDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
                    lastDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));
                    this.weeks = [];
                    var currentWeek = [];
                    while (currentDay <= lastDay) {
                        if (currentDay.getMonth() == this.currentMonth.getMonth())
                            currentWeek.push(currentDay.getDate().toLocaleString());
                        else
                            currentWeek.push("");
                        currentDay.setDate(currentDay.getDate() + 1);
                        if (currentDay.getDay() == 0) {
                            this.weeks.push(currentWeek);
                            currentWeek = [];
                        }
                    }
                    if (this.weeks.length > 5)
                        return;
                    var firstWeekCount = this.weeks[0]
                        .filter(function (i) { return i.length > 0; }).length;
                    var lastWeekCount = this.weeks[this.weeks.length - 1]
                        .filter(function (i) { return i.length > 0; }).length;
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Date)
                ], DatePickerCalendar.prototype, "currentMonth", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Date)
                ], DatePickerCalendar.prototype, "selectedDate", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], DatePickerCalendar.prototype, "selectedDateChange", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Boolean)
                ], DatePickerCalendar.prototype, "dateTarget", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Date)
                ], DatePickerCalendar.prototype, "startDate", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Date)
                ], DatePickerCalendar.prototype, "endDate", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Date)
                ], DatePickerCalendar.prototype, "minDate", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Date)
                ], DatePickerCalendar.prototype, "maxDate", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Function)
                ], DatePickerCalendar.prototype, "dateFilter", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Boolean)
                ], DatePickerCalendar.prototype, "showMonth", void 0);
                DatePickerCalendar = __decorate([
                    core_1.Component({
                        selector: 'date-picker-calendar',
                        styleUrls: ['/app/fuel-ui/src/components/DatePicker/DatePickerCalendar.css'],
                        templateUrl: '/app/fuel-ui/src/components/DatePicker/DatePickerCalendar.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DatePickerCalendar);
                return DatePickerCalendar;
            }());
            exports_1("DatePickerCalendar", DatePickerCalendar);
        }
    }
});
//# sourceMappingURL=DatePickerCalendar.js.map