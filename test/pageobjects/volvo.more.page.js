const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VolvoMorePage extends Page {
  /**
   * define selectors using getter methods
   */
  get menuMenu() {
    return $("//*[@id='sitenav-sidenav-toggle']");
  }

  get ourCarsMenu() {
    return $("//*[@id='sitenav:topbar:cars']");
  }

  get btnCoockieAll() {
    return $(".accept-cookies-button=Accept");
  }

  get btnBuy() {
    return $("//button[@data-autoid='nav:sideNavLinksMenuDrawer']");
  }

  get carConfiguratorBtn() {
    return $("//a[@data-autoid='nav:sideNavLinksMenuItem']");
  }

  get videoBtn() {
    return $("//*[@id='Video-1']/section/div/div/div/button");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async acceptAllCoockie() {
    await this.btnCoockieAll.click();
  }

  async getVideoBtn() {
    await this.videoBtn;
  }

  async getBuyBtn() {
    await this.btnBuy.click();
  }

  async getMenu() {
    await this.menuMenu.click();
  }

  async getCarsMenu() {
    await this.ourCarsMenu.click();
  }

  async getCarConfigurator() {
    await this.carConfiguratorBtn.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("");
  }
}

module.exports = new VolvoMorePage();
