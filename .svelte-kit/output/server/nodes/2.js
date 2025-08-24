

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.db1c03c4.js","_app/immutable/chunks/scheduler.f361f0d6.js","_app/immutable/chunks/index.391732f9.js","_app/immutable/chunks/bundle-mjs.127fa181.js","_app/immutable/chunks/Frame.f6144540.js"];
export const stylesheets = [];
export const fonts = [];
