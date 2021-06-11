export const GRID_GAP: number = 4;
export const LARGE_GAP: number = GRID_GAP * 2;
export const SMALL_GAP: number = GRID_GAP / 4;
export const breakpoints = { xs: 24, sm: 24, md: 20, lg: 16 };
export const breakpoints_fill = { xs: 24, lg: 8 };

export const LANGUAGE: string = "de";
export const MENU_OPEN: string = "menu-open";
export const CLICKAWAY: string = "quikk-clickaway";
export const LOADING: string = "loading";
export const BUTTON_ID: string = "theme-button";

export const APPLICATION_NAME: string = "QUIKK Software";
export const EMAIL: string = "info@quikk.de";
export const PHONE: string = "01523 390 2667";

export const SEPARATOR: string = " - ";

export const KONTAKT_LINK = "/kontakt";
export const IMPRESSUM_LINK = "/impressum";
export const DATENSCHUTZ_LINK = "/datenschutz";
export const LEISTUNGEN_LINK = "/leistungen";
export const BLOG_LINK = "/blog";
export const PROJEKTE_LINK = "/projekte";

export const ID_SOFTWARE_DEVELOPMENT = "softwareentwicklung";
export const ID_ECOMMERCE_AND_WEBDESIGN = "ecommerce-und-webentwicklung";
export const ID_MOBILE_APPS = "mobile-apps";
export const ID_DATABASES_AND_APIS = "datenbanken-und-schnittstellen";
export const ID_SCRUM = "scrum-agiles-projektmanagement";

export const HEADER_LINKS: { [text: string]: string } = {
	Leistungen: LEISTUNGEN_LINK,
	Projekte: PROJEKTE_LINK,
	Blog: BLOG_LINK,
	Team: "/team",
	Karriere: "/karriere",
	Kontakt: KONTAKT_LINK,
};

export type SOCIAL = "Github" | "Instagram" | "Linkedin" | "Twitter";

export const SOCIAL_LINKS: { [text in SOCIAL]: string } = {
	Linkedin: "https://linkedin.com/company/quikk-software",
	Github: "https://github.com/quikk-software",
	Twitter: "https://twitter.com/quikk_software",
	Instagram: "https://instagram.com/quikk_software",
};

// :^)
export const MAGIC_NUMBER_243 = 243;
export const MAGIC_NUMBER_24_3 = 24.3;
export const MAGIC_NUMBER_0_243 = 0.243;
export const MAGIC_NUMBER_99 = 99;
export const MAGIC_NUMBER_69 = 69;
export const MAGIC_NUMBER_42 = 42;

export const HEADER_Z_INDEX = MAGIC_NUMBER_99;
