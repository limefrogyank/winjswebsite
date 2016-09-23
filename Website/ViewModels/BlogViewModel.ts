
﻿/// <reference path="../Scripts/typedMVVM/include/typedMVVM.ts" />
/// <reference path="../Scripts/typedMVVM/include/win.ts" />


/// <reference path="../Services/IDataService.ts" />
/// <reference path="../Models/SampleListViewItemModel.ts" />

module McPhersonApps.ViewModels {
    // ViewModel for the Home page
    export class BlogViewModel extends TypedMVVM.Common.ViewModels.ViewModelBase {
        private _dataService: Interfaces.IDataService;
        private _pageTitle: string;
        private _sampleText: string;
        private _commandButtonText: string;
        private _navItemCommand: TypedMVVM.Common.Commands.ICommand<string>;

        private _showMessageDialogCommand: TypedMVVM.Common.Commands.ICommand<string>;
        private _itemsSource: WinJS.Binding.SortedListProjection<Models.WordPress.PostModel>
      
        // Default constructor
        constructor(dataService: Interfaces.IDataService) {
            super();

            this._dataService = dataService;

            this.initialiseCommands();
        }

        public navItemCommandBind: any;


        // Sample property wrapping a command executed when ListView oniteminvoked is raised
        public buttonClickCommandBind: any;

        // Gets or sets a value for the "showMessageDialogCommandBind" property: helper for enabling Data Binding
        public showMessageDialogCommandBind: any;

        // Initialise all the commands for the ViewModel
        private initialiseCommands() {
            this.initialiseShowMessageDialogCommand();
            
            this.showMessageDialogCommandBind = WinJS.Utilities.markSupportedForProcessing((() => {
                this._showMessageDialogCommand.execute("You have just executed a TypedMVVM Command");
            }).bind(this));

            this.buttonClickCommandBind = WinJS.Utilities.markSupportedForProcessing(((ev) => {
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

            //this._dataService.getRecentBlogPosts().then((posts) => {
            //    this.itemsSource = new WinJS.Binding.List<Models.Tumblr.CustomPost>(posts);
                
            //});

            this._dataService.getRecentWordPressPosts().then((posts) => {
                if (this.itemsSource == null)
                    this.itemsSource = new WinJS.Binding.List<Models.WordPress.PostModel>(posts).createSorted((left, right) => {
                        return (left.post.date > right.post.date ? -1 : +1);
                    });
                else {
                    posts.forEach((v1, i1, a1) => {
                        var found: boolean = false;
                        this.itemsSource.some((v, i, a) => {
                            if (v.post.ID == v1.post.ID) {
                                found = true;
                                return true;
                            }
                            return false;
                        });
                        if (!found) {
                            this.itemsSource.push(v1);
                        }
                    });
                }
            });
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
        public get itemsSource(): WinJS.Binding.SortedListProjection<Models.WordPress.PostModel> { return this._itemsSource; }
        public set itemsSource(value: WinJS.Binding.SortedListProjection<Models.WordPress.PostModel>) {
            this._itemsSource = value;
            this.raisePropertyChanged("itemsSource", value);
        }
    }
}


