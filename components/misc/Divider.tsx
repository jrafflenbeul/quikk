import { useTheme } from "@geist-ui/react";
import React from "react";
import { MAGIC_NUMBER_42 } from "../../constants";

const Divider = ({ style = {}, center = true, huge = false }) => {
	const theme = useTheme();
	return (
		<div className="wrapper">
			<div className="divider" {...{ style }}></div>
			<style jsx>{`
				.divider {
					width: ${MAGIC_NUMBER_42}px;
					height: 2px;
					margin: ${huge ? theme.layout.gap : theme.layout.gapHalf} 0;
					background-color: ${theme.palette.success};
				}
				.wrapper {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					align-items: ${center ? "center" : "start"};
				}
			`}</style>
		</div>
	);
};

export default Divider;
