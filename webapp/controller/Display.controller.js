sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ndc/BarcodeScanner",
    "sap/m/MessageBox"
], (Controller, Filter, FilterOperator, BarcodeScanner, MessageBox) => {
    "use strict";
    var localDataModel;
    return Controller.extend("zorderhistory.controller.Display", {
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("Display").attachPatternMatched(this._onObjectMatched, this);
            localDataModel = this.getOwnerComponent().getModel("localDataModel");
        },

        _onObjectMatched: function (oEvent) {
            const sId = new URLSearchParams(window.location.search).get("id");
            this._loadDetails(sId);
        },

        _loadDetails: function (sId) {
            var tempArr =
            {
                "Company": "Deloitte",
                "Entity": "TTLP",
                "Country": "India",
                "Address": "Gurgaon, India",
            }
            localDataModel.setData(tempArr);
        }

    });
});