var McPhersonApps;
(function (McPhersonApps) {
    var Views;
    (function (Views) {
        Views.blogTemplateSelector = function (itemPromise) {
            var renderPromise = itemPromise.then(function (currentItem) {
                var item = currentItem.data;
                var template;
                // Base the template on the type of data
                if (item.type == "text") {
                    template = document.getElementById("textTemplate").winControl;
                }
                else {
                    template = document.getElementById("photoTemplate").winControl;
                }
                return template.render(item).then(function (element) {
                    if (item.type == 'text') {
                        var bodyDiv = element.querySelector('.bodyContent');
                        bodyDiv.style.backgroundColor = item.trail[0].blog.theme.background_color;
                        bodyDiv.style.color = item.trail[0].blog.theme.title_color;
                        var attrib = document.createAttribute('data-link-color');
                        //attrib.name = 'data-link-color';
                        attrib.value = item.trail[0].blog.theme.link_color;
                        bodyDiv.attributes.setNamedItem(attrib);
                    }
                    return element;
                    // allow for some additonal manipulation after the element is rendered 
                    // and binding is finished
                });
            });
            return renderPromise;
        };
        WinJS.Utilities.markSupportedForProcessing(Views.blogTemplateSelector);
    })(Views = McPhersonApps.Views || (McPhersonApps.Views = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=BlogTemplateSelector.js.map