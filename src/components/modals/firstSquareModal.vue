<template>
	<modal :show="showModal" @closeModal="$parent.showModal = false" class="confirmation-modal wide">
		<div slot="header" class="modal-title-wrapper">
			<p class="modal-title">Dobijena kombinacija:</p>
		</div>
		<div slot="body">
			<div v-if="modalOne">
				<div class="dice-wrap">
					<button class="modal-btn dice" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor">
						<span class="center"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(1, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(2, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(3, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(4, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(5, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn white-color" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
			<div v-else-if="modalTwo">
				<div class="dice-wrap">
					<button class="modal-btn dice" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor">
						<span class="three"></span>
						<span class="four"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(2, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(4, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(6, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(8, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(10, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn white-color" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
			<div v-else-if="modalThree">
				<div class="dice-wrap">
					<button class="modal-btn dice" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor">
						<span class="three"></span>
						<span class="center"></span>
						<span class="four"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(3, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(6, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(9, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(12, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(15, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn white-color" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
			<div v-else-if="modalFour">
				<div class="dice-wrap">
					<button class="modal-btn dice" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor">
						<span class="one"></span>
						<span class="three"></span>
						<span class="four"></span>
						<span class="six"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(4, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(8, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(12, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(16, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(20, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn white-color" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
			<div v-else-if="modalFive">
				<div class="dice-wrap">
					<button class="modal-btn dice" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor">
						<span class="one"></span>
						<span class="three"></span>
						<span class="center"></span>
						<span class="four"></span>
						<span class="six"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(5, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(10, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(15, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(20, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(25, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn white-color" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
			<div v-else-if="modalSix">
				<div class="dice-wrap">
					<button class="modal-btn dice" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor">
						<span class="one"></span>
						<span class="two"></span>
						<span class="three"></span>
						<span class="four"></span>
						<span class="five"></span>
						<span class="six"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(6, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(12, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(18, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(24, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(30, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn white-color" :class="$parent.$parent.$attrs.themeColor || $parent.$parent.$parent.$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
		</div>
	</modal>
</template>

<script>
	import modal from '../../common/modal.vue';

	export default {
		name: 'firstSquareModal',
		props: {
			basicGameFirstSquareData: {
				type: Object,
				required: true,
			},
			showModal: {
				type: Boolean,
				required: false
			},
			disabledAllBtns: {
				type: Boolean,
				required: true
			},
		},
		data() {
			return {
				modalOne: false,
				modalTwo: false,
				modalThree: false,
				modalFour: false,
				modalFive: false,
				modalSix: false,
				fieldId: '',
				undoResultBnt: false,
				odjavaStarted: false,
			}
		},
		mounted() {
			this.$bus.$on('modalData', (fieldId) => {
				this.fieldId = fieldId;
				const area = fieldId.split('-')[0];
				const row = fieldId.split('-')[1][1];

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
			});
			this.$bus.$on('startOdjava', (bool) => {
				this.odjavaStarted = !bool;
			});
		},
		methods: {
			setResult(val, fieldId) {
				const area = fieldId.split('-')[0];
				const col = fieldId.split('-')[1][0];
				const row = fieldId.split('-')[1][1];

				if (area === 'first') {
					const oldVal = this.basicGameFirstSquareData[`column-${col}`][`${row - 1}`].value;
					
					if (val !== '' && (oldVal === null || oldVal === ''))
						this.$parent.$parent.counter++;
					else if (val === '' && oldVal !== null && oldVal !== '')
						this.$parent.$parent.counter--;

					this.basicGameFirstSquareData[`column-${col}`][`${row - 1}`].value = val;
				}

				this.$parent.showModal = false;
				this.$parent.$parent.disabledAllBtns = true;
				this.$bus.$emit('edit:hide');
			},
		},
		watch: {
			showModal: {
				handler() {
					if (!this.showModal) {
						this.modalOne = false;
						this.modalTwo = false;
						this.modalThree = false;
						this.modalFour = false;
						this.modalFive = false;
						this.modalSix = false;
						this.undoResultBnt = false;
						this.$parent.activeModalColumn = '';
					} else if (this.showModal && this.odjavaStarted) {
						this.undoResultBnt = true;
					} else if (this.showModal && !this.disabledAllBtns) {
						let field = this.fieldId.slice(-1);
						let column = this.fieldId.slice(-2, -1);

						if (column === '1') {
							if (this.basicGameFirstSquareData['column-1'][field] && (this.basicGameFirstSquareData['column-1'][field].value !== null && this.basicGameFirstSquareData['column-1'][field].value !== ''))
								this.undoResultBnt = true;
	
							if (field === '6') {
								if (this.$parent.$parent.secondSquareItems['column-1'][0].value !== null && this.$parent.$parent.secondSquareItems['column-1'][0].value !== '')
									this.undoResultBnt = true;
								else
									this.undoResultBnt = false;
							}
						} else if (column === '3') {
							if (this.basicGameFirstSquareData['column-3'][field - 2] && (this.basicGameFirstSquareData['column-3'][field - 2].value !== null && this.basicGameFirstSquareData['column-3'][field - 2].value !== ''))
								this.undoResultBnt = true;
						}

					}
				}
			}
		},
		computed: {
			getThemeColor() {
				let color = '';
				let theme = this.$parent.$parent.$attrs.themeColor || this.$parent.$parent.$parent.$attrs.themeColor;

				if (theme === 'blue')
					color = '';
				else if (theme === 'pink')
					color = '#E91E63';
				else if (theme === 'yellow')
					color = '#FFEB3B';
				else if (theme === 'deep-purple')
					color = '#673AB7';
				else if (theme === 'green')
					color = '#4CAF50';
				else if (theme === 'deep-orange')
					color = '#FF5722';
				else if (theme === 'red')
					color = '#F44336';
				else if (theme === 'indigo')
					color = '#3F51B5';
				else if (theme === 'cyan darken-3')
					color = '#00838F';
				else if (theme === 'teal')
					color = '#009688';
				else if (theme === 'lime')
					color = '#CDDC39';
				else if (theme === 'blue-grey')
					color = '#607D8B';

				return {
					'color': color, 
					'border-color': color
				};
			}
		},
		components: {
			modal
		}
	}
</script>