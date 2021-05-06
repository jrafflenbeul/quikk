import { useMediaQuery } from "@geist-ui/react";
import { useEffect, useState } from "react";

const isMobile = () => {
	const xs = useMediaQuery("xs");
	const sm = useMediaQuery("sm");
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(xs || sm);
	});

	return typeof document !== "undefined" ? isMobile : false;
};

export default isMobile;
