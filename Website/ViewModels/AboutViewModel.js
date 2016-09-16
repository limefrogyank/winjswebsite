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
        var AboutViewModel = (function (_super) {
            __extends(AboutViewModel, _super);
            // Default constructor
            function AboutViewModel(dataService) {
                _super.call(this);
                this._dataService = dataService;
                this.initialiseCommands();
            }
            // Initialise all the commands for the ViewModel
            AboutViewModel.prototype.initialiseCommands = function () {
                var _this = this;
                this.initialiseShowMessageDialogCommand();
                //Initialise all other commands here
                this.navItemCommandBind = WinJS.Utilities.markSupportedForProcessing((function (ev) {
                    _this._showMessageDialogCommand.execute("nav item clicked");
                }).bind(this));
                this.showMessageDialogCommandBind = WinJS.Utilities.markSupportedForProcessing((function () {
                    _this._showMessageDialogCommand.execute("You have just executed a TypedMVVM Command");
                }).bind(this));
                this.listItemInvokedBind = WinJS.Utilities.markSupportedForProcessing((function () {
                    _this._showMessageDialogCommand.execute("ListView Item invoked");
                }).bind(this));
            };
            // Initialise methods and binding for the sample command
            AboutViewModel.prototype.initialiseShowMessageDialogCommand = function () {
                var _this = this;
                this._showMessageDialogCommand = new TypedMVVM.Common.Commands.RelayCommand(function (par) {
                    _this.dialogService.showDialog(par);
                }, function (par) { return par && par != ""; });
            };
            // Setup the Data Context for data binding
            AboutViewModel.prototype.setupDataContext = function () {
                this.dataContext = WinJS.Binding.as({
                    pageTitle: this.pageTitle,
                    sampleText: this.sampleText,
                    commandButtonText: this.commandButtonText,
                    itemsSource: this.itemsSource
                });
            };
            // Initialise data from the services
            AboutViewModel.prototype.loadData = function () {
                this.pageTitle = this._dataService.getTitle();
                this.sampleText = this._dataService.getContent();
                this.commandButtonText = this._dataService.getCommandButtonText();
            };
            Object.defineProperty(AboutViewModel.prototype, "pageTitle", {
                // Gets or sets a value for the "pageTitle" property
                get: function () { return this._pageTitle; },
                set: function (value) {
                    this._pageTitle = value;
                    this.raisePropertyChanged("pageTitle", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AboutViewModel.prototype, "sampleText", {
                // Gets or sets a value for the "sampleText" property
                get: function () { return this._sampleText; },
                set: function (value) {
                    this._sampleText = value;
                    this.raisePropertyChanged("sampleText", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AboutViewModel.prototype, "commandButtonText", {
                // Gets or sets a value for the "commandButtonText" property
                get: function () { return this._commandButtonText; },
                set: function (value) {
                    this._commandButtonText = value;
                    this.raisePropertyChanged("commandButtonText", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AboutViewModel.prototype, "itemsSource", {
                // Gets or sets a value for the "sampleText" property
                get: function () { return this._itemsSource; },
                set: function (value) {
                    this._itemsSource = value;
                    this.raisePropertyChanged("itemsSource", value);
                },
                enumerable: true,
                configurable: true
            });
            return AboutViewModel;
        })(TypedMVVM.Common.ViewModels.ViewModelBase);
        ViewModels.AboutViewModel = AboutViewModel;
    })(ViewModels = McPhersonApps.ViewModels || (McPhersonApps.ViewModels = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=AboutViewModel.js.map