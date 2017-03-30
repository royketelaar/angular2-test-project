System.register(['angular2/platform/browser', 'angular2/core', './main.component', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, main_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(main_component_1.MainComponent);
        }
    }
});
//# sourceMappingURL=app.js.map