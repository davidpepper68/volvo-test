/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
var config = require("../../wdio.conf").config;
module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    const testingUrl = (!path || path === "") ? "intl/v/car-safety/a-million-more" : path;
    return browser.url(`${config.baseUrl}` + testingUrl);
  }
};
