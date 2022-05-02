<template>
    <modal :show="showModal" @closeModal="$parent.showModal = false" class="confirmation-modal wide">
        <div slot="header" class="modal-title-wrapper">
            <p class="modal-title">Dobijena kombinacija:</p>
        </div>
        <div slot="body">
            <div class="kenta" v-if="modalKenta">
					<button class="modal-btn blue" @click="setResult(55, fieldId)">55</button>
					<button class="modal-btn blue" @click="setResult(60, fieldId)">60</button>
					<div class="bottom-wrap">
						<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div class="triling" v-else-if="modalTriling">
					<div class="dice-wrap">
						<button class="modal-btn blue dice" @click="setResult(23, fieldId)">
							<span class="center"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(26, fieldId)">
							<span class="three"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(29, fieldId)">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(32, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(35, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(38, fieldId)">
							<span class="one"></span>
							<span class="two"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="five"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div class="ful" v-else-if="modalFul">
					<div class="dice-wrap">
						<span class="multiplier">3 x </span>
						<button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(3, 1)">
							<span class="center"></span>
						</button>
						<button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(6, 2)">
							<span class="three"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(9, 3)">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(12, 4)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(15, 5)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(18, 6)">
							<span class="one"></span>
							<span class="two"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="five"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="dice-wrap">
						<span class="multiplier">2 x </span>
						<button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 1}" :disabled="secondFulRowDisabled || disabledNumber === 1" @click="setFulResult(2, fieldId)">
							<span class="center"></span>
						</button>
						<button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 2}" :disabled="secondFulRowDisabled || disabledNumber === 2" @click="setFulResult(4, fieldId)">
							<span class="three"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 3}" :disabled="secondFulRowDisabled || disabledNumber === 3" @click="setFulResult(6, fieldId)">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 4}" :disabled="secondFulRowDisabled || disabledNumber === 4" @click="setFulResult(8, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 5}" :disabled="secondFulRowDisabled || disabledNumber === 5" @click="setFulResult(10, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 6}" :disabled="secondFulRowDisabled || disabledNumber === 6" @click="setFulResult(12, fieldId)">
							<span class="one"></span>
							<span class="two"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="five"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div class="poker" v-else-if="modalPoker">
					<div class="dice-wrap">
						<button class="modal-btn blue dice" @click="setResult(54, fieldId)">
							<span class="center"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(58, fieldId)">
							<span class="three"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(62, fieldId)">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(66, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(70, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(74, fieldId)">
							<span class="one"></span>
							<span class="two"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="five"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div class="yamb" v-else-if="modalYamb">
					<div class="dice-wrap">
						<button class="modal-btn blue dice" @click="setResult(85, fieldId)">
							<span class="center"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(90, fieldId)">
							<span class="three"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(95, fieldId)">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(100, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(105, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn blue dice" @click="setResult(110, fieldId)">
							<span class="one"></span>
							<span class="two"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="five"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="undoResultBnt" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
        </div>
    </modal>
</template>

<script>
    import modal from '../../common/modal.vue';

    export default {
        name: 'thirdSquareModal',
		props: {
			basicGameThirdSquareData: {
				type: Object,
				required: true,
			},
			showModal: {
				type: Boolean,
				required: false
			},
            firstFulRowDisabled: {
                type: Boolean,
                require: true,
                default: false
            },
            secondFulRowDisabled: {
                type: Boolean,
                require: true,
                default: true
            },
            disabledNumber: {
                type: Number,
                require: true,
                default: 0
            },
			disabledAllBtns: {
				type: Boolean,
				required: true
			},
		},
        data() {
			return {
                modalKenta: false,
                modalTriling: false,
                modalFul: false,
                modalPoker: false,
                modalYamb: false,
                firstRowFulResult: 0,
				fieldId: '',
				undoResultBnt: false
			}
		},
        mounted() {
			this.$bus.$on('modalData', (fieldId) => {
				this.fieldId = fieldId;
				const area = fieldId.split('-')[0];
				const row = fieldId.split('-')[1][1];

				if (area === 'third') {
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
			});
		},
        methods: {
            setResult(val, fieldId) {
				const area = fieldId.split('-')[0];
				const col = fieldId.split('-')[1].length > 2 ? fieldId.split('-')[1].substring(0, 2) : fieldId.split('-')[1][0];
				const row = fieldId.split('-')[1].length > 2 ? fieldId.split('-')[1][2] : fieldId.split('-')[1][1];

				if (area === 'third')
					this.basicGameThirdSquareData[`column-${col}`][`${row - 1}`].value = val;

				this.$parent.showModal = false;
				// this.disabledNumber = 0;
				this.$parent.$parent.firstFulRowDisabled = false;
				this.$parent.$parent.secondFulRowDisabled = true;
				this.$parent.$parent.disabledAllBtns = true;
				this.$bus.$emit('edit:hide');
			},
            setFirstRowFul(result, number) {
				this.$parent.$parent.firstFulRowDisabled = true;
				this.$parent.$parent.secondFulRowDisabled = false;
				this.$parent.$parent.firstRowFulResult = result;
				this.$parent.$parent.disabledNumber = number;
			},
            setFulResult(result, fieldId) {
				this.$parent.$parentfirstFulRowDisabled = false;
				this.$parent.$parent.secondFulRowDisabled = true;
				// this.$parent.$parent.disabledNumber = 0;
				const totalFulResult = this.$parent.$parent.firstRowFulResult + result + 30;
				this.setResult(totalFulResult, fieldId);
			},
        },
        watch: {
			showModal: {
				handler() {
					if (!this.showModal) {
						this.modalKenta = false;
						this.modalTriling = false;
						this.modalFul = false;
						this.modalPoker = false;
						this.modalYamb = false;
						this.firstRowFulResult = 0;
						this.undoResultBnt = false;
						this.$parent.activeModalColumn = '';
					} else if (this.showModal && !this.disabledAllBtns) {
						let field = this.fieldId.slice(-1);
						let column = this.fieldId.slice(-2, -1);

						if (column === '1') {
							if (this.basicGameThirdSquareData['column-1'][field] && this.basicGameThirdSquareData['column-1'][field].value !== null && this.basicGameThirdSquareData['column-1'][field].value !== '')
								this.undoResultBnt = true;
						} else if (column === '3') {
							if (this.basicGameThirdSquareData['column-3'][field - 2] && this.basicGameThirdSquareData['column-3'][field - 2].value !== null && this.basicGameThirdSquareData['column-3'][field - 2].value !== '')
								this.undoResultBnt = true;

							if (field === '1') {
								if (this.$parent.$parent.secondSquareItems['column-3'][1].value !== null && this.$parent.$parent.secondSquareItems['column-3'][1].value !== '')
									this.undoResultBnt = true;
								else
									this.undoResultBnt = false;
							}
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