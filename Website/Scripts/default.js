/// <reference path="navigator.ts" />
var McPhersonApps;
(function (McPhersonApps) {
    var NavigationStateOptions = (function () {
        function NavigationStateOptions() {
        }
        return NavigationStateOptions;
    }());
    McPhersonApps.NavigationStateOptions = NavigationStateOptions;
    document.ontouchmove = function (e) {
        e.preventDefault();
    };
    document.onpointermove = function (e) {
        e.preventDefault();
    };
    var body = document.getElementsByTagName("BODY")[0];
    body.ontouchstart = function (e) {
        //if (e.currentTarget.scrollTop === 0) {
        //    e.currentTarget.scrollTop = 1;
        //} else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
        //    e.currentTarget.scrollTop -= 1;
        //}
    };
    body.onpointerdown = function (e) {
    };
    body.ontouchmove = function (e) {
        e.stopPropagation();
    };
    body.onpointermove = function (e) {
        e.stopPropagation();
    };
    //export var currentApp: Windows.ApplicationModel.Store.CurrentAppSimulator;
    //export var currentApp: Windows.ApplicationModel.Store.CurrentApp;
    WinJS.Application.onloaded = function () {
        WinJS.Resources.processAll();
    };
    WinJS.Application.addEventListener("ready", function (args) {
        var activationKind = args.detail.kind;
        var activatedEventArgs = args.detail.detail;
        WinJS.Navigation.history = WinJS.Application.sessionState.navigationHistory || {};
        WinJS.Navigation.history.current.initialPlaceholder = true;
        // Optimize the load of the application and while the splash screen is shown, execute high priority scheduled work.
        WinJS.UI.disableAnimations();
        var p = WinJS.UI.processAll().then(function () {
            Handlers.handleResize();
            window.onresize = function (e) {
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
            return WinJS.Navigation.navigate(WinJS.Navigation.location || Application.navigator.home, guid());
        }).then(function () {
            return WinJS.Utilities.Scheduler.requestDrain(WinJS.Utilities.Scheduler.Priority.aboveNormal + 1);
        }).then(function () {
            var viewModel = McPhersonApps.ViewModels.ViewModelFactory.mainViewModel;
            return WinJS.Binding.processAll(document.rootElement, viewModel, false, null, null);
        }).then(function () {
            WinJS.UI.enableAnimations();
        });
        args.setPromise(p);
    });
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    WinJS.Application.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        WinJS.Application.sessionState.history = WinJS.Navigation.history;
    };
    var currentMode = null;
    var inlineSpacingCSSNode = setStyle('.pageHeader{ margin-left:48px; }');
    WinJS.Application.start();
    function setStyle(cssText, node) {
        if (node === void 0) { node = null; }
        var sheet = document.createElement('style');
        sheet.type = 'text/css';
        (document.head || document.getElementsByTagName('head')[0]).appendChild(sheet);
        if (!node || node.parentNode !== sheet)
            return sheet.appendChild(document.createTextNode(cssText));
        node.nodeValue = cssText;
        return node;
    }
    ;
    var Handlers = (function () {
        function Handlers() {
        }
        Handlers.handleResize = function () {
            var nextMode;
            if (window.innerWidth >= 1000) {
                nextMode = "large";
            }
            else if (window.innerWidth >= 600) {
                nextMode = "medium";
            }
            else {
                nextMode = "small";
            }
            if (currentMode !== nextMode) {
                var splitViewElement = document.getElementById('mainSplitView');
                var splitView = splitViewElement.winControl;
                var separateHamburger = document.getElementById('separateHamburgerButton');
                currentMode = nextMode;
                switch (currentMode) {
                    case "large":
                        splitView.openedDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.inline;
                        splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.inline;
                        splitView.openPane();
                        separateHamburger.style.display = 'none';
                        inlineSpacingCSSNode = setStyle('.pageHeader{ margin-left:0px; }');
                        //var elements = document.getElementsByClassName('pageHeader');
                        //for (var i = 0; i < elements.length; ++i) {
                        //    var elem = <HTMLElement>elements[i];
                        //    if (elem.classList.contains('inlineSpacing')) {
                        //        elem.classList.remove('inlineSpacing');
                        //    }
                        //}
                        break;
                    case "medium":
                        splitView.openedDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.overlay;
                        splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.inline;
                        splitView.onbeforeclose = null;
                        separateHamburger.style.display = 'none';
                        inlineSpacingCSSNode = setStyle('.pageHeader{ margin-left:0px; }');
                        //var elements = document.getElementsByClassName('pageHeader');
                        //for (var i = 0; i < elements.length; ++i) {
                        //    var elem = <HTMLElement>elements[i];
                        //    if (elem.classList.contains('inlineSpacing')) {
                        //        elem.classList.remove('inlineSpacing');
                        //    }
                        //}
                        break;
                    case "small":
                        splitView.openedDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.overlay;
                        splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.none;
                        splitView.onbeforeclose = null;
                        separateHamburger.style.display = 'block';
                        inlineSpacingCSSNode = setStyle('.pageHeader{ margin-left:48px; }');
                        //var elements = document.getElementsByClassName('pageHeader');
                        //for (var i = 0; i < elements.length; ++i) {
                        //    var elem = <HTMLElement>elements[i];
                        //    elem.classList.add('inlineSpacing');
                        //}
                        break;
                }
            }
        };
        return Handlers;
    }());
    McPhersonApps.Handlers = Handlers;
})(McPhersonApps || (McPhersonApps = {}));
//# sourceMappingURL=default.js.map