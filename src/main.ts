import extenders from "./extenders/index.ts";

function init() {
	console.warn("jextended is enabled");

	extenders.arrayAndString();
	extenders.number();
}

export default init;
