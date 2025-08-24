export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","trinket-tier-list-2025-08-23T17-56-29-855Z.json","wow-background.jpg","wow-tww.jpg"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.6446eda6.js","app":"_app/immutable/entry/app.1b9d176c.js","imports":["_app/immutable/entry/start.6446eda6.js","_app/immutable/chunks/scheduler.f361f0d6.js","_app/immutable/chunks/singletons.51204c09.js","_app/immutable/chunks/index.0e8d977f.js","_app/immutable/entry/app.1b9d176c.js","_app/immutable/chunks/scheduler.f361f0d6.js","_app/immutable/chunks/index.1c748aac.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/trinkets",
				pattern: /^\/trinkets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
