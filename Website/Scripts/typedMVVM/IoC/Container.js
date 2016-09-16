/// <reference path="../include/typedMVVM.ts" />
var TypedMVVM;
(function (TypedMVVM) {
    var Common;
    (function (Common) {
        var IoC;
        (function (IoC) {
            var Container = (function () {
                function Container() {
                }
                //Resolve a specific Type by returning a new instance
                Container.resolve = function (instanceType) {
                    return new instanceType();
                };
                //Resolve a specific Type by returning the instance from the Dictionary
                Container.resolveType = function (instanceType) {
                    var name = TypedMVVM.Common.Utils.Helpers.getClassTypeName(instanceType);
                    return Container.instances[name];
                };
                //Register a specific instance in the Dictionary
                Container.register = function (instanceType, instance) {
                    var name = TypedMVVM.Common.Utils.Helpers.getClassTypeName(instanceType);
                    Container.instances[name] = instance;
                };
                //Dictionary containing object instances
                Container.instances = {};
                return Container;
            })();
            IoC.Container = Container;
        })(IoC = Common.IoC || (Common.IoC = {}));
    })(Common = TypedMVVM.Common || (TypedMVVM.Common = {}));
})(TypedMVVM || (TypedMVVM = {}));
//# sourceMappingURL=Container.js.map