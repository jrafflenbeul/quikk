import { useEffect, useState } from "react";

const getHeaderHeightInPx = () => {
	const [headerHeight, setHeaderHeight] = useState<number>(0);

	useEffect(() => {
		setHeaderHeight(document.getElementsByTagName("header")[0]?.offsetHeight);
	});

	return headerHeight;
};

export default getHeaderHeightInPx;
