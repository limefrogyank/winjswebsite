
/// <reference path="../services/IDataService.ts" />
/// <reference path="../Scripts/TypedMVVM/include/typedMVVM.ts" />

module McPhersonApps.Models {
    export class SampleListViewItemModel  {
        constructor(title: string, buttonClickCommand: TypedMVVM.Common.Commands.ICommand<Object>) {
            this.title = title;
            this.buttonClickCommandBind = WinJS.Utilities.markSupportedForProcessing((() => {
                buttonClickCommand.execute(null);
            }).bind(this));
        }

        title: string;
        buttonClickCommandBind: any;
    }
}


