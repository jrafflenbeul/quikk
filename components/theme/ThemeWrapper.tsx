import React, { ReactElement } from "react";
import { GeistProvider, useTheme } from "@geist-ui/react";
import { WatchTrade24_light, WatchTrade24_dark } from "../../themes";

const ThemeWrapper = ({
	children,
	variant = "light",
	...props
}: {
	children: ReactElement | Array<ReactElement>;
	variant?: "light" | "dark";
	[x: string]: any;
}) => {
	const theme = useTheme();
	return (
		<GeistProvider
			themes={[WatchTrade24_light, WatchTrade24_dark]}
			themeType={`WatchTrade24_${variant}`}
		>
			<div
				style={{
					background:
						theme.palette[variant === "dark" ? "background" : "foreground"],
					color:
						theme.palette[variant === "dark" ? "foreground" : "background"],
					...props?.style,
				}}
				{...props}
			>
				{children}
			</div>
		</GeistProvider>
	);
};

export default ThemeWrapper;
