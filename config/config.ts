const live = process.env.NODE_ENV === "production";

export const APP_NAME = "Philip Kennedy";
export const WEBSITE_URL = live ? "https://www.philipkennedy.ca" : "http://localhost:3000"