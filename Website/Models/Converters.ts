﻿
WinJS.Namespace.define("Converters", {

    priceToFreeConverter: WinJS.Binding.converter((price) => {
        return price == "$0.00" ? "FREE" : price;
    }),

    plainDateConverter: WinJS.Binding.converter((date: Date) => {
        return date.toLocaleDateString();
    }),

    firstPhotoUrl: WinJS.Binding.converter((photos: McPhersonApps.Models.Tumblr.Photo[]) => {
        var url = photos[0].original_size.url;
        return url;
    }),

    readableDate: WinJS.Binding.converter((dateString: string) => {
        var readableDate = new Date(Date.parse(dateString)).toLocaleDateString();
        return readableDate;
    }),

});
