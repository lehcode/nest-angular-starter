"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var vin_results_component_1 = require("~/app/components/vin-results/vin-results.component");
var error_page_component_1 = require("~/app/components/error-page/error-page.component");
var front_page_component_1 = require("~/app/components/front-page/front-page.component");
var routes = [
    { path: 'vin-search-result', component: vin_results_component_1.VinResultsComponent },
    { path: 'admin', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/domain/admin/admin.module'); }).then(function (m) { return m.AdminModule; }); } },
    {
        path: 'purchase-report',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/domain/vin-report/vin-report.module'); }).then(function (m) { return m.VinReportModule; }); }
    },
    { path: 'blog', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/domain/blog/blog.module'); }).then(function (m) { return m.BlogModule; }); } },
    { path: '', component: front_page_component_1.FrontPageComponent },
    { path: '**', component: error_page_component_1.ErrorPageComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, {
                    initialNavigation: 'enabled'
                })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;