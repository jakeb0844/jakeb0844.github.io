import * as server from '../entries/pages/trinkets/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/trinkets/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/trinkets/+page.server.js";
export const imports = ["_app/immutable/nodes/3.8dab92ac.js","_app/immutable/chunks/scheduler.f361f0d6.js","_app/immutable/chunks/index.1c748aac.js"];
export const stylesheets = [];
export const fonts = [];
