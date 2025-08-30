import * as server from "../entries/pages/_page.server.js";

export const index = 2;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_page.svelte.js"))
    .default);
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = [
  "_app/immutable/nodes/2.6d38b03d.js",
  "_app/immutable/chunks/scheduler.f361f0d6.js",
  "_app/immutable/chunks/index.4f6c82e9.js",
  "_app/immutable/chunks/bundle-mjs.127fa181.js",
  "_app/immutable/chunks/Frame.321f75c8.js",
  "_app/immutable/chunks/each.68ac915f.js",
];
export const stylesheets = ["_app/immutable/assets/2.a5f2f089.css"];
export const fonts = [];
