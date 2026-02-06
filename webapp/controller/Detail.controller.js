sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ndc/BarcodeScanner",
    "sap/m/MessageBox"
], (Controller, Filter, FilterOperator, BarcodeScanner, MessageBox) => {
    "use strict";
    var localDataModel;
    return Controller.extend("zorderhistory.controller.Detail", {
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
            localDataModel = this.getOwnerComponent().getModel("localDataModel");
        },

        _onObjectMatched: function (oEvent) { },
        onScanBarcode: function () {
            var that = this;
            BarcodeScanner.scan(
                function (oResult) {
                    if (!oResult.cancelled) {
                        this.getView().byId("idInputBarcode").setValue(oResult.text);
                        MessageBox.show("We got a QR code\n" + "Result:" + oResult.text + "\n" + "Format:" + oResult.format + "\n");
                    }
                },
                function (oError) {
                    sap.m.MessageToast.show("Scan failed");
                }
            );
        },
        formatQrCode: function (sUrl) {
            return "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
                + encodeURIComponent(sUrl);
        },
        onAfterRendering: function () {
            // const Id = "MAT12345";
            // const sDeepLink =
            //     window.location.origin +
            //     window.location.pathname +
            //     "#/display?id=" +
            //     Id;

                const sDeepLink = "https://pranavvdeloitte.github.io/qr-demo/";

            this.getView().getModel("localDataModel").setProperty("/qrUrl", sDeepLink);
        }
    });
});