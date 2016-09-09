/// <reference path="../include/typedMVVM.ts" />

module TypedMVVM.Common.IoC {
    export class Container {
        //Dictionary containing object instances
        private static instances: { [type: string]: Object; } = {};

        //Resolve a specific Type by returning a new instance
        static resolve<T>(instanceType: {new (): T }): T {
            return new instanceType();
        }

        //Resolve a specific Type by returning the instance from the Dictionary
        static resolveType<T>(instanceType: { new (): T }): Object {
            var name = TypedMVVM.Common.Utils.Helpers.getClassTypeName(instanceType);
            return Container.instances[name];
        }

        //Register a specific instance in the Dictionary
        static register<T>(instanceType: { new (): T }, instance: Object) {
            var name = TypedMVVM.Common.Utils.Helpers.getClassTypeName(instanceType);
            Container.instances[name] = instance;
        }
    }
}