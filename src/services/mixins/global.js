// Vue event bus plugin
export function eventBus() {
	let eventBus = {};

	eventBus.config = {
		name: '$bus'
	};

	eventBus.install = (Vue) => {
		let v = new Vue({});
		let bus = {};

		bus.$on = function() {
			v.$on.apply(v, arguments);
		};
		bus.$off = function() {
			v.$off.apply(v, arguments);
		};
		bus.$emit = function() {
			v.$emit.apply(v, arguments);
		};
		bus.$once = function() {
			v.$once.apply(v, arguments);
		};
		Object.defineProperty(Vue.prototype, eventBus.config.name, {
			get: () => {
				return bus;
			}
		});
	};

	return eventBus;
}