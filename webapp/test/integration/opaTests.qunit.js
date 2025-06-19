sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zpurrequpload/test/integration/FirstJourney',
		'zpurrequpload/test/integration/pages/PurchaseReqUploadList',
		'zpurrequpload/test/integration/pages/PurchaseReqUploadObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchaseReqUploadList, PurchaseReqUploadObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zpurrequpload') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchaseReqUploadList: PurchaseReqUploadList,
					onThePurchaseReqUploadObjectPage: PurchaseReqUploadObjectPage
                }
            },
            opaJourney.run
        );
    }
);