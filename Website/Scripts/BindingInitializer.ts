module BindingInitializers {

    export var getDestinationValue: Function = (dest, destProps) => {
        if (destProps.length === 1) {
            return dest[destProps[0]];
        }
        else {
            var element = eval("dest['" +
                destProps.slice(0, destProps.length - 1).join("']['") + "']");
            return element[destProps[destProps.length - 1]];
        }
    };

    export var getSourceObject: Function = (source, sourceProps) => {
        if (sourceProps.length === 1) {
            return source;
        }
        else {
            return eval("source['" + sourceProps.slice(0, sourceProps.length - 1).join("']['") + "']");
        }
    };


    export var twowaychange: Function = WinJS.Binding.initializer((source, sourceProps: string[], dest, destProps: string[]) => {
        dest.onchange = () => {
            var newValue = BindingInitializers.getDestinationValue(dest, destProps);
            var targetObject = BindingInitializers.getSourceObject(source, sourceProps);
            var oldValue = targetObject[sourceProps[sourceProps.length - 1]];

            if (oldValue !== newValue) {
                //targetObject[sourceProps[sourceProps.length - 1]] = newValue;
                source[sourceProps[sourceProps.length - 1]] = newValue;
            }
        };

        return WinJS.Binding.defaultBind(source, sourceProps, dest, destProps);
    });

    export var setInnerHTML: Function = WinJS.Binding.initializer((source, sourceProps: string[], dest, destProps: string[]) => {
        dest.onchange = () => {
            var newValue = BindingInitializers.getDestinationValue(dest, destProps);
            var targetObject = BindingInitializers.getSourceObject(source, sourceProps);
            var oldValue = targetObject[sourceProps[sourceProps.length - 1]];

            if (oldValue !== newValue) {
                //targetObject[sourceProps[sourceProps.length - 1]] = newValue;
                WinJS.Utilities.setInnerHTML(source, newValue);
                //source[sourceProps[sourceProps.length - 1]] = newValue;
            }
        };

        return WinJS.Binding.defaultBind(source, sourceProps, dest, destProps);
    });

}