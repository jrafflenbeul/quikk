import axios from "axios";
require("dotenv").config();

export const getStrapiURL = (path) => {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
	}${path}`;
};

/**
 * 5 min timeout for heroku free dyno, axios expectes ms
 */

const fetch = async (path) => {
	const requestUrl = getStrapiURL(path);
	const { data } = await axios.get(requestUrl, { timeout: 1000 * 60 * 5 });
	return data;
};

const sortByDisplayAsc = (a, b) => a.display - b.display;
const sortByPublishedAt = (a, b) =>
	String(b.published_at).localeCompare(String(a.published_at));
const sortByNameAsc = (a, b) => String(a.name).localeCompare(String(b.name));

export const getColleagues = async () => {
	const colleagues = await fetch("/colleagues");
	return colleagues.sort(sortByDisplayAsc);
};

export const getJobs = async () => {
	const jobs = await fetch("/jobs");
	return jobs.sort(sortByDisplayAsc);
};

export const getArticles = async () => {
	const articles = await fetch("/articles");
	return articles.sort(sortByPublishedAt);
};

export const getArticleBySlug = async (slug) => {
	const articles = await fetch(`/articles?slug=${slug}`);
	return articles[0];
};

export const getCustomers = async () => {
	const articles = await fetch("/customers");
	return articles.sort(sortByNameAsc);
};
