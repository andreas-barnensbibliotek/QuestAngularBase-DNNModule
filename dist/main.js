(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/Http/interceptor.ts":
/*!*********************************!*\
  !*** ./src/Http/interceptor.ts ***!
  \*********************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_DNN_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/DNN/context.service */ "./src/Service/DNN/context.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Interceptor = /** @class */ (function () {
    function Interceptor(context) {
        this.context = context;
        context.autoConfigure();
    }
    Interceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return this.context.all$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(10)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (ctx) {
            console.log('TCL: Interceptor -> ctx.antiForgeryToken -------------->', ctx.antiForgeryToken);
            var newReq = req.clone({
                setHeaders: {
                    ModuleId: _this.context._moduleId.toString(),
                    TabId: ctx.tabId.toString(),
                    RequestVerificationToken: ctx.antiForgeryToken,
                    userid: _this.context._userId,
                    'X-Debugging-Hint': 'bootstrapped by bbAngular, 2SXC, OPSI',
                }
            });
            return next.handle(newReq);
        }));
    };
    Interceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_Service_DNN_context_service__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "./src/Service/DNN/context.service.ts":
/*!********************************************!*\
  !*** ./src/Service/DNN/context.service.ts ***!
  \********************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _dev_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev-context */ "./src/Service/DNN/dev-context.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var Context = /** @class */ (function () {
    function Context(devSettings) {
        this.devSettings = devSettings;
        // todo: probably should set the replay-buffer to 1 for all the following, but must test!
        // private cbIdSubject = new ReplaySubject<number>(1);
        this.tidSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.afTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._properties = {};
        this._moduleId = "";
        this._userId = "";
        this.tabId$ = this.tidSubject.asObservable();
        this.antiForgeryToken$ = this.afTokenSubject.asObservable();
        this.all$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.tabId$, // wait for tabId
        this.antiForgeryToken$) // wait for security token
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return ({
            tabId: res[0],
            antiForgeryToken: res[1]
        }); }));
        var MODULE = 'aj_angularUppdragsAdmin';
        // Dev settings with minimal ignore settings.
        this.devSettings = Object.assign({}, {
            ignoreMissing$2sxc: false,
            ignoreMissingServicesFramework: false
        }, devSettings);
        if (window && window[MODULE]) {
            this._properties = window[MODULE];
            console.log('​-----------------------------------------------------------------------');
            console.log('​DnnContextService -> constructor -> this._properties', this._properties);
            console.log('​-----------------------------------------------------------------------');
        }
        else {
            console.log('----------------------');
            console.log('ERROR: Missing window[MODULE] for DNN');
            console.log('----------------------');
        }
    }
    Context.prototype.autoConfigure = function () {
        var _this = this;
        this._moduleId = this._properties.ModuleId;
        this._userId = this._properties.UserId;
        // Check if DNN Services framework exists.
        if (window.$ && window.$.ServicesFramework) {
            // Run timer till sf is ready, but max for a second.
            var t_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 100)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(10))
                .subscribe(function (x) {
                // This must be accessed after a delay, as the SF is not ready yet.
                var sf = window.$.ServicesFramework();
                console.log('TCL: ----------------------------');
                console.log('TCL: autoConfigure -> sf', sf);
                console.log('TCL: ----------------------------');
                // Check if sf is initialized.
                if (sf.getAntiForgeryValue() && sf.getTabId() !== -1) {
                    t_1.unsubscribe();
                    _this.tidSubject.next(sf.getTabId());
                    _this.afTokenSubject.next(sf.getAntiForgeryValue());
                }
                else {
                    // Must reset, as they are incorrectly initialized when accessed early.
                    if (window.dnn && window.dnn.vars && window.dnn.vars.length === 0) {
                        window.dnn.vars = null;
                    }
                }
            });
            return;
        }
        if (!this.devSettings.ignoreMissingServicesFramework) {
            throw new Error("\n                DNN Services Framework is missing, and it's not allowed according to devSettings.\n                Either set devSettings to ignore this, or ensure it's there");
        }
        this.tidSubject.next(this.devSettings.tabId);
        this.afTokenSubject.next(this.devSettings.antiForgeryToken);
    };
    Context = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        __metadata("design:paramtypes", [_dev_context__WEBPACK_IMPORTED_MODULE_0__["DevContext"]])
    ], Context);
    return Context;
}());



/***/ }),

/***/ "./src/Service/DNN/dev-context.ts":
/*!****************************************!*\
  !*** ./src/Service/DNN/dev-context.ts ***!
  \****************************************/
/*! exports provided: DevContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevContext", function() { return DevContext; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DevContext = /** @class */ (function () {
    function DevContext() {
        this.ignoreMissing$2sxc = false;
        this.ignoreMissingServicesFramework = false;
        this.forceUse = false;
        this.moduleId = 0;
        this.tabId = 0;
        this.path = '/';
    }
    DevContext = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DevContext);
    return DevContext;
}());



/***/ }),

/***/ "./src/Service/demo.service.ts":
/*!*************************************!*\
  !*** ./src/Service/demo.service.ts ***!
  \*************************************/
/*! exports provided: DemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoService", function() { return DemoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _DNN_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DNN/context.service */ "./src/Service/DNN/context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemoService = /** @class */ (function () {
    function DemoService(context, http) {
        this.context = context;
        this.http = http;
        //this._routingWebAPI = "/DesktopModules/Angular6Demo/API/"
        this._routingWebAPI = this.context._properties.routingWebAPI;
    }
    DemoService.prototype.getStagingOutputList = function () {
        var webAPIName = "item/HelloWorld";
        var getUrl = this._routingWebAPI + webAPIName;
        console.log('​---------------------------------');
        console.log('​StagingService -> getUrl', getUrl);
        console.log('​---------------------------------');
        return this.http.get(getUrl);
    };
    DemoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_DNN_context_service__WEBPACK_IMPORTED_MODULE_2__["Context"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DemoService);
    return DemoService;
}());



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
/* harmony import */ var _quest_main_quest_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quest-main/quest-main.component */ "./src/app/quest-main/quest-main.component.ts");
/* harmony import */ var _quest_list_quest_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quest-list/quest-list.component */ "./src/app/quest-list/quest-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _quest_list_quest_list_component__WEBPACK_IMPORTED_MODULE_1__["QuestListComponent"] },
    { path: 'list', component: _quest_list_quest_list_component__WEBPACK_IMPORTED_MODULE_1__["QuestListComponent"] },
    { path: 'detail', component: _quest_main_quest_main_component__WEBPACK_IMPORTED_MODULE_0__["QuestMainComponent"] },
    { path: 'detail/:id', component: _quest_main_quest_main_component__WEBPACK_IMPORTED_MODULE_0__["QuestMainComponent"] },
    { path: '**', component: _quest_list_quest_list_component__WEBPACK_IMPORTED_MODULE_1__["QuestListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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

module.exports = "#showbadgeImage{max-width: 50px;}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_demo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/demo.service */ "./src/Service/demo.service.ts");
/* harmony import */ var _Service_DNN_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/DNN/context.service */ "./src/Service/DNN/context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(context, _demoService) {
        this.context = context;
        this._demoService = _demoService;
        this.title = 'template Angular for DNN7-DNN8-DNN9';
        this.webapiResult = '';
        context.autoConfigure();
    }
    AppComponent.prototype.getDataFromWebAPI = function () {
        var _this = this;
        this._demoService.getStagingOutputList().subscribe(function (data) {
            _this.webapiResult = data;
            console.log('​---------------------------------');
            console.log('Call webapi data -> data: ', data);
            console.log('​---------------------------------');
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('​---------------------------------');
                console.log('Call webapi error -> ERROR: ', err.error);
                console.log('​---------------------------------');
            }
            else {
                console.log('​---------------------------------');
                console.log('Call webapi error -> ERROR: ', err.error);
                console.log('​---------------------------------');
            }
        });
    };
    AppComponent.prototype.log = function (par) {
        return JSON.stringify(par).toString();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_DNN_context_service__WEBPACK_IMPORTED_MODULE_2__["Context"], _Service_demo_service__WEBPACK_IMPORTED_MODULE_1__["DemoService"]])
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
/* harmony import */ var _quest_list_quest_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quest-list/quest-list.component */ "./src/app/quest-list/quest-list.component.ts");
/* harmony import */ var _checkbox_directive_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-directive.directive */ "./src/app/checkbox-directive.directive.ts");
/* harmony import */ var _quest_main_quest_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quest-main/quest-main.component */ "./src/app/quest-main/quest-main.component.ts");
/* harmony import */ var _quest_trigger_quest_trigger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quest-trigger/quest-trigger.component */ "./src/app/quest-trigger/quest-trigger.component.ts");
/* harmony import */ var _assets_appGlobalErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets/appGlobalErrorHandler */ "./src/assets/appGlobalErrorHandler.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Http_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Http/interceptor */ "./src/Http/interceptor.ts");
/* harmony import */ var _Service_demo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Service/demo.service */ "./src/Service/demo.service.ts");
/* harmony import */ var _Service_DNN_context_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Service/DNN/context.service */ "./src/Service/DNN/context.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _quest_trigger_quest_trigger_component__WEBPACK_IMPORTED_MODULE_3__["QuestTriggerComponent"],
                _quest_main_quest_main_component__WEBPACK_IMPORTED_MODULE_2__["QuestMainComponent"],
                _checkbox_directive_directive__WEBPACK_IMPORTED_MODULE_1__["CheckboxDirectiveDirective"],
                _quest_list_quest_list_component__WEBPACK_IMPORTED_MODULE_0__["QuestListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"]
            ],
            providers: [
                _Service_DNN_context_service__WEBPACK_IMPORTED_MODULE_13__["Context"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: _Http_interceptor__WEBPACK_IMPORTED_MODULE_11__["Interceptor"],
                    multi: true
                },
                _Service_demo_service__WEBPACK_IMPORTED_MODULE_12__["DemoService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"], useClass: _assets_appGlobalErrorHandler__WEBPACK_IMPORTED_MODULE_4__["AppGlobalErrorHandler"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checkbox-directive.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/checkbox-directive.directive.ts ***!
  \*************************************************/
/*! exports provided: CheckboxDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDirectiveDirective", function() { return CheckboxDirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxDirectiveDirective = /** @class */ (function () {
    function CheckboxDirectiveDirective(el) {
        this.el = el;
        this.checkModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CheckboxDirectiveDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.checked = this.checkModel == this.trueValue;
    };
    CheckboxDirectiveDirective.prototype.onChange = function (event) {
        this.checkModel = event.target.checked ? this.trueValue : this.falseValue;
        this.checkModelChange.emit(this.checkModel);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckboxDirectiveDirective.prototype, "checkModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckboxDirectiveDirective.prototype, "trueValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckboxDirectiveDirective.prototype, "falseValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CheckboxDirectiveDirective.prototype, "checkModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CheckboxDirectiveDirective.prototype, "onChange", null);
    CheckboxDirectiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'input[type=checkbox][checkModel]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CheckboxDirectiveDirective);
    return CheckboxDirectiveDirective;
}());



/***/ }),

/***/ "./src/app/quest-list/quest-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/quest-list/quest-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 \">\n        <h2 class=\"text-muted\">Uppdragslista</h2> \n        \n        <a  routerLink=\"/detail\" class=\"text-muted\">L&auml;gg till nytt uppdrag</a> \n        <ul class=\"list-group\">\n          <a *ngFor=\"let obj of QuestListObj.QuestList\" routerLink=\"detail/{{obj.AwardGroupId}}\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n            <div class=\"flex-column\">\n              {{obj.AwardName}}\n              <p><small>{{obj.AwardBeskrivning}}</small></p>\n            \n            </div>            \n            <div class=\"image-parent\">\n                <a routerLink=\"/list\" (click)=\"deleteQuest(obj.AwardGroupId)\" >Ta bort!</a> \n                <img src=\"{{obj.BadgeSrc}}\" class=\"img-fluid\" alt=\"Badge\">\n            </div>\n          </a>         \n        </ul>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/quest-list/quest-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/quest-list/quest-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-parent {\n  max-width: 70px;\n  min-width: 60px; }\n"

/***/ }),

/***/ "./src/app/quest-list/quest-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quest-list/quest-list.component.ts ***!
  \****************************************************/
/*! exports provided: QuestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestListComponent", function() { return QuestListComponent; });
/* harmony import */ var _assets_services_QuestApi_quest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/services/QuestApi/quest-api.service */ "./src/assets/services/QuestApi/quest-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestListComponent = /** @class */ (function () {
    function QuestListComponent(questService) {
        this.questService = questService;
        this.QuestListObj = {};
    }
    QuestListComponent.prototype.ngOnInit = function () {
        this.getquestList();
    };
    QuestListComponent.prototype.getquestList = function () {
        var _this = this;
        this.questService.getQuestList("getlist").subscribe(function (Response) { return _this.QuestListObj = Response; });
    };
    QuestListComponent.prototype.deleteQuest = function (AwardGroupId) {
        var _this = this;
        if (confirm(unescape('%E4') + "r du s" + unescape('%E4') + "ker p" + unescape('%E5') + " att du vill ta bort uppdraget? Id= " + AwardGroupId)) {
            var obj = this.questService.questobj();
            obj.AwardGroupId = AwardGroupId;
            this.questService.postDelQuest(obj).subscribe(function (Response) { return _this.getquestList(); });
            this.getquestList();
        }
        return false;
    };
    QuestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quest-list',
            template: __webpack_require__(/*! ./quest-list.component.html */ "./src/app/quest-list/quest-list.component.html"),
            styles: [__webpack_require__(/*! ./quest-list.component.scss */ "./src/app/quest-list/quest-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_assets_services_QuestApi_quest_api_service__WEBPACK_IMPORTED_MODULE_0__["QuestApiService"]])
    ], QuestListComponent);
    return QuestListComponent;
}());



/***/ }),

/***/ "./src/app/quest-main/quest-main.component.html":
/*!******************************************************!*\
  !*** ./src/app/quest-main/quest-main.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-2\">\n    <div class=\"col\">\n        <h2>Uppdragsadmin</h2>\n    </div>            \n  </div>  \n  <div class=\"row p-2\" style=\"background-color:#eee;\"> \n    <div class=\"col-sm-12 col-md-10\">          \n        <h3>Bokm&auml;rkelse</h3>\n        <label class=\"form-check-label\" >{{QuestObj.AwardGroupId}}</label>\n    </div>            \n    <div class=\"col-sm-12 col-md-2 text-right\">\n        <div class=\"form-check m-2\">\n            <input type=\"checkbox\" #chkActive id=\"chkActive\" class=\"form-check-input\" id=\"Active\"  [checked]=\"QuestObj.Active\" (change)=\"fixactiveToInt(chkActive.checked)\">\n            <label class=\"form-check-label\" for=\"Active\">Aktiv</label>\n        </div>\n    </div>    \n        \n    <div class=\"col-sm-12 col-md-8\">\n        \n        <div class=\"form-group\">\n            <label for=\"AwardName\">Bokm&auml;rkelsenamn* </label>\n            <input type=\"text\" [(ngModel)]=\"QuestObj.AwardName\" class=\"form-control\" id=\"AwardName\" aria-describedby=\"AwardNamelHelp\" placeholder=\"Ange medaljnamn\">\n            <small id=\"AwardNamelHelp\" class=\"form-text text-muted ml-1\"><i class=\"far fa-question-circle\"></i> Detta &auml;r bokm&auml;rkelsenamnet (namnet p&aring; medaljen) som ska synas i scoreboard</small>\n          \n          </div>\n        <div class=\"form-group\">                    \n            <label for=\"AwardBeskrivning\">Bokm&auml;rkelsebeskrivning*</label>\n            <input type=\"text\" [(ngModel)]=\"QuestObj.AwardBeskrivning\" class=\"form-control\" id=\"AwardBeskrivning\" aria-describedby=\"AwardBeskrivninglHelp\" placeholder=\"Ange medaljbeskrivning\">\n            <small id=\"AwardBeskrivninglHelp\" class=\"form-text text-muted ml-1\"><i class=\"far fa-question-circle\"></i> Detta &auml;r Bokm&auml;rkelsebeskrivningen som synas i alt-texten</small>                 \n        </div>\n        <div class=\"form-group\">                    \n            <label for=\"BadgeSrc\">Bokm&auml;rke (badge)*</label>\n            <input type=\"text\" [(ngModel)]=\"QuestObj.BadgeSrc\" class=\"form-control\" id=\"BadgeSrc\" aria-describedby=\"BadgeSrcHelp\" placeholder=\"Bokm&auml;rkes ikon\">\n            <small id=\"BadgeSrcHelp\" class=\"form-text text-muted ml-1\"><i class=\"far fa-question-circle\"></i> Url/src till bokm&auml;rketsikon</small>                 \n        </div>     \n              \n    </div>   \n    <div class=\"col-sm-12 col-md-4 text-center\">\n        <img id=\"showbadgeImage\" [src]=\"QuestObj.BadgeSrc\"/>\n    </div>\n  \n    <div class=\"col-sm-12 col-md-4 \">\n        <div class=\"form-group  \">                    \n            <label for=\"Level\">Bokm&auml;rkelse level</label>\n            <input type=\"text\" [(ngModel)]=\"QuestObj.Level\"  class=\"form-control col-2\" id=\"Level\" aria-describedby=\"LevelHelp\" value=\"1\">\n            <small id=\"LevelHelp\" class=\"form-text text-muted ml-1\"><i class=\"far fa-question-circle\"></i> Ange vilken level bokm&auml;rket avser. </small>\n        </div>\n    </div>  \n    <div class=\"col-sm-12 col-md-4 \">\n        <div class=\"form-group \">                    \n            <label for=\"Occurs\">Max level</label>\n            <input type=\"text\" [(ngModel)]=\"QuestObj.Occures\" class=\"form-control col-2\" id=\"Occurs\" aria-describedby=\"OccursHelp\" value=\"1\">\n            <small id=\"OccursHelp\" class=\"form-text text-muted ml-1\"><i class=\"far fa-question-circle\"></i> Ange max level f&ouml;r bokm&auml;rket. inneb&auml;r hur m&aring;nga levels man m&aring;ste g&ouml;ra innan man n&aring;r max.</small>\n        </div>\n    </div>                     \n    <div class=\"col-sm-12 col-md-4 \">                \n        <div class=\"form-group \">                    \n            <label for=\"AwardOccures\">Kan tilldelas (Antal ggr)</label>\n            <input type=\"text\" [(ngModel)]=\"QuestObj.AwardOccures\" class=\"form-control col-2\" id=\"AwardOccures\" aria-describedby=\"AwardOccuresHelp\" value=\"2\" >\n            <small id=\"AwardOccuresHelp\" class=\"form-text text-muted ml-1\"><i class=\"far fa-question-circle\"></i>Anger vart Bokm&auml;rket skall synas p&aring; scoreboard. (0 =Bokm&auml;rket kan tilldelas alla hur m&aring;nga g&aring;nger som helst, 1 bara en person (ex hightscore i quizer) (AwardOccures))</small>\n        </div>                               \n    </div>\n     \n    <div class=\"col-sm-12 col-md-4 \">\n        <div class=\"form-group \">                    \n            <label for=\"PointEarned\">Po&auml;ng per g&aring;ng</label>\n            <input type=\"text\" [(ngModel)]=\"QuestObj.PointEarned\" class=\"form-control col-2\" id=\"PointEarned\" aria-describedby=\"PointEarnedHelp\" value=\"1\" >\n            <small id=\"PointEarnedsHelp\" class=\"form-text text-muted ml-1\"><i class=\"far fa-question-circle\"></i> Hur m&aring;nga po&auml;ng man f&aring;r varje g&aring;ng man klarar uppdraget</small>\n        </div>                \n    </div>         \n    <div class=\"col-sm-12 col-md-4 \">\n        <div class=\"form-group \">                    \n            <label for=\"TotLevelUp\">Po&auml;ng f&ouml;r att: levelup</label>\n            <input type=\"text\" [(ngModel)]=\"QuestObj.TotLevelUp\"  class=\"form-control col-2\" id=\"TotLevelUp\" aria-describedby=\"TotLevelUpHelp\" value=\"1\">\n            <small id=\"TotLevelUpHelp\" class=\"form-text text-muted ml-1\"><i class=\"far fa-question-circle\"></i> Ange hur m&aring;nga po&auml;ng man m&aring;ste n&aring; f&ouml;r att g&aring; upp 1 level. </small>\n        </div>                \n    </div>\n  \n    <div class=\"col-sm-12 col-md-4 \">               \n        <div class=\"form-group\">\n            <label for=\"bibblomoneyID\">bibblomoney bel&ouml;ning</label>\n            <select id=\"bibblomoneyID\" [(ngModel)]=\"QuestObj.BibblomoneyEarnedID\" class=\"form-control col-4\">\n              <option value=\"1\">50</option>\n              <option value=\"2\">100</option>\n              <option value=\"3\">200</option>\n              <option value=\"4\">500</option>\n              <option value=\"5\">1000</option>\n              <option value=\"6\">1500</option>\n              <option value=\"7\">3000</option>\n              <option value=\"8\">5000</option>\n              <option value=\"9\">7500</option>\n              <option value=\"10\">10000</option>\n              <option value=\"11\">15000</option>\n              <option value=\"12\">20000</option>\n            </select>\n          </div>\n    </div>\n  </div>\n  \n  <div class=\"row p-2 mx-n2\">\n     <div class=\"col-sm-12 \">          \n        <h3>Uppdrag</h3>\n    </div>                       \n    <div class=\"col-sm-12 \">               \n        \n        <div class=\"form-group\">\n            <label for=\"Uppdragsnamn\">Huvuduppdrag*</label>\n            <input type=\"text\" [(ngModel)]=\"QuestObj.Uppdragsnamn\"  class=\"form-control\" id=\"Uppdragsnamn\" aria-describedby=\"UppdragsnamnHelp\" placeholder=\"Ange huvuduppdragets namn\">\n            <small id=\"UppdragsnamnHelp\" class=\"form-text text-muted ml-1\"><i class=\"far fa-question-circle\"></i> Detta &auml;r huvuduppdragets rubrik/namn</small>\n          </div>\n          <div class=\"form-group\">                    \n            <label for=\"Uppdragsbeskrivning\">Huvuduppdragsbeskrivning*</label>\n            <textarea class=\"form-control\" [(ngModel)]=\"QuestObj.Uppdragsbeskrivning\"  id=\"Uppdragsbeskrivning\" rows=\"5\"></textarea>\n            <small id=\"UppdragsbeskrivningHelp\" class=\"form-text text-muted ml-1\"><i class=\"far fa-question-circle\"></i> Detta &auml;r huvuduppdragsbeskrivningen</small>                 \n          </div>   \n          \n    </div>\n  </div>    \n  \n  <aj-quest-trigger [QuestObj]=\"QuestObj\" [badgeImg]=\"QuestObj.BadgeSrc\" [triggerobj]=\"QuestObj.QuestSubQuestList\" (triggerChange)=\"reloaddata()\"></aj-quest-trigger>          \n  \n  <div class=\"row mt-4 mb-4\">\n    \n    <div class=\"col-sm-8 \">\n        <hr>\n        <button type=\"button\" class=\"btn btn-success btn-lg m-1\" (click)=\"SparaQuestCloseEvent()\">Spara och st&auml;ng</button>\n        <button type=\"button\" class=\"btn btn-success btn-lg m-1\" (click)=\"SparaQuestEvent()\">Spara</button>        \n        <button type=\"button\" class=\"btn btn-secondary btn-lg m-1\" (click)=\"CloseQuest()\">Tillbaka</button>\n        <h4 class=\"text-success\">{{Savetext}}</h4>\n     </div>   \n     <div class=\"col-sm-4 text-right\">\n        <hr>\n         <button type=\"button\" class=\"btn btn-danger btn-lg m-1\" (click)=\"deleteQuest()\">Ta bort</button>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/quest-main/quest-main.component.scss":
/*!******************************************************!*\
  !*** ./src/app/quest-main/quest-main.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quest-main/quest-main.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quest-main/quest-main.component.ts ***!
  \****************************************************/
/*! exports provided: QuestMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestMainComponent", function() { return QuestMainComponent; });
/* harmony import */ var _assets_services_QuestApi_quest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/services/QuestApi/quest-api.service */ "./src/assets/services/QuestApi/quest-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestMainComponent = /** @class */ (function () {
    function QuestMainComponent(questService, route, router) {
        this.questService = questService;
        this.route = route;
        this.router = router;
        this.QuestObj = [];
        this.QuestTriggerObj = [];
        this.QuestObj = this.questService.questobj();
    }
    QuestMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (prams) {
            _this.QuestObj.AwardGroupId = prams.get('id');
        });
        this.getquestbyid();
    };
    QuestMainComponent.prototype.getquestbyid = function () {
        var _this = this;
        var id;
        if (this.QuestObj.AwardGroupId > 0) {
            this.questService.getQuest(this.QuestObj.AwardGroupId).subscribe(function (Response) { return _this.QuestObj = Response; });
        }
        else {
            console.log(this.QuestObj);
            this.QuestObj = this.questService.questobj();
        }
    };
    QuestMainComponent.prototype.reloaddata = function () {
        this.getquestbyid();
    };
    QuestMainComponent.prototype.SparaQuestEvent = function () {
        var _this = this;
        this.SparaQuest().then();
        this.Savetext = "Uppdraget sparat";
        setTimeout(function () {
            _this.Savetext = "";
        }, 5000);
    };
    QuestMainComponent.prototype.SparaQuestCloseEvent = function () {
        var _this = this;
        this.SparaQuest().then(function () { return _this.router.navigateByUrl('/'); });
        return false;
    };
    QuestMainComponent.prototype.SparaQuest = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.QuestObj.AwardGroupId > 0) {
                _this.questService.postEditQuest(_this.QuestObj).subscribe(function (Response) {
                    _this.QuestObj = Response;
                    console.log("edit aid: " + _this.QuestObj.AwardGroupId);
                    resolve();
                });
            }
            else {
                _this.questService.postAddQuest(_this.QuestObj).subscribe(function (Response) {
                    _this.QuestObj = Response;
                    console.log("nytt aid: " + _this.QuestObj.AwardGroupId);
                    resolve();
                });
            }
        });
    };
    QuestMainComponent.prototype.deleteQuest = function () {
        var _this = this;
        if (this.QuestObj.AwardGroupId > 0) {
            if (confirm(unescape('%E4') + "r du s" + unescape('%E4') + "ker p" + unescape('%E5') + " att du vill ta bort uppdraget " + this.QuestObj.Uppdragsnamn + "?")) {
                var obj = this.questService.questobj();
                obj.AwardGroupId = this.QuestObj.AwardGroupId;
                this.questService.postDelQuest(obj).subscribe(function (Response) { return _this.router.navigateByUrl('/'); });
            }
        }
        return false;
    };
    QuestMainComponent.prototype.CloseQuest = function () {
        this.router.navigateByUrl('/');
    };
    // fixar att checkboxen skickar true eller false, apit vill ha 1 eller 0
    QuestMainComponent.prototype.fixactiveToInt = function (value) {
        this.QuestObj.Active = value ? 1 : 0;
        return false;
    };
    QuestMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aj-quest-main',
            template: __webpack_require__(/*! ./quest-main.component.html */ "./src/app/quest-main/quest-main.component.html"),
            styles: [__webpack_require__(/*! ./quest-main.component.scss */ "./src/app/quest-main/quest-main.component.scss")]
        }),
        __metadata("design:paramtypes", [_assets_services_QuestApi_quest_api_service__WEBPACK_IMPORTED_MODULE_0__["QuestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuestMainComponent);
    return QuestMainComponent;
}());



/***/ }),

/***/ "./src/app/quest-trigger/quest-trigger.component.html":
/*!************************************************************!*\
  !*** ./src/app/quest-trigger/quest-trigger.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n    <div class=\"col-sm-12\">               \n        <h3>Deluppdrag*</h3>\n    </div>\n    <div class=\"col-12 col-md-8\">\n        <table class=\"table \">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Deluppdrag</th>\n                    <th>Uppdrag l&ouml;sning</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody id=\"questTriggerList\">\n                <tr *ngFor=\"let tobj of triggerobj\">\n                    <td>{{tobj.QuestTriggerId}}</td>\n                    <td>{{tobj.TNamn}}</td>\n                    <td>{{tobj.TValue}}</td>\n                    <td><a href=\"#\" class=\"text-info\" title=\"Generera kod till frågan\" (click)=\"GenerateCode(tobj)\"> Generera</a> | <a href=\"#\" class=\"text-danger\" (click)=\"DeleteTrigger(tobj)\">Ta bort</a><td>\n                        \n                </tr>\n                \n            </tbody>\n            <tfoot>\n                <tr>\n                    <th></th>\n                    <th>\n                        <input type=\"text\" class=\"form-control\" id=\"cmdTriggerUppdrag\" [(ngModel)]=\"cmdTriggerUppdrag\" placeholder=\"Skriv uppdrag\">\n                    </th>\n                    <th>\n                        <input type=\"text\" class=\"form-control\" id=\"cmdTriggerSvar\" [(ngModel)]=\"cmdTriggerSvar\" placeholder=\"Skriv uppdragssvar\" >\n                    </th>\n                    <th> \n                        <button id=\"cmdTriggerAdd\" (click)=\"addNewTrigger()\" class=\"btn btn-primary mb-2\">L&auml;gg till</button>\n                    </th>\n                </tr>\n            </tfoot>\n        </table>\n      </div>\n      \n  </div>\n  <div id=\"copycodeBlock\" class=\"row\" *ngIf=\"showCodeblock\">\n    <div class=\"col-sm-12\">  \n        <strong>Kopiera och klistra in kod:</strong><br>    \n        <code id=\"copycode\">\n           {{excode}}\n        </code>\n        <p class=\"mt-2\">\n            <a href=\"#\" (click)=\"CopyCode()\" class=\"text-secondary\">Kopiera</a>\n        </p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/quest-trigger/quest-trigger.component.scss":
/*!************************************************************!*\
  !*** ./src/app/quest-trigger/quest-trigger.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quest-trigger/quest-trigger.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quest-trigger/quest-trigger.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestTriggerComponent", function() { return QuestTriggerComponent; });
/* harmony import */ var _assets_services_QuestApi_quest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/services/QuestApi/quest-api.service */ "./src/assets/services/QuestApi/quest-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestTriggerComponent = /** @class */ (function () {
    function QuestTriggerComponent(questService) {
        this.questService = questService;
        this.triggerobj = [];
        this.badgeImg = "";
        this.triggerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showCodeblock = false;
        this.excode = "";
        this.cmdTriggerUppdrag = "";
        this.cmdTriggerSvar = "";
    }
    QuestTriggerComponent.prototype.ngOnInit = function () {
    };
    QuestTriggerComponent.prototype.GenerateCode = function (qobj) {
        this.showCodeblock = false;
        console.log("val1= " + qobj.QuestTriggerId + " trig= " + qobj.QuestID);
        this.excode = '<a data-hbtempl="inputtmpl" data-questid="' + qobj.QuestID + '" ';
        this.excode += ' data-triggerid="' + qobj.QuestTriggerId + '" href="#" id="bb_aj_doQuest"><img src="' + this.badgeImg + '" ';
        this.excode += 'style="width:150px;" title="' + qobj.TNamn + '" /></a> ';
        this.excode += '<script src="/DesktopModules/bb_aj_Quests/public/js/aj_quest.1.0.0.js" type="text/javascript"></script>';
        this.showCodeblock = true;
        return false;
    };
    QuestTriggerComponent.prototype.addNewTrigger = function () {
        var _this = this;
        var obj = this.questService.questobj();
        obj.AwardGroupId = this.QuestObj.AwardGroupId;
        // obj.QuestSubQuestList[0].QuestTriggerId = "ny";
        // obj.QuestSubQuestList[0].QuestID = this.QuestObj.QuestID;
        // obj.QuestSubQuestList[0].TNamn = this.cmdTriggerUppdrag;
        // obj.QuestSubQuestList[0].TValue = this.cmdTriggerSvar;
        var tmptrigger = {
            "QuestTriggerId": "0",
            "QuestID": this.QuestObj.QuestID,
            "TNamn": this.cmdTriggerUppdrag,
            "TValue": this.cmdTriggerSvar
        };
        obj.QuestSubQuestList.push(tmptrigger);
        //this.triggerobj.push(tmptrigger);
        var that = this;
        if (obj.AwardGroupId > 0) {
            this.questService.postAddQuestTrigger(obj).subscribe(function (Response) {
                _this.QuestObj = Response;
                _this.triggerChange.emit();
            });
        }
        else {
            console.log(this.triggerobj.length);
            this.triggerobj.push(obj.QuestSubQuestList[0]);
            console.log(obj.QuestSubQuestList.length);
        }
        this.rensatriggerform();
        return false;
    };
    QuestTriggerComponent.prototype.DeleteTrigger = function (deltriggerObj) {
        var _this = this;
        if (confirm(unescape('%E4') + "r du s" + unescape('%E4') + "ker p" + unescape('%E5') + " att du vill ta bort deluppdraget: " + deltriggerObj.TNamn)) {
            var index = this.triggerobj.indexOf(deltriggerObj);
            this.triggerobj.splice(index, 1);
            var obj = this.questService.questobj(); // create new objectstructure
            obj.AwardGroupId = this.QuestObj.AwardGroupId;
            obj.QuestSubQuestList.push(deltriggerObj);
            console.log("avid: " + obj.AwardGroupId);
            console.log("trigid: " + obj.QuestSubQuestList[0].QuestTriggerId);
            this.questService.postDelQuestTrigger(obj).subscribe(function (Response) {
                _this.QuestObj = Response;
                _this.triggerChange.emit();
            });
        }
        return false;
    };
    QuestTriggerComponent.prototype.rensatriggerform = function () {
        this.cmdTriggerUppdrag = "";
        this.cmdTriggerSvar = "";
    };
    QuestTriggerComponent.prototype.CopyCode = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.innerText = this.excode;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], QuestTriggerComponent.prototype, "triggerobj", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], QuestTriggerComponent.prototype, "badgeImg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], QuestTriggerComponent.prototype, "QuestObj", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], QuestTriggerComponent.prototype, "triggerChange", void 0);
    QuestTriggerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aj-quest-trigger',
            template: __webpack_require__(/*! ./quest-trigger.component.html */ "./src/app/quest-trigger/quest-trigger.component.html"),
            styles: [__webpack_require__(/*! ./quest-trigger.component.scss */ "./src/app/quest-trigger/quest-trigger.component.scss")]
        }),
        __metadata("design:paramtypes", [_assets_services_QuestApi_quest_api_service__WEBPACK_IMPORTED_MODULE_0__["QuestApiService"]])
    ], QuestTriggerComponent);
    return QuestTriggerComponent;
}());



/***/ }),

/***/ "./src/assets/AllreadyExistError.ts":
/*!******************************************!*\
  !*** ./src/assets/AllreadyExistError.ts ***!
  \******************************************/
/*! exports provided: AllreadyExistError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllreadyExistError", function() { return AllreadyExistError; });
/* harmony import */ var _appErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appErrors */ "./src/assets/appErrors.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AllreadyExistError = /** @class */ (function (_super) {
    __extends(AllreadyExistError, _super);
    function AllreadyExistError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.return = "Finns redan! (400)";
        return _this;
    }
    return AllreadyExistError;
}(_appErrors__WEBPACK_IMPORTED_MODULE_0__["AppError"]));



/***/ }),

/***/ "./src/assets/NotFoundError.ts":
/*!*************************************!*\
  !*** ./src/assets/NotFoundError.ts ***!
  \*************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _appErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appErrors */ "./src/assets/appErrors.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.return = "Hittade inte, Not Found ERROR (404)";
        return _this;
    }
    return NotFoundError;
}(_appErrors__WEBPACK_IMPORTED_MODULE_0__["AppError"]));



/***/ }),

/***/ "./src/assets/appErrors.ts":
/*!*********************************!*\
  !*** ./src/assets/appErrors.ts ***!
  \*********************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
var AppError = /** @class */ (function () {
    function AppError(orgError) {
        this.orgError = orgError;
    }
    return AppError;
}());



/***/ }),

/***/ "./src/assets/appGlobalErrorHandler.ts":
/*!*********************************************!*\
  !*** ./src/assets/appGlobalErrorHandler.ts ***!
  \*********************************************/
/*! exports provided: AppGlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGlobalErrorHandler", function() { return AppGlobalErrorHandler; });
var AppGlobalErrorHandler = /** @class */ (function () {
    function AppGlobalErrorHandler() {
    }
    AppGlobalErrorHandler.prototype.handleError = function (error) {
        alert("Något blev fel i: Post");
        console.log("Post Global ERRORMESSAGE: " + error);
    };
    return AppGlobalErrorHandler;
}());



/***/ }),

/***/ "./src/assets/services/QuestApi/quest-api.service.ts":
/*!***********************************************************!*\
  !*** ./src/assets/services/QuestApi/quest-api.service.ts ***!
  \***********************************************************/
/*! exports provided: QuestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestApiService", function() { return QuestApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service.service */ "./src/assets/services/api-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestApiService = /** @class */ (function (_super) {
    __extends(QuestApiService, _super);
    function QuestApiService(Http) {
        var _this = _super.call(this, "", Http) || this;
        _this.server = "http://localhost:59015/Api_v3.1/QuestAdmin/typ/";
        _this.serverList = "http://localhost:59015/Api_v3.1/QuestAdminList/typ/";
        // private server:string ="http://dev1.barnensbibliotek.se:8080/Api_v3.1/QuestAdmin/typ/";
        // private serverList:string ="http://dev1.barnensbibliotek.se:8080/Api_v3.1/QuestAdminList/typ/";
        // private server:string ="https://www2.barnensbibliotek.se/Api_v3.1/QuestAdmin/typ/";
        // private serverList:string ="https://www2.barnensbibliotek.se/Api_v3.1/QuestAdminList/typ/";
        _this.devkey = "/devkey/alf?type=json";
        return _this;
    }
    QuestApiService.prototype.getQuestList = function (typ) {
        var url = this.serverList + typ + "/val/0" + this.devkey;
        return this.getPosts(url);
    };
    QuestApiService.prototype.getQuest = function (questgroupId) {
        var url = this.server + "getQ/val/" + questgroupId + this.devkey;
        return this.getPosts(url);
    };
    QuestApiService.prototype.postAddQuest = function (qobj) {
        var url = this.server + "regQ" + this.devkey;
        return this.doPost(url, qobj);
    };
    QuestApiService.prototype.postEditQuest = function (qobj) {
        var url = this.server + "editQ" + this.devkey;
        return this.doPost(url, qobj);
    };
    QuestApiService.prototype.postDelQuest = function (qobj) {
        var url = this.server + "rmQ" + this.devkey;
        return this.doPost(url, qobj);
    };
    QuestApiService.prototype.postAddQuestTrigger = function (qobj) {
        var url = this.server + "addTrigger" + this.devkey;
        return this.doPost(url, qobj);
    };
    QuestApiService.prototype.postEditQuestTrigger = function (qobj) {
        var url = this.server + "editTrigger" + this.devkey;
        return this.doPost(url, qobj);
    };
    QuestApiService.prototype.postDelQuestTrigger = function (qobj) {
        var url = this.server + "delTrigger" + this.devkey;
        return this.doPost(url, qobj);
    };
    QuestApiService.prototype.questobj = function () {
        return {
            "Active": "0",
            "Uppdragsbeskrivning": "",
            "Uppdragsnamn": "",
            "QuestID": "",
            "BadgeSrc": "",
            "AwardOccures": "2",
            "AwardBeskrivning": "",
            "Level": "1",
            "AwardName": "",
            "BibblomoneyEarnedID": "1",
            "TotLevelUp": "1",
            "PointEarned": "0",
            "Occures": "1",
            "Aid": "",
            "AwardGroupId": "",
            "QuestSubQuestList": [],
            "Status": ""
        };
    };
    QuestApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], QuestApiService);
    return QuestApiService;
}(_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiServiceService"]));



/***/ }),

/***/ "./src/assets/services/api-service.service.ts":
/*!****************************************************!*\
  !*** ./src/assets/services/api-service.service.ts ***!
  \****************************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var _AllreadyExistError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AllreadyExistError */ "./src/assets/AllreadyExistError.ts");
/* harmony import */ var _NotFoundError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NotFoundError */ "./src/assets/NotFoundError.ts");
/* harmony import */ var _appErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appErrors */ "./src/assets/appErrors.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(url, http) {
        this.url = url;
        this.http = http;
    }
    ApiServiceService.prototype.getPosts = function (url) {
        console.log("kommer hit " + url);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        if (url)
            this.url = url;
        return this.http.get(this.url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(4), // använd retry för att göra om reqesten x gånger
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.HandleThisClassErrors));
    };
    ApiServiceService.prototype.doPost = function (url, postobj) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(url, JSON.stringify(postobj), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.HandleThisClassErrors));
    };
    ApiServiceService.prototype.deletePost = function (id) {
        return this.http.delete(this.url + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.HandleThisClassErrors));
    };
    ApiServiceService.prototype.HandleThisClassErrors = function (error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(new _AllreadyExistError__WEBPACK_IMPORTED_MODULE_0__["AllreadyExistError"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(new _NotFoundError__WEBPACK_IMPORTED_MODULE_1__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(new _appErrors__WEBPACK_IMPORTED_MODULE_2__["AppError"](error));
    };
    ApiServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\devprojekt\dnnmodules\QuestAngularBase-CLI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map