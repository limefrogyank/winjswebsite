/// <reference path="../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../Scripts/typedMVVM/include/win.ts" />
/// <reference path="../viewModels/MainViewModel.ts" />
/// <reference path="../services/DataService.ts" />
/// <reference path="../Scripts/typedMVVM/viewModels/IViewModelBase.ts" />
var Container = TypedMVVM.Common.IoC.Container;
var McPhersonApps;
(function (McPhersonApps) {
    var ViewModels;
    (function (ViewModels) {
        // Provides logic for initialising ViewModel instances
        var ViewModelFactory = (function () {
            function ViewModelFactory() {
            }
            Object.defineProperty(ViewModelFactory, "mainViewModel", {
                get: function () {
                    if (!this._mainViewModel) {
                        //if (!Windows.ApplicationModel.DesignMode.designModeEnabled) {
                        this._mainViewModel = new ViewModels.MainViewModel(TypedMVVM.Common.IoC.Container.resolve(McPhersonApps.Services.DataService));
                    }
                    return this._mainViewModel;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ViewModelFactory, "blogViewModel", {
                get: function () {
                    if (!this._blogViewModel) {
                        this._blogViewModel = new ViewModels.BlogViewModel(TypedMVVM.Common.IoC.Container.resolve(McPhersonApps.Services.DataService));
                    }
                    return this._blogViewModel;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ViewModelFactory, "aboutViewModel", {
                get: function () {
                    if (!this._aboutViewModel) {
                        this._aboutViewModel = new ViewModels.AboutViewModel(TypedMVVM.Common.IoC.Container.resolve(McPhersonApps.Services.DataService));
                    }
                    return this._aboutViewModel;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ViewModelFactory, "appListViewModel", {
                get: function () {
                    if (!this._appListViewModel) {
                        this._appListViewModel = new ViewModels.AppListViewModel(TypedMVVM.Common.IoC.Container.resolve(McPhersonApps.Services.DataService));
                    }
                    return this._appListViewModel;
                },
                enumerable: true,
                configurable: true
            });
            return ViewModelFactory;
        })();
        ViewModels.ViewModelFactory = ViewModelFactory;
    })(ViewModels = McPhersonApps.ViewModels || (McPhersonApps.ViewModels = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=ViewModelFactory.js.map