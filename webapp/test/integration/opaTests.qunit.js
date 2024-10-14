sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/ZKH_CDS_STOREPORTList',
		'project1/test/integration/pages/ZKH_CDS_STOREPORTObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZKH_CDS_STOREPORTList, ZKH_CDS_STOREPORTObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZKH_CDS_STOREPORTList: ZKH_CDS_STOREPORTList,
					onTheZKH_CDS_STOREPORTObjectPage: ZKH_CDS_STOREPORTObjectPage
                }
            },
            opaJourney.run
        );
    }
);