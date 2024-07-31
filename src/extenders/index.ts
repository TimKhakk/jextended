import { arrayAndStringExtender } from "./arrayAndString/extender.ts";
import { numberExtender } from "./number/extender.ts";

const extenders = {
	number: numberExtender,
	arrayAndString: arrayAndStringExtender,
};

export default extenders;
