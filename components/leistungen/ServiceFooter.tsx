import React from "react";
import Values from "../misc/Values";
import Work from "../misc/Work";
import Technologies from "./Technologies";

const ServiceFooter = () => {
	return (
		<>
			<Values heading />
			<Work heading variant="dark" />
			<Technologies />
		</>
	);
};

export default ServiceFooter;
