
/// <reference path="../services/IDataService.ts" />
/// <reference path="../Scripts/TypedMVVM/include/typedMVVM.ts" />

module McPhersonApps.Models {
    export class AppItemModel {
        constructor(
            appId: string,
            public title: string,
            public iconImage: string,
            public rating: number,
            public link: string,
            public reviewsCount: string,
            public price: string,
            public version: string,
            public backgroundColor: string,
            releaseDateString: string,
            lastUpdatedString : string) {

            this.appId = appId;
            this.releaseDate = new Date(releaseDateString);
            this.lastUpdated = new Date(lastUpdatedString);

        }

        appId: string;
        public releaseDate: Date;
        public lastUpdated: Date;

    }
}

//rating":4.6,"reviews":"60","cost":"0","displayPrice":"$0.00","version":"1.1.5.2","releaseDate":"2014-02-26T20:00:47.670000Z","lastUpdated":"2016-02-01T17:54:20.938526Z"
