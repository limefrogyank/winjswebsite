/// <reference path="../include/typedMVVM.ts" />

module TypedMVVM.Common.ViewModels {
    export interface IViewModelBase {
        dataContext: any;
        dialogService: TypedMVVM.Common.Services.IDialogService;
        setupDataContext();
        raisePropertyChanged(propertyName: string, value: string);
    }
}
