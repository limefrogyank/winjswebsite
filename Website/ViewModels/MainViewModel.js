/// <reference path="../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../Scripts/typedMVVM/include/win.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../Services/IDataService.ts" />
/// <reference path="../Models/SampleListViewItemModel.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var ViewModels;
    (function (ViewModels) {
        // ViewModel for the Home page
        var MainViewModel = (function (_super) {
            __extends(MainViewModel, _super);
            // Default constructor
            function MainViewModel(dataService) {
                _super.call(this);
                this._dataService = dataService;
                this.initialiseCommands();
            }
            // Initialise all the commands for the ViewModel
            MainViewModel.prototype.initialiseCommands = function () {
                var _this = this;
                this.initialiseShowMessageDialogCommand();
                //Initialise all other commands here
                this.navItemCommandBind = WinJS.Utilities.markSupportedForProcessing((function (ev) {
                    //this._showMessageDialogCommand.execute("nav item clicked");
                    switch (ev.currentTarget.id) {
                        case "blogNavButton":
                            if (WinJS.Navigation.location != "/Views/Blog/BlogView.html")
                                WinJS.Navigation.navigate("/Views/Blog/BlogView.html");
                            break;
                        case "homeNavButton":
                            if (WinJS.Navigation.location != "/Views/Main/MainView.html")
                                WinJS.Navigation.navigate("/Views/Main/MainView.html");
                            break;
                        case "appListNavButton":
                            if (WinJS.Navigation.location != "/Views/AppList/AppListView.html")
                                WinJS.Navigation.navigate("/Views/AppList/AppListView.html");
                            break;
                        case "aboutNavButton":
                            if (WinJS.Navigation.location != "/Views/About/AboutView.html")
                                WinJS.Navigation.navigate("/Views/About/AboutView.html");
                            break;
                        default:
                            if (WinJS.Navigation.location != "/Views/Main/MainView.html")
                                WinJS.Navigation.navigate("/Views/Main/MainView.html");
                            break;
                    }
                }).bind(this));
                this.showMessageDialogCommandBind = WinJS.Utilities.markSupportedForProcessing((function () {
                    _this._showMessageDialogCommand.execute("You have just executed a TypedMVVM Command");
                }).bind(this));
                this.listItemInvokedBind = WinJS.Utilities.markSupportedForProcessing((function () {
                    _this._showMessageDialogCommand.execute("ListView Item invoked");
                }).bind(this));
            };
            // Initialise methods and binding for the sample command
            MainViewModel.prototype.initialiseShowMessageDialogCommand = function () {
                var _this = this;
                this._showMessageDialogCommand = new TypedMVVM.Common.Commands.RelayCommand(function (par) {
                    _this.dialogService.showDialog(par);
                }, function (par) { return par && par != ""; });
            };
            // Setup the Data Context for data binding
            MainViewModel.prototype.setupDataContext = function () {
                this.dataContext = WinJS.Binding.as({
                    pageTitle: this.pageTitle,
                    sampleText: this.sampleText,
                    commandButtonText: this.commandButtonText,
                    itemsSource: this.itemsSource
                });
            };
            // Initialise data from the services
            MainViewModel.prototype.loadData = function () {
                this.pageTitle = this._dataService.getTitle();
                this.sampleText = this._dataService.getContent();
                this.commandButtonText = this._dataService.getCommandButtonText();
            };
            Object.defineProperty(MainViewModel.prototype, "pageTitle", {
                // Gets or sets a value for the "pageTitle" property
                get: function () { return this._pageTitle; },
                set: function (value) {
                    this._pageTitle = value;
                    this.raisePropertyChanged("pageTitle", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MainViewModel.prototype, "sampleText", {
                // Gets or sets a value for the "sampleText" property
                get: function () { return this._sampleText; },
                set: function (value) {
                    this._sampleText = value;
                    this.raisePropertyChanged("sampleText", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MainViewModel.prototype, "commandButtonText", {
                // Gets or sets a value for the "commandButtonText" property
                get: function () { return this._commandButtonText; },
                set: function (value) {
                    this._commandButtonText = value;
                    this.raisePropertyChanged("commandButtonText", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MainViewModel.prototype, "itemsSource", {
                // Gets or sets a value for the "sampleText" property
                get: function () { return this._itemsSource; },
                set: function (value) {
                    this._itemsSource = value;
                    this.raisePropertyChanged("itemsSource", value);
                },
                enumerable: true,
                configurable: true
            });
            return MainViewModel;
        })(TypedMVVM.Common.ViewModels.ViewModelBase);
        ViewModels.MainViewModel = MainViewModel;
    })(ViewModels = McPhersonApps.ViewModels || (McPhersonApps.ViewModels = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=MainViewModel.js.map