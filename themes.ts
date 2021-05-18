import { Themes } from "@geist-ui/react";

const layout = {
	radius: "5px 12px",
	// radius: "0px",
};

const dark = "#21242D";
const light = "#FFFFFF";
const success = "#FF584F";

export const QUIKK_light = Themes.createFromLight({
	type: "QUIKK_light",
	palette: {
		foreground: dark,
		background: light,
		success,
		selection: success,
	},
	layout,
});

export const QUIKK_dark = Themes.createFromDark({
	type: "QUIKK_dark",
	palette: {
		foreground: light,
		background: dark,
		success,
		selection: success,
	},
	layout,
});
