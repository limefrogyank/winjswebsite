module McPhersonApps.Views {

    export var blogTemplateSelector: Function = (itemPromise) => {
       
        var renderPromise = itemPromise.then((currentItem) => {
            var item: Models.Tumblr.Post = currentItem.data;

            var template: WinJS.Binding.Template;

            // Base the template on the type of data
            if (item.type == "text") {
                template = document.getElementById("textTemplate").winControl;

            }
            else {
                template = document.getElementById("photoTemplate").winControl;
            }
            

            return template.render(item).then((element) => {

                if (item.type == 'text') {
                    var bodyDiv = <HTMLDivElement>element.querySelector('.bodyContent');
                    bodyDiv.style.backgroundColor = item.trail[0].blog.theme.background_color;
                    bodyDiv.style.color = item.trail[0].blog.theme.title_color;
                    var attrib: Attr = document.createAttribute('data-link-color');
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

    WinJS.Utilities.markSupportedForProcessing(blogTemplateSelector);
}