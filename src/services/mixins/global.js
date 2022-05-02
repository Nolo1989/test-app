// Global instance of Vue
export function globalVue() {
	return {
		data() {
			return {

			};
		},
		methods: {
			openModal(fieldId, isDisabled, activeColumn) {
				if (isDisabled)
					return;

				this.activeModalColumn = activeColumn;
				this.showModal = true;
				this.fieldId = fieldId;

				const area = fieldId.split('-')[0];
				const row = fieldId.split('-')[1].length > 2 ? fieldId.split('-')[1][2] : fieldId.split('-')[1][1];

				if (area === 'first') {
					if (row === '1')
						this.modalOne = true;
					else if (row === '2')
						this.modalTwo = true;
					else if (row === '3')
						this.modalThree = true;
					else if (row === '4')
						this.modalFour = true;
					else if (row === '5')
						this.modalFive = true;
					else if (row === '6')
						this.modalSix = true;
				}
				else if (area === 'third') {
					if (row === '1')
						this.modalKenta = true;
					else if (row === '2')
						this.modalTriling = true;
					else if (row === '3')
						this.modalFul = true;
					else if (row === '4')
						this.modalPoker = true;
					else if (row === '5')
						this.modalYamb = true;
				}
			},
		},
	};
}

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