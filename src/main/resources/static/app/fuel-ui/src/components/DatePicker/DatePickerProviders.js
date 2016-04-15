System.register(["./DatePickerCalendar", "./DatePicker", "./DateRangePicker"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DatePickerCalendar_1, DatePicker_1, DateRangePicker_1;
    var DATE_PICKER_PROVIDERS;
    return {
        setters:[
            function (DatePickerCalendar_2_1) {
                exports_1({
                    "DatePickerCalendar": DatePickerCalendar_2_1["DatePickerCalendar"]
                });
                DatePickerCalendar_1 = DatePickerCalendar_2_1;
            },
            function (DatePicker_2_1) {
                exports_1({
                    "DatePicker": DatePicker_2_1["DatePicker"]
                });
                DatePicker_1 = DatePicker_2_1;
            },
            function (DateRangePicker_2_1) {
                exports_1({
                    "DateRangePicker": DateRangePicker_2_1["DateRangePicker"]
                });
                DateRangePicker_1 = DateRangePicker_2_1;
            }],
        execute: function() {
            exports_1("DATE_PICKER_PROVIDERS", DATE_PICKER_PROVIDERS = [
                DatePickerCalendar_1.DatePickerCalendar,
                DatePicker_1.DatePicker,
                DateRangePicker_1.DateRangePicker
            ]);
        }
    }
});
//# sourceMappingURL=DatePickerProviders.js.map