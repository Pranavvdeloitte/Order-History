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

       _onObjectMatched: function (oEvent) { 
        
       },
        onAfterRendering: function () {
        }

    });
});