var Application;
(function (Application) {
    "use strict";
    var PageControlNavigator = (function () {
        function PageControlNavigator(element, options) {
            this.home = "";
            this._lastNavigationPromise = WinJS.Promise.as();
            //_lastViewState: Windows.UI.ViewManagement.ApplicationViewState;
            this._disposed = false;
            this._eventHandlerRemover = [];
            this._element = element || document.createElement("div");
            this._element.appendChild(this._createPageElement());
            this.home = options.home;
            this.addRemovableEventListener(WinJS.Navigation, 'navigating', this._navigating.bind(this), false);
            this.addRemovableEventListener(WinJS.Navigation, 'navigated', this._navigated.bind(this), false);
            window.onresize = this._resized.bind(this);
            window.onpopstate = this._popStateChanged.bind(this);
            Application.navigator = this;
        }
        PageControlNavigator.prototype.addRemovableEventListener = function (e, eventName, handler, capture) {
            e.addEventListener(eventName, handler, capture);
            this._eventHandlerRemover.push(function () {
                e.removeEventListener(eventName, handler);
            });
        };
        Object.defineProperty(PageControlNavigator.prototype, "pageControl", {
            get: function () {
                return this.pageElement ? this.pageElement.winControl : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageControlNavigator.prototype, "pageElement", {
            get: function () {
                return this._element.firstElementChild;
            },
            enumerable: true,
            configurable: true
        });
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
        PageControlNavigator.prototype._createPageElement = function () {
            var element = document.createElement("div");
            element.setAttribute("dir", window.getComputedStyle(this._element, null).direction);
            element.style.position = "absolute";
            element.style.visibility = "hidden";
            element.style.width = "100%";
            element.style.height = "100%";
            return element;
        };
        // Retrieves a list of animation elements for the current page.
        // If the page does not define a list, animate the entire page.
        PageControlNavigator.prototype._getAnimationElements = function () {
            if (this.pageControl && this.pageControl.getAnimationElements) {
                return this.pageControl.getAnimationElements();
            }
            return this.pageElement;
        };
        PageControlNavigator.prototype._getFadeInElements = function () {
            if (this.pageControl && this.pageControl.getFadeInElements) {
                return this.pageControl.getFadeInElements();
            }
            return this.pageElement;
        };
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
        PageControlNavigator.prototype._popStateChanged = function (args) {
            var navState = args.state;
            var navHistory = WinJS.Navigation.history;
            if (WinJS.Navigation.canGoBack && navState.state == navHistory.backStack[navHistory.backStack.length - 1].state) {
                WinJS.Navigation.back();
            }
            else if (WinJS.Navigation.canGoForward && navState.state == navHistory.forwardStack[navHistory.forwardStack.length - 1].state) {
                WinJS.Navigation.forward();
            }
        };
        PageControlNavigator.prototype._navigated = function (args) {
            this.pageElement.style.visibility = "";
            WinJS.Promise.join([
                WinJS.UI.Animation.enterPage(this._getAnimationElements())
            ]).done(function () {
            });
        };
        PageControlNavigator.prototype._navigating = function (args) {
            var _this = this;
            var newElement = this._createPageElement();
            this._element.appendChild(newElement);
            this._lastNavigationPromise.cancel();
            this._lastNavigationPromise = WinJS.Promise.as().then(function () {
                return WinJS.Promise.join([
                    WinJS.UI.Animation.exitPage(_this._getAnimationElements()),
                    WinJS.UI.Animation.fadeOut(_this._getFadeInElements()),
                    WinJS.UI.Pages.render(args.detail.location, newElement, args.detail.state)
                ]);
            }).then(function () {
                var navHistory = WinJS.Navigation.history;
                WinJS.Application.sessionState.navigationHistory = {
                    backStack: navHistory.backStack.slice(0),
                    forwardStack: navHistory.forwardStack.slice(0),
                    current: navHistory.current
                };
                WinJS.Application.sessionState.lastUrl = args.detail.location;
                if (navHistory.backStack.length > 0) {
                    window.history.pushState(navHistory.current, "test");
                }
                if (_this._element.childElementCount > 1) {
                    var oldElement = _this._element.firstElementChild;
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
            }, function () {
                if (_this._element.childElementCount > 1) {
                    var oldElement = _this._element.firstElementChild;
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
        };
        PageControlNavigator.prototype.cleanup = function () {
        };
        PageControlNavigator.prototype._resized = function (args) {
            //if (this.pageControl && this.pageControl.updateLayout) {
            //    this.pageControl.updateLayout.call(this.pageControl, this.pageElement, Windows.UI.ViewManagement.ApplicationView.value, this._lastViewState);
            //}
            //this._lastViewState = Windows.UI.ViewManagement.ApplicationView.value;
        };
        return PageControlNavigator;
    }());
    Application.PageControlNavigator = PageControlNavigator;
    WinJS.Utilities.markSupportedForProcessing(PageControlNavigator);
})(Application || (Application = {}));
//# sourceMappingURL=navigator.js.map