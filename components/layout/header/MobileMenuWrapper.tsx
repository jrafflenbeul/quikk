import { useTheme } from "@geist-ui/react";
import React, { useEffect, useState } from "react";
import { MENU_OPEN } from "../../../constants";
import getHeaderHeightInPx from "../../hooks/getHeaderHeightInPx";

const MobileMenuWrapper = ({ visible: pVisible, children }) => {
	const theme = useTheme();
	const [visible, setVisible] = useState<boolean>(false);
	const height = getHeaderHeightInPx();

	const updateVisible = (v: boolean) => {
		document.body.classList[v ? "add" : "remove"](MENU_OPEN);
		setVisible(v);
	};

	useEffect(() => {
		if (pVisible !== undefined) {
			updateVisible(pVisible);
		}
	}, [pVisible]);

	return (
		<section className={visible ? "open" : ""}>
			{children}
			<style jsx>{`
				section {
					position: fixed;
					width: 100vw;
					height: 0px;
					background-color: ${theme.palette.background};
					z-index: 5000;
					top: -5000px;
					left: -5000px;
				}
				section.open {
					top: ${height}px;
					left: 0;
					bottom: 0;
					display: unset;
					width: 100%;
					height: calc(100vh - ${height}px);
					border-top: 1px solid ${theme.palette.border};
				}
			`}</style>
		</section>
	);
};

export default MobileMenuWrapper;
