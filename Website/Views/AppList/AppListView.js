/// <reference path="../../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../../Scripts/typedMVVM/include/win.ts" />
/// <reference path="../../viewModels/ViewModelFactory.ts" />
/// <reference path="../../services/DataService.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var Views;
    (function (Views) {
        "use strict";
        var AppListView = (function () {
            function AppListView() {
                this.ready = function (element, options) {
                    // Initialize the page here.
                    var viewModel = McPhersonApps.ViewModels.ViewModelFactory.appListViewModel;
                    var listView = document.querySelector('#appListDataTemplate').winControl;
                    listView.layout = new WinJS.UI.GridLayout({ 'orientation': WinJS.UI.Orientation.vertical });
                    WinJS.Binding.processAll(element, viewModel, false, null, null).done(function () {
                        viewModel.loadData();
                    });
                };
            }
            return AppListView;
        }());
        WinJS.UI.Pages.define("/Views/AppList/AppListView.html", new AppListView());
    })(Views = McPhersonApps.Views || (McPhersonApps.Views = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=AppListView.js.map