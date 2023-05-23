/***
@controller Name:ehs.inc.reportincidents1.controller.CreateIncident,
*@viewId:application-adaptationproject-display-component---createIncident
*/
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
		'sap/ui/core/mvc/ControllerExtension'
		,'sap/ui/core/mvc/OverrideExecution',
		"sap/m/Label",
		"sap/ui/model/Filter",
		"sap/m/ColumnListItem"
	],
	function (
		ControllerExtension
		,OverrideExecution,L,F,d
	) {
		"use strict";
		return ControllerExtension.extend("customer.EHS.zdetail", {
			metadata: {
				// extension can declare the public methods
				// in general methods that start with "_" are private
				methods: {
					publicMethod: {
						public: true /*default*/ ,
						final: false /*default*/ ,
						overrideExecution: OverrideExecution.Instead /*default*/
					},
					finalPublicMethod: {
						final: true
					},
					onMyHook: {
						public: true /*default*/ ,
						final: false /*default*/ ,
						overrideExecution: OverrideExecution.After
					},
					couldBePrivate: {
						public: true
					}
				}
			},

			_zonSuggestionItemSelected: function (e) {
				debugger;
				var s = e.getParameter("selectedRow");
				var m = this.oView.getBindingContext().getModel();
				var S = s.getBindingContextPath();
				var n = m.getProperty(S).EHSLocationUUID;
				var p = this.oView.getBindingContext().getPath();
				m.setProperty(p + "/EHSLocationUUID", n);
			},
			zhandleLocationSuggest: function (e ,sControlId) {
				debugger;
				var v = e.getParameter("suggestValue");
				
				 var g = [new F("EHSLocationStatus", sap.ui.model.FilterOperator.NE, "04")];
				if (v) {
					var o = {
						search: v
					};
					var l = this.getView().byId("customer.EHS.znoncompany");
					l.bindAggregation("suggestionRows", {
						path: "/C_EHSLocationValueHelp",
						template: new d({
							cells: [new L({
								text: "{EHSLocationName}"
							}), new L({
								text: "{EHSLocationID}"
							}), new L({
								text: "{EHSLocationType_Text}"
							})]
						}),
						 filters: g,
						parameters: {
							custom: o,
							select: "EHSLocationUUID,EHSLocationName,EHSLocationID,EHSLocationType_Text"
						},
						templateShareable: true
					});
				}
			},
			onValueHelpRequest: function (oEvent) {
				debugger;
				var sInputValue = oEvent.getSource().getValue(),
					oView = this.getView();
	
				// if (!this._pValueHelpDialog) {
				// 	this._pValueHelpDialog = Fragment.load({
				// 		id: oView.getId(),
				// 		name: "sap.m.sample.InputKeyValue.ValueHelpDialog",
				// 		controller: this
				// 	}).then(function (oDialog) {
				// 		oView.addDependent(oDialog);
				// 		return oDialog;
				// 	});
				// }
				// this._pValueHelpDialog.then(function (oDialog) {
				// 	// Create a filter for the binding
				// 	oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue)]);
				// 	// Open ValueHelpDialog filtered by the input's value
				// 	oDialog.open(sInputValue);
				// });
			},
			// adding a private method, only accessible from this controller extension
			_privateMethod: function() {},
			// adding a public method, might be called from or overridden by other controller extensions as well
			publicMethod: function() {},
			// adding final public method, might be called from, but not overridden by other controller extensions as well
			finalPublicMethod: function() {},
			// adding a hook method, might be called by or overridden from other controller extensions
			// override these method does not replace the implementation, but executes after the original method
			onMyHook: function() {},
			// method public per default, but made private via metadata
			couldBePrivate: function() {},
			// this section allows to extend lifecycle hooks or override public methods of the base controller
			override: {
				/**
				 * Called when a controller is instantiated and its View controls (if available) are already created.
				 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
				 * @memberOf customer.EHS.zdetail
				 */
				onInit: function() {
				},

				/**
				 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
				 * (NOT before the first rendering! onInit() is used for that one!).
				 * @memberOf customer.EHS.zdetail
				 */
				onBeforeRendering: function() {
				},

				/**
				 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
				 * This hook is the same one that SAPUI5 controls get after being rendered.
				 * @memberOf customer.EHS.zdetail
				 */
				onAfterRendering: function() {
					
					this.getView().byId("assetRadioButtonLabel").setVisible(false);
					this.getView().byId("assetRadioButton").setVisible(false);
					this.getView().byId("assetRadioButtonYes").setVisible(false);
					this.getView().byId("assetRadioButtonNo").setVisible(false);
					
				},

				/**
				 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
				 * @memberOf customer.EHS.zdetail
				 */
				onExit: function() {
				},

				// override public method of the base controller
				// basePublicMethod: function() {
				// }
			}
		});
	});