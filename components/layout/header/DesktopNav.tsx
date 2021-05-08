import { Tabs } from "@geist-ui/react";
import React from "react";
import { useRouter } from "next/router";
import CTA from "./CTA";
import { HEADER_LINKS } from "../../../constants";

const DesktopNav = () => {
	const router = useRouter();

	const pathnameValues = Object.values(HEADER_LINKS);

	if (router.pathname !== "/") {
		pathnameValues.splice(pathnameValues.indexOf("/"), 1);
	}

	const currentActivePathname = pathnameValues.find((pathname) =>
		router.pathname.startsWith(pathname),
	);

	return (
		<>
			<Tabs
				initialValue={router.pathname}
				value={currentActivePathname ?? router.pathname}
				onChange={async (pathname) => await router.push(pathname)}
				hideDivider
			>
				{Object.entries(HEADER_LINKS).map(([key, value]) => (
					<Tabs.Item key={key} label={key} value={value} />
				))}
			</Tabs>
			<CTA />
		</>
	);
};

export default DesktopNav;
