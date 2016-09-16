/// <reference path="../../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../../Scripts/typedMVVM/include/win.ts" />
/// <reference path="../../viewModels/ViewModelFactory.ts" />
/// <reference path="../../services/DataService.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var Views;
    (function (Views) {
        "use strict";
        var MainView = (function () {
            function MainView() {
                this.ready = function (element, options) {
                    // Initialize the page here.
                    var viewModel = McPhersonApps.ViewModels.ViewModelFactory.mainViewModel;
                    WinJS.Binding.processAll(element, viewModel, false, null, null).done(function () {
                    });
                    viewModel.loadData();
                };
            }
            return MainView;
        })();
        WinJS.UI.Pages.define("/Views/Main/MainView.html", new MainView());
    })(Views = McPhersonApps.Views || (McPhersonApps.Views = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=MainView.js.map