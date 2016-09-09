module TypedMVVM.Common.Commands {
    export interface ICommand<T> {
        execute(parameter : T) : void;
        canExecute(parameter: T) : boolean;
    }
}
