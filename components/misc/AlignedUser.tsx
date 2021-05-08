import { User } from "@geist-ui/react";
import React from "react";
import isMobile from "../hooks/isMobile";

const AlignedUser = ({ avatar, name, position }) => {
	const mobile = isMobile();

	const style = { padding: 0 };
	const altText = `${name}: ${position} bei QUIKK Software Minden`;

	return React.cloneElement(
		<User src={avatar} name={name} style={style} altText={altText} />,
		{ children: mobile ? null : position },
	);
};

export default AlignedUser;
