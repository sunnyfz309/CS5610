(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./assignment/directives/sortable.directive.ts":
/*!*****************************************************!*\
  !*** ./assignment/directives/sortable.directive.ts ***!
  \*****************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./assignment/pipes/order-by-pipe.pipe.ts":
/*!************************************************!*\
  !*** ./assignment/pipes/order-by-pipe.pipe.ts ***!
  \************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./assignment/pipes/safe.pipe.ts":
/*!***************************************!*\
  !*** ./assignment/pipes/safe.pipe.ts ***!
  \***************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");















var routes = [
    { path: '', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'profile', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'profile/:userId', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'profile/:userId/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'profile/:userId/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteNewComponent"] },
    { path: 'profile/:userId/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteEditComponent"] },
    { path: 'profile/:userId/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'profile/:userId/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_11__["PageNewComponent"] },
    { path: 'profile/:userId/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_10__["PageEditComponent"] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_14__["WidgetListComponent"] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__["WidgetChooserComponent"] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid', component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_13__["WidgetEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n.navbar-thick {\n  padding:1rem\n}\n.register-h1 {\n  font-size: 3.5rem;\n  background: aliceblue;\n}\n.profile-label {\n  font-weight: bold;\n}\n@media all and (orientation:landscape) {\n  .hide-on-landscape {\n    display: none;\n  }\n}\n@media all and (orientation:portrait) {\n  .hide-on-portrait {\n    display: none;\n  }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtBQUNGO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5pbnB1dC5mb3JtLWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jbC1mb3JtLWJvdHRvbS1wYWRkaW5ne1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbmE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNsLWNvbnRhaW5lci1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG4uY2wtYmx1ZS1uYXZiYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG59XG5cbi5jbC10ZXh0LXdoaXRle1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNsLXRleHQtYmxhY2t7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2wtdGV4dC1ib2xke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsLWhlYWRlci1wYWRkaW5ne1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2wtZnVsbC13aWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtbGlzdC1pdGVte1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNsLXYtZGl2aWRlcntcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWhlYWRpbmd7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtd2lkZ2V0LXBhcmFncmFwaHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmNsLXJlbGF0aXZlLXBvc2l0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2wtYWJzb2x1dGUtcG9zaXRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jbC13aWRnZXQtbGlzdC1pY29uc3tcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jbC16ZXJvLXJpZ2h0LXBhZGRpbmd7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmNsLWxpc3QtaXRlbS1ib3JkZXJsZXNzIHtcbiAgYm9yZGVyLXRvcDogMCBub25lO1xuICBib3JkZXItYm90dG9tOiAwIG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG4gIGJvcmRlci1yaWdodDogMCBub25lO1xufVxuXG4uY2wtd2lkZ2V0LWltYWdlc3tcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogODUlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdmJhci10aGljayB7XG4gIHBhZGRpbmc6MXJlbVxufVxuXG4ucmVnaXN0ZXItaDEge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xufVxuXG4ucHJvZmlsZS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XG4gIC5oaWRlLW9uLWxhbmRzY2FwZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIHtcbiAgLmhpZGUtb24tcG9ydHJhaXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container\">\n    <h4>{{ title }} Assignment Home Page</h4>\n  </div>\n  <div class=\"container\">\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/profile/123\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"profile/123/website\">Website</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"profile/123/website/456/page\">Pages</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"profile/123/website/456/page/321/widget\">Widgets</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CS5610';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _assignment_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assignment/pipes/safe.pipe */ "./assignment/pipes/safe.pipe.ts");
/* harmony import */ var _assignment_pipes_order_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assignment/pipes/order-by-pipe.pipe */ "./assignment/pipes/order-by-pipe.pipe.ts");
/* harmony import */ var _assignment_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assignment/directives/sortable.directive */ "./assignment/directives/sortable.directive.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _service_user_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/user.service.client */ "./src/app/service/user.service.client.ts");
/* harmony import */ var _service_website_service_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/website.service.client */ "./src/app/service/website.service.client.ts");
/* harmony import */ var _service_page_service_client__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/page.service.client */ "./src/app/service/page.service.client.ts");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service/widget.service.client */ "./src/app/service/widget.service.client.ts");










// user components



// website components



// page components



// widget components






// client side services




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_13__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_14__["WebsiteEditComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_15__["WebsiteListComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_16__["PageNewComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_17__["PageEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_18__["PageListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_19__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_20__["WidgetEditComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_21__["WidgetListComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_22__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_23__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_24__["WidgetYoutubeComponent"],
                _assignment_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"],
                _assignment_pipes_order_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderByPipe"],
                _assignment_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_9__["SortableDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [
                _service_user_service_client__WEBPACK_IMPORTED_MODULE_25__["UserService"],
                _service_website_service_client__WEBPACK_IMPORTED_MODULE_26__["WebsiteService"],
                _service_page_service_client__WEBPACK_IMPORTED_MODULE_27__["PageService"],
                _service_widget_service_client__WEBPACK_IMPORTED_MODULE_28__["WidgetService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\" class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"navbar-brand\">Edit Page</a>\n    <a (click)=\"updatePage()\" class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"fas fa-check fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <label for=\"Edit-Page-Name\">Name</label>\n  <input id=\"Edit-Page-Name\" type=\"text\" class=\"form-control\" placeholder=\"Blog Post\" [(ngModel)]=\"page.name\"/>\n  <label for=\"Edit-Page-Title\">Title</label>\n  <input id=\"Edit-Page-Title\" type=\"text\" class=\"form-control\" placeholder=\"Page Description\" [(ngModel)]=\"page.description\"/>\n  <a class=\"btn btn-success btn-block mt-3\" (click)=\"updatePage()\">Update</a>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deletePage()\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"../../../../\" class=\"navbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _service_page_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/page.service.client */ "./src/app/service/page.service.client.ts");





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__["Page"]('', '', '', '');
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.pageService.findPageById(_this.pageId).subscribe(function (page) {
                _this.page = page;
            }, function (error) { return console.log(error); });
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        this.pageService.updatePage(this.pageId, this.page).subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_page_service_client__WEBPACK_IMPORTED_MODULE_4__["PageService"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../../\" class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"navbar-brand\">Pages</a>\n    <a routerLink=\"./new\" class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"fas fa-plus fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n  <ul class=\"list-group list-group-flush\" *ngFor=\"let p of pages\">\n    <li class=\"list-group-item\">\n      <a routerLink=\"./{{p._id}}/widget\">{{p.name}}</a>\n      <a routerLink=\"./{{p._id}}\"><span class=\"fas fa-cog fontawsome_icon float-right icon-padding\"></span></a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink='../../' class=\"navbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/page.service.client */ "./src/app/service/page.service.client.ts");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageService.findPageByWebsiteId(params['wid']).subscribe(function (pages) {
                _this.pages = pages;
            }, function (error) { return console.log(error); });
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\" class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"navbar-brand\">Edit Page</a>\n    <button (click)=\"createPage()\" [disabled]=\"!p.valid\" class=\"btn btn-light float-right cl-icon-padding\">\n      <span class=\"fas fa-check fontawsome_icon\"></span>\n    </button>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <form (ngSubmit)=\"createPage()\" #p=\"ngForm\">\n    <label for=\"New-Page-Name\">Name</label>\n    <input id=\"New-Page-Name\" type=\"text\" class=\"form-control\" placeholder=\"Page Name\" name=\"pageName\" ngModel required #pageName=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!pageName.valid && pageName.touched\">\n      Please enter page name!\n    </span>\n    <label for=\"New-Page-Title\">Title</label>\n    <input id=\"New-Page-Title\" type=\"text\" class=\"form-control\" placeholder=\"Page Title\" name=\"pageDescription\" [(ngModel)]=\"pageDescription\"/>\n    <button class=\"btn btn-primary btn-block mt-3\" type=\"submit\" [disabled]=\"!p.valid\">Create</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"../../../../\" class=\"navbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _service_page_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/page.service.client */ "./src/app/service/page.service.client.ts");






var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
        });
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        this.pageName = this.pageForm.value.pageName;
        this.pageDescription = this.pageForm.value.pageDescription;
        var page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', this.pageName, this.websiteId, this.pageDescription);
        this.pageService.createPage(this.websiteId, page).subscribe(function (data) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('p'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/components/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_page_service_client__WEBPACK_IMPORTED_MODULE_5__["PageService"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-padding\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/user.service.client */ "./src/app/service/user.service.client.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                _this.router.navigate(['/profile', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        }, function (error) { return console.log(error); });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a class=\"navbar-brand\" href=\"#\">Profile</a>\n    <div class=\"justify-content-end\">\n      <a (click)=\"updateUser()\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n        <span class=\"fas fa-check fontawsome_icon\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n\n  <div *ngIf=\"updateFlag\" class=\"alert alert-success\">\n    {{updateMsg}}\n  </div>\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h4 class=\"font-weight-light font-italic text-secondary\">Hello {{user.username}}!</h4>\n  <div class=\"form-group\">\n    <label for=\"Username\">Username</label>\n    <input id=\"Username\" type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" [(ngModel)]=\"user.username\"/>\n    <label for=\"Password\">Password</label>\n    <input id=\"Password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"user.password\"/>\n    <label for=\"FirstName\">First Name</label>\n    <input id=\"FirstName\" type=\"text\" class=\"form-control\" name=\"firstname\" placeholder=\"first name\" [(ngModel)]=\"user.firstName\"/>\n    <label for=\"LastName\">Last Name</label>\n    <input id=\"LastName\" type=\"text\" class=\"form-control\" name=\"lastname\" placeholder=\"last name\" [(ngModel)]=\"user.lastName\"/>\n  </div>\n  <div class=\"form-group\"><a class=\"btn btn-success btn-block\" (click)=\"updateUser()\">Update</a></div>\n  <div class=\"form-group\"><a class=\"btn btn-warning btn-block\" (click)=\"deleteUser()\">Delete</a></div>\n  <span class=\"help-block\" *ngIf=\"updateFlag\"></span>\n  <div class=\"form-group\"><a class=\"btn btn-primary btn-block\" routerLink='/profile/{{user._id}}/website'>Websites</a></div>\n  <div class=\"form-group\"><a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</a></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _service_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/user.service.client */ "./src/app/service/user.service.client.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.updateFlag = false;
        this.updateMsg = 'Profile updated!';
        this.errorFlag = false;
        this.errorMsg = 'Username and Password cannot be empty!';
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
            }, function (error) { return console.log('PROFILE:\n' + error); });
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        if (this.user.username && this.user.password) {
            this.userService.updateUser(this.userId, this.user).subscribe(function (user) {
                _this.user = user;
                _this.updateFlag = true;
            }, function (error) { return console.log(error); });
        }
        else {
            this.errorFlag = true;
        }
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.userId).subscribe(function () {
            _this.router.navigate(['/login']);
        }, function (error) { return console.log(error); });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container container-padding\">\n  <h1>Register</h1>\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form (ngSubmit)=\"register()\" #r=\"ngForm\">\n    <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"username\" name=\"username\" ngModel required #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n    </div>\n\n    <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"password\" name=\"password\" ngModel required #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n    </div>\n\n    <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"verify password\" name=\"vpassword\" ngModel required #vpassword=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!vpassword.valid && vpassword.touched\">\n      Please verify password!\n    </span>\n    </div>\n\n    <div class=\"form-group\">\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!r.valid\">Register</button>\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _service_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/user.service.client */ "./src/app/service/user.service.client.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Password mismatching!';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.vpassword = this.registerForm.value.vpassword;
        if (this.vpassword === this.password) {
            var user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]('', this.username, this.password, '', '');
            this.userService.createUser(user).subscribe(function (data) {
                _this.errorFlag = false;
                _this.router.navigate(['/profile', data._id]);
            }, function (error) { return console.log(error); });
        }
        else {
            this.errorFlag = true;
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('r'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid row\">\n    <div class=\"col-sm-4\">\n      <div class=\"container-fluid\">\n        <a routerLink='../' class=\"navbar-link mr-3\">\n          <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n        </a>\n        <a routerLink='../' class=\"navbar-brand\">Websites</a>\n        <a routerLink='../new' class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n          <span class=\"fas fa-plus fontawsome_icon\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8 mx-auto\">\n      <div class=\"container-fluid\">\n        <a routerLink='./' class=\"cl-text-white navbar-brand cl-text-bold\">Edit Website</a>\n        <a (click)=\"updateWebsite()\" class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n          <span class=\"fas fa-check fontawsome_icon\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid row\">\n  <div class=\"col-sm-4 border-right\">\n    <ul class=\"list-group list-group-flush\" *ngFor=\"let web of websites\">\n      <li class=\"list-group-item\">\n        <a routerLink=\"./{{web._id}}\"><span class=\"fas fa-cog fontawsome_icon float-right icon-padding\"></span></a>\n        <a routerLink=\"./{{web._id}}/page\">{{web.name}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-8 mx-auto\">\n    <div class=\"container-fluid\">\n      <label for=\"Edit-Website-Name\">Website Name</label>\n      <input id=\"Edit-Website-Name\" type=\"text\" class=\"form-control\" placeholder=\"Blogger\" [(ngModel)]=\"website.name\"/>\n      <label for=\"Edit-Website-Description\">Website Description</label>\n      <textarea id=\"Edit-Website-Description\" class=\"form-control\" rows=\"5\"\n                placeholder=\"Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries. It was developed by Pyra Labs, which was bought by Google in 2003. The blogs are hosted by Google and generally accessed from a subdomain of blogspot.com...\"\n                [(ngModel)]=\"website.description\"></textarea>\n    </div>\n    <div class=\"container-fluid mt-3\">\n      <a class=\"btn btn-success btn-block\" (click)=\"updateWebsite()\">Update</a>\n      <a class=\"btn btn-danger btn-block\" (click)=\"deleteWebsite()\">Delete</a>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container-fluid justify-content-end\">\n      <a routerLink='../../' class=\"navbar-link navbar-text cl-icon-padding\">\n        <span class=\"fas fa-user fontawsome_icon\"></span>\n      </a>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _service_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/website.service.client */ "./src/app/service/website.service.client.ts");





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.websiteService.findWebsiteById(_this.websiteId).subscribe(function (website) {
                _this.website = website;
            }, function (error) { return console.log(error); });
            _this.websiteService.findWebsitesByUser(params['uid']).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) { return console.log(error); });
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        this.websiteService.updateWebsite(this.websiteId, this.website).subscribe(function (website) {
            _this.website = website;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\" class=\"navbar-text white-text pull-left icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"navbar-brand\">Websites</a>\n    <a routerLink=\"./new\" class=\"navbar-text white-text pull-right icon-padding\">\n      <span class=\"fas fa-plus fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n  <ul class=\"list-group list-group-flush\" *ngFor=\"let web of websites\">\n    <li class=\"list-group-item\">\n      <a routerLink=\"./{{web._id}}\"><span class=\"fas fa-cog fontawsome_icon float-right icon-padding\"></span></a>\n      <a routerLink=\"./{{web._id}}/page\">{{web.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"../\" class=\"avbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/website.service.client */ "./src/app/service/website.service.client.ts");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, route) {
        this.websiteService = websiteService;
        this.route = route;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.websiteService.findWebsitesByUser(params['userId']).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) { return console.log(error); });
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid row\">\n    <div class=\"col-sm-4\">\n      <div class=\"container-fluid\">\n        <a routerLink='../' class=\"navbar-link mr-3\">\n          <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n        </a>\n        <a routerLink='../' class=\"navbar-brand\">Websites</a>\n        <a routerLink='../new' class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n          <span class=\"fas fa-plus fontawsome_icon\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8 mx-auto\">\n      <div class=\"container-fluid\">\n        <a routerLink='./' class=\"cl-text-white navbar-brand cl-text-bold\">Edit Website</a>\n        <button (click)=\"createWebsite()\" [disabled]=\"!w.valid\" class=\"btn btn-light float-right cl-icon-padding\">\n          <span class=\"fas fa-check fontawsome_icon\"></span>\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid row\">\n  <div class=\"col-sm-4 border-right\">\n    <ul class=\"list-group list-group-flush\" *ngFor=\"let web of websites\">\n      <li class=\"list-group-item\">\n        <a routerLink=\"./{{web._id}}\"><span class=\"fas fa-cog fontawsome_icon float-right icon-padding\"></span></a>\n        <a routerLink=\"../{{web._id}}/page\">{{web.name}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-8 container-padding\">\n    <form (ngSubmit)=\"createWebsite()\" #w=\"ngForm\">\n      <label for=\"Website-Name\">Name</label>\n      <input id=\"Website-Name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"websiteName\"\n             ngModel required #websiteName=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!websiteName.valid && websiteName.touched\">\n        Please enter website name!\n      </span>\n      <label for=\"Website-Description\">Description</label>\n      <textarea id=\"Website-Description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"\n                name=\"websiteDescription\" [(ngModel)]=\"websiteDescription\">\n      </textarea>\n      <button class=\"btn btn-primary btn-block mt-3\" type=\"submit\" [disabled]=\"!w.valid\">Create</button>\n    </form>\n  </div>\n</div>\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink='../../' class=\"navbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _service_website_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/website.service.client */ "./src/app/service/website.service.client.ts");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.developerId = params['userId'];
            _this.websiteService.findWebsitesByUser(_this.developerId).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) { return console.log(error); });
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        this.websiteName = this.webForm.value.websiteName;
        this.websiteDescription = this.webForm.value.websiteDescription;
        var website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_4__["Website"]('', this.websiteName, this.developerId, this.websiteDescription);
        this.websiteService.createWebsite(this.developerId, website).subscribe(function (data) {
            _this.router.navigate(['/profile', _this.developerId, 'website']);
        }, function (error) { return console.log(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('w'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WebsiteNewComponent.prototype, "webForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_website_service_client__WEBPACK_IMPORTED_MODULE_5__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\" class=\"navbar-text white-text pull-left icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"navbar-brand\">Choose Widget</a>\n    <a routerLink=\"./\" class=\"navbar-text white-text pull-right icon-padding\">\n      <span class=\"fas fa-cogs fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <a (click)=\"createWidget('HEADING')\">Header</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a (click)=\"createWidget('HTML')\">HTML</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a (click)=\"createWidget('IMAGE')\">Image</a>\n    </li>\n    <li class=\"list-group-item\">\n      <a (click)=\"createWidget('YOUTUBE')\">YouTube</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"../../../../../../\" class=\"avbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");





var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageId = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (type) {
        var _this = this;
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('', type, this.pageId, null, null, null, null);
        this.widgetService.createWidget(this.pageId, widget).subscribe(function (data) {
            widget = data;
            _this.router.navigate(['../', widget._id], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">-->\n  <!--<div class = \"container-fluid row\">-->\n    <!--<a routerLink=\"../\" class=\"navbar-text white-text pull-left icon-padding\">-->\n      <!--<span class=\"fas fa-chevron-left fontawsome_icon\"></span>-->\n    <!--</a>-->\n    <!--<a routerLink=\"./\" class=\"navbar-brand\">Widget Edit</a>-->\n    <!--<a (click)=\"updateWidget()\" class=\"black-text navbar-text pull-right icon-padding\">-->\n      <!--<span class=\"glyphicon glyphicon-ok\"></span>-->\n    <!--</a>-->\n  <!--</div>-->\n<!--</nav>-->\n\n<!--<div class=\"container container-padding\">-->\n  <!--<div [ngSwitch]=\"widget.widgetType\">-->\n    <!--<div *ngSwitchCase=\"'HEADING'\">-->\n      <!--<app-widget-header></app-widget-header>-->\n    <!--</div>-->\n    <!--<div *ngSwitchCase=\"'IMAGE'\">-->\n      <!--<app-widget-image></app-widget-image>-->\n    <!--</div>-->\n    <!--<div *ngSwitchCase=\"'YOUTUBE'\">-->\n      <!--<app-widget-youtube></app-widget-youtube>-->\n    <!--</div>-->\n    <!--<div *ngSwitchCase=\"'HTML'\">-->\n      <!--<h3>Currently not support HTML update.</h3>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<a class=\"btn btn-success btn-block mt-2\" (click)=\"updateWidget()\">Update</a>-->\n  <!--<a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>-->\n<!--</div>-->\n\n<!--<nav class=\"navbar navbar-fixed-bottom navbar-expand-lg navbar-light bg-light\">-->\n  <!--<div class=\"container-fluid justify-content-end\">-->\n    <!--<a routerLink=\"../../../../../../\" class=\"avbar-link navbar-text cl-icon-padding\">-->\n      <!--<span class=\"fas fa-user fontawsome_icon\"></span>-->\n    <!--</a>-->\n  <!--</div>-->\n<!--</nav>-->\n\n<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'TEXT'\">\n    <h3>Currently not support HTML update.</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");





var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('', '', '', 1, '', '', '');
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkZXIvd2lkZ2V0LWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<label class=\"mt-1\" for=\"WidgetHeaderName\">WidgetId</label>-->\n<!--<input id=\"WidgetHeaderName\" type=\"text\" class=\"form-control\" placeholder=\"{{widget._id}}\" disabled/>-->\n<!--<label class=\"mt-1\" for=\"WidgetHeaderText\">Text</label>-->\n<!--<input id=\"WidgetHeaderText\" type=\"text\" class=\"form-control\" placeholder=\"Text\" [(ngModel)]=\"widget.text\"/>-->\n<!--<label class=\"mt-1\" for=\"WidgetHeaderSize\">Size</label>-->\n<!--<input id=\"WidgetHeaderSize\" type=\"text\" class=\"form-control\" placeholder=\"3\" [(ngModel)]=\"widget.size\"/>-->\n\n<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\" class=\"navbar-text white-text pull-left icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"navbar-brand\">Widget Edit</a>\n    <a (click)=\"updateWidget()\" class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"fas fa-check fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <label for=\"WidgetHeaderName\">WidgetId (Cannot change)</label>\n  <input id=\"WidgetHeaderName\" type=\"text\" class=\"form-control\" placeholder=\"{{widget._id}}\" disabled/>\n  <label for=\"WidgetHeaderText\">Text</label>\n  <input id=\"WidgetHeaderText\" type=\"text\" class=\"form-control\" placeholder=\"Text\" [(ngModel)]=\"widget.text\"/>\n  <label for=\"WidgetHeaderSize\">Size</label>\n  <input id=\"WidgetHeaderSize\" type=\"text\" class=\"form-control\" placeholder=\"3\" [(ngModel)]=\"widget.size\"/>\n\n  <a class=\"btn btn-success btn-block mt-2\" (click)=\"updateWidget()\">\n    Update\n  </a>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">\n    Delete\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"../../../../../../\" class=\"avbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('', '', '', 1, '', '', '');
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<label class=\"mt-1\" for=\"WidgetImageName\">WidgetId</label>-->\n<!--<input id=\"WidgetImageName\" type=\"text\" class=\"form-control\" placeholder=\"{{widget._id}}\" disabled/>-->\n<!--<label class=\"mt-1\" for=\"WidgetImageURL\">URL</label>-->\n<!--<input class=\"mt-1\" id=\"WidgetImageURL\" type=\"url\" class=\"form-control\" placeholder=\"URL\" [(ngModel)]=\"widget.url\"/>-->\n<!--<label for=\"WidgetImageWidth\">Width</label>-->\n<!--<input id=\"WidgetImageWidth\" type=\"text\" class=\"form-control\" placeholder=\"100%\" [(ngModel)]=\"widget.width\"/>-->\n<!--<label class=\"mt-1\" for=\"WidgetImageUpload\">Upload</label>-->\n<!--<input id=\"WidgetImageUpload\" type=\"file\" class=\"form-control\" placeholder=\"No file chosen\"/>-->\n<!--<a class=\"btn btn-primary btn-block mt-1\" routerLink=\"./\">Upload Image</a>-->\n\n<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\" class=\"navbar-text white-text pull-left icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"navbar-brand\">Widget Edit</a>\n    <a (click)=\"updateWidget()\" class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"fas fa-check fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding mt-1\">\n  <form>\n    <label for=\"WidgetImageName\">WidgetId (Cannot change)</label>\n    <input id=\"WidgetImageName\" name=\"WidgetImageName\" type=\"text\" class=\"form-control\" placeholder=\"{{widget._id}}\" disabled/>\n    <label for=\"WidgetImageURL\">URL</label>\n    <input id=\"WidgetImageURL\" name=\"WidgetImageURL\" type=\"url\" class=\"form-control\" placeholder=\"URL\" [(ngModel)]=\"widget.url\"/>\n    <label for=\"WidgetImageWidth\">Width</label>\n    <input id=\"WidgetImageWidth\" name=\"WidgetImageWidth\" type=\"text\" class=\"form-control\" placeholder=\"100%\" [(ngModel)]=\"widget.width\"/>\n  </form>\n\n  <label for=\"WidgetImageUpload\">Upload</label>\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <input  name=\"myFile\" id=\"WidgetImageUpload\" placeholder=\"No file chosen\" type=\"file\" class=\"form-control\"/>\n    <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n    <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n    <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n    <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n    <button type=\"submit\" class=\"btn btn-block btn-primary mt-2\">Upload Image</button>\n  </form>\n\n  <a class=\"btn btn-success btn-block mt-2\" (click)=\"updateWidget()\">\n    Update\n  </a>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">\n    Delete\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"../../../../../../\" class=\"avbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', '', 1, '', '', '');
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.userId = params['userId'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_widget_service_client__WEBPACK_IMPORTED_MODULE_5__["WidgetService"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<label class=\"mt-1\" for=\"WidgetYoutubeName\">WidgetId</label>-->\n<!--<input id=\"WidgetYoutubeName\" type=\"text\" class=\"form-control\" placeholder=\"{{widget._id}}\" disabled/>-->\n<!--<label class=\"mt-1\" for=\"WidgetYoutubeURL\">URL</label>-->\n<!--<input id=\"WidgetYoutubeURL\" type=\"url\" class=\"form-control\" placeholder=\"URL\" [(ngModel)]=\"widget.url\"/>-->\n<!--<label class=\"mt-1\" for=\"WidgetYoutubeWidth\">Width</label>-->\n<!--<input id=\"WidgetYoutubeWidth\" type=\"text\" class=\"form-control\" placeholder=\"100%\" [(ngModel)]=\"widget.width\"/>-->\n\n<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\" class=\"navbar-text white-text pull-left icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"navbar-brand\">Widget Edit</a>\n    <a (click)=\"updateWidget()\" class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"fas fa-check fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <label for=\"WidgetYoutubeName\">WidgetId (Cannot change)</label>\n  <input id=\"WidgetYoutubeName\" type=\"text\" class=\"form-control\" placeholder=\"{{widget._id}}\" disabled/>\n  <label for=\"WidgetYoutubeURL\">URL</label>\n  <input id=\"WidgetYoutubeURL\" type=\"url\" class=\"form-control\" placeholder=\"URL\" [(ngModel)]=\"widget.url\"/>\n  <label for=\"WidgetYoutubeWidth\">Width</label>\n  <input id=\"WidgetYoutubeWidth\" type=\"text\" class=\"form-control\" placeholder=\"100%\" [(ngModel)]=\"widget.width\"/>\n\n  <a class=\"btn btn-success btn-block mt-2\" (click)=\"updateWidget()\">\n    Update\n  </a>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">\n    Delete\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"../../../../../../\" class=\"avbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('', '', '', 1, '', '', '');
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (widget) {
            console.log(widget);
            _this.widget = widget;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">-->\n  <!--<div class = \"container-fluid row\">-->\n    <!--<a routerLink=\"../../\" class=\"navbar-text black-text pull-left icon-padding\">-->\n      <!--<span class=\"fas fa-chevron-left fontawsome_icon\"></span>-->\n    <!--</a>-->\n    <!--<a routerLink=\"./\" class=\"navbar-brand\">Widgets</a>-->\n    <!--<a routerLink=\"./new\" class=\"black-text navbar-text pull-right icon-padding\">-->\n      <!--<span class=\"fas fa-plus fontawsome_icon\"></span>-->\n    <!--</a>-->\n  <!--</div>-->\n<!--</nav>-->\n\n<!--<div class=\"container container-padding\">-->\n  <!--<div class=\"widget\" *ngFor=\"let wid of widgets\">-->\n    <!--<div class=\"widget-icons\">-->\n      <!--<a routerLink=\"./{{wid._id}}\" class=\"pull-right\">-->\n      <!--<span class=\"fas fa-bars fontawsome_icon float-right\"></span>-->\n      <!--</a>-->\n      <!--<a routerLink=\"./{{wid._id}}\" class=\"pull-right\">-->\n        <!--<span class=\"fas fa-cog fontawsome_icon float-right\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n    <!--<div [ngSwitch]=\"wid.widgetType\">-->\n      <!--<div *ngSwitchCase=\"'HTML'\">-->\n        <!--<p>{{wid.text}}</p>-->\n      <!--</div>-->\n      <!--<div *ngSwitchCase=\"'HEADING'\">-->\n        <!--<div [ngSwitch]=\"wid.size\">-->\n          <!--<div *ngSwitchCase=\"'1'\">-->\n            <!--<h1>{{wid.text}}</h1>-->\n          <!--</div>-->\n          <!--<div *ngSwitchCase=\"'2'\">-->\n            <!--<h2>{{wid.text}}</h2>-->\n          <!--</div>-->\n          <!--<div *ngSwitchCase=\"'3'\">-->\n            <!--<h3>{{wid.text}}</h3>-->\n          <!--</div>-->\n          <!--<div *ngSwitchCase=\"'4'\">-->\n            <!--<h4>{{wid.text}}</h4>-->\n          <!--</div>-->\n          <!--<div *ngSwitchCase=\"'5'\">-->\n            <!--<h5>{{wid.text}}</h5>-->\n          <!--</div>-->\n          <!--<div *ngSwitchCase=\"'6'\">-->\n            <!--<h6>{{wid.text}}</h6>-->\n          <!--</div>-->\n          <!--<div *ngSwitchDefault>-->\n            <!--<h1>{{wid.text}}</h1>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n      <!--<div *ngSwitchCase=\"'IMAGE'\">-->\n        <!--<img class=\"img-responsive img-rounded cl-widget-images\" width=\"{{wid.width}}\" [src]=\"wid.url | safe\">-->\n      <!--</div>-->\n      <!--<div *ngSwitchCase=\"'YOUTUBE'\">-->\n        <!--<div class=\"embed-responsive embed-responsive-16by9\">-->\n          <!--<iframe width=\"{{wid.width}}\" height=\"315\" [src]=\"wid.url | safe\" frameborder=\"0\" allowfullscreen></iframe>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!--<nav class=\"navbar navbar-fixed-bottom navbar-light bg-light\">-->\n  <!--<div>-->\n    <!--<a href=\"#\" class=\"navbar-link navbar-text cl-icon-padding mr-3\">-->\n      <!--<span class=\"fas fa-play fontawsome_icon\"></span>-->\n    <!--</a>-->\n    <!--<a href=\"#\" class=\"navbar-link navbar-text cl-icon-padding\">-->\n      <!--<span class=\"fas fa-eye fontawsome_icon\"></span>-->\n    <!--</a>-->\n  <!--</div>-->\n  <!--<div class=\"justify-content-end\">-->\n    <!--<a routerLink=\"../../../../../\" class=\"navbar-text pull-right icon-padding\">-->\n      <!--<span class=\"fas fa-user fontawsome_icon\"></span>-->\n    <!--</a>-->\n  <!--</div>-->\n<!--</nav>-->\n\n<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../../\" class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"navbar-brand\">Widgets</a>\n    <a routerLink=\"./new\" class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"fas fa-plus fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <ul class=\"ul-no-style\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n    <li class=\"widget\" *ngFor=\"let wid of widgets | orderBy\">\n      <div class=\"widget-icons\">\n        <a routerLink=\"./{{wid._id}}\" class=\"pull-right\">\n          <span class=\"fas fa-bars fontawsome_icon float-right\"></span>\n        </a>\n        <a routerLink=\"./{{wid._id}}\" class=\"pull-right\">\n          <span class=\"fas fa-cog fontawsome_icon float-right\"></span>\n        </a>\n      </div>\n      <div [ngSwitch]=\"wid.widgetType\">\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div [ngSwitch]=\"wid.size\">\n            <div *ngSwitchCase=\"'1'\">\n              <h1>{{wid.text}}</h1>\n            </div>\n            <div *ngSwitchCase=\"'2'\">\n              <h2>{{wid.text}}</h2>\n            </div>\n            <div *ngSwitchCase=\"'3'\">\n              <h3>{{wid.text}}</h3>\n            </div>\n            <div *ngSwitchCase=\"'4'\">\n              <h4>{{wid.text}}</h4>\n            </div>\n            <div *ngSwitchCase=\"'5'\">\n              <h5>{{wid.text}}</h5>\n            </div>\n            <div *ngSwitchCase=\"'6'\">\n              <h6>{{wid.text}}</h6>\n            </div>\n            <div *ngSwitchDefault>\n              <h1>{{wid.text}}</h1>\n            </div>\n          </div>\n        </div>\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <img class=\"img-responsive widget-image\" [width]= \"wid.width\" [src]=\"wid.url\"/>\n        </div>\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe width=\"560\" height=\"315\" [src]=\"wid.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-light\">\n  <div>\n    <a href=\"#\" class=\"navbar-link navbar-text cl-icon-padding mr-3\">\n      <span class=\"fas fa-play fontawsome_icon\"></span>\n    </a>\n    <a href=\"#\" class=\"navbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-eye fontawsome_icon\"></span>\n    </a>\n  </div>\n  <div class=\"justify-content-end\">\n    <a routerLink=\"../../../../../\" class=\"navbar-text pull-right icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/widget.service.client */ "./src/app/service/widget.service.client.ts");




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pageId).subscribe(function (widgets) {
                _this.widgets = widgets;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        var _this = this;
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(function (data) {
            console.log(data);
            _this.widgets = data;
        });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(id, name, websiteId, description) {
        this._id = id;
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(id, widgetType, pageId, size, text, width, url) {
        this._id = id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.width = width;
        this.url = url;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/service/page.service.client.ts":
/*!************************************************!*\
  !*** ./src/app/service/page.service.client.ts ***!
  \************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");



// import {environment} from '../../environments/environment';

var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page');
    };
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId);
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, page);
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/service/user.service.client.ts":
/*!************************************************!*\
  !*** ./src/app/service/user.service.client.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");



// import {environment} from '../../environments/environment';

var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user/?username=' + username);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user/?username=' + username + '&password=' + password);
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.login = function (username, password) {
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/login', body);
    };
    UserService.prototype.register = function (username, password) {
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/user', body);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/service/website.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/service/website.service.client.ts ***!
  \***************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");



// import {environment} from '../../environments/environment';

var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website');
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put(this.baseUrl + '/api/website/' + websiteId, website);
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/service/widget.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/service/widget.service.client.ts ***!
  \**************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");



// import {environment} from '../../environments/environment';

var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget);
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId);
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        // const url = 'http://localhost:3200/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        var url = 'https://webdev-zhe-cs5610.herokuapp.com' + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this._http.put(url, '');
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    // production: false,
    baseUrl: 'https://webdev-zhe-cs5610.herokuapp.com'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // production: true,
    baseUrl: 'http://localhost:3200'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zhefeng/NEU/2019Spring/WebDev/my-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map