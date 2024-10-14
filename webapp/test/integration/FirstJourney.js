sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZKH_CDS_STOREPORTList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZKH_CDS_STOREPORTList.onFilterBar().iExecuteSearch();
                
                Then.onTheZKH_CDS_STOREPORTList.onTable().iCheckRows();

                When.onTheZKH_CDS_STOREPORTList.onTable().iPressRow(0);
                Then.onTheZKH_CDS_STOREPORTObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});