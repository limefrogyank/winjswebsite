/// <reference path="../include/typedMVVM.ts" />

module TypedMVVM.Common.Utils {
    export class Helpers {
        static getClassTypeName(instanceType: { new (): Object }): string {
            var funcNameRegex = /function (.{1,})\(/;
            var results = (funcNameRegex).exec(instanceType.prototype["constructor"].toString());
            return (results && results.length > 1) ? results[1] : "";
        }
    }
}