<template>
	<modal :show="showModal" @closeModal="$parent.showModal = false" class="confirmation-modal wide">
		<div slot="header" class="modal-title-wrapper">
			<p class="modal-title">Dobijena kombinacija:</p>
		</div>
		<div slot="body">
			<div v-if="modalOne">
				<div class="dice-wrap">
					<button class="modal-btn blue dice">
						<span class="center"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" @click="setResult(1, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" @click="setResult(2, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" @click="setResult(3, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" @click="setResult(4, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" @click="setResult(5, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
			<div v-else-if="modalTwo">
				<div class="dice-wrap">
					<button class="modal-btn blue dice">
						<span class="three"></span>
						<span class="four"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" @click="setResult(2, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" @click="setResult(4, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" @click="setResult(6, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" @click="setResult(8, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" @click="setResult(10, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
			<div v-else-if="modalThree">
				<div class="dice-wrap">
					<button class="modal-btn blue dice">
						<span class="three"></span>
						<span class="center"></span>
						<span class="four"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" @click="setResult(3, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" @click="setResult(6, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" @click="setResult(9, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" @click="setResult(12, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" @click="setResult(15, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
			<div v-else-if="modalFour">
				<div class="dice-wrap">
					<button class="modal-btn blue dice">
						<span class="one"></span>
						<span class="three"></span>
						<span class="four"></span>
						<span class="six"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" @click="setResult(4, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" @click="setResult(8, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" @click="setResult(12, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" @click="setResult(16, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" @click="setResult(20, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
			<div v-else-if="modalFive">
				<div class="dice-wrap">
					<button class="modal-btn blue dice">
						<span class="one"></span>
						<span class="three"></span>
						<span class="center"></span>
						<span class="four"></span>
						<span class="six"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" @click="setResult(5, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" @click="setResult(10, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" @click="setResult(15, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" @click="setResult(20, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" @click="setResult(25, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
				</div>
			</div>
			<div v-else-if="modalSix">
				<div class="dice-wrap">
					<button class="modal-btn blue dice">
						<span class="one"></span>
						<span class="two"></span>
						<span class="three"></span>
						<span class="four"></span>
						<span class="five"></span>
						<span class="six"></span>
					</button>
				</div>
				<div class="dice-wrap">
					<button class="modal-btn dice white-btn" @click="setResult(6, fieldId)">x 1</button>
					<button class="modal-btn dice white-btn" @click="setResult(12, fieldId)">x 2</button>
					<button class="modal-btn dice white-btn" @click="setResult(18, fieldId)">x 3</button>
					<button class="modal-btn dice white-btn" @click="setResult(24, fieldId)">x 4</button>
					<button class="modal-btn dice white-btn" @click="setResult(30, fieldId)">x 5</button>
				</div>
				<div class="bottom-wrap">
					<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
					<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
			}
		},
		data() {
			return {
				modalOne: false,
				modalTwo: false,
				modalThree: false,
				modalFour: false,
				modalFive: false,
				modalSix: false,
				fieldId: ''
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
		},
		methods: {
			setResult(val, fieldId) {
				const area = fieldId.split('-')[0];
				const col = fieldId.split('-')[1][0];
				const row = fieldId.split('-')[1][1];

				if (area === 'first')
					this.basicGameFirstSquareData[`column-${col}`][`${row - 1}`].value = val;

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
					} 
				}
			}
		},
		components: {
			modal
		}
	}
</script>