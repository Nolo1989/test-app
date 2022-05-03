<template>
	<modal :show="showModal" @closeModal="$parent.showModal = false" class="confirmation-modal wide smaller-modal">
		<!-- <div slot="header" class="modal-title-wrapper">
			<p class="modal-title">Dobijena kombinacija:</p>
		</div> -->
		<div slot="body">
			<div v-if="modalMax">
				<!-- <div class="dice-wrap">
					<button class="modal-btn blue dice">
						<span class="center"></span>
					</button>
				</div> -->
				<div class="dice-wrap" ref="maxscroller">
					<button class="modal-btn dice white-btn" @click="setResult(5, fieldId)">5</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(6, fieldId)">6</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(7, fieldId)">7</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(8, fieldId)">8</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(9, fieldId)">9</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(10, fieldId)">10</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(11, fieldId)">11</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(12, fieldId)">12</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(13, fieldId)">13</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(14, fieldId)">14</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(15, fieldId)">15</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(16, fieldId)">16</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(17, fieldId)">17</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(18, fieldId)">18</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(19, fieldId)">19</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(20, fieldId)">20</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(21, fieldId)">21</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(22, fieldId)">22</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(23, fieldId)">23</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(24, fieldId)">24</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(25, fieldId)">25</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(26, fieldId)">26</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(27, fieldId)">27</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(28, fieldId)">28</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(29, fieldId)">29</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(30, fieldId)">30</button>
					<div class="divider"></div>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">X</button>
				</div>
			</div>
			<div v-else-if="modalMin">
				<!-- <div class="dice-wrap">
					<button class="modal-btn blue dice">
						<span class="three"></span>
						<span class="four"></span>
					</button>
				</div> -->
				<div class="dice-wrap" ref="minscroller">
					<button class="modal-btn dice white-btn" @click="setResult(5, fieldId)">5</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(6, fieldId)">6</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(7, fieldId)">7</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(8, fieldId)">8</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(9, fieldId)">9</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(10, fieldId)">10</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(11, fieldId)">11</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(12, fieldId)">12</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(13, fieldId)">13</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(14, fieldId)">14</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(15, fieldId)">15</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(16, fieldId)">16</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(17, fieldId)">17</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(18, fieldId)">18</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(19, fieldId)">19</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(20, fieldId)">20</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(21, fieldId)">21</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(22, fieldId)">22</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(23, fieldId)">23</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(24, fieldId)">24</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(25, fieldId)">25</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(26, fieldId)">26</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(27, fieldId)">27</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(28, fieldId)">28</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(29, fieldId)">29</button>
					<div class="divider"></div>
					<button class="modal-btn dice white-btn" @click="setResult(30, fieldId)">30</button>
					<div class="divider"></div>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">X</button>
				</div>
			</div>
		</div>
	</modal>
</template>

<script>
	import modal from '../../common/modal.vue';

	export default {
		name: 'secondSquareModal',
		props: {
			basicGameSecondSquareData: {
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
				modalMax: false,
				modalMin: false,
				fieldId: '',
				undoResultBnt: false
			}
		},
		mounted() {
			this.$bus.$on('modalData', (fieldId) => {
				this.fieldId = fieldId;
				const area = fieldId.split('-')[0];
				const row = fieldId.split('-')[1][1];

				if (area === 'second') {
					if (row === '1')
						this.modalMax = true;
					else if (row === '2')
						this.modalMin = true;
				}
			});
		},
		methods: {
			setResult(val, fieldId) {
				const area = fieldId.split('-')[0];
				const col = fieldId.split('-')[1][0];
				const row = fieldId.split('-')[1][1];

				if (area === 'second')
					this.basicGameSecondSquareData[`column-${col}`][`${row - 1}`].value = val;

				this.$parent.showModal = false;
				this.$parent.$parent.disabledAllBtns = true;
				this.$bus.$emit('edit:hide');
			},
		},
		watch: {
			showModal: {
				handler() {
					if (!this.showModal) {
						this.modalMax = false;
						this.modalMin = false;
						this.undoResultBnt = false;
						this.$parent.activeModalColumn = '';
					} else {
						if (!this.disabledAllBtns) {
							let field = this.fieldId.slice(-1);
							let column = this.fieldId.slice(-2, -1);

							if (column === '1') {
								if (this.basicGameSecondSquareData['column-1'][field] && (this.basicGameSecondSquareData['column-1'][field].value !== null && this.basicGameSecondSquareData['column-1'][field].value !== ''))
									this.undoResultBnt = true;
		
								if (field === '6') {
									if (this.$parent.$parent.secondSquareItems['column-1'][0].value !== null && this.$parent.$parent.secondSquareItems['column-1'][0].value !== '')
										this.undoResultBnt = true;
									else
										this.undoResultBnt = false;
								}
							} else if (column === '3') {
								if (this.basicGameSecondSquareData['column-3'][field - 2] && (this.basicGameSecondSquareData['column-3'][field - 2].value !== null && this.basicGameSecondSquareData['column-3'][field - 2].value !== ''))
									this.undoResultBnt = true;
							}
						}

						if (this.modalMax) {
							this.$nextTick(() => {
								this.$refs.maxscroller.scrollTop = 946;
							});
						}
						if (this.modalMin) {
							this.$nextTick(() => {
								this.$refs.minscroller.scrollTop = 10;
							});
						}
					}
				}
			}
		},
		components: {
			modal
		}
	}
</script>