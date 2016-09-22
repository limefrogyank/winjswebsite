/// <reference path="navigator.ts" />
module McPhersonApps {

    export class NavigationStateOptions {
        activationKind: any;
        activatedEventArgs: any;
    }

    document.ontouchmove = (e) => {
        e.preventDefault();
    };
    document.onpointermove = (e) => {
        e.preventDefault();
    };

    var body = <HTMLBodyElement>document.getElementsByTagName("BODY")[0];

    body.ontouchstart = (e) => {
        //if (e.currentTarget.scrollTop === 0) {
        //    e.currentTarget.scrollTop = 1;
        //} else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
        //    e.currentTarget.scrollTop -= 1;
        //}
    };
    body.onpointerdown = (e) => {

    };

    body.ontouchmove = (e) => {
        e.stopPropagation();
    };
    body.onpointermove = (e) => {
        e.stopPropagation();
    };
   
    //export var currentApp: Windows.ApplicationModel.Store.CurrentAppSimulator;
    //export var currentApp: Windows.ApplicationModel.Store.CurrentApp;

    WinJS.Application.onloaded = () => {
        WinJS.Resources.processAll();
    }

    WinJS.Application.addEventListener("ready", (args) => {
        var activationKind = args.detail.kind;
        var activatedEventArgs = args.detail.detail;
        
        WinJS.Navigation.history = WinJS.Application.sessionState.navigationHistory || {};
        WinJS.Navigation.history.current.initialPlaceholder = true;

        // Optimize the load of the application and while the splash screen is shown, execute high priority scheduled work.
        WinJS.UI.disableAnimations();
        var p = WinJS.UI.processAll().then(() => {

            Handlers.handleResize();
            window.onresize = (e) => {
                Handlers.handleResize();
            };

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
        }).then(() => {
            return WinJS.Utilities.Scheduler.requestDrain(WinJS.Utilities.Scheduler.Priority.aboveNormal + 1);
        }).then(() => {
            var viewModel = McPhersonApps.ViewModels.ViewModelFactory.mainViewModel;
            return WinJS.Binding.processAll(document.rootElement, viewModel, false, null, null);
        }).then(() => {
            WinJS.UI.enableAnimations();
        });

        args.setPromise(p);

    });
    
    WinJS.Application.oncheckpoint = (args) => {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        WinJS.Application.sessionState.history = WinJS.Navigation.history;
    };

    var currentMode = null;
    


    WinJS.Application.start();



    export class Handlers {

        static handleResize() {
            var nextMode;
            if (window.innerWidth >= 1000) {
                nextMode = "large";
            } else if (window.innerWidth >= 600) {
                nextMode = "medium";
            } else {
                nextMode = "small";
            }

            if (currentMode !== nextMode) {
                var splitViewElement = document.getElementById('mainSplitView');
                var splitView = <WinJS.UI.SplitView>splitViewElement.winControl;
                var separateHamburger = <HTMLButtonElement>document.getElementById('separateHamburgerButton');
                currentMode = nextMode;
                switch (currentMode) {
                    case "large":
                        splitView.openedDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.inline;
                        splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.inline;
                        splitView.openPane();
                        separateHamburger.style.display = 'none';
                        //splitView.onbeforeclose = (e) => {
                        //    e.preventDefault();
                        //};
                        var elements = document.getElementsByClassName('pageHeader');
                        for (var i = 0; i < elements.length; ++i) {
                            var elem = <HTMLElement>elements[i];
                            if (elem.classList.contains('inlineSpacing')) {
                                elem.classList.remove('inlineSpacing');
                            }
                        }
                        break;
                    case "medium":
                        splitView.openedDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.overlay;
                        splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.inline;
                        splitView.onbeforeclose = null;
                        separateHamburger.style.display = 'none';
                        var elements = document.getElementsByClassName('pageHeader');
                        for (var i = 0; i < elements.length; ++i) {
                            var elem = <HTMLElement>elements[i];
                            if (elem.classList.contains('inlineSpacing')) {
                                elem.classList.remove('inlineSpacing');
                            }
                        }
                        break;
                    case "small":
                        splitView.openedDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.overlay;
                        splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.none;
                        splitView.onbeforeclose = null;
                        separateHamburger.style.display = 'block';
                        var elements = document.getElementsByClassName('pageHeader');
                        for (var i = 0; i < elements.length; ++i) {
                            var elem = <HTMLElement>elements[i];
                            elem.classList.add('inlineSpacing');
                        }
                        break;
                }
            }
        }
    }    

}

