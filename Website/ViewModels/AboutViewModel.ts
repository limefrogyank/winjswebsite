﻿
﻿/// <reference path="../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../Scripts/typedMVVM/include/win.ts" />


/// <reference path="../Services/IDataService.ts" />
/// <reference path="../Models/SampleListViewItemModel.ts" />

module McPhersonApps.ViewModels {
    // ViewModel for the Home page
    export class AboutViewModel extends TypedMVVM.Common.ViewModels.ViewModelBase {
        private _dataService: Interfaces.IDataService;
        private _pageTitle: string;
        private _sampleText: string;
        private _commandButtonText: string;
        private _navItemCommand: TypedMVVM.Common.Commands.ICommand<string>;

        private _showMessageDialogCommand: TypedMVVM.Common.Commands.ICommand<string>;
        private _itemsSource: WinJS.UI.IListDataSource<Models.SampleListViewItemModel>
      
        // Default constructor
        constructor(dataService: Interfaces.IDataService) {
            super();

            this._dataService = dataService;

            this.initialiseCommands();
        }

        public navItemCommandBind: any;


        // Sample property wrapping a command executed when ListView oniteminvoked is raised
        public listItemInvokedBind: any;

        // Gets or sets a value for the "showMessageDialogCommandBind" property: helper for enabling Data Binding
        public showMessageDialogCommandBind: any;

        // Initialise all the commands for the ViewModel
        private initialiseCommands() {
            this.initialiseShowMessageDialogCommand();

            //Initialise all other commands here
            this.navItemCommandBind = WinJS.Utilities.markSupportedForProcessing(((ev) => {
                this._showMessageDialogCommand.execute("nav item clicked");
            }).bind(this));


            this.showMessageDialogCommandBind = WinJS.Utilities.markSupportedForProcessing((() => {
                this._showMessageDialogCommand.execute("You have just executed a TypedMVVM Command");
            }).bind(this));

            this.listItemInvokedBind = WinJS.Utilities.markSupportedForProcessing((() => {
                this._showMessageDialogCommand.execute("ListView Item invoked");
            }).bind(this));
        }

        // Initialise methods and binding for the sample command
        private initialiseShowMessageDialogCommand() {
            this._showMessageDialogCommand = new TypedMVVM.Common.Commands.RelayCommand<string>((par) => {
                this.dialogService.showDialog(par);
            }, (par) => { return par && par != ""; });
        }
        
        // Setup the Data Context for data binding
        public setupDataContext() {
            this.dataContext = WinJS.Binding.as({
                pageTitle: this.pageTitle,
                sampleText: this.sampleText,
                commandButtonText: this.commandButtonText,
                itemsSource: this.itemsSource
            });
        }
        
        // Initialise data from the services
        public loadData() {
            this.pageTitle = this._dataService.getTitle();
            this.sampleText = this._dataService.getContent();
            this.commandButtonText = this._dataService.getCommandButtonText();
            
        }

        // Gets or sets a value for the "pageTitle" property
        public get pageTitle(): string { return this._pageTitle; }
        public set pageTitle(value: string) {
            this._pageTitle = value;
            this.raisePropertyChanged("pageTitle", value);
        }

        // Gets or sets a value for the "sampleText" property
        public get sampleText(): string { return this._sampleText; }
        public set sampleText(value: string) {
            this._sampleText = value;
            this.raisePropertyChanged("sampleText", value);
        }

        // Gets or sets a value for the "commandButtonText" property
        public get commandButtonText(): string { return this._commandButtonText; }
        public set commandButtonText(value: string) {
            this._commandButtonText = value;
            this.raisePropertyChanged("commandButtonText", value);
        }

        // Gets or sets a value for the "sampleText" property
        public get itemsSource(): WinJS.UI.IListDataSource<Models.SampleListViewItemModel> { return this._itemsSource; }
        public set itemsSource(value: WinJS.UI.IListDataSource<Models.SampleListViewItemModel>) {
            this._itemsSource = value;
            this.raisePropertyChanged("itemsSource", value);
        }
    }
}


