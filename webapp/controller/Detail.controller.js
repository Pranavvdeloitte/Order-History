sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox"
], (Controller, Filter, FilterOperator, MessageBox) => {
    "use strict";
    var localDataModel;
    return Controller.extend("zorderhistory.controller.Detail", {
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
            localDataModel = this.getOwnerComponent().getModel("localDataModel");
        },

        _onObjectMatched: function (oEvent) { },
        formatQrCode: function (sUrl) {
            return "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
                + encodeURIComponent(sUrl);
        },
        onAfterRendering: function () {
            const Id = "MAT12345";
            const sDeepLink = "https://pranavvdeloitte.github.io/Order-History/Qr.html";
                // window.location.origin +
                // window.location.pathname +
                // "#/display?id=" +
                // Id;
            this.getView().getModel("localDataModel").setProperty("/qrUrl", sDeepLink);
        }
    });
});