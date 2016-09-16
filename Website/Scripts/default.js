/// <reference path="navigator.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var NavigationStateOptions = (function () {
        function NavigationStateOptions() {
        }
        return NavigationStateOptions;
    })();
    McPhersonApps.NavigationStateOptions = NavigationStateOptions;
    //export var currentApp: Windows.ApplicationModel.Store.CurrentAppSimulator;
    //export var currentApp: Windows.ApplicationModel.Store.CurrentApp;
    WinJS.Application.onloaded = function () {
        WinJS.Resources.processAll();
    };
    WinJS.Application.addEventListener("ready", function (args) {
        var activationKind = args.detail.kind;
        var activatedEventArgs = args.detail.detail;
        //switch (args.detail.kind) {
        //case Windows.ApplicationModel.Activation.ActivationKind.launch:
        //    //if (args.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
        //    if (args.detail.previousExecutionState !== Windows.ApplicationModel.Activation.ApplicationExecutionState.terminated) {
        //        // TODO: This application has been newly launched. Initialize
        //        // your application here.
        //    } else {
        //        // TODO: This application has been reactivated from suspension.
        //        // Restore application state here.
        //    }
        //    //displayRequest = new Windows.System.Display.DisplayRequest();
        WinJS.Navigation.history = WinJS.Application.sessionState.navigationHistory || {};
        WinJS.Navigation.history.current.initialPlaceholder = true;
        // Optimize the load of the application and while the splash screen is shown, execute high priority scheduled work.
        WinJS.UI.disableAnimations();
        var p = WinJS.UI.processAll().then(function () {
            var initialState = new NavigationStateOptions();
            var navHistory = WinJS.Application.sessionState.navigationHistory;
            if (navHistory) {
                //WinJS.Navigation.history = navHistory;
                //url = navHistory.current.location;
                initialState = navHistory.current.state || initialState;
            }
            initialState.activationKind = activationKind;
            initialState.activatedEventArgs = activatedEventArgs;
            WinJS.Navigation.state = initialState;
            return WinJS.Navigation.navigate(WinJS.Navigation.location || Application.navigator.home, WinJS.Navigation.state);
        }).then(function () {
            return WinJS.Utilities.Scheduler.requestDrain(WinJS.Utilities.Scheduler.Priority.aboveNormal + 1);
        }).then(function () {
            var viewModel = McPhersonApps.ViewModels.ViewModelFactory.mainViewModel;
            return WinJS.Binding.processAll(document.rootElement, viewModel, false, null, null);
        }).then(function () {
            WinJS.UI.enableAnimations();
        });
        args.setPromise(p);
        //        break;
        //    default:
        //        break;
        //}
    });
    WinJS.Application.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        WinJS.Application.sessionState.history = WinJS.Navigation.history;
    };
    WinJS.Application.start();
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=default.js.map