<template>
	<section class="medium-game">
		<div class="first-square">
			<basic-game-first-square :basicGameFirstSquareData="firstSquareItems" :disabledAllBtns="disabledAllBtns"></basic-game-first-square>
			<single-column-first-square :column="5" :nameOfColumn="'R'" :firstSquareDataFive="firstSquareItems['column-5']" :disabledAllBtns="disabledAllBtns"></single-column-first-square>
			<single-column-first-square :column="6" :toMiddle="true" :firstSquareDataSix="firstSquareItems['column-6']" :disabledAllBtns="disabledAllBtns"></single-column-first-square>
			<single-column-first-square :column="7" :fromMiddle="true" :firstSquareDataSeven="firstSquareItems['column-7']" :disabledAllBtns="disabledAllBtns"></single-column-first-square>
			<div class="column-8">
				<div class="field blue smaller">YAMB</div>
				<div class="field large"></div>
				<div class="field blue">{{ firstSquareSumTotal }}</div>
			</div>
		</div>
		<div class="second-square">
			<basic-game-second-square :basicGameSecondSquareData="secondSquareItems" :basicGameFirstSquareData="firstSquareItems" :disabledAllBtns="disabledAllBtns"></basic-game-second-square>
			<single-column-second-square :column="5" :firstSquareOneVal="firstSquareItems['column-5'][0]" :secondSquareDataFive="secondSquareItems['column-5']" :disabledAllBtns="disabledAllBtns"></single-column-second-square>
			<single-column-second-square :column="6" :firstSquareOneVal="firstSquareItems['column-6'][0]" :secondSquareDataSix="secondSquareItems['column-6']" :disabledAllBtns="disabledAllBtns"></single-column-second-square>
			<single-column-second-square :column="7" :firstSquareOneVal="firstSquareItems['column-7'][0]" :secondSquareDataSeven="secondSquareItems['column-7']" :disabledAllBtns="disabledAllBtns"></single-column-second-square>
			<div class="column-8">
				<div class="field large"></div>
				<div class="field blue">{{ secondSquareSumTotal }}</div>
			</div>
		</div>
		<div class="third-square">
			<basic-game-third-square :basicGameThirdSquareData="thirdSquareItems" :disabledAllBtns="disabledAllBtns" :firstFulRowDisabled="firstFulRowDisabled" :secondFulRowDisabled="secondFulRowDisabled" :disabledNumber="disabledNumber"></basic-game-third-square>
			<single-column-third-square :column="5" :thirdSquareDataFive="thirdSquareItems['column-5']" :disabledAllBtns="disabledAllBtns"></single-column-third-square>
			<single-column-third-square :column="6" :toMiddle="true" :thirdSquareDataSix="thirdSquareItems['column-6']" :disabledAllBtns="disabledAllBtns"></single-column-third-square>
			<single-column-third-square :column="7" :fromMiddle="true" :thirdSquareDataSeven="thirdSquareItems['column-7']" :disabledAllBtns="disabledAllBtns"></single-column-third-square>
			<div class="column-8">
				<div class="field large">
					<p class="total">TOTAL:</p>
					<div class="total-field" @click="totalFieldActive = !totalFieldActive" :class="{'active': totalFieldActive}">
						{{ firstSquareSumTotal + secondSquareSumTotal + thirdSquareSumTotal }}
					</div>
				</div>
				<div class="field blue">{{ thirdSquareSumTotal }}</div>
			</div>
		</div>

		<modal :show="showModal" @closeModal="showModal = false" class="confirmation-modal wide">
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
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div class="kenta" v-else-if="modalKenta">
					<button class="modal-btn blue" @click="setResult(55, fieldId)">55</button>
					<button class="modal-btn blue" @click="setResult(60, fieldId)">60</button>
					<div class="bottom-wrap">
						<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
			</div>
		</modal>
	</section>
</template>

<script>
	import BasicGameFirstSquare from '../common/basic-game/basicGameFirstSquare.vue';
	import BasicGameSecondSquare from '../common/basic-game/basicGameSecondSquare.vue';
	import BasicGameThirdSquare from '../common/basic-game/basicGameThirdSquare.vue';
	import SingleColumnFirstSquare from '../common/single-column/singleColumnFirstSquare.vue';
	import SingleColumnSecondSquare from '../common/single-column/singleColumnSecondSquare.vue';
	import SingleColumnThirdSquare from '../common/single-column/singleColumnThirdSquare.vue';
	import modal from '../common/modal.vue';

	export default {
		name: "MediumGame",
		data() {
			return {
				firstSquareItems: {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': [],
					'column-5': [],
					'column-6': [],
					'column-7': [],
				},
				secondSquareItems: {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': [],
					'column-5': [],
					'column-6': [],
					'column-7': [],
				},
				thirdSquareItems: {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': [],
					'column-5': [],
					'column-6': [],
					'column-7': [],
				},
				showModal: false,
				modalOne: false,
				modalTwo: false,
				modalThree: false,
				modalFour: false,
				modalFive: false,
				modalSix: false,
				modalKenta: false,
				modalTriling: false,
				modalFul: false,
				modalPoker: false,
				modalYamb: false,
				fieldId: '',
				firstFulRowDisabled: false,
				secondFulRowDisabled: true,
				firstRowFulResult: 0,
				disabledNumber: 0,
				totalFieldActive: false,
				disabledAllBtns: true,
				basicGameFirstSquareSumTotal: 0,
				basicGameSecondSquareSumTotal: 0,
				basicGameThirdSquareSumTotal: 0,
				firstSquareSumColFive: 0,
				firstSquareSumColSix: 0,
				firstSquareSumColSeven: 0,
				secondSquareSumColFive: 0,
				secondSquareSumColSix: 0,
				secondSquareSumColSeven: 0,
				thirdSquareSumColFive: 0,
				thirdSquareSumColSix: 0,
				thirdSquareSumColSeven: 0,
				activeModalColumn: '',
				disabledUndoResultBtn: false,
			}
		},
		mounted() {
			this.getFirstSquare();
			this.getSecondSquare();
			this.getThirdSquare();
			this.$bus.$on('edit:changed', () => {
				this.disabledAllBtns = !this.disabledAllBtns;
			});
			this.$bus.$on('basic-game-first-square-sum-total', (firstSquareSumTotal) => {
				this.basicGameFirstSquareSumTotal = firstSquareSumTotal;
			});
			this.$bus.$on('basic-game-second-square-sum-total', (secondSquareSumTotal) => {
				this.basicGameSecondSquareSumTotal = secondSquareSumTotal;
			});
			this.$bus.$on('basic-game-third-square-sum-total', (thirdSquareSumTotal) => {
				this.basicGameThirdSquareSumTotal = thirdSquareSumTotal;
			});
		},
		methods: {
			getFirstSquare() {
				let item1;
				let item2;
				let item3;
				let item4;
				let item5;
				let item6;
				let item7;
				let sumOfFirstCol = {
					value: null
				};
				let sumOfSecondCol = {
					value: null
				};
				let sumOfThirdCol = {
					value: null
				};
				let sumOfFourthCol = {
					value: null
				};
				let sumOfFifththCol = {
					value: null
				};
				let sumOfSixthCol = {
					value: null
				};
				let sumOfSeventhCol = {
					value: null
				};

				for (let i = 1; i <= 6; i++) {
					item1 = {
						class: `field-1${i}`,
						id: `first-1${i}`,
						value: null
					}
					if (i !== 1)
						item1.disabled = true;
					item2 = {
						class: `field-2${i}`,
						id: `first-2${i}`,
						value: null
					}
					item3 = {
						class: `field-3${i}`,
						id: `first-3${i}`,
						value: null,
						disabled: true
					}
					item4 = {
						class: `field-4${i}`,
						id: `first-4${i}`,
						value: null
					}
					item5 = {
						class: `field-5${i}`,
						id: `first-5${i}`,
						value: null
					}
					item6 = {
						class: `field-6${i}`,
						id: `first-6${i}`,
						value: null
					}
					if (i !== 1)
						item6.disabled = true;
					item7 = {
						class: `field-7${i}`,
						id: `first-7${i}`,
						value: null,
						disabled: true
					}
					this.firstSquareItems['column-1'].push(item1);
					this.firstSquareItems['column-2'].push(item2);
					this.firstSquareItems['column-3'].push(item3);
					this.firstSquareItems['column-4'].push(item4);
					this.firstSquareItems['column-5'].push(item5);
					this.firstSquareItems['column-6'].push(item6);
					this.firstSquareItems['column-7'].push(item7);
				}
				this.firstSquareItems['column-1'].push(sumOfFirstCol);
				this.firstSquareItems['column-2'].push(sumOfSecondCol);
				this.firstSquareItems['column-3'].push(sumOfThirdCol);
				this.firstSquareItems['column-4'].push(sumOfFourthCol);
				this.firstSquareItems['column-5'].push(sumOfFifththCol);
				this.firstSquareItems['column-6'].push(sumOfSixthCol);
				this.firstSquareItems['column-7'].push(sumOfSeventhCol);

			},
			getSecondSquare() {
				for (let i = 1; i <= 2; i++) {
					const item1 = {
						class: `field-sec-1${i}`,
						id: `second-1${i}`,
						value: null,
						disabled: true
					}
					const item2 = {
						class: `field-sec-2${i}`,
						id: `second-2${i}`,
						value: null
					}
					const item3 = {
						class: `field-sec-3${i}`,
						id: `second-3${i}`,
						value: null,
						disabled: true
					}
					const item4 = {
						class: `field-sec-4${i}`,
						id: `second-4${i}`,
						value: null
					}
					const item5 = {
						class: `field-sec-5${i}`,
						id: `second-5${i}`,
						value: null
					}
					const item6 = {
						class: `field-sec-6${i}`,
						id: `second-6${i}`,
						value: null,
						disabled: true
					}
					const item7 = {
						class: `field-sec-7${i}`,
						id: `second-7${i}`,
						value: null
					}

					this.secondSquareItems['column-1'].push(item1);
					this.secondSquareItems['column-2'].push(item2);
					this.secondSquareItems['column-3'].push(item3);
					this.secondSquareItems['column-4'].push(item4);
					this.secondSquareItems['column-5'].push(item5);
					this.secondSquareItems['column-6'].push(item6);
					this.secondSquareItems['column-7'].push(item7);
				}
			},
			getThirdSquare() {
				for (let i = 1; i <= 5; i++) {
					const item1 = {
						class: `field-third-1${i}`,
						id: `third-1${i}`,
						value: null,
						disabled: true
					}
					const item2 = {
						class: `field-third-2${i}`,
						id: `third-2${i}`,
						value: null
					}
					const item3 = {
						class: `field-third-3${i}`,
						id: `third-3${i}`,
						value: null
					}
					if (i !== 5)
						item3.disabled = true;
					const item4 = {
						class: `field-third-4${i}`,
						id: `third-4${i}`,
						value: null
					}
					const item5 = {
						class: `field-third-5${i}`,
						id: `third-5${i}`,
						value: null
					}
					const item6 = {
						class: `field-third-6${i}`,
						id: `third-6${i}`,
						value: null
					}
					if (i !== 5)
						item6.disabled = true;
					const item7 = {
						class: `field-third-7${i}`,
						id: `third-7${i}`,
						value: null,
						disabled: true
					}

					this.thirdSquareItems['column-1'].push(item1);
					this.thirdSquareItems['column-2'].push(item2);
					this.thirdSquareItems['column-3'].push(item3);
					this.thirdSquareItems['column-4'].push(item4);
					this.thirdSquareItems['column-5'].push(item5);
					this.thirdSquareItems['column-6'].push(item6);
					this.thirdSquareItems['column-7'].push(item7);
				}
			},
			setResult(val, fieldId) {
				const area = fieldId.split('-')[0];
				const col = fieldId.split('-')[1][0];
				const row = fieldId.split('-')[1][1];

				if (area === 'first')
					this.firstSquareItems[`column-${col}`][`${row - 1}`].value = val;
				else if (area === 'second')
					this.secondSquareItems[`column-${col}`][`${row - 1}`].value = val;
				else if (area === 'third')
					this.thirdSquareItems[`column-${col}`][`${row - 1}`].value = val;

				this.showModal = false;
				this.disabledNumber = 0;
				this.firstFulRowDisabled = false;
				this.secondFulRowDisabled = true;
				this.disabledAllBtns = true;
				this.$bus.$emit('edit:hide');
			},
			setFirstRowFul(result, number) {
				this.firstFulRowDisabled = true;
				this.secondFulRowDisabled = false;
				this.firstRowFulResult = result;
				this.disabledNumber = number;
			},
			setFulResult(result, fieldId) {
				this.firstFulRowDisabled = false;
				this.secondFulRowDisabled = true;
				this.disabledNumber === 0;
				const totalFulResult = this.firstRowFulResult + result + 30;
				this.setResult(totalFulResult, fieldId);
			},
			firstSquareSumPerCol(col) {
				const item1 = this.firstSquareItems[`column-${col}`][0] && this.firstSquareItems[`column-${col}`][0].value ? parseFloat(this.firstSquareItems[`column-${col}`][0].value) : 0;
				const item2 = this.firstSquareItems[`column-${col}`][1] && this.firstSquareItems[`column-${col}`][1].value ? parseFloat(this.firstSquareItems[`column-${col}`][1].value) : 0;
				const item3 = this.firstSquareItems[`column-${col}`][2] && this.firstSquareItems[`column-${col}`][2].value ? parseFloat(this.firstSquareItems[`column-${col}`][2].value) : 0;
				const item4 = this.firstSquareItems[`column-${col}`][3] && this.firstSquareItems[`column-${col}`][3].value ? parseFloat(this.firstSquareItems[`column-${col}`][3].value) : 0;
				const item5 = this.firstSquareItems[`column-${col}`][4] && this.firstSquareItems[`column-${col}`][4].value ? parseFloat(this.firstSquareItems[`column-${col}`][4].value) : 0;
				const item6 = this.firstSquareItems[`column-${col}`][5] && this.firstSquareItems[`column-${col}`][5].value ? parseFloat(this.firstSquareItems[`column-${col}`][5].value) : 0;
				let sum = item1 + item2 + item3 + item4 + item5 + item6;

				if (item1 !== null && item2 !== null && item3 !== null && item4 !== null && item5 !== null && item6 !== null) {
					if (sum >= 80)
						sum += 50;
					else if (sum >= 70)
						sum += 40;
					else if (sum >= 60)
						sum += 30;
				}

				return sum;
			},
			secondSquareSumPerCol(col) {
				const item1 = this.firstSquareItems[`column-${col}`][0] && this.firstSquareItems[`column-${col}`][0].value ? parseFloat(this.firstSquareItems[`column-${col}`][0].value) : 0;
				const max = this.secondSquareItems[`column-${col}`][0] && this.secondSquareItems[`column-${col}`][0].value ? parseFloat(this.secondSquareItems[`column-${col}`][0].value) : 0;
				const min = this.secondSquareItems[`column-${col}`][1] && this.secondSquareItems[`column-${col}`][1].value ? parseFloat(this.secondSquareItems[`column-${col}`][1].value) : 0;
				let filledAllFields = this.firstSquareItems[`column-${col}`][0] && this.firstSquareItems[`column-${col}`][0].value && this.secondSquareItems[`column-${col}`][0] && this.secondSquareItems[`column-${col}`][0].value && this.secondSquareItems[`column-${col}`][1] && this.secondSquareItems[`column-${col}`][1].value;

				let sum = filledAllFields ? (max - min) * item1 : 0;

				return sum;
			},
			thirdSquareSumPerCol(col) {
				const item1 = this.thirdSquareItems[`column-${col}`][0] && this.thirdSquareItems[`column-${col}`][0].value ? parseFloat(this.thirdSquareItems[`column-${col}`][0].value) : 0;
				const item2 = this.thirdSquareItems[`column-${col}`][1] && this.thirdSquareItems[`column-${col}`][1].value ? parseFloat(this.thirdSquareItems[`column-${col}`][1].value) : 0;
				const item3 = this.thirdSquareItems[`column-${col}`][2] && this.thirdSquareItems[`column-${col}`][2].value ? parseFloat(this.thirdSquareItems[`column-${col}`][2].value) : 0;
				const item4 = this.thirdSquareItems[`column-${col}`][3] && this.thirdSquareItems[`column-${col}`][3].value ? parseFloat(this.thirdSquareItems[`column-${col}`][3].value) : 0;
				const item5 = this.thirdSquareItems[`column-${col}`][4] && this.thirdSquareItems[`column-${col}`][4].value ? parseFloat(this.thirdSquareItems[`column-${col}`][4].value) : 0;
				const item6 = this.thirdSquareItems[`column-${col}`][5] && this.thirdSquareItems[`column-${col}`][5].value ? parseFloat(this.thirdSquareItems[`column-${col}`][5].value) : 0;
				let sum = item1 + item2 + item3 + item4 + item5 + item6;

				return sum;
			}
		},
		computed: {
			firstSquareSumTotal() {
				return this.basicGameFirstSquareSumTotal + this.firstSquareSumColFive + this.firstSquareSumColSix + this.firstSquareSumColSeven;
			},
			secondSquareSumTotal() {
				return this.basicGameSecondSquareSumTotal + this.secondSquareSumColFive + this.secondSquareSumColSix + this.secondSquareSumColSeven;
			},
			thirdSquareSumTotal() {
				return this.basicGameThirdSquareSumTotal + this.thirdSquareSumColFive + this.thirdSquareSumColSix + this.thirdSquareSumColSeven;
			},
		},
		components: {
			modal,
			BasicGameFirstSquare,
			BasicGameSecondSquare,
			BasicGameThirdSquare,
			SingleColumnFirstSquare,
			SingleColumnSecondSquare,
			SingleColumnThirdSquare
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
						this.modalKenta = false;
						this.modalTriling = false;
						this.modalFul = false;
						this.modalPoker = false;
						this.modalYamb = false;
						this.firstRowFulResult = 0;
						this.disabledUndoResultBtn = false;
						this.activeModalColumn = '';
					} else if (this.showModal && !this.disabledAllBtns) {
						let id = this.fieldId;
						let area = id.split('-')[0];
						let field = id.slice(-1);

						// TO MIDDLE COLUMN
						if (this.activeModalColumn === 'toMiddle') {
							if (area === 'first' && this['firstSquareItems']['column-6'][field] && this[`${area}SquareItems`]['column-6'][field].value !== null && this[`${area}SquareItems`]['column-6'][field].value !== '') {
								this.disabledUndoResultBtn = true;
							}
							if (area === 'first' && field === '6' && this.secondSquareItems['column-6'][0].value !== null && this.secondSquareItems['column-6'][0].value !== '') {
								this.disabledUndoResultBtn = true;
							}
	
							if (area === 'third' && this['thirdSquareItems']['column-6'][field - 2] && this[`${area}SquareItems`]['column-6'][field - 2].value !== null && this[`${area}SquareItems`]['column-6'][field - 2].value !== '') {
								this.disabledUndoResultBtn = true;
							}
							if (area === 'third' && field === '1' && this.secondSquareItems['column-6'][1].value !== null && this.secondSquareItems['column-6'][1].value !== '') {
								this.disabledUndoResultBtn = true;
							}
						} else if (this.activeModalColumn === 'fromMiddle') {
							// FROM MIDDLE COLUMN
							if (area === 'first' && this['firstSquareItems']['column-7'][field - 2] && this[`${area}SquareItems`]['column-7'][field - 2].value !== null && this[`${area}SquareItems`]['column-7'][field - 2].value !== '') {
								this.disabledUndoResultBtn = true;
							}
							if (area === 'first' && field === '6' && this.firstSquareItems['column-7'][4].value !== null && this.firstSquareItems['column-7'][4].value !== '') {
								this.disabledUndoResultBtn = true;
							}
	
							if (area === 'third' && this['thirdSquareItems']['column-7'][field] && this[`${area}SquareItems`]['column-7'][field].value !== null && this[`${area}SquareItems`]['column-7'][field].value !== '') {
								this.disabledUndoResultBtn = true;
							}
							if (area === 'third' && field === '1' && this.thirdSquareItems['column-7'][1].value !== null && this.thirdSquareItems['column-7'][1].value !== '') {
								this.disabledUndoResultBtn = true;
							}
						} else {
							// OTHER CASES
							if (this[`${area}SquareItems`][`column-${this.odjava}`][field] && this[`${area}SquareItems`][`column-${this.odjava}`][field].value !== null) {
								this.disabledUndoResultBtn = true;
							}
							if (area === 'first' && field === '6' && this.secondSquareItems[`column-${this.odjava}`][0].value !== null) {
								this.disabledUndoResultBtn = true;
							}
						}
					}
				}
			},
			firstSquareItems: {
				handler() {
					for (let k = this.firstSquareItems['column-1'].length - 2; k > 0; k--) {
						if (this.firstSquareItems['column-1'][k - 1].value || this.firstSquareItems['column-1'][k - 1].value === 0)
							this.firstSquareItems['column-1'][k].disabled = false;
						else
							this.firstSquareItems['column-1'][k].disabled = true;

						if (k === 5 && (this.firstSquareItems['column-1'][k].value || this.firstSquareItems['column-1'][k].value === 0)) {
							this.secondSquareItems['column-1'][0].disabled = false;
							break;
						}
						else
							this.secondSquareItems['column-1'][0].disabled = true;
					}

					for (let l = this.firstSquareItems['column-3'].length - 2; l > 0; l--) {
						if (this.firstSquareItems['column-3'][l].value || this.firstSquareItems['column-3'][l].value === 0)
							this.firstSquareItems['column-3'][l - 1].disabled = false;
						else
							this.firstSquareItems['column-3'][l - 1].disabled = true;
					}

					if (Object.keys(this.firstSquareItems).length && this.firstSquareItems['column-6']) {
						for (let n = this.firstSquareItems['column-6'].length - 2; n > 0; n--) {
							if (this.firstSquareItems['column-6'][n - 1].value || this.firstSquareItems['column-6'][n - 1].value === 0)
								this.firstSquareItems['column-6'][n].disabled = false;
							else
								this.firstSquareItems['column-6'][n].disabled = true;

							if (this.firstSquareItems['column-6'][5].value || this.firstSquareItems['column-6'][5].value === 0)
								this.secondSquareItems['column-6'][0].disabled = false;
							else
								this.secondSquareItems['column-6'][0].disabled = true;
						}
					}

					if (Object.keys(this.firstSquareItems).length && this.firstSquareItems['column-7']) {
						for (let o = this.firstSquareItems['column-7'].length - 2; o > 0; o--) {
							if (this.firstSquareItems['column-7'][o].value || this.firstSquareItems['column-7'][o].value === 0)
								this.firstSquareItems['column-7'][o - 1].disabled = false;
							else
								this.firstSquareItems['column-7'][o - 1].disabled = true;
						}
					}
				},
				deep: true
			},
			secondSquareItems: {
				handler() {
					if (this.secondSquareItems['column-1'][0].value || this.secondSquareItems['column-1'][0].value === 0)
						this.secondSquareItems['column-1'][1].disabled = false;
					else
						this.secondSquareItems['column-1'][1].disabled = true;

					if (this.secondSquareItems['column-1'][1].value || this.secondSquareItems['column-1'][1].value === 0)
						this.thirdSquareItems['column-1'][0].disabled = false;
					else
						this.thirdSquareItems['column-1'][0].disabled = true;

					if (this.secondSquareItems['column-3'][1].value || this.secondSquareItems['column-3'][1].value === 0)
						this.secondSquareItems['column-3'][0].disabled = false;
					else
						this.secondSquareItems['column-3'][0].disabled = true;

					if (this.secondSquareItems['column-3'][0].value || this.secondSquareItems['column-3'][0].value === 0)
						this.firstSquareItems['column-3'][5].disabled = false;
					else
						this.firstSquareItems['column-3'][5].disabled = true;

					if (Object.keys(this.secondSquareItems).length && this.secondSquareItems['column-7']) {
						if (this.secondSquareItems['column-7'][0].value || this.secondSquareItems['column-7'][0].value === 0)
							this.firstSquareItems['column-7'][5].disabled = false;
						else
							this.firstSquareItems['column-7'][5].disabled = true;

						if (this.secondSquareItems['column-7'][1].value || this.secondSquareItems['column-7'][1].value === 0)
							this.thirdSquareItems['column-7'][0].disabled = false;
						else
							this.thirdSquareItems['column-7'][0].disabled = true;
					}
				},
				deep: true
			},
			thirdSquareItems: {
				handler() {
					for (let l = this.thirdSquareItems['column-1'].length - 1; l > 0; l--) {
						if (this.thirdSquareItems['column-1'][l - 1].value || this.thirdSquareItems['column-1'][l - 1].value === 0)
							this.thirdSquareItems['column-1'][l].disabled = false;
						else
							this.thirdSquareItems['column-1'][l].disabled = true;
					}

					for (let m = this.thirdSquareItems['column-3'].length - 1; m > 0; m--) {
						if (this.thirdSquareItems['column-3'][m].value || this.thirdSquareItems['column-3'][m].value === 0)
							this.thirdSquareItems['column-3'][m - 1].disabled = false;
						else
							this.thirdSquareItems['column-3'][m - 1].disabled = true;

					}

					if (this.thirdSquareItems['column-3'][0].value || this.thirdSquareItems['column-3'][0].value === 0)
						this.secondSquareItems['column-3'][1].disabled = false;

					if (Object.keys(this.thirdSquareItems).length && this.thirdSquareItems['column-6']) {
						for (let n = this.thirdSquareItems['column-6'].length - 1; n > 0; n--) {
							if (this.thirdSquareItems['column-6'][n].value || this.thirdSquareItems['column-6'][n].value === 0)
								this.thirdSquareItems['column-6'][n - 1].disabled = false;
							else
								this.thirdSquareItems['column-6'][n - 1].disabled = true;

							if (this.thirdSquareItems['column-6'][0].value || this.thirdSquareItems['column-6'][0].value === 0)
								this.secondSquareItems['column-6'][1].disabled = false;
							else
								this.secondSquareItems['column-6'][1].disabled = true;
						}
					}

					if (Object.keys(this.thirdSquareItems).length && this.thirdSquareItems['column-7']) {
						for (let o = this.thirdSquareItems['column-7'].length - 1; o > 0; o--) {
							if (this.thirdSquareItems['column-7'][o - 1].value || this.thirdSquareItems['column-7'][o - 1].value === 0)
								this.thirdSquareItems['column-7'][o].disabled = false;
							else
								this.thirdSquareItems['column-7'][o].disabled = true;
						}
					}
				},
				deep: true
			},
		}
	}
</script>
