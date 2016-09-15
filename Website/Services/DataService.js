// // <reference path="../models/SampleListViewItemModel.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var Services;
    (function (Services) {
        var DataService = (function () {
            function DataService() {
                this._blogNameUrl = 'limefrogyank';
                this._tumblrApiKey = 'cG4xt0ZKtZSzWwL2Vc5EmInJUT0cV9R35tU6WYkLwDFw54gLUH';
                this._wordpressUrl = 'mcphersonapps.wordpress.com';
                this.rawAppData = '{"applications":[{"name":"MediCalc","imageDefault":"http://store-images.s-microsoft.com/image/apps.23812.13510798886793672.32e22e30-1114-4331-adee-2f16c6cafe65.69ad87c0-e3e1-433b-9f45-e10dadd6e0d2?q=60","imageSmall":"http://store-images.s-microsoft.com/image/apps.23812.13510798886793672.32e22e30-1114-4331-adee-2f16c6cafe65.69ad87c0-e3e1-433b-9f45-e10dadd6e0d2?q=60","imageLarge":"http://store-images.s-microsoft.com/image/apps.23812.13510798886793672.32e22e30-1114-4331-adee-2f16c6cafe65.69ad87c0-e3e1-433b-9f45-e10dadd6e0d2?q=60","backgroundColor":"#0078D7","link":"https://www.microsoft.com/en-us/store/apps/medicalc/9nblggh6f30c","rating":5.0,"reviews":"3","cost":"0","displayPrice":"$0.00","version":"1.1.7.0","releaseDate":"2015-12-23T20:00:47.670000Z","lastUpdated":"2015-12-23T20:00:47.670000Z"},{"name":"MediCalc","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/14ee8416-d712-4879-b977-e0274f46a7e6?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/14ee8416-d712-4879-b977-e0274f46a7e6?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/14ee8416-d712-4879-b977-e0274f46a7e6?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=ff9bf913-ebb7-4e14-adc4-97c6112574e6","rating":4.6,"reviews":"60","cost":"0","displayPrice":"$0.00","version":"1.1.5.2","releaseDate":"2014-02-26T20:00:47.670000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Comic Maker","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/832cad0e-8b84-4a9b-bcfa-af5e5cb070c2?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/832cad0e-8b84-4a9b-bcfa-af5e5cb070c2?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/832cad0e-8b84-4a9b-bcfa-af5e5cb070c2?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=af2b38c3-7eec-40ed-9c62-817a2c3dc829","rating":4.3,"reviews":"30","cost":"0","displayPrice":"$0.00","version":"1.0.0.1","releaseDate":"2014-04-07T09:45:38.297000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Video Filter","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/8e3dc2ef-591c-40e3-af36-2d8977abd5ab?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/8e3dc2ef-591c-40e3-af36-2d8977abd5ab?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/8e3dc2ef-591c-40e3-af36-2d8977abd5ab?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=e4559e62-eb1d-4be8-9eec-8df9dd50a1a9","rating":4.1,"reviews":"7","cost":"0","displayPrice":"$0.00","version":"2014.611.2147.5418","releaseDate":"2014-06-11T22:35:17.123000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Simple Comic Viewer","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/be630b2e-0b35-475d-8215-916d00650dc2?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/be630b2e-0b35-475d-8215-916d00650dc2?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/be630b2e-0b35-475d-8215-916d00650dc2?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=a6640868-f323-4f91-b350-a349a90dfb8b","rating":3.4,"reviews":"82","cost":"0","displayPrice":"$0.00","version":"1.0.0.0","releaseDate":"2014-01-24T23:40:06.527000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Molecule Studio","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/5005dd8f-9986-4360-af3e-f24f18ebb827?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/5005dd8f-9986-4360-af3e-f24f18ebb827?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/5005dd8f-9986-4360-af3e-f24f18ebb827?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=4cbd5be8-ae05-4eb5-b79d-1a48b524ad9e","rating":3.7,"reviews":"3","cost":"0","displayPrice":"$0.00","version":"2014.726.1505.1327","releaseDate":"2014-07-08T12:45:31.520000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Puzzle Picture","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/22c61002-5c1c-4ba1-98c4-ae257f491eb9?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/22c61002-5c1c-4ba1-98c4-ae257f491eb9?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/22c61002-5c1c-4ba1-98c4-ae257f491eb9?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=7720f0ef-c65d-4ce2-a202-5660dbd10507","rating":4.3,"reviews":"3","cost":"0","displayPrice":"$0.00","version":"1.1.0.0","releaseDate":"2013-01-28T22:05:05.153000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Puzzle Picture Toddler","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/dfe260d9-1b04-4bf7-aa4e-091d19eb5b7a?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/dfe260d9-1b04-4bf7-aa4e-091d19eb5b7a?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/dfe260d9-1b04-4bf7-aa4e-091d19eb5b7a?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=c7fd5285-e69d-4ee1-a48e-3b38c7e6ecf8","rating":5,"reviews":"3","cost":"0","displayPrice":"$0.00","version":"1.0.0.0","releaseDate":"2014-03-12T02:10:43.830000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"PhotoMosaic","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/1dc83cc6-8feb-4d08-bf90-892c172ad45d?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/1dc83cc6-8feb-4d08-bf90-892c172ad45d?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/1dc83cc6-8feb-4d08-bf90-892c172ad45d?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=aa114e76-d6a7-49d5-9311-cd07d24086a3","rating":4,"reviews":"3","cost":"0","displayPrice":"$0.00","version":"1.0.0.1","releaseDate":"2014-04-19T05:55:09.883000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Carb Counter","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/12767327-edf4-488e-ab6a-164381ee0599?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/12767327-edf4-488e-ab6a-164381ee0599?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/12767327-edf4-488e-ab6a-164381ee0599?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=26123aae-0a14-4b95-ae39-1b57b1dc0220","rating":4,"reviews":"1","cost":"0.99","displayPrice":"$0.99","version":"1.1.0.5","releaseDate":"2014-05-23T03:20:14.933000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Social Via SkyDrive","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/02abe337-9d6e-44a6-a1de-0ceafe6ffe25?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/02abe337-9d6e-44a6-a1de-0ceafe6ffe25?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/02abe337-9d6e-44a6-a1de-0ceafe6ffe25?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=d545cbed-a617-4cca-ae08-f117c5bf3dc1","rating":5,"reviews":"1","cost":"0.99","displayPrice":"$0.99","version":"1.0.0.0","releaseDate":"2013-02-01T01:40:07.677000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"}],"totalApplications":10,"publisher":"L McPherson","countryCode":"US","lastUpdated":"2016-02-01T17:54:20.938526Z"}';
            }
            DataService.prototype.getTitle = function () { return "Welcome to TypedMVVM"; };
            DataService.prototype.getContent = function () { return "Sample property from the ViewModel"; };
            DataService.prototype.getCommandButtonText = function () { return "Show a PopUp!"; };
            DataService.prototype.getAppList = function () {
                var obj = JSON.parse(this.rawAppData);
                var apps = [];
                for (var i = 0; i < obj.totalApplications; i++) {
                    apps.push(new McPhersonApps.Models.AppItemModel(obj.applications[i].link, obj.applications[i].name, obj.applications[i].imageLarge, obj.applications[i].rating, obj.applications[i].link, obj.applications[i].reviews, obj.applications[i].displayPrice, obj.applications[i].version, obj.applications[i].backgroundColor, obj.applications[i].releaseDate, obj.applications[i].lastUpdated));
                }
                return apps;
            };
            //private rawAppData: string = '{"applications":[{"name":"MediCalc","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/14ee8416-d712-4879-b977-e0274f46a7e6?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/14ee8416-d712-4879-b977-e0274f46a7e6?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/14ee8416-d712-4879-b977-e0274f46a7e6?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=ff9bf913-ebb7-4e14-adc4-97c6112574e6","rating":4.6,"reviews":"60","cost":"0","displayPrice":"$0.00","version":"1.1.5.2","releaseDate":"2014-02-26T20:00:47.670000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Comic Maker","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/832cad0e-8b84-4a9b-bcfa-af5e5cb070c2?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/832cad0e-8b84-4a9b-bcfa-af5e5cb070c2?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/832cad0e-8b84-4a9b-bcfa-af5e5cb070c2?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=af2b38c3-7eec-40ed-9c62-817a2c3dc829","rating":4.3,"reviews":"30","cost":"0","displayPrice":"$0.00","version":"1.0.0.1","releaseDate":"2014-04-07T09:45:38.297000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Video Filter","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/8e3dc2ef-591c-40e3-af36-2d8977abd5ab?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/8e3dc2ef-591c-40e3-af36-2d8977abd5ab?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/8e3dc2ef-591c-40e3-af36-2d8977abd5ab?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=e4559e62-eb1d-4be8-9eec-8df9dd50a1a9","rating":4.1,"reviews":"7","cost":"0","displayPrice":"$0.00","version":"2014.611.2147.5418","releaseDate":"2014-06-11T22:35:17.123000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Simple Comic Viewer","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/be630b2e-0b35-475d-8215-916d00650dc2?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/be630b2e-0b35-475d-8215-916d00650dc2?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/be630b2e-0b35-475d-8215-916d00650dc2?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=a6640868-f323-4f91-b350-a349a90dfb8b","rating":3.4,"reviews":"82","cost":"0","displayPrice":"$0.00","version":"1.0.0.0","releaseDate":"2014-01-24T23:40:06.527000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Molecule Studio","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/5005dd8f-9986-4360-af3e-f24f18ebb827?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/5005dd8f-9986-4360-af3e-f24f18ebb827?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/5005dd8f-9986-4360-af3e-f24f18ebb827?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=4cbd5be8-ae05-4eb5-b79d-1a48b524ad9e","rating":3.7,"reviews":"3","cost":"0","displayPrice":"$0.00","version":"2014.726.1505.1327","releaseDate":"2014-07-08T12:45:31.520000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Puzzle Picture","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/22c61002-5c1c-4ba1-98c4-ae257f491eb9?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/22c61002-5c1c-4ba1-98c4-ae257f491eb9?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/22c61002-5c1c-4ba1-98c4-ae257f491eb9?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=7720f0ef-c65d-4ce2-a202-5660dbd10507","rating":4.3,"reviews":"3","cost":"0","displayPrice":"$0.00","version":"1.1.0.0","releaseDate":"2013-01-28T22:05:05.153000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Puzzle Picture Toddler","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/dfe260d9-1b04-4bf7-aa4e-091d19eb5b7a?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/dfe260d9-1b04-4bf7-aa4e-091d19eb5b7a?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/dfe260d9-1b04-4bf7-aa4e-091d19eb5b7a?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=c7fd5285-e69d-4ee1-a48e-3b38c7e6ecf8","rating":5,"reviews":"3","cost":"0","displayPrice":"$0.00","version":"1.0.0.0","releaseDate":"2014-03-12T02:10:43.830000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"PhotoMosaic","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/1dc83cc6-8feb-4d08-bf90-892c172ad45d?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/1dc83cc6-8feb-4d08-bf90-892c172ad45d?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/1dc83cc6-8feb-4d08-bf90-892c172ad45d?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=aa114e76-d6a7-49d5-9311-cd07d24086a3","rating":4,"reviews":"3","cost":"0","displayPrice":"$0.00","version":"1.0.0.1","releaseDate":"2014-04-19T05:55:09.883000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Carb Counter","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/12767327-edf4-488e-ab6a-164381ee0599?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/12767327-edf4-488e-ab6a-164381ee0599?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/12767327-edf4-488e-ab6a-164381ee0599?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=26123aae-0a14-4b95-ae39-1b57b1dc0220","rating":4,"reviews":"1","cost":"0.99","displayPrice":"$0.99","version":"1.1.0.5","releaseDate":"2014-05-23T03:20:14.933000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"},{"name":"Social Via SkyDrive","imageDefault":"http://cdn.marketplaceimages.windowsphone.com/v8/images/02abe337-9d6e-44a6-a1de-0ceafe6ffe25?hw=520139778","imageSmall":"http://cdn.marketplaceimages.windowsphone.com/v8/images/02abe337-9d6e-44a6-a1de-0ceafe6ffe25?hw=520139778&imagetype=icon_small","imageLarge":"http://cdn.marketplaceimages.windowsphone.com/v8/images/02abe337-9d6e-44a6-a1de-0ceafe6ffe25?hw=520139778&imagetype=icon_large","link":"http://www.windowsphone.com/s?appid=d545cbed-a617-4cca-ae08-f117c5bf3dc1","rating":5,"reviews":"1","cost":"0.99","displayPrice":"$0.99","version":"1.0.0.0","releaseDate":"2013-02-01T01:40:07.677000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"}],"totalApplications":10,"publisher":"L McPherson","countryCode":"US","lastUpdated":"2016-02-01T17:54:20.938526Z"}';
            DataService.prototype.getRecentBlogPosts = function () {
                var url = "https://api.tumblr.com/v2/blog/" + this._blogNameUrl + "/posts?api_key=" + this._tumblrApiKey;
                return WinJS.xhr({
                    url: url
                }).then(function (success) {
                    var response = JSON.parse(success.response);
                    return response.response.posts;
                }, function (error) {
                    var i = 3;
                    return null;
                });
            };
            DataService.prototype.getRecentWordPressPosts = function () {
                var url = "https://public-api.wordpress.com/rest/v1.1/sites/" + this._wordpressUrl + "/posts";
                return WinJS.xhr({
                    url: url
                }).then(function (success) {
                    var response = JSON.parse(success.response);
                    return response.posts;
                }, function (error) {
                    var i = 3;
                    return null;
                });
            };
            DataService.prototype.getRepliesWordPressPost = function (id) {
                var url = "https://public-api.wordpress.com/rest/v1.1/sites/" + this._wordpressUrl + "/posts/" + id + "/replies";
                return WinJS.xhr({
                    url: url
                }).then(function (success) {
                    var response = JSON.parse(success.response);
                    return response.comments;
                }, function (error) {
                    var i = 3;
                    return null;
                });
            };
            return DataService;
        }());
        Services.DataService = DataService;
    })(Services = McPhersonApps.Services || (McPhersonApps.Services = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=DataService.js.map