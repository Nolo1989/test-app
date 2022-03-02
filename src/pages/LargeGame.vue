<template>
	<section class="large-game">
		<div class="first-square">
			<basic-game-first-square :basicGameFirstSquareData="firstSquareItems" :disabledAllBtns="disabledAllBtns" :game="'large-game'"></basic-game-first-square>
			<single-column-first-square :column="5" :nameOfColumn="'R'" :firstSquareDataFive="firstSquareItems['column-5']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-first-square>
			<single-column-first-square :column="6" :nameOfColumn="'D'" :firstSquareDataSix="firstSquareItems['column-6']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-first-square>
			<single-column-first-square :column="7" :toMiddle="true" :firstSquareDataSeven="firstSquareItems['column-7']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-first-square>
			<single-column-first-square :column="8" :fromMiddle="true" :firstSquareDataEight="firstSquareItems['column-8']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-first-square>
			<single-column-first-square :column="9" :nameOfColumn="'O'" :firstSquareDataNine="firstSquareItems['column-9']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-first-square>
			<single-column-first-square :column="10" :nameOfColumn="'M'" :firstSquareDataTen="firstSquareItems['column-10']" :disabledAllBtns="disabledAllBtns" :smallFont="true" :dataForMax="dataForMax" :firstSquareForMaxSum="firstSquareForMaxSum"></single-column-first-square>
			<div class="column-11">
				<div class="field blue">Y</div>
				<div class="field large"></div>
				<div class="field blue result">{{ firstSquareSumTotal }}</div>
			</div>
		</div>
		<div class="second-square">
			<basic-game-second-square :basicGameSecondSquareData="secondSquareItems" :basicGameFirstSquareData="firstSquareItems" :disabledAllBtns="disabledAllBtns" :game="'large-game'"></basic-game-second-square>
			<single-column-second-square :column="5" :firstSquareOneVal="firstSquareItems['column-5'][0]" :secondSquareDataFive="secondSquareItems['column-5']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-second-square>
			<single-column-second-square :column="6" :firstSquareOneVal="firstSquareItems['column-6'][0]" :secondSquareDataSix="secondSquareItems['column-6']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-second-square>
			<single-column-second-square :column="7" :firstSquareOneVal="firstSquareItems['column-7'][0]" :secondSquareDataSeven="secondSquareItems['column-7']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-second-square>
			<single-column-second-square :column="8" :firstSquareOneVal="firstSquareItems['column-8'][0]" :secondSquareDataEight="secondSquareItems['column-8']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-second-square>
			<single-column-second-square :column="9" :firstSquareOneVal="firstSquareItems['column-9'][0]" :secondSquareDataNine="secondSquareItems['column-9']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-second-square>
			<single-column-second-square :column="10" :nameOfColumn="'M'" :firstSquareOneVal="firstSquareItems['column-10'][0]" :secondSquareDataTen="secondSquareItems['column-10']" :disabledAllBtns="disabledAllBtns" :smallFont="true" :dataForMax="dataForMax" :secondSquareForMaxSum="secondSquareForMaxSum"></single-column-second-square>
			<div class="column-11">
				<div class="field large"></div>
				<div class="field blue result">{{ secondSquareSumTotal }}</div>
			</div>
		</div>
		<div class="third-square">
			<basic-game-third-square :basicGameThirdSquareData="thirdSquareItems" :disabledAllBtns="disabledAllBtns" :firstFulRowDisabled="firstFulRowDisabled" :secondFulRowDisabled="secondFulRowDisabled" :disabledNumber="disabledNumber" :game="'large-game'"></basic-game-third-square>
			<single-column-third-square :column="5" :thirdSquareDataFive="thirdSquareItems['column-5']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-third-square>
			<single-column-third-square :column="6" :thirdSquareDataSix="thirdSquareItems['column-6']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-third-square>
			<single-column-third-square :column="7" :thirdSquareDataSeven="thirdSquareItems['column-7']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-third-square>
			<single-column-third-square :column="8" :thirdSquareDataEight="thirdSquareItems['column-8']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-third-square>
			<single-column-third-square :column="9" :thirdSquareDataNine="thirdSquareItems['column-9']" :disabledAllBtns="disabledAllBtns" :smallFont="true"></single-column-third-square>
			<single-column-third-square :column="10" :nameOfColumn="'M'" :thirdSquareDataTen="thirdSquareItems['column-10']" :disabledAllBtns="disabledAllBtns" :smallFont="true" :dataForMax="dataForMax" :thirdSquareForMaxSum="thirdSquareForMaxSum"></single-column-third-square>
			<div class="column-11">
				<div class="field large">
					<div class="total-field" @click="totalFieldActive = !totalFieldActive" :class="{'active': totalFieldActive}">
						{{ firstSquareSumTotal + secondSquareSumTotal + thirdSquareSumTotal }}
					</div>
				</div>
				<div class="field blue result">{{ thirdSquareSumTotal }}</div>
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
				<div class="kenta" v-else-if="modalKenta">
					<button class="modal-btn blue" @click="setResult(55, fieldId)">55</button>
					<button class="modal-btn blue" @click="setResult(60, fieldId)">60</button>
					<div class="bottom-wrap">
						<button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
						<button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
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
		name: "LargeGame",
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
					'column-8': [],
					'column-9': [],
					'column-10': [],
				},
				secondSquareItems: {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': [],
					'column-5': [],
					'column-6': [],
					'column-7': [],
					'column-8': [],
					'column-9': [],
					'column-10': [],
				},
				thirdSquareItems: {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': [],
					'column-5': [],
					'column-6': [],
					'column-7': [],
					'column-8': [],
					'column-9': [],
					'column-10': [],
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
				firstSquareSumColEight: 0,
				firstSquareSumColNine: 0,
				firstSquareSumColTen: 0,
				secondSquareSumColFive: 0,
				secondSquareSumColSix: 0,
				secondSquareSumColSeven: 0,
				secondSquareSumColEight: 0,
				secondSquareSumColNine: 0,
				secondSquareSumColTen: 0,
				thirdSquareSumColFive: 0,
				thirdSquareSumColSix: 0,
				thirdSquareSumColSeven: 0,
				thirdSquareSumColEight: 0,
				thirdSquareSumColNine: 0,
				thirdSquareSumColTen: 0,
				dataForMax: {
					one: null,
					two: null,
					three: null,
					four: null,
					five: null,
					six: null,
					max: null,
					min: null,
					kenta: null,
					triling: null,
					ful: null,
					poker: null,
					yamb: null,
				}
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
				let item8;
				let item9;
				let item10;
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
				let sumOfEighthCol = {
					value: null
				};
				let sumOfNinethCol = {
					value: null
				};
				let sumOfTenthCol = {
					value: null
				};

				for (let i = 1; i <= 6; i++) {
					item1 = {
						class: `field-1${i}`,
						id: `first-1${i}`,
						value: null
					}
					item2 = {
						class: `field-2${i}`,
						id: `first-2${i}`,
						value: null
					}
					item3 = {
						class: `field-3${i}`,
						id: `first-3${i}`,
						value: null
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
					item7 = {
						class: `field-7${i}`,
						id: `first-7${i}`,
						value: null
					}
					item8 = {
						class: `field-8${i}`,
						id: `first-8${i}`,
						value: null
					}
					item9 = {
						class: `field-9${i}`,
						id: `first-9${i}`,
						value: null
					}
					item10 = {
						class: `field-10${i}`,
						id: `first-10${i}`,
						value: null
					}
					this.firstSquareItems['column-1'].push(item1);
					this.firstSquareItems['column-2'].push(item2);
					this.firstSquareItems['column-3'].push(item3);
					this.firstSquareItems['column-4'].push(item4);
					this.firstSquareItems['column-5'].push(item5);
					this.firstSquareItems['column-6'].push(item6);
					this.firstSquareItems['column-7'].push(item7);
					this.firstSquareItems['column-8'].push(item8);
					this.firstSquareItems['column-9'].push(item9);
					this.firstSquareItems['column-10'].push(item10);
				}
				this.firstSquareItems['column-1'].push(sumOfFirstCol);
				this.firstSquareItems['column-2'].push(sumOfSecondCol);
				this.firstSquareItems['column-3'].push(sumOfThirdCol);
				this.firstSquareItems['column-4'].push(sumOfFourthCol);
				this.firstSquareItems['column-5'].push(sumOfFifththCol);
				this.firstSquareItems['column-6'].push(sumOfSixthCol);
				this.firstSquareItems['column-7'].push(sumOfSeventhCol);
				this.firstSquareItems['column-8'].push(sumOfEighthCol);
				this.firstSquareItems['column-9'].push(sumOfNinethCol);
				this.firstSquareItems['column-10'].push(sumOfTenthCol);

			},
			getSecondSquare() {
				for (let i = 1; i <= 2; i++) {
					const item1 = {
						class: `field-sec-1${i}`,
						id: `second-1${i}`,
						value: null
					}
					const item2 = {
						class: `field-sec-2${i}`,
						id: `second-2${i}`,
						value: null
					}
					const item3 = {
						class: `field-sec-3${i}`,
						id: `second-3${i}`,
						value: null
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
						value: null
					}
					const item7 = {
						class: `field-sec-7${i}`,
						id: `second-7${i}`,
						value: null
					}
					const item8 = {
						class: `field-sec-8${i}`,
						id: `second-8${i}`,
						value: null
					}
					const item9 = {
						class: `field-sec-9${i}`,
						id: `second-9${i}`,
						value: null
					}
					const item10 = {
						class: `field-sec-10${i}`,
						id: `second-10${i}`,
						value: null
					}

					this.secondSquareItems['column-1'].push(item1);
					this.secondSquareItems['column-2'].push(item2);
					this.secondSquareItems['column-3'].push(item3);
					this.secondSquareItems['column-4'].push(item4);
					this.secondSquareItems['column-5'].push(item5);
					this.secondSquareItems['column-6'].push(item6);
					this.secondSquareItems['column-7'].push(item7);
					this.secondSquareItems['column-8'].push(item8);
					this.secondSquareItems['column-9'].push(item9);
					this.secondSquareItems['column-10'].push(item10);
				}
			},
			getThirdSquare() {
				for (let i = 1; i <= 5; i++) {
					const item1 = {
						class: `field-third-1${i}`,
						id: `third-1${i}`,
						value: null
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
					const item7 = {
						class: `field-third-7${i}`,
						id: `third-7${i}`,
						value: null
					}
					const item8 = {
						class: `field-third-8${i}`,
						id: `third-8${i}`,
						value: null
					}
					const item9 = {
						class: `field-third-9${i}`,
						id: `third-9${i}`,
						value: null
					}
					const item10 = {
						class: `field-third-10${i}`,
						id: `third-10${i}`,
						value: null
					}

					this.thirdSquareItems['column-1'].push(item1);
					this.thirdSquareItems['column-2'].push(item2);
					this.thirdSquareItems['column-3'].push(item3);
					this.thirdSquareItems['column-4'].push(item4);
					this.thirdSquareItems['column-5'].push(item5);
					this.thirdSquareItems['column-6'].push(item6);
					this.thirdSquareItems['column-7'].push(item7);
					this.thirdSquareItems['column-8'].push(item8);
					this.thirdSquareItems['column-9'].push(item9);
					this.thirdSquareItems['column-10'].push(item10);
				}
			},
			setResult(val, fieldId) {
				const area = fieldId.split('-')[0];
				const col = fieldId.split('-')[1].length > 2 ? fieldId.split('-')[1].substring(0, 2) : fieldId.split('-')[1][0];
				const row = fieldId.split('-')[1].length > 2 ? fieldId.split('-')[1][2] : fieldId.split('-')[1][1];

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
			firstSquareForMaxSum() {
				let total = this.dataForMax.one + this.dataForMax.two + this.dataForMax.three + this.dataForMax.four + this.dataForMax.five + this.dataForMax.six;
				if (total >= 80)
					total += 50;
				else if (total >= 70)
					total += 40;
				else if (total >= 60)
					total += 30;
				return total;
			},
			secondSquareForMaxSum() {
				return (this.dataForMax.max - this.dataForMax.min) * this.dataForMax.one;
			},
			thirdSquareForMaxSum() {
				return this.dataForMax.kenta + this.dataForMax.triling + this.dataForMax.ful + this.dataForMax.poker + this.dataForMax.yamb;
			},
			firstSquareSumTotal() {
				return this.basicGameFirstSquareSumTotal + this.firstSquareSumColFive + this.firstSquareSumColSix + this.firstSquareSumColSeven + this.firstSquareSumColEight + this.firstSquareSumColNine + this.firstSquareForMaxSum;
			},
			secondSquareSumTotal() {
				return this.basicGameSecondSquareSumTotal + this.secondSquareSumColFive + this.secondSquareSumColSix + this.secondSquareSumColSeven + this.secondSquareSumColEight + this.secondSquareSumColNine + this.secondSquareForMaxSum;
			},
			thirdSquareSumTotal() {
				return this.basicGameThirdSquareSumTotal + this.thirdSquareSumColFive + this.thirdSquareSumColSix + this.thirdSquareSumColSeven + this.thirdSquareSumColEight + this.thirdSquareSumColNine + this.thirdSquareForMaxSum;
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
					} 
				}
			},
			firstSquareItems: {
				handler() {
					this.dataForMax.one = null;
					this.dataForMax.two = null;
					this.dataForMax.three = null;
					this.dataForMax.four = null;
					this.dataForMax.five = null;
					this.dataForMax.six = null;

					for (let i = 1; i <= 10; i++) {
						if (i !== 10) {
							if (this.firstSquareItems[`column-${i}`] && this.firstSquareItems[`column-${i}`][0] && this.firstSquareItems[`column-${i}`][0].value !== null) {
								this.dataForMax.one = this.firstSquareItems[`column-${i}`][0].value === 0 && this.dataForMax.one === null || this.firstSquareItems[`column-${i}`][0].value > this.dataForMax.one ? this.firstSquareItems[`column-${i}`][0].value : this.dataForMax.one;
							}

							if (this.firstSquareItems[`column-${i}`] && this.firstSquareItems[`column-${i}`][1] && this.firstSquareItems[`column-${i}`][1].value !== null) {
								this.dataForMax.two = this.firstSquareItems[`column-${i}`][1].value === 0 && this.dataForMax.two === null || this.firstSquareItems[`column-${i}`][1].value > this.dataForMax.two ? this.firstSquareItems[`column-${i}`][1].value : this.dataForMax.two;
							}

							if (this.firstSquareItems[`column-${i}`] && this.firstSquareItems[`column-${i}`][2] && this.firstSquareItems[`column-${i}`][2].value !== null) {
								this.dataForMax.three = this.firstSquareItems[`column-${i}`][2].value === 0 && this.dataForMax.three === null || this.firstSquareItems[`column-${i}`][2].value > this.dataForMax.three ? this.firstSquareItems[`column-${i}`][2].value : this.dataForMax.three;
							}

							if (this.firstSquareItems[`column-${i}`] && this.firstSquareItems[`column-${i}`][3] && this.firstSquareItems[`column-${i}`][3].value !== null) {
								this.dataForMax.four = this.firstSquareItems[`column-${i}`][3].value === 0 && this.dataForMax.four === null || this.firstSquareItems[`column-${i}`][3].value > this.dataForMax.four ? this.firstSquareItems[`column-${i}`][3].value : this.dataForMax.four;
							}

							if (this.firstSquareItems[`column-${i}`] && this.firstSquareItems[`column-${i}`][4] && this.firstSquareItems[`column-${i}`][4].value !== null) {
								this.dataForMax.five = this.firstSquareItems[`column-${i}`][4].value === 0 && this.dataForMax.five === null || this.firstSquareItems[`column-${i}`][4].value > this.dataForMax.five ? this.firstSquareItems[`column-${i}`][4].value : this.dataForMax.five;
							}

							if (this.firstSquareItems[`column-${i}`] && this.firstSquareItems[`column-${i}`][5] && this.firstSquareItems[`column-${i}`][5].value !== null) {
								this.dataForMax.six = this.firstSquareItems[`column-${i}`][5].value === 0 && this.dataForMax.six === null || this.firstSquareItems[`column-${i}`][5].value > this.dataForMax.six ? this.firstSquareItems[`column-${i}`][5].value : this.dataForMax.six;
							}
						}
					}
				},
				deep: true
			},
			secondSquareItems: {
				handler() {
					this.dataForMax.max = null;
					this.dataForMax.min = null;

					for (let i = 1; i <= 10; i++) {
						if (i !== 10) {
							if (this.secondSquareItems[`column-${i}`] && this.secondSquareItems[`column-${i}`][0] && this.secondSquareItems[`column-${i}`][0].value !== null) {
								this.dataForMax.max = this.secondSquareItems[`column-${i}`][0].value === 0 && this.dataForMax.max === null || parseFloat(this.secondSquareItems[`column-${i}`][0].value) > this.dataForMax.max ? parseFloat(this.secondSquareItems[`column-${i}`][0].value) : this.dataForMax.max;
							}

							if (this.secondSquareItems[`column-${i}`] && this.secondSquareItems[`column-${i}`][1] && this.secondSquareItems[`column-${i}`][1].value !== null && this.secondSquareItems[`column-${i}`][1].value !== '') {
								this.dataForMax.min = this.dataForMax.min === null || parseFloat(this.secondSquareItems[`column-${i}`][1].value) < this.dataForMax.min ? parseFloat(this.secondSquareItems[`column-${i}`][1].value) : this.dataForMax.min;
							}
						}
					}
				},
				deep: true
			},
			thirdSquareItems: {
				handler() {
					this.dataForMax.kenta = null;
					this.dataForMax.triling = null;
					this.dataForMax.ful = null;
					this.dataForMax.poker = null;
					this.dataForMax.yamb = null;

					for (let i = 1; i <= 10; i++) {
						if (i !== 10) {
							if (this.thirdSquareItems[`column-${i}`] && this.thirdSquareItems[`column-${i}`][0] && this.thirdSquareItems[`column-${i}`][0].value !== null) {
								this.dataForMax.kenta = this.thirdSquareItems[`column-${i}`][0].value === 0 && this.dataForMax.kenta === null || this.thirdSquareItems[`column-${i}`][0].value > this.dataForMax.kenta ? this.thirdSquareItems[`column-${i}`][0].value : this.dataForMax.kenta;
							}

							if (this.thirdSquareItems[`column-${i}`] && this.thirdSquareItems[`column-${i}`][1] && this.thirdSquareItems[`column-${i}`][1].value !== null) {
								this.dataForMax.triling = this.thirdSquareItems[`column-${i}`][1].value === 0 && this.dataForMax.triling === null || this.thirdSquareItems[`column-${i}`][1].value > this.dataForMax.triling ? this.thirdSquareItems[`column-${i}`][1].value : this.dataForMax.triling;
							}

							if (this.thirdSquareItems[`column-${i}`] && this.thirdSquareItems[`column-${i}`][2] && this.thirdSquareItems[`column-${i}`][2].value !== null) {
								this.dataForMax.ful = this.thirdSquareItems[`column-${i}`][2].value === 0 && this.dataForMax.ful === null || this.thirdSquareItems[`column-${i}`][2].value > this.dataForMax.ful ? this.thirdSquareItems[`column-${i}`][2].value : this.dataForMax.ful;
							}

							if (this.thirdSquareItems[`column-${i}`] && this.thirdSquareItems[`column-${i}`][3] && this.thirdSquareItems[`column-${i}`][3].value !== null) {
								this.dataForMax.poker = this.thirdSquareItems[`column-${i}`][3].value === 0 && this.dataForMax.poker === null || this.thirdSquareItems[`column-${i}`][3].value > this.dataForMax.poker ? this.thirdSquareItems[`column-${i}`][3].value : this.dataForMax.poker;
							}

							if (this.thirdSquareItems[`column-${i}`] && this.thirdSquareItems[`column-${i}`][4] && this.thirdSquareItems[`column-${i}`][4].value !== null) {
								this.dataForMax.yamb = this.thirdSquareItems[`column-${i}`][4].value === 0 && this.dataForMax.yamb === null || this.thirdSquareItems[`column-${i}`][4].value > this.dataForMax.yamb ? this.thirdSquareItems[`column-${i}`][4].value : this.dataForMax.yamb;
							}
						}
					}
				},
				deep: true
			},
		}
	}
</script>
