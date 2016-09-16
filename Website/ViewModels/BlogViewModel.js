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
        var BlogViewModel = (function (_super) {
            __extends(BlogViewModel, _super);
            // Default constructor
            function BlogViewModel(dataService) {
                _super.call(this);
                this._dataService = dataService;
                this.initialiseCommands();
            }
            // Initialise all the commands for the ViewModel
            BlogViewModel.prototype.initialiseCommands = function () {
                var _this = this;
                this.initialiseShowMessageDialogCommand();
                this.showMessageDialogCommandBind = WinJS.Utilities.markSupportedForProcessing((function () {
                    _this._showMessageDialogCommand.execute("You have just executed a TypedMVVM Command");
                }).bind(this));
                this.buttonClickCommandBind = WinJS.Utilities.markSupportedForProcessing((function (ev) {
                    _this._showMessageDialogCommand.execute("ListView Item invoked");
                }).bind(this));
            };
            // Initialise methods and binding for the sample command
            BlogViewModel.prototype.initialiseShowMessageDialogCommand = function () {
                var _this = this;
                this._showMessageDialogCommand = new TypedMVVM.Common.Commands.RelayCommand(function (par) {
                    _this.dialogService.showDialog(par);
                }, function (par) { return par && par != ""; });
            };
            // Setup the Data Context for data binding
            BlogViewModel.prototype.setupDataContext = function () {
                this.dataContext = WinJS.Binding.as({
                    pageTitle: this.pageTitle,
                    sampleText: this.sampleText,
                    commandButtonText: this.commandButtonText,
                    itemsSource: this.itemsSource
                });
            };
            // Initialise data from the services
            BlogViewModel.prototype.loadData = function () {
                var _this = this;
                this.pageTitle = this._dataService.getTitle();
                this.sampleText = this._dataService.getContent();
                this.commandButtonText = this._dataService.getCommandButtonText();
                //this._dataService.getRecentBlogPosts().then((posts) => {
                //    this.itemsSource = new WinJS.Binding.List<Models.Tumblr.CustomPost>(posts);
                //});
                this._dataService.getRecentWordPressPosts().then(function (posts) {
                    _this.itemsSource = new WinJS.Binding.List(posts);
                });
            };
            Object.defineProperty(BlogViewModel.prototype, "pageTitle", {
                // Gets or sets a value for the "pageTitle" property
                get: function () { return this._pageTitle; },
                set: function (value) {
                    this._pageTitle = value;
                    this.raisePropertyChanged("pageTitle", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BlogViewModel.prototype, "sampleText", {
                // Gets or sets a value for the "sampleText" property
                get: function () { return this._sampleText; },
                set: function (value) {
                    this._sampleText = value;
                    this.raisePropertyChanged("sampleText", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BlogViewModel.prototype, "commandButtonText", {
                // Gets or sets a value for the "commandButtonText" property
                get: function () { return this._commandButtonText; },
                set: function (value) {
                    this._commandButtonText = value;
                    this.raisePropertyChanged("commandButtonText", value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BlogViewModel.prototype, "itemsSource", {
                // Gets or sets a value for the "sampleText" property
                get: function () { return this._itemsSource; },
                set: function (value) {
                    this._itemsSource = value;
                    this.raisePropertyChanged("itemsSource", value);
                },
                enumerable: true,
                configurable: true
            });
            return BlogViewModel;
        })(TypedMVVM.Common.ViewModels.ViewModelBase);
        ViewModels.BlogViewModel = BlogViewModel;
    })(ViewModels = McPhersonApps.ViewModels || (McPhersonApps.ViewModels = {}));
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=BlogViewModel.js.map