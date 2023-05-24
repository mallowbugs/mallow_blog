import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "mallow-blog",
  apiKey: process.env.API_KEY,
});
