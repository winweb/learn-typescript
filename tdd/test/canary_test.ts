import { expect } from "chai"
import { sayHello} from "../../kata/src/hello";

describe("Canary test", () => {
    it("should pass this canary test", () => {
        expect(true).to.equal(true)
    })
})

describe("This is a say hello", () => {
    it("Check the saayHello function", () => {
      expect(sayHello("Jun")).to.equal("Hello Jun");
    });
});