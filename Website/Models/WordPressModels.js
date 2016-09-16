var McPhersonApps;
(function (McPhersonApps) {
    var Models;
    (function (Models) {
        var WordPress;
        (function (WordPress) {
            var PostModel = (function () {
                function PostModel(post) {
                    var _this = this;
                    this.post = post;
                    this._dataService = TypedMVVM.Common.IoC.Container.resolve(McPhersonApps.Services.DataService);
                    this._uiService = TypedMVVM.Common.IoC.Container.resolve(McPhersonApps.Services.UIService);
                    this.buttonClickCommandBind = WinJS.Utilities.markSupportedForProcessing((function (ev) {
                        _this._dataService.getRepliesWordPressPost(_this.post.iD).then(function (comments) {
                            _this._uiService.showReplies({ replies: comments }, ev.srcElement);
                        });
                    }).bind(this));
                }
                return PostModel;
            })();
            WordPress.PostModel = PostModel;
        })(WordPress = Models.WordPress || (Models.WordPress = {}));
    })(Models = McPhersonApps.Models || (McPhersonApps.Models = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=WordPressModels.js.map