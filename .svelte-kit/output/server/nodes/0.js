import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.e6fa90e7.js","_app/immutable/chunks/scheduler.f361f0d6.js","_app/immutable/chunks/index.391732f9.js","_app/immutable/chunks/bundle-mjs.127fa181.js","_app/immutable/chunks/Frame.f6144540.js","_app/immutable/chunks/index.0e8d977f.js"];
export const stylesheets = ["_app/immutable/assets/0.b320da65.css"];
export const fonts = [];
