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
const sortByUpdatedAt = (a, b) =>
	String(b.updatedAt).localeCompare(String(a.updatedAt));
const sortByNameAsc = (a, b) => String(a.name).localeCompare(String(b.name));

export const getColleagues = async () => {
	const colleagues = await fetch("/colleagues");
	return [];
};

export const getJobs = async () => {
	// const jobs = await fetch("/jobs");
	return [];
};

export const getArticles = async () => {
	// const articles = await fetch("/articles");
	return [];
};

export const getArticleBySlug = async (slug) => {
	// const articles = await fetch(`/articles?slug=${slug}`);
	return {};
};

export const getCustomers = async () => {
	// const customers = await fetch("/customers");
	return [];
};

export const getProjects = async () => {
	// const projects = await fetch("/projects");
	return [];
};

export const getProjectBySlug = async (slug) => {
	// const projects = await fetch(`/projects?slug=${slug}`);
	return {};
};
