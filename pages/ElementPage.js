var findCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('head', 1000)
  }
};

module.exports = {
  url: 'http://track.fetchr.us/',
  commands: [findCommands],
  elements:
  {
        // Home Page Image Selector
        seachBar: {selector:'input[id="tracking_id"]'},
        languageBtn: {selector:'img[id="changeAppLang"]'},
        statusMsg: {selector:'div[class="media-heading"]'},
        statusMsgValue: {selector:'div[class="long-text"]'},
        confirmDeliveryLocationBtn: {selector:'button[id="confirmSchedule"]'},
        wheretoTextfield: {selector:'input[id="pac-input"]'},
        markCircle: {selector:'img[class*="marker-circle"]'},
        searchBtn: {selector:'button[id="search_submit"]'},
        firstAddress:{selector:'div[class="pac-item"]:first-child'}


  },
};