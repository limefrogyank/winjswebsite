/// <reference path="../include/typedMVVM.ts" />

module TypedMVVM.Common.ViewModels {
    export class ViewModelBase implements TypedMVVM.Common.ViewModels.IViewModelBase {
        constructor() {
            this.initialiseServices();
            this.setupDataContext();
        }

        private initialiseServices() {
            this.dialogService = IoC.Container.resolve(Services.DialogService);
        }

        dialogService: Services.IDialogService;

        dataContext: any;

        setupDataContext() {
            // Override in derived classes for initialising the Binding
            // this.dataContext = WinJS.Binding.as({...});
        }
        
        raisePropertyChanged(propertyName: string, value: Object) {
            if (this.dataContext && propertyName && (value != undefined)) {
                for (var property in this.dataContext) {
                    if (property === propertyName) {
                        this.dataContext[property] = value;
                    }
                }
            }
        }
    }
}
