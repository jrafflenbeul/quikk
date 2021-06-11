import { Tabs, Popover, Text, useTheme } from "@geist-ui/react";
import React from "react";
import { useRouter } from "next/router";
import CTA from "./CTA";
import { HEADER_LINKS, LEISTUNGEN_LINK } from "../../../constants";
import { ChevronDown } from "@geist-ui/react-icons";
import { services } from "../../../pages/leistungen";
import InternalLink from "../../misc/InternalLink";
import { createLeistungenHrefFromId } from "../../../utils/leistungen";

const DesktopNav = () => {
	const router = useRouter();
	const theme = useTheme();

	const pathnameValues = Object.values(HEADER_LINKS);

	if (router.pathname !== "/") {
		pathnameValues.splice(pathnameValues.indexOf("/"), 1);
	}

	const currentActivePathname = pathnameValues.find((pathname) =>
		router.pathname.startsWith(pathname),
	);

	const isLeistungen = (value: string) => value === LEISTUNGEN_LINK;
	const LeistungenPopover = () => (
		<div style={{ padding: `0 ${theme.layout.gap}` }} id="leistungen">
			{services.map((service, i) => (
				<Text key={i} small p>
					<InternalLink href={createLeistungenHrefFromId(service.id)}>
						{service.title}
					</InternalLink>
				</Text>
			))}
		</div>
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
					<>
						<Tabs.Item
							key={key}
							label={
								isLeistungen(value) ? (
									<Popover
										content={<LeistungenPopover />}
										trigger="hover"
										hideArrow
									>
										{key} <ChevronDown size=".8em" />
									</Popover>
								) : (
									key
								)
							}
							value={value}
						/>
					</>
				))}
			</Tabs>
			<CTA />
		</>
	);
};

export default DesktopNav;
