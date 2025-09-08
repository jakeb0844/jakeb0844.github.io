import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ runtime: 'nodejs20.x' }),
    paths: { base: "" }, // user site => no base path
  },
};

export default config;
