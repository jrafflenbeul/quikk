import React from "react";
import Founder from "../components/index/Founder";
import Hero from "../components/index/Hero";
import Services from "../components/index/Services";
import ShopRef from "../components/index/ShopRef";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import { FOOTER_LINK_SEPARATOR } from "../src/constants";

const index = () => {
	return (
		<>
			<TitleAndDesc
				title={`WatchTrade24 ${FOOTER_LINK_SEPARATOR} Uhren sicher und einfach online kaufen`}
				description="Als gewerblicher Händler bietet WatchTrade24 Ihnen für den An- und Verkauf Ihrer Armbanduhren eine sichere und einfache Abwicklung von Seiko bis Omega."
			/>
			<Hero />
			<Founder />
			<Services />
			<ShopRef />
		</>
	);
};

export default index;
