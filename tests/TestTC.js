//* Copyright 2019 Hadeel Shawabkeh shaddool@hotmail.com
//* Do not remove this header

var global = require('../config/global.json');
var Test;

module.exports = {

   tags: ['Test'],
   '@disabled': false,

    before : function(browser) {

       TestTC = browser.page.ElementPage();
       //browser.resizeWindow(1900, 1060);
       //TestTC.navigate()
       //browser.deleteCookies()
       //browser.windowMaximize()

    },

    after : function(browser) {
       // browser.end();

    },

   'TC 001-Verify Navigate to web shipment tracking' : function (browser) {
        browser.deleteCookies()
        browser.windowMaximize()
        TestTC.navigate()
        TestTC.waitForElementVisible('@seachBar', 1000, 'The Page should be loaded Properly');
        TestTC.waitForElementVisible('@languageBtn', 1000);
        browser.end();

    },

   'TC 002-Verify change language' : function (browser) {
        browser.deleteCookies()
        browser.windowMaximize()
        TestTC.navigate()
        TestTC.waitForElementVisible('@seachBar', 1000, 'The Page should be loaded Properly');
        TestTC.click('@languageBtn');
        TestTC.expect.element('@seachBar').to.have.attribute('placeholder').which.contains('الرجاء');
        browser.end();
    },

   'TC 003-Verify Search for invalid tracking number' : function (browser) {
        browser.deleteCookies()
        browser.windowMaximize()
        TestTC.navigate()
        TestTC.waitForElementVisible('@seachBar', 2000, 'The Page should be loaded Properly');
        TestTC.setValue('@seachBar', global.InvalidTrackNum);
        TestTC.click('@searchBtn');
        browser.pause(10000)
        TestTC.waitForElementVisible('@statusMsg', 2000, 'The status message should display Properly');
        TestTC.waitForElementVisible('@statusMsgValue', 5000, 'Invalid status message should display properly');
        browser.pause(global.Pause)
        TestTC.expect.element('@statusMsgValue').text.to.equal(global.InvalidTextMsg);
        browser.end();
    },

   'TC 004-Verify Search for cancelled order' : function (browser) {
        browser.deleteCookies()
        browser.windowMaximize()
        TestTC.navigate()
        TestTC.waitForElementVisible('@seachBar', 1000, 'The Page should be loaded Properly');
        TestTC.setValue('@seachBar', global.CancelledTrackNum);
        TestTC.click('@searchBtn');
        TestTC.waitForElementVisible('@statusMsg', 1000, 'The status message should display Properly');
        TestTC.waitForElementVisible('@statusMsgValue', 1000, 'The status message text should display Properly');
        browser.pause(global.Pause)
        browser.pause(global.Pause)
        TestTC.expect.element('@statusMsgValue').text.to.contains(global.CancelledTextMsg);
        browser.end();
    },

   'TC 005-Verify Search for valid tracking number' : function (browser) {
        browser.deleteCookies()
        browser.windowMaximize()
        TestTC.navigate()
        TestTC.waitForElementVisible('@seachBar', 1000, 'The Website should be loaded Properly');
        TestTC.setValue('@seachBar', global.ValidTrackNum);
        TestTC.click('@searchBtn');
        browser.pause(global.Pause)
        TestTC.waitForElementVisible('@confirmDeliveryLocationBtn', 1000, 'The Google map page should display properly');
        TestTC.waitForElementVisible('@markCircle', 1000, 'The mark circle button should display properly');
        browser.pause(global.Pause)
        TestTC.setValue('@wheretoTextfield', global.ValidAddress);
        browser.pause(global.Pause)
        browser.doubleClick('@wheretoTextfield');
        browser.doubleClick('@firstAddress');
        TestTC.click('@firstAddress');
        TestTC.click('@confirmDeliveryLocationBtn');
        browser.end();
    }
};