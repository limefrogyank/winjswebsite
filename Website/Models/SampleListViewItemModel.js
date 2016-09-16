/// <reference path="../services/IDataService.ts" />
/// <reference path="../Scripts/TypedMVVM/include/typedMVVM.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var Models;
    (function (Models) {
        var SampleListViewItemModel = (function () {
            function SampleListViewItemModel(title, buttonClickCommand) {
                this.title = title;
                this.buttonClickCommandBind = WinJS.Utilities.markSupportedForProcessing((function () {
                    buttonClickCommand.execute(null);
                }).bind(this));
            }
            return SampleListViewItemModel;
        })();
        Models.SampleListViewItemModel = SampleListViewItemModel;
    })(Models = McPhersonApps.Models || (McPhersonApps.Models = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=SampleListViewItemModel.js.map