

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.207e55c8.js","_app/immutable/chunks/scheduler.f361f0d6.js","_app/immutable/chunks/index.1c748aac.js","_app/immutable/chunks/bundle-mjs.127fa181.js","_app/immutable/chunks/Frame.32494f7b.js"];
export const stylesheets = [];
export const fonts = [];
