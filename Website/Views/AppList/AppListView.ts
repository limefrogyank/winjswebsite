﻿/// <reference path="../../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../../Scripts/typedMVVM/include/win.ts" />


/// <reference path="../../viewModels/ViewModelFactory.ts" />
/// <reference path="../../services/DataService.ts" />

module McPhersonApps.Views {
    "use strict";

    class AppListView implements TypedMVVM.Common.Views.ICoreView {
        ready = (element: HTMLElement, options: HTMLOptionElement) => {
            // Initialize the page here.
            var viewModel = McPhersonApps.ViewModels.ViewModelFactory.appListViewModel;
            
            var listView = <WinJS.UI.ListView<any>>document.querySelector('#appListDataTemplate').winControl;
            listView.layout = new WinJS.UI.GridLayout({ 'orientation': WinJS.UI.Orientation.vertical });

            WinJS.Binding.processAll(element, viewModel, false, null, null).done(() => {
                viewModel.loadData();

            });

        }
    }

    WinJS.UI.Pages.define("/Views/AppList/AppListView.html", new AppListView());
}


