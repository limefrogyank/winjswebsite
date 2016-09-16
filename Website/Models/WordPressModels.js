var McPhersonApps;
(function (McPhersonApps) {
    var Models;
    (function (Models) {
        var WordPress;
        (function (WordPress) {
            var PostModel = (function () {
                function PostModel(post) {
                    this.post = post;
                    this.buttonClickCommandBind = WinJS.Utilities.markSupportedForProcessing((function () {
                        var i = 3;
                    }).bind(this));
                }
                return PostModel;
            })();
            WordPress.PostModel = PostModel;
        })(WordPress = Models.WordPress || (Models.WordPress = {}));
    })(Models = McPhersonApps.Models || (McPhersonApps.Models = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=WordPressModels.js.map