import { run, runAndExpectResult, compareFixtureWithSnapshot } from "./helpers";

describe("Basic functionality", () => {
    it("should work", () => {
        compareFixtureWithSnapshot("base.css");
    });

    it("", () => {
        const { css } = run(".foo { color: yellow }");
        expect(css).toEqual("blee { color: yellow }");
    });
});
