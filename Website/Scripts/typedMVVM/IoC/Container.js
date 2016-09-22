var TypedMVVM;
(function (TypedMVVM) {
    var Common;
    (function (Common) {
        var IoC;
        (function (IoC) {
            var Container = (function () {
                function Container() {
                }
                Container.resolve = function (instanceType) {
                    return new instanceType();
                };
                Container.resolveType = function (instanceType) {
                    var name = TypedMVVM.Common.Utils.Helpers.getClassTypeName(instanceType);
                    return Container.instances[name];
                };
                Container.register = function (instanceType, instance) {
                    var name = TypedMVVM.Common.Utils.Helpers.getClassTypeName(instanceType);
                    Container.instances[name] = instance;
                };
                Container.instances = {};
                return Container;
            })();
            IoC.Container = Container;
        })(IoC = Common.IoC || (Common.IoC = {}));
    })(Common = TypedMVVM.Common || (TypedMVVM.Common = {}));
})(TypedMVVM || (TypedMVVM = {}));
