<template>
	<transition :name="transitionName">
		<div class="modal-mask" ref="jsModalMask" :class="{'default-modal': !hideDefaultClass}" v-if="show" @click.self="close">
			<div class="modal-wrapper" ref="jsModalWrapper" @click.self="close">
				<div class="modal-container">
					<div class="modal-header" ref="jsModalHeader">
						<button type="button" class="close-btn icon-close" @click="close"></button>
						<slot name="header"></slot>
					</div>

					<div class="modal-body" ref="jsModalBody">
						<slot name="body"></slot>
					</div>

					<div class="modal-footer">
						<slot name="footer"></slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			transitionName: {
				type: String,
				required: false,
				default: 'modal'
			},
			duration: {
				required: false,
				default: null
			},
			hideDefaultClass: {
				required: false,
				default: false
			}
		},

		created() {
			if (this.show)
				this.handleOpening();
		},

		mounted() {
			document.addEventListener('keydown', (e) => {
				if (this.show && e.keyCode === 27)
					this.close();
			});

			if (this.$el.parentNode) {
				this.$el.parentNode.removeChild(this.$el);
				document.getElementById('app').appendChild(this.$el);
			}
		},

		destroyed() {
			document.documentElement.className = document.documentElement.className.replace(' modal-open', '');
		},

		watch: {
			show(value) {
				// Handle modal opening
				if (value) {
					this.handleOpening();
				}

				// Handle modal closing
				else {
					setTimeout(() => {
						document.documentElement.className = document.documentElement.className.replace(' modal-open', '');
					}, this.duration === null ? 200 : this.duration);
				}
			}
		},

		methods: {
			close() {
				this.$emit('closeModal');
			},
			handleOpening() {
				document.documentElement.className += ' modal-open';
			},
		}
	};
</script>
