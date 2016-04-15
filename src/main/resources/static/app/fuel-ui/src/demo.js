System.register(["angular2/core", "angular2/common", "angular2/platform/browser", 'angular2/router', "./fuel-ui", './fuel-ui-demo'], function(exports_1, context_1) {
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
    var core_1, common_1, browser_1, router_1, fuel_ui_1, fuel_ui_demo_1;
    var DemoHome, DemoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (fuel_ui_1_1) {
                fuel_ui_1 = fuel_ui_1_1;
            },
            function (fuel_ui_demo_1_1) {
                fuel_ui_demo_1 = fuel_ui_demo_1_1;
            }],
        execute: function() {
            DemoHome = (function () {
                function DemoHome() {
                }
                DemoHome = __decorate([
                    core_1.Component({
                        template: "\n    <div class=\"jumbotron jumbotron-fluid\">\n        <div class=\"container\">\n            <h2 class=\"display-3\">Fuel-UI</h2>\n            <p class=\"lead\">Fuel-UI is a collection of native <a href=\"http://angular.io\" target=\"_blank\">Angular 2</a> components, directives, and pipes for <a href=\"http://v4-alpha.getbootstrap.com/\" target=\"_blank\">Bootstrap 4</a>.</p>\n            \n            <a href=\"https://github.com/FuelInteractive/fuel-ui/releases\" target=\"_blank\" class=\"btn btn-fuel\">Download <i class=\"fa fa-download\"></i></a> <a href=\"https://github.com/FuelInteractive/fuel-ui\" target=\"_blank\" class=\"btn btn-fuel\">View on GitHub <i class=\"fa fa-external-link\"></i></a>\n        </div>\n    </div>\n    \n    <p>Fuel-UI is developed by <a href=\"http://fueltravel.com\" target=\"_blank\">Fuel Travel</a>, a company with years of expertise in the travel marketing industry. For project news and updates, follow us on <a href=\"http://twitter.com/fueltravel\" target=\"_blank\">twitter</a>.</p>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DemoHome);
                return DemoHome;
            }());
            exports_1("DemoHome", DemoHome);
            DemoComponent = (function () {
                function DemoComponent() {
                }
                DemoComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'DemoHome', component: DemoHome, useAsDefault: true },
                        { path: '/component/alert', name: 'AlertDemo', component: fuel_ui_demo_1.AlertDemo },
                        { path: '/component/carousel', name: 'CarouselDemo', component: fuel_ui_demo_1.CarouselDemo },
                        { path: '/component/collapse', name: 'CollapseDemo', component: fuel_ui_demo_1.CollapseDemo },
                        { path: '/component/datepicker', name: 'DatePickerDemo', component: fuel_ui_demo_1.DatePickerDemo },
                        { path: '/component/daterangepicker', name: 'DateRangePickerDemo', component: fuel_ui_demo_1.DateRangePickerDemo },
                        { path: '/component/dropdown', name: 'DropdownDemo', component: fuel_ui_demo_1.DropdownDemo },
                        { path: '/component/infinitescroller', name: 'InfiniteScrollerDemo', component: fuel_ui_demo_1.InfiniteScrollerDemo },
                        { path: '/component/modal', name: 'ModalDemo', component: fuel_ui_demo_1.ModalDemo },
                        { path: '/component/pagination', name: 'PaginationDemo', component: fuel_ui_demo_1.PaginationDemo },
                        { path: '/component/progress', name: 'ProgressDemo', component: fuel_ui_demo_1.ProgressDemo },
                        { path: '/component/tablesortable', name: 'TableSortableDemo', component: fuel_ui_demo_1.TableSortableDemo },
                        { path: '/directive/animation', name: 'AnimationDemo', component: fuel_ui_demo_1.AnimationDemo },
                        { path: '/directive/codehighlighter', name: 'CodeHighlighterDemo', component: fuel_ui_demo_1.CodeHighlighterDemo },
                        { path: '/directive/tooltip', name: 'TooltipDemo', component: fuel_ui_demo_1.TooltipDemo },
                        { path: '/pipe/format', name: 'FormatDemo', component: fuel_ui_demo_1.FormatDemo },
                        { path: '/pipe/maptoiterable', name: 'MapToIterableDemo', component: fuel_ui_demo_1.MapToIterableDemo },
                        { path: '/pipe/orderby', name: 'OrderByDemo', component: fuel_ui_demo_1.OrderByDemo },
                        { path: '/pipe/range', name: 'RangeDemo', component: fuel_ui_demo_1.RangeDemo }
                    ]),
                    core_1.Component({
                        selector: "fuel-ui",
                        template: "\n    <div id=\"wrapper\">\n        <div id=\"sidebar-wrapper\">\n            <ul class=\"sidebar-nav\">\n                <li class=\"sidebar-brand\">\n                    <a [routerLink]=\"['DemoHome']\">\n                        <img src=\"https://pbs.twimg.com/profile_images/572406600309018624/r2ma7PE3.png\" height=\"40\"/> \n                        <span>Fuel-UI</span>\n                    </a>\n                </li>\n                <li class=\"sidebar-title\">Components</li>\n                <li><a [routerLink]=\"['AlertDemo']\">Alert</a></li>\n                <li><a [routerLink]=\"['CarouselDemo']\">Carousel</a></li>\n                <li><a [routerLink]=\"['CollapseDemo']\">Collapse</a></li>\n                <li><a [routerLink]=\"['DatePickerDemo']\">DatePicker</a></li>\n                <li><a [routerLink]=\"['DateRangePickerDemo']\">DateRangePicker</a></li>\n                <li><a [routerLink]=\"['DropdownDemo']\">Dropdown</a></li>\n                <li><a [routerLink]=\"['InfiniteScrollerDemo']\">InfiniteScroller</a></li>\n                <li><a [routerLink]=\"['ModalDemo']\">Modal</a></li>\n                <li><a [routerLink]=\"['PaginationDemo']\">Pagination</a></li>\n                <li><a [routerLink]=\"['ProgressDemo']\">Progress</a></li>\n                <li><a [routerLink]=\"['TableSortableDemo']\">TableSortable</a></li>\n                <li class=\"sidebar-title\">Directives</li>\n                <li><a [routerLink]=\"['AnimationDemo']\">Animation</a></li>\n                <li><a [routerLink]=\"['CodeHighlighterDemo']\">Code Highlighter</a></li>\n                <li><a [routerLink]=\"['TooltipDemo']\">Tooltip</a></li>\n                <li class=\"sidebar-title\">Pipes</li>\n                <li><a [routerLink]=\"['FormatDemo']\">Format</a></li>\n                <li><a [routerLink]=\"['MapToIterableDemo']\">MapToIterable</a></li>\n                <li><a [routerLink]=\"['OrderByDemo']\">OrderBy</a></li>\n                <li><a [routerLink]=\"['RangeDemo']\">Range</a></li>\n            </ul>\n        </div>\n        <!-- /#sidebar-wrapper -->\n\n        <!-- Page Content -->\n        <div id=\"page-content-wrapper\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <router-outlet></router-outlet>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /#page-content-wrapper -->\n\n    </div>",
                        directives: [common_1.CORE_DIRECTIVES, fuel_ui_1.FUELUI_COMPONENT_PROVIDERS, fuel_ui_1.FUELUI_DIRECTIVE_PROVIDERS, common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        encapsulation: core_1.ViewEncapsulation.None,
                        styleUrls: ["directives/Tooltip/Tooltip.css"],
                        pipes: [fuel_ui_1.FUELUI_PIPE_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DemoComponent);
                return DemoComponent;
            }());
            exports_1("DemoComponent", DemoComponent);
            browser_1.bootstrap(DemoComponent, [
                router_1.ROUTER_PROVIDERS,
                common_1.FORM_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                fuel_ui_1.FUELUI_COMPONENT_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=demo.js.map