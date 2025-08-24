

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6797c1da.js","_app/immutable/chunks/scheduler.f361f0d6.js","_app/immutable/chunks/index.391732f9.js","_app/immutable/chunks/singletons.6cf5d95e.js","_app/immutable/chunks/index.0e8d977f.js","_app/immutable/chunks/bundle-mjs.127fa181.js"];
export const stylesheets = [];
export const fonts = [];
