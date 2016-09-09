﻿/// <reference path="../../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../../Scripts/typedMVVM/include/win.ts" />


/// <reference path="../../viewModels/ViewModelFactory.ts" />
/// <reference path="../../services/DataService.ts" />

module McPhersonApps.Views {
    "use strict";

    class AboutView implements TypedMVVM.Common.Views.ICoreView {
        ready = (element: HTMLElement, options: HTMLOptionElement) => {
            // Initialize the page here.
            var viewModel = McPhersonApps.ViewModels.ViewModelFactory.aboutViewModel;

            WinJS.Binding.processAll(element, viewModel, false, null, null).done(() => {

            });

            viewModel.loadData();
        }
    }

    WinJS.UI.Pages.define("/Views/About/AboutView.html", new AboutView());
}


