var BindingInitializers;
(function (BindingInitializers) {
    BindingInitializers.getDestinationValue = function (dest, destProps) {
        if (destProps.length === 1) {
            return dest[destProps[0]];
        }
        else {
            var element = eval("dest['" +
                destProps.slice(0, destProps.length - 1).join("']['") + "']");
            return element[destProps[destProps.length - 1]];
        }
    };
    BindingInitializers.getSourceObject = function (source, sourceProps) {
        if (sourceProps.length === 1) {
            return source;
        }
        else {
            return eval("source['" + sourceProps.slice(0, sourceProps.length - 1).join("']['") + "']");
        }
    };
    BindingInitializers.twowaychange = WinJS.Binding.initializer(function (source, sourceProps, dest, destProps) {
        dest.onchange = function () {
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
    BindingInitializers.setInnerHTML = WinJS.Binding.initializer(function (source, sourceProps, dest, destProps) {
        dest.onchange = function () {
            var newValue = BindingInitializers.getDestinationValue(dest, destProps);
            var targetObject = BindingInitializers.getSourceObject(source, sourceProps);
            var oldValue = targetObject[sourceProps[sourceProps.length - 1]];
            if (oldValue !== newValue) {
                //targetObject[sourceProps[sourceProps.length - 1]] = newValue;
                WinJS.Utilities.setInnerHTML(source, newValue);
            }
        };
        return WinJS.Binding.defaultBind(source, sourceProps, dest, destProps);
    });
})(BindingInitializers || (BindingInitializers = {}));
//# sourceMappingURL=BindingInitializer.js.map