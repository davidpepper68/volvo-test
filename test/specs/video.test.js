var chai = require("chai");
const VolvoMorePage = require("../pageobjects/volvo.more.page");

describe("The video on main page", () => {
  it("should exist and running correctly", async () => {
    await VolvoMorePage.open();
    await VolvoMorePage.acceptAllCoockie();

    const btn = await $("//*[@id='Video-1']/section/div/div/div/button");
    expect(btn).toExist;
    expect(btn).toBeEnabled;

    const text = await btn.getText();
    expect(text).toContain("WATCH");
    await btn.click();
    // Assert vidoe is playing
  });
});
