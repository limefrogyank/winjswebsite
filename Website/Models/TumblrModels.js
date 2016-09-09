/// <reference path="../services/IDataService.ts" />
/// <reference path="../Scripts/TypedMVVM/include/typedMVVM.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var Models;
    (function (Models) {
        var Tumblr;
        (function (Tumblr) {
            var CustomPost = (function () {
                function CustomPost() {
                    var _this = this;
                    this.image_link = function () {
                        return _this.photos[0].original_size.url;
                    };
                }
                return CustomPost;
            })();
            Tumblr.CustomPost = CustomPost;
        })(Tumblr = Models.Tumblr || (Models.Tumblr = {}));
    })(Models = McPhersonApps.Models || (McPhersonApps.Models = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=TumblrModels.js.map