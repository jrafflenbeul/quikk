import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as GeistLink } from "@geist-ui/react";

const InternalLink = ({
	href = "",
	children,
	geistLinkProps = {},
	...rest
}) => {
	const router = useRouter();

	const className = router.pathname === href ? "active" : "";

	return (
		<Link href={href} {...rest}>
			<GeistLink
				href={href}
				{...geistLinkProps}
				className={className}
				{...rest}
			>
				{children}
			</GeistLink>
		</Link>
	);
};

export default InternalLink;
