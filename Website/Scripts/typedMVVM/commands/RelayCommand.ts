/// <reference path="../include/typedMVVM.ts" />
/// <reference path="../include/win.ts" />

module TypedMVVM.Common.Commands {
    // RelayCommand implementation: provides an implementation of ICommand
    export class RelayCommand<T> implements TypedMVVM.Common.Commands.ICommand<T> {
        _execute: (par: T) => void;
        _canExecute: (par: T) => boolean;

        constructor(executeFunc: (par: T) => void, canExecuteFunc: (par: T) => boolean) {
            if (executeFunc) {
                this._execute = executeFunc;
            }

            if (canExecuteFunc) {
                this._canExecute = canExecuteFunc;
            }
        }

        public execute(parameter: T) {
            if (this._execute) {
                if ((this._canExecute && this._canExecute(parameter)) || !this._canExecute) {
                    this._execute(parameter);
                }
            }
        }

        public canExecute(parameter: T): boolean {
            if (this._canExecute) {
                return this._canExecute(parameter);
            }
            return false;
        }
    }
}
