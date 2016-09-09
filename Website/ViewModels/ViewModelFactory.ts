﻿/// <reference path="../Scripts/typedMVVM/include/typedMVVM.ts" />
﻿/// <reference path="../Scripts/typedMVVM/include/win.ts" />


/// <reference path="../viewModels/MainViewModel.ts" />
/// <reference path="../services/DataService.ts" />
/// <reference path="../Scripts/typedMVVM/viewModels/IViewModelBase.ts" />

import Container = TypedMVVM.Common.IoC.Container;

module McPhersonApps.ViewModels {
    // Provides logic for initialising ViewModel instances
    export class ViewModelFactory {
        // Returns an instance for the HomeViewModel
        // TODO: handle instances of ViewModels using IoC and integrate it with Navigation
        private static _mainViewModel: ViewModels.MainViewModel;
        public static get mainViewModel(): ViewModels.MainViewModel {
            if (!this._mainViewModel) {
                //if (!Windows.ApplicationModel.DesignMode.designModeEnabled) {
                    this._mainViewModel = new MainViewModel(TypedMVVM.Common.IoC.Container.resolve(Services.DataService));
                //}
                //else {
                //    //Inject Design-time data
                //    this._homeViewModel = new HomeViewModel(Common.IoC.Container.resolve(DesignData.Services.SampleService));
                //}
            }
            return this._mainViewModel;
        }
        
        // ...
        // Initialises all other ViewModels
        // ...

        private static _blogViewModel: ViewModels.BlogViewModel;
        public static get blogViewModel(): ViewModels.BlogViewModel {
            if (!this._blogViewModel) {
                this._blogViewModel = new BlogViewModel(TypedMVVM.Common.IoC.Container.resolve(Services.DataService));
            }
            return this._blogViewModel;
        }

        private static _aboutViewModel: ViewModels.AboutViewModel;
        public static get aboutViewModel(): ViewModels.AboutViewModel {
            if (!this._aboutViewModel) {
                this._aboutViewModel = new AboutViewModel(TypedMVVM.Common.IoC.Container.resolve(Services.DataService));
            }
            return this._aboutViewModel;
        }

        private static _appListViewModel: ViewModels.AppListViewModel;
        public static get appListViewModel(): ViewModels.AppListViewModel {
            if (!this._appListViewModel) {
                this._appListViewModel = new AppListViewModel(TypedMVVM.Common.IoC.Container.resolve(Services.DataService));
            }
            return this._appListViewModel;
        }


    }
}


