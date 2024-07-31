import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing@0.225.3/bdd";
import init from "../../main.ts";

init();

describe("number extender", () => {
	it("isOdd", () => {
		assertEquals((1).isOdd, true);
		assertEquals((2).isOdd, false);
	});
	it("isEven", () => {
		assertEquals((1).isEven, false);
		assertEquals((2).isEven, true);
	});
});
