var chai = require("chai");
const VolvoMorePage = require("../pageobjects/volvo.more.page");

describe("Car Slider Section", () => {
  it("should contain all cars and working buttons to navigate", async () => {
    await VolvoMorePage.open();
    await VolvoMorePage.acceptAllCoockie();

    // There is certainly better way finding n:th child but it will take time now :-)
    for (let index = 1; index < 9; index++) {
      const item = await $(
        `//*[@id='ProductListCarousel-1']/*/div[1]/*/*/*/div[1]/*/*/*/*/div[${index}]`);

      await expect(item.getText()).not.toEqual("");
    }

    let recharge = await $(`//a[@data-autoid='ProductListCarousel:cta1']`);
    await expect(recharge).toHaveHref("/intl/v/cars/recharge");

    recharge = await $("//a[@data-autoid='ProductListCarousel:cta2']");
    await expect(recharge).toHaveHref("/intl/v/cars/other-powertrains");
    

  });
});
