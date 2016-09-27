WinJS.Namespace.define("Converters", {
    priceToFreeConverter: WinJS.Binding.converter(function (price) {
        return price == "$0.00" ? "FREE" : price;
    }),
    plainDateConverter: WinJS.Binding.converter(function (date) {
        return date.toLocaleDateString();
    }),
    firstPhotoUrl: WinJS.Binding.converter(function (photos) {
        var url = photos[0].original_size.url;
        return url;
    }),
    readableDate: WinJS.Binding.converter(function (dateString) {
        var readableDate = new Date(Date.parse(dateString)).toLocaleDateString();
        return readableDate;
    }),
    commentCountConverter: WinJS.Binding.converter(function (count) {
        if (count > 0)
            return "Get Comments (" + count + ")";
        else
            return "No Comments";
    }),
    commentCountDisableConverter: WinJS.Binding.converter(function (count) {
        if (count > 0)
            return false;
        else
            return true;
    }),
});
//# sourceMappingURL=Converters.js.map