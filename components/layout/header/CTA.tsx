import { ButtonGroup, Button, useTheme } from "@geist-ui/react";
import React from "react";
import { Phone, Mail } from "@geist-ui/react-icons";
import { EMAIL, PHONE } from "../../../constants";
import { useRouter } from "next/router";
import { getMailToHref, getTelHref } from "../../../utils/contact";

const CTA = ({ fit = true }: { fit?: boolean }) => {
	const router = useRouter();
	const theme = useTheme();
	const handleUrlClick = async (url: string) => await router.push(url);

	return (
		<ButtonGroup
			type="success-light"
			style={{
				border: 0,
				margin: 0,
				marginLeft: fit ? theme.layout.gapHalf : 0,
			}}
		>
			<Button
				icon={<Mail />}
				auto
				onClick={() => handleUrlClick(getMailToHref(EMAIL))}
			/>
			<Button
				icon={<Phone />}
				auto
				onClick={() => handleUrlClick(getTelHref(PHONE))}
			/>
		</ButtonGroup>
	);
};

export default CTA;
