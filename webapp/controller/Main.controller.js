sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/BusyIndicator"
], (Controller, Filter, FilterOperator, BusyIndicator) => {
    "use strict";
    var localDataModel;
    return Controller.extend("zorderhistory.controller.Main", {
        onInit: function () {
            var model = this.getOwnerComponent().getModel();
            localDataModel = this.getOwnerComponent().getModel("localDataModel");

            var tempArr = [];
            tempArr.push({
                "ASN Number": "ASN1",
                "Invoice Number": "117",
                "PO": "4100188420",
                "ASN Status": "Submitted",
                "GRN": "5003362487",
                "GRN Status": "Complete",
                "MIRO": "5105739610",
                "Base Price": "16500",
                "Taxes":"",
                "MIRO Status": "Complete",
                "Payment": "",
            });
            localDataModel.setData(tempArr);
        },

        onSearch: function (oEvent) {
            var aFilters = [];
            var aValue = this.getView().byId("idAsnNo").getValue();
            var aValue2 = this.getView().byId("idInvoiceNo").getValue();
            var aValue3 = this.getView().byId("idPo").getValue();
            var aValue4 = this.getView().byId("idAsnStatus").getValue();
            if (aValue || aValue2 || aValue3 || aValue4) {
                var oFilter1 = new Filter("ASN Number", FilterOperator.EQ, aValue);
                var oFilter2 = new Filter("Invoice Number", FilterOperator.EQ, aValue2);
                var oFilter3 = new Filter("PO", FilterOperator.EQ, aValue3);
                var oFilter4 = new Filter("ASN Status", FilterOperator.EQ, aValue4);
                aFilters = new Filter([oFilter1, oFilter2, oFilter3, oFilter4]);
            }

            var oTable = this.getView().byId("idOrderHistoryTable");
            var oBinding = oTable.getBinding("rows");
            oBinding.filter(aFilters, sap.ui.model.FilterType.Application);
        },

        onClearFilter: function (oEvent) {
            this.getView().byId("idAsnNo").setValue("");
            this.getView().byId("idInvoiceNo").setValue("");
            this.getView().byId("idPo").setValue("");
            this.getView().byId("idAsnStatus").setValue("");
            var oQuotationTable = this.byId("idOrderHistoryTable");
            var oBinding = oQuotationTable.getBinding("rows");
            oBinding.filter([], sap.ui.model.FilterType.Application);
            localDataModel.refresh();
            localDataModel.updateBindings();
        },

        onRowNavigation: function (oEvent) {
            BusyIndicator.show();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Detail");
            BusyIndicator.hide();
        }
    });
});