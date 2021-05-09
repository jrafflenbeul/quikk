import { LEISTUNGEN_LINK } from "../constants";

export const createLeistungenHrefFromId = (id) =>
	`${LEISTUNGEN_LINK}${!!id ? `/${id}` : ""}`;
