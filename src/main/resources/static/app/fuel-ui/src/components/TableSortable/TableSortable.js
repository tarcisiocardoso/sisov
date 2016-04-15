System.register(['angular2/core', 'angular2/common', "../../pipes/OrderBy/OrderBy", "../../pipes/MapToIterable/MapToIterable", "../../pipes/Format/Format", "./TableSortableSorting", "./TableSortableColumn"], function(exports_1, context_1) {
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
    var core_1, common_1, OrderBy_1, MapToIterable_1, Format_1, TableSortableSorting_1;
    var TableSortable, TABLESORTABLE_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (OrderBy_1_1) {
                OrderBy_1 = OrderBy_1_1;
            },
            function (MapToIterable_1_1) {
                MapToIterable_1 = MapToIterable_1_1;
            },
            function (Format_1_1) {
                Format_1 = Format_1_1;
            },
            function (TableSortableSorting_1_1) {
                TableSortableSorting_1 = TableSortableSorting_1_1;
                exports_1({
                    "TableSortableSorting": TableSortableSorting_1_1["TableSortableSorting"]
                });
            },
            function (TableSortableColumn_1_1) {
                exports_1({
                    "TableSortableColumn": TableSortableColumn_1_1["TableSortableColumn"]
                });
            }],
        execute: function() {
            TableSortable = (function () {
                function TableSortable() {
                }
                TableSortable.prototype.selectedClass = function (columnName) {
                    return columnName == this.sort.column ? 'sort-' + (this.sort.descending ? 'desc' : 'asc') : '';
                };
                TableSortable.prototype.changeSorting = function (columnName) {
                    var sort = this.sort;
                    if (sort.column == columnName) {
                        sort.descending = !sort.descending;
                    }
                    else {
                        sort.column = columnName;
                        sort.descending = false;
                    }
                };
                TableSortable.prototype.convertSorting = function () {
                    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TableSortable.prototype, "columns", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TableSortable.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', TableSortableSorting_1.TableSortableSorting)
                ], TableSortable.prototype, "sort", void 0);
                TableSortable = __decorate([
                    core_1.Component({
                        selector: 'table-sortable',
                        templateUrl: 'components/TableSortable/TableSortable.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        pipes: [OrderBy_1.OrderByPipe, common_1.JsonPipe, MapToIterable_1.MapToIterablePipe, Format_1.FormatPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TableSortable);
                return TableSortable;
            }());
            exports_1("TableSortable", TableSortable);
            exports_1("TABLESORTABLE_PROVIDERS", TABLESORTABLE_PROVIDERS = [
                TableSortable
            ]);
        }
    }
});
//# sourceMappingURL=TableSortable.js.map