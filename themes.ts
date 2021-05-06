import { Themes } from "@geist-ui/react";

const accent = "#F5A623";

const layout = {
	radius: "0px",
};

export const WatchTrade24_light = Themes.createFromLight({
	type: "WatchTrade24_light",
	palette: {
		success: accent,
		selection: accent,
	},
	layout,
});

export const WatchTrade24_dark = Themes.createFromDark({
	type: "WatchTrade24_dark",
	palette: {
		success: accent,
		selection: accent,
	},
	layout,
});
