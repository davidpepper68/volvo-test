var chai = require("chai");
const VolvoMorePage = require("../pageobjects/volvo.more.page");

describe("Learn More Section", () => {
  it("should exist and navigate to url", async () => {
    await VolvoMorePage.open();
    await VolvoMorePage.acceptAllCoockie();

    const learnMorebtn = await $(
      "//a[@href='/intl/v/car-safety/safety-heritage']"
    ).click();
    
    expect(learnMorebtn).toExist;
    expect(learnMorebtn).toBeEnabled;

    var url = browser.getUrl();

    await expect(browser).toHaveUrl("https://www.volvocars.com/intl/v/car-safety/safety-heritage");

  });
});
