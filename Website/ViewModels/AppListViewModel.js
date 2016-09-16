/// <reference path="../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../Scripts/typedMVVM/include/win.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../Services/IDataService.ts" />
/// <reference path="../Models/AppItemModel.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var ViewModels;
    (function (ViewModels) {
        // ViewModel for the Home page
        var AppListViewModel = (function (_super) {
            __extends(AppListViewModel, _super);
            // Default constructor
            function AppListViewModel(dataService) {
                _super.call(this);
                this._dataService = dataService;
                this.initialiseCommands();
            }
            // Initialise all the commands for the ViewModel
            AppListViewModel.prototype.initialiseCommands = function () {
                //this.initialiseShowMessageDialogCommand();
                var _this = this;
                //Initialise all other commands here
                this.navItemCommandBind = WinJS.Utilities.markSupportedForProcessing((function (ev) {
                    _this._showMessageDialogCommand.execute("nav item clicked");
                }).bind(this));
                this.showMessageDialogCommandBind = WinJS.Utilities.markSupportedForProcessing((function () {
                    _this.dialogService.showDialog("example");
                }).bind(this));
                this.listItemInvokedBind = WinJS.Utilities.markSupportedForProcessing((function (ev) {
                    var d = ev;
                    d.detail.itemPromise.then(function (item) {
                        var link = item.data.link;
                        //navigate to app page
                        window.open(link, "blank");
                    });
                    //this.dialogService.showDialog("listItemInvoked");
                }).bind(this));
            };
            // Initialise methods and binding for the sample command
            //private initialiseShowMessageDialogCommand() {
            //    this._showMessageDialogCommand = new TypedMVVM.Common.Commands.RelayCommand<string>((par) => {
            //        this.dialogService.showDialog(par);
            //    }, (par) => { return par && par != ""; });
            //}
            // Setup the Data Context for data binding
            AppListViewModel.prototype.setupDataContext = function () {
                this.dataContext = WinJS.Binding.as({
                    pageTitle: this.pageTitle,
                    sampleText: this.sampleText,
                    commandButtonText: this.commandButtonText,
                    itemsSource: this.itemsSource
                });
            };
            // Initialise data from the services
            AppListViewModel.prototype.loadData = function () {
                var _this = this;
                this.pageTitle = this._dataService.getTitle();
                this.sampleText = this._dataService.getContent();
                this.commandButtonText = this._dataService.getCommandButtonText();
                if (this.itemsSource == null) {
                    var apps = this._dataService.getAppList();
                    this.itemsSource = new WinJS.Binding.List([]);
                    apps.forEach(function (v, i, a) {
                        _this.itemsSource.push(v);
                    });
                }
            };
            Object.defineProperty(AppListViewModel.prototype, "pageTitle", {
                // Gets or sets a value for the "pageTitle" property
                get: function () { return this._pageTitle; },
                set: function (value) {
                    this._pageTitle = value;
                    this.raisePropertyChanged("pageTitle", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AppListViewModel.prototype, "sampleText", {
                // Gets or sets a value for the "sampleText" property
                get: function () { return this._sampleText; },
                set: function (value) {
                    this._sampleText = value;
                    this.raisePropertyChanged("sampleText", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AppListViewModel.prototype, "commandButtonText", {
                // Gets or sets a value for the "commandButtonText" property
                get: function () { return this._commandButtonText; },
                set: function (value) {
                    this._commandButtonText = value;
                    this.raisePropertyChanged("commandButtonText", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AppListViewModel.prototype, "itemsSource", {
                // Gets or sets a value for the "sampleText" property
                get: function () { return this._itemsSource; },
                set: function (value) {
                    this._itemsSource = value;
                    this.raisePropertyChanged("itemsSource", value);
                },
                enumerable: true,
                configurable: true
            });
            return AppListViewModel;
        })(TypedMVVM.Common.ViewModels.ViewModelBase);
        ViewModels.AppListViewModel = AppListViewModel;
    })(ViewModels = McPhersonApps.ViewModels || (McPhersonApps.ViewModels = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=AppListViewModel.js.map