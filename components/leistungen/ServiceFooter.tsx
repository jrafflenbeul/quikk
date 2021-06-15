import React from "react";
import How from "../misc/How";
import Values from "../misc/Values";
import Work from "../misc/Work";
import Technologies from "./Technologies";

const ServiceFooter = () => {
	return (
		<>
			<How />
			<Values heading />
			<Work heading variant="light" />
			<Technologies />
		</>
	);
};

export default ServiceFooter;
