const live = process.env.NODE_ENV === "production";

export const APP_NAME = "Website";
export const WEBSITE_URL = live ? "https://conorroberts.com" : "http://localhost:3000"