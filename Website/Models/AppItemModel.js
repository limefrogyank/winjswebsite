/// <reference path="../services/IDataService.ts" />
/// <reference path="../Scripts/TypedMVVM/include/typedMVVM.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var Models;
    (function (Models) {
        var AppItemModel = (function () {
            function AppItemModel(appId, title, iconImage, rating, link, reviewsCount, price, version, backgroundColor, releaseDateString, lastUpdatedString) {
                this.title = title;
                this.iconImage = iconImage;
                this.rating = rating;
                this.link = link;
                this.reviewsCount = reviewsCount;
                this.price = price;
                this.version = version;
                this.backgroundColor = backgroundColor;
                this.appId = appId;
                this.releaseDate = new Date(releaseDateString);
                this.lastUpdated = new Date(lastUpdatedString);
            }
            return AppItemModel;
        }());
        Models.AppItemModel = AppItemModel;
    })(Models = McPhersonApps.Models || (McPhersonApps.Models = {}));
})(McPhersonApps || (McPhersonApps = {}));
//rating":4.6,"reviews":"60","cost":"0","displayPrice":"$0.00","version":"1.1.5.2","releaseDate":"2014-02-26T20:00:47.670000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"
//# sourceMappingURL=AppItemModel.js.map