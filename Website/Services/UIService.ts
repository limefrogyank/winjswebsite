
module McPhersonApps.Services {
    export class UIService implements Interfaces.IUIService {

        showReplies(dataContext: any, placementElement: HTMLElement) {

            var flyoutElement = document.getElementById('repliesFlyout');
            WinJS.Binding.processAll(flyoutElement, dataContext).then((success) => {
                var flyout = <WinJS.UI.Flyout>flyoutElement.winControl;
                flyout.show(placementElement);

            });
        }

    }

}