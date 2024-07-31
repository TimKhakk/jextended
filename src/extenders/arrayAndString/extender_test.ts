import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing@0.225.3/bdd";
import init from "../../main.ts";

init();

describe("arrayAndString extender", () => {
	it("isEmpty", () => {
		assertEquals([].isEmpty, true);
		assertEquals([1].isEmpty, false);
		assertEquals("".isEmpty, true);
		assertEquals("Hello".isEmpty, false);
	});
	it("toSortedNumbers", () => {
		assertEquals([2, 1].toSortedNumbers(), [1, 2]);
		assertEquals([1, 2].toSortedNumbers(), [1, 2]);
		assertEquals([].toSortedNumbers(), []);
	});
});
