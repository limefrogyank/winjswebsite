﻿﻿/// <reference path="../../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../../Scripts/typedMVVM/include/win.ts" />

/// <reference path="../../viewModels/ViewModelFactory.ts" />
/// <reference path="../../services/DataService.ts" />

module McPhersonApps.Views {
    "use strict";

    class BlogView implements TypedMVVM.Common.Views.ICoreView {
        ready = (element: HTMLElement, options: HTMLOptionElement) => {
            // Initialize the page here.
            var viewModel = McPhersonApps.ViewModels.ViewModelFactory.blogViewModel;

            //WinJS.Utilities.markSupportedForProcessing(McPhersonApps.Views.blogTemplateSelector);

            //var listview = document.getElementById('listView').winControl;
            //listview.itemTemplate = McPhersonApps.Views.blogTemplateSelector;

            //var d = new WinJS.UI.ListView;
            

            WinJS.Binding.processAll(element, viewModel, false, null, null).done(() => {
                
            });

            viewModel.loadData();
        }
    }

    WinJS.UI.Pages.define("/Views/Blog/BlogView.html", new BlogView());
}


