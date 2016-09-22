var TypedMVVM;
(function (TypedMVVM) {
    var Common;
    (function (Common) {
        var Services;
        (function (Services) {
            var DialogService = (function () {
                function DialogService() {
                }
                DialogService.prototype.showDialog = function (text) {
                    var dialogElement = document.querySelector('.win-contentdialog');
                    var dialogControl = dialogElement.winControl;
                    var dialogContent = document.querySelector('.win-contentdialog-content');
                    dialogContent.textContent = text;
                    dialogControl.show();
                };
                return DialogService;
            })();
            Services.DialogService = DialogService;
        })(Services = Common.Services || (Common.Services = {}));
    })(Common = TypedMVVM.Common || (TypedMVVM.Common = {}));
})(TypedMVVM || (TypedMVVM = {}));
