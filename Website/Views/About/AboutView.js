/// <reference path="../../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../../Scripts/typedMVVM/include/win.ts" />
/// <reference path="../../viewModels/ViewModelFactory.ts" />
/// <reference path="../../services/DataService.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var Views;
    (function (Views) {
        "use strict";
        var AboutView = (function () {
            function AboutView() {
                this.ready = function (element, options) {
                    // Initialize the page here.
                    var viewModel = McPhersonApps.ViewModels.ViewModelFactory.aboutViewModel;
                    WinJS.Binding.processAll(element, viewModel, false, null, null).done(function () {
                    });
                    viewModel.loadData();
                };
            }
            return AboutView;
        }());
        WinJS.UI.Pages.define("/Views/About/AboutView.html", new AboutView());
    })(Views = McPhersonApps.Views || (McPhersonApps.Views = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=AboutView.js.map