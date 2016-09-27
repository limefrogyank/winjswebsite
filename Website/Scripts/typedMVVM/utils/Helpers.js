/// <reference path="../include/typedMVVM.ts" />
var TypedMVVM;
(function (TypedMVVM) {
    var Common;
    (function (Common) {
        var Utils;
        (function (Utils) {
            var Helpers = (function () {
                function Helpers() {
                }
                Helpers.getClassTypeName = function (instanceType) {
                    var funcNameRegex = /function (.{1,})\(/;
                    var results = (funcNameRegex).exec(instanceType.prototype["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                };
                return Helpers;
            }());
            Utils.Helpers = Helpers;
        })(Utils = Common.Utils || (Common.Utils = {}));
    })(Common = TypedMVVM.Common || (TypedMVVM.Common = {}));
})(TypedMVVM || (TypedMVVM = {}));
//# sourceMappingURL=Helpers.js.map