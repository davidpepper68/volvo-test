var chai = require("chai");
const VolvoMorePage = require("../pageobjects/volvo.more.page");

/* We create couple of test cases and the rest are the same
 * And I dont do much assertion because it takes time
 * But in real testing we will do some Assertions as well
 */

describe("Navigate to Car configurator", () => {
  it("should exist and be correct", async () => {
    await VolvoMorePage.open();
    await VolvoMorePage.acceptAllCoockie();
    const headerElem = await $("//*[@id='ModelIntro-1']/section/h2");
    const text = await headerElem.getText();
    chai
      .expect(text)
      .to.be.a("string")
      .that.contains("Ideas that change the world");

    await VolvoMorePage.getMenu();
    await VolvoMorePage.getBuyBtn();
    await VolvoMorePage.getCarConfigurator();
  });
});
