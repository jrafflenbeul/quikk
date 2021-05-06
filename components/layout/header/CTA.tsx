import { ButtonGroup, Button, useTheme } from "@geist-ui/react";
import React from "react";
import { Phone, Mail } from "@geist-ui/react-icons";
import { EMAIL, PHONE } from "../../../src/constants";
import { sanitizePhone } from "../../../src/utils";
import { useRouter } from "next/router";

const CTA = ({ fit = true }: { fit?: boolean }) => {
	const router = useRouter();
	const theme = useTheme();
	const handleUrlClick = async (url: string) => await router.push(url);

	return (
		<ButtonGroup
			type="secondary"
			ghost
			style={{
				border: 0,
				margin: 0,
				marginLeft: fit ? theme.layout.gapHalf : 0,
			}}
		>
			<Button
				icon={<Mail />}
				auto
				onClick={() => handleUrlClick(`mailto:${EMAIL}`)}
			/>
			<Button
				icon={<Phone />}
				auto
				onClick={() => handleUrlClick(`tel:${sanitizePhone(PHONE)}`)}
			/>
		</ButtonGroup>
	);
};

export default CTA;
