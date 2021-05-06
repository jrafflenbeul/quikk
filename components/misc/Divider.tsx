import { useTheme } from "@geist-ui/react";
import React from "react";
import { MAGIC_NUMBER_42 } from "../../src/constants";

const Divider = ({ style = {} }) => {
	const theme = useTheme();
	return (
		<div className="wrapper">
			<div className="divider" {...{ style }}></div>
			<style jsx>{`
				.divider {
					width: ${MAGIC_NUMBER_42}px;
					height: 2px;
					margin: ${theme.layout.gapQuarter} 0;
					background-color: ${theme.palette.success};
				}
				.wrapper {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</div>
	);
};

export default Divider;
