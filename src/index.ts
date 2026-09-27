import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import {
	MOCK_HELP_VIDEOS,
	MOCK_SECTIONS,
	MOCK_CATEGORIES,
	MOCK_SUB_CATEGORIES,
	MOCK_QUESTIONS,
	MOCK_ANSWERS,
	MOCK_FEEDBACK_HELPFUL,
	MOCK_FEEDBACK_NOT_HELPFUL,
	MOCK_SEARCH_RESPONSES,
} from "./constants/faq.constants.js";

const app = new Hono();

app.use("*", cors());

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.get("/faq/help-videos", (c) => {
	return c.json(MOCK_HELP_VIDEOS);
});

app.get("/faq/sections", (c) => {
	return c.json(MOCK_SECTIONS);
});

app.get("/faq/categories", (c) => {
	return c.json(MOCK_CATEGORIES);
});

app.get("/faq/sub-categories", (c) => {
	return c.json(MOCK_SUB_CATEGORIES);
});

app.get("/faq/questions", (c) => {
	return c.json(MOCK_QUESTIONS);
});

app.get("/faq/answer", (c) => {
	const faqQuestionKey = c.req.query("faqQuestionKey") || "WHAT_IS_JAR";
	const answer = MOCK_ANSWERS[faqQuestionKey] || MOCK_ANSWERS["WHAT_IS_JAR"];
	return c.json(answer);
});

app.get("/faq/next-step-post-feedback", (c) => {
	const wasHelpful = c.req.query("wasHelpful") === "true";
	return c.json(wasHelpful ? MOCK_FEEDBACK_HELPFUL : MOCK_FEEDBACK_NOT_HELPFUL);
});

app.post("/faq/search", async (c) => {
	const body = await c.req.json();
	const randomIndex = Math.floor(Math.random() * MOCK_SEARCH_RESPONSES.length);
	return c.json(MOCK_SEARCH_RESPONSES[randomIndex]);
});

serve(
	{
		fetch: app.fetch,
		port: 4020,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
