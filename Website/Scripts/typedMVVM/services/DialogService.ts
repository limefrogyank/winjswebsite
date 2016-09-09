/// <reference path="../include/typedMVVM.ts" />

module TypedMVVM.Common.Services {
    export class DialogService implements TypedMVVM.Common.Services.IDialogService {   
        showDialog(text: string): any {
            var dialogElement = <HTMLDivElement>document.querySelector('.win-contentdialog');
            var dialogControl = <WinJS.UI.ContentDialog>dialogElement.winControl;

            var dialogContent = <HTMLDivElement>document.querySelector('.win-contentdialog-content');
            dialogContent.textContent = text;
            
            dialogControl.show();
            //return new Windows.UI.Popups.MessageDialog(text).showAsync();
        }
    }
}
