/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["zorderhistory/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
