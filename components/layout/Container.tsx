import { useTheme } from "@geist-ui/react";
import React from "react";
import { GRID_GAP } from "../../constants";

const Container = ({ children, spacing = false, ...props }) => {
	const theme = useTheme();
	const gapWithUnit = theme.layout.gap;
	const multipliedGap = `${gapWithUnit} * ${GRID_GAP}`;

	return (
		<div className="quikkontainer" {...props}>
			{children}
			<style jsx>{`
				.quikkontainer {
					height: 100%;
					width: 100%;
					padding: ${spacing ? `calc(${multipliedGap})` : 0} ${gapWithUnit};
					margin-right: auto;
					margin-left: auto;
				}
				@media (max-width: 575px) {
					.quikkontainer {
						max-width: calc(100vw - ${multipliedGap}) !important;
					}
				}
				@media (min-width: 576px) {
					.quikkontainer {
						max-width: calc(540px - ${multipliedGap}) !important;
					}
				}
				@media (min-width: 768px) {
					.quikkontainer {
						max-width: calc(720px - ${multipliedGap}) !important;
					}
				}
				@media (min-width: 992px) {
					.quikkontainer {
						max-width: calc(960px - ${multipliedGap}) !important;
					}
				}
				@media (min-width: 1200px) {
					.quikkontainer {
						max-width: calc(1140px - ${multipliedGap}) !important;
					}
				}
			`}</style>
		</div>
	);
};

export default Container;
