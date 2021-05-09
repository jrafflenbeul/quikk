import { useRouter } from "next/router";

const isSubpage = () => {
	const router = useRouter();
	const { pathname } = router;
	const paths = pathname.split("/");

	return {
		isSubPath: paths.length > 2,
		parent: pathname.substring(0, pathname.lastIndexOf("/")),
	};
};

export default isSubpage;
