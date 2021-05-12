import React, { ReactElement } from "react";
import { GeistProvider, useTheme } from "@geist-ui/react";
import { QUIKK_light, QUIKK_dark } from "../../themes";

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
	const { style, ...rest } = props;
	return (
		<GeistProvider
			themes={[QUIKK_light, QUIKK_dark]}
			themeType={`QUIKK_${variant}`}
		>
			<section
				style={{
					background:
						theme.palette[variant === "dark" ? "background" : "foreground"],
					color:
						theme.palette[variant === "dark" ? "foreground" : "background"],
					...style,
				}}
				{...rest}
			>
				{children}
			</section>
		</GeistProvider>
	);
};

export default ThemeWrapper;
