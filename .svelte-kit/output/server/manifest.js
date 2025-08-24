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
		client: {"start":"_app/immutable/entry/start.2a59a5ca.js","app":"_app/immutable/entry/app.3aff2911.js","imports":["_app/immutable/entry/start.2a59a5ca.js","_app/immutable/chunks/scheduler.f361f0d6.js","_app/immutable/chunks/singletons.0c0a2e6c.js","_app/immutable/chunks/index.0e8d977f.js","_app/immutable/entry/app.3aff2911.js","_app/immutable/chunks/scheduler.f361f0d6.js","_app/immutable/chunks/index.1c748aac.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
