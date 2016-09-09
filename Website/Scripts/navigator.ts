module Application {
    "use strict";

    export var navigator: PageControlNavigator;

    interface PageControl {
        getAnimationElements: () => Element;
        getFadeInElements: () => Element;
        //updateLayout: (element: Element, viewState: Windows.UI.ViewManagement.ApplicationViewState, lastViewstate: Windows.UI.ViewManagement.ApplicationViewState) => void;
    }

    export class PageControlNavigator {

        home: string = "";

        _element: Element;
        _lastNavigationPromise: WinJS.Promise<any> = WinJS.Promise.as();
        //_lastViewState: Windows.UI.ViewManagement.ApplicationViewState;
        _disposed: boolean = false;
        _eventHandlerRemover: Function[] = [];


        constructor(element: any, options: any) {
            this._element = element || document.createElement("div");
            this._element.appendChild(this._createPageElement());

            this.home = options.home;

            this.addRemovableEventListener(WinJS.Navigation, 'navigating', this._navigating.bind(this), false);
            this.addRemovableEventListener(WinJS.Navigation, 'navigated', this._navigated.bind(this), false);

            window.onresize = this._resized.bind(this);

            window.onpopstate = this._popStateChanged.bind(this);

            navigator = this;
        }

        private addRemovableEventListener(e: any, eventName: string, handler: any, capture: boolean) {
            e.addEventListener(eventName, handler, capture);
            this._eventHandlerRemover.push(function () {
                e.removeEventListener(eventName, handler);
            });
        }

        private get pageControl(): PageControl {
            return this.pageElement ? <PageControl>this.pageElement.winControl : null;
        }

        get pageElement(): HTMLElement {
            return <HTMLElement>this._element.firstElementChild;
        }

        //public dispose(): void {
        //    if (this._disposed) {
        //        return;
        //    }

        //    this._disposed = true;
        //    WinJS.Utilities.disposeSubTree(this._element);
        //    for (var i = 0; i < this._eventHandlerRemover.length; i++) {
        //        this._eventHandlerRemover[i]();
        //    }
        //    this._eventHandlerRemover = null;
        //}

        // Creates a container for a new page to be loaded into.
        private _createPageElement(): HTMLDivElement {
            var element = document.createElement("div");
            element.setAttribute("dir", window.getComputedStyle(this._element, null).direction);
            element.style.position = "absolute";
            element.style.visibility = "hidden";
            element.style.width = "100%";
            element.style.height = "100%";
            return element;
        }

        // Retrieves a list of animation elements for the current page.
        // If the page does not define a list, animate the entire page.
        private _getAnimationElements(): Element {
            if (this.pageControl && this.pageControl.getAnimationElements) {
                return this.pageControl.getAnimationElements();
            }
            return this.pageElement;
        }

        private _getFadeInElements(): Element {
            if (this.pageControl && this.pageControl.getFadeInElements) {
                return this.pageControl.getFadeInElements();
            }
            return this.pageElement;
        }         
              

        //private _navigated(args: any) {
        //    var newElement = this._createPageElement();
        //    var parentedComplete;
        //    var parented = new WinJS.Promise(function (c) { parentedComplete = c; });

        //    this._lastNavigationPromise.cancel();

        //    this._lastNavigationPromise = WinJS.Promise.timeout().then(function () {
        //        return WinJS.UI.Pages.render(args.detail.location, newElement, args.detail.state, parented);
        //    }).then(function parentElement(control) {
        //            var oldElement = this.pageElement;
        //            if (oldElement.winControl && oldElement.winControl.unload) {
        //                oldElement.winControl.unload();
        //            }
        //            this._element.appendChild(newElement);
        //            this._element.removeChild(oldElement);
        //            oldElement.innerText = "";
        //            //this._updateBackButton();
        //            parentedComplete();
        //            WinJS.UI.Animation.enterPage(this._getAnimationElements()).done();
        //        }.bind(this));

        //    args.detail.setPromise(this._lastNavigationPromise);
        //}

        private _popStateChanged(args: UIEvent) {
            if (WinJS.Navigation.canGoBack)
                WinJS.Navigation.back();
        }


        private _navigated(args: any) {
            this.pageElement.style.visibility = "";
            WinJS.Promise.join(
                [
                    WinJS.UI.Animation.enterPage(this._getAnimationElements())
                    //WinJS.UI.Animation.fadeIn(this._getFadeInElements())
                ]).done(() => {
                });
        }

        private _navigating(args: any) {

            var newElement = this._createPageElement();
            this._element.appendChild(newElement);

            this._lastNavigationPromise.cancel();

            this._lastNavigationPromise = WinJS.Promise.as().then(() => {
                return WinJS.Promise.join(
                    [
                        WinJS.UI.Animation.exitPage(this._getAnimationElements()),

                        WinJS.UI.Animation.fadeOut(this._getFadeInElements()),

                        WinJS.UI.Pages.render(args.detail.location, newElement, args.detail.state)

                    ]);

            }).then(() => {
                var navHistory = WinJS.Navigation.history;
                WinJS.Application.sessionState.navigationHistory = {
                    backStack: navHistory.backStack.slice(0),
                    forwardStack: navHistory.forwardStack.slice(0),
                    current: navHistory.current
                };
                WinJS.Application.sessionState.lastUrl = args.detail.location;
                if (navHistory.backStack.length > 0) {
                    window.history.pushState(navHistory, "test");
                }
                if (this._element.childElementCount > 1) {
                    var oldElement = <HTMLElement>this._element.firstElementChild;
                    // Cleanup and remove previous element 
                    if (oldElement.winControl) {
                        if (oldElement.winControl.unload) {
                            oldElement.winControl.unload();
                        }
                        oldElement.winControl.dispose();
                    }
                    oldElement.parentNode.removeChild(oldElement);
                    oldElement.innerText = "";
                }
            }, () => {

                if (this._element.childElementCount > 1) {
                    var oldElement = <HTMLElement>this._element.firstElementChild;
                    // Cleanup and remove previous element 
                    if (oldElement.winControl) {
                        if (oldElement.winControl.unload) {
                            oldElement.winControl.unload();
                        }
                        oldElement.winControl.dispose();
                    }
                    oldElement.parentNode.removeChild(oldElement);
                    oldElement.innerText = "";
                }
            });

            args.detail.setPromise(this._lastNavigationPromise);

        }

        private cleanup() {

        }

        private _resized(args: UIEvent) {
            //if (this.pageControl && this.pageControl.updateLayout) {
            //    this.pageControl.updateLayout.call(this.pageControl, this.pageElement, Windows.UI.ViewManagement.ApplicationView.value, this._lastViewState);
            //}
            //this._lastViewState = Windows.UI.ViewManagement.ApplicationView.value;
        }

        //// Updates the back button state. Called after navigation has
        //// completed.
        //private _updateBackButton() {
        //    var backButton = this.pageElement.querySelector("header[role=banner] .win-backbutton");
        //    if (backButton) {
        //        backButton.onclick = () => nav.back();

        //        if (nav.canGoBack) {
        //            backButton.removeAttribute("disabled");
        //        } else {
        //            backButton.setAttribute("disabled", "disabled");
        //        }
        //    }
        //}
    }

    WinJS.Utilities.markSupportedForProcessing(PageControlNavigator);
}