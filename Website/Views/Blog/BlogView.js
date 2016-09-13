/// <reference path="../../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../../Scripts/typedMVVM/include/win.ts" />
/// <reference path="../../viewModels/ViewModelFactory.ts" />
/// <reference path="../../services/DataService.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var Views;
    (function (Views) {
        "use strict";
        var BlogView = (function () {
            function BlogView() {
                this.ready = function (element, options) {
                    // Initialize the page here.
                    var viewModel = McPhersonApps.ViewModels.ViewModelFactory.blogViewModel;
                    //WinJS.Utilities.markSupportedForProcessing(McPhersonApps.Views.blogTemplateSelector);
                    //var listview = document.getElementById('listView').winControl;
                    //listview.itemTemplate = McPhersonApps.Views.blogTemplateSelector;
                    //var d = new WinJS.UI.ListView;
                    WinJS.Binding.processAll(element, viewModel, false, null, null).done(function () {
                    });
                    viewModel.loadData();
                };
            }
            return BlogView;
        }());
        WinJS.UI.Pages.define("/Views/Blog/BlogView.html", new BlogView());
    })(Views = McPhersonApps.Views || (McPhersonApps.Views = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=BlogView.js.map