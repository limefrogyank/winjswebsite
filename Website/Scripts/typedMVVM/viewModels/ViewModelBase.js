/// <reference path="../include/typedMVVM.ts" />
var TypedMVVM;
(function (TypedMVVM) {
    var Common;
    (function (Common) {
        var ViewModels;
        (function (ViewModels) {
            var ViewModelBase = (function () {
                function ViewModelBase() {
                    this.initialiseServices();
                    this.setupDataContext();
                }
                ViewModelBase.prototype.initialiseServices = function () {
                    this.dialogService = Common.IoC.Container.resolve(Common.Services.DialogService);
                };
                ViewModelBase.prototype.setupDataContext = function () {
                    // Override in derived classes for initialising the Binding
                    // this.dataContext = WinJS.Binding.as({...});
                };
                ViewModelBase.prototype.raisePropertyChanged = function (propertyName, value) {
                    if (this.dataContext && propertyName && (value != undefined)) {
                        for (var property in this.dataContext) {
                            if (property === propertyName) {
                                this.dataContext[property] = value;
                            }
                        }
                    }
                };
                return ViewModelBase;
            }());
            ViewModels.ViewModelBase = ViewModelBase;
        })(ViewModels = Common.ViewModels || (Common.ViewModels = {}));
    })(Common = TypedMVVM.Common || (TypedMVVM.Common = {}));
})(TypedMVVM || (TypedMVVM = {}));
//# sourceMappingURL=ViewModelBase.js.map