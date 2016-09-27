/// <reference path="../include/typedMVVM.ts" />
/// <reference path="../include/win.ts" />
var TypedMVVM;
(function (TypedMVVM) {
    var Common;
    (function (Common) {
        var Commands;
        (function (Commands) {
            // RelayCommand implementation: provides an implementation of ICommand
            var RelayCommand = (function () {
                function RelayCommand(executeFunc, canExecuteFunc) {
                    if (executeFunc) {
                        this._execute = executeFunc;
                    }
                    if (canExecuteFunc) {
                        this._canExecute = canExecuteFunc;
                    }
                }
                RelayCommand.prototype.execute = function (parameter) {
                    if (this._execute) {
                        if ((this._canExecute && this._canExecute(parameter)) || !this._canExecute) {
                            this._execute(parameter);
                        }
                    }
                };
                RelayCommand.prototype.canExecute = function (parameter) {
                    if (this._canExecute) {
                        return this._canExecute(parameter);
                    }
                    return false;
                };
                return RelayCommand;
            }());
            Commands.RelayCommand = RelayCommand;
        })(Commands = Common.Commands || (Common.Commands = {}));
    })(Common = TypedMVVM.Common || (TypedMVVM.Common = {}));
})(TypedMVVM || (TypedMVVM = {}));
//# sourceMappingURL=RelayCommand.js.map