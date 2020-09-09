sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"opensap/products/ManageProducts/model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("opensap.products.ManageProducts.ProductDetails.controler.ProductDetails", {

		formatter: formatter,

		onInit: function () {
			this.byId("categoryLabel").setVisible(false);
			this.byId("category").setVisible(false);
		}
	});

});