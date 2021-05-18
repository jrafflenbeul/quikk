import React, { useEffect, useState } from "react";
import { HEADER_Z_INDEX, MENU_OPEN } from "../../../constants";
import getHeaderHeightInPx from "../../hooks/getHeaderHeightInPx";
import ReactDOM from "react-dom";

const MobileMenuWrapper = ({ visible: pVisible, children }) => {
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
					z-index: ${HEADER_Z_INDEX};
					top: -5000px;
					left: -5000px;
				}
				section.open {
					top: ${height}px;
					left: 0;
					bottom: 0;
					width: 100vw;
					height: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					background: "red";
				}
			`}</style>
		</section>
	);
};

export default MobileMenuWrapper;
