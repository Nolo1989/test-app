<template>
	<section class="basic-game-first-suare">
		<div class="column-0">
			<div v-if="game && game === 'large-game'" class="field blue">Y</div>
			<div v-else class="field blue smaller">YAMB</div>
			<div class="field smaller">1</div>
			<div class="field smaller">2</div>
			<div class="field smaller">3</div>
			<div class="field smaller">4</div>
			<div class="field smaller">5</div>
			<div class="field smaller">6</div>
			<div v-if="game && game === 'large-game'" class="field blue">
				<div class="bonus" :class="{'small': totalNumberOfCols && totalNumberOfCols > 5}">BONUS</div>
				S
			</div>
			<div v-else class="field blue">
				<div class="bonus" :class="{'small':(game && game !== 'small-game')}">BONUS</div>
				SUM
			</div>
		</div>
		<div class="column-1">
			<div class="field blue">
				<img src="../../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
			</div>
			<template v-for="(item, idx) in basicGameFirstSquareData['column-1']">
				<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue result">
				<div class="hit-bonus" v-if="showBonusColOne">{{ hitTheBonusOne }}</div>
				<div class="hit-bonus" ref="plusThirtyColOne" v-show="plus30ColOne">+30</div>
				<div class="hit-bonus" ref="plusFourtyColOne" v-show="plus40ColOne">+40</div>
				<div class="hit-bonus" ref="plusFiftyColOne" v-show="plus50ColOne">+50</div>
				{{ firstSquareSumColOne }}
			</div>
		</div>
		<div class="column-2">
			<div class="field blue">
				<img src="../../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
				<img src="../../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
			</div>
			<template v-for="(item, idx) in basicGameFirstSquareData['column-2']">
				<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue result">
				<div class="hit-bonus" v-if="showBonusColTwo">{{ hitTheBonusTwo }}</div>
				<div class="hit-bonus" ref="plusThirtyColTwo" v-show="plus30ColTwo">+30</div>
				<div class="hit-bonus" ref="plusFourtyColTwo" v-show="plus40ColTwo">+40</div>
				<div class="hit-bonus" ref="plusFiftyColTwo" v-show="plus50ColTwo">+50</div>
				{{ firstSquareSumColTwo }}
			</div>
		</div>
		<div class="column-3">
			<div class="field blue">
				<img src="../../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
			</div>
			<template v-for="(item, idx) in basicGameFirstSquareData['column-3']">
				<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue result">
				<div class="hit-bonus" v-if="showBonusColThree">{{ hitTheBonusThree }}</div>
				<div class="hit-bonus" ref="plusThirtyColThree" v-show="plus30ColThree">+30</div>
				<div class="hit-bonus" ref="plusFourtyColThree" v-show="plus40ColThree">+40</div>
				<div class="hit-bonus" ref="plusFiftyColThree" v-show="plus50ColThree">+50</div>
				{{ firstSquareSumColThree }}
			</div>
		</div>
		<div class="column-4">
			<div class="field blue">N</div>
			<template v-for="(item, idx) in basicGameFirstSquareData['column-4']">
				<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue result">
				<div class="hit-bonus" v-if="showBonusColFour">{{ hitTheBonusFour }}</div>
				<div class="hit-bonus" ref="plusThirtyColFour" v-show="plus30ColFour">+30</div>
				<div class="hit-bonus" ref="plusFourtyColFour" v-show="plus40ColFour">+40</div>
				<div class="hit-bonus" ref="plusFiftyColFour" v-show="plus50ColFour">+50</div>
				{{ firstSquareSumColFour }}
			</div>
		</div>

		<firstSquareModal :basicGameFirstSquareData="basicGameFirstSquareData" :showModal="showModal" :disabledAllBtns="disabledAllBtns"></firstSquareModal>
	</section>
</template>

<script>
	import firstSquareModal from '../../components/modals/firstSquareModal.vue';

	export default {
		name: 'BasicGameFirstSquare',
		props: {
			basicGameFirstSquareData: {
				type: Object,
				required: true,
			},
			disabledAllBtns: {
				type: Boolean,
				required: true
			},
			game: {
				type: String,
				require: false
			},
			totalNumberOfCols: {
				type: Number,
				require: false
			}
		},
		data() {
			return {
				showModal: false,
				showBonusColOne: false,
				showBonusColTwo: false,
				showBonusColThree: false,
				showBonusColFour: false,
				plus30ColOne: false,
				plus40ColOne: false,
				plus50ColOne: false,
				plus30ColTwo: false,
				plus40ColTwo: false,
				plus50ColTwo: false,
				plus30ColThree: false,
				plus40ColThree: false,
				plus50ColThree: false,
				plus30ColFour: false,
				plus40ColFour: false,
				plus50ColFour: false,
			}
		},
		methods: {
			firstSquareSumPerCol(col) {
				const item1 = this.basicGameFirstSquareData[`column-${col}`][0] && this.basicGameFirstSquareData[`column-${col}`][0].value ? parseFloat(this.basicGameFirstSquareData[`column-${col}`][0].value) : 0;
				const item2 = this.basicGameFirstSquareData[`column-${col}`][1] && this.basicGameFirstSquareData[`column-${col}`][1].value ? parseFloat(this.basicGameFirstSquareData[`column-${col}`][1].value) : 0;
				const item3 = this.basicGameFirstSquareData[`column-${col}`][2] && this.basicGameFirstSquareData[`column-${col}`][2].value ? parseFloat(this.basicGameFirstSquareData[`column-${col}`][2].value) : 0;
				const item4 = this.basicGameFirstSquareData[`column-${col}`][3] && this.basicGameFirstSquareData[`column-${col}`][3].value ? parseFloat(this.basicGameFirstSquareData[`column-${col}`][3].value) : 0;
				const item5 = this.basicGameFirstSquareData[`column-${col}`][4] && this.basicGameFirstSquareData[`column-${col}`][4].value ? parseFloat(this.basicGameFirstSquareData[`column-${col}`][4].value) : 0;
				const item6 = this.basicGameFirstSquareData[`column-${col}`][5] && this.basicGameFirstSquareData[`column-${col}`][5].value ? parseFloat(this.basicGameFirstSquareData[`column-${col}`][5].value) : 0;
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
			openModal(fieldId, isDisabled) {
				if (isDisabled)
					return;

				this.showModal = true;
				this.fieldId = fieldId;

				this.$bus.$emit('modalData', this.fieldId);
			},
		},
		computed: {
			firstSquareSumColOne() {
				return this.firstSquareSumPerCol(1);
			},
			firstSquareSumColTwo() {
				return this.firstSquareSumPerCol(2);
			},
			firstSquareSumColThree() {
				return this.firstSquareSumPerCol(3);
			},
			firstSquareSumColFour() {
				return this.firstSquareSumPerCol(4);
			},
			firstSquareSumTotal() {
				return this.firstSquareSumColOne + this.firstSquareSumColTwo + this.firstSquareSumColThree + this.firstSquareSumColFour;
			},
			hitTheBonusOne() {
				if (this.showBonusColOne && this.firstSquareSumColOne < 60)
					return -60 + this.firstSquareSumColOne;
			
				return 0;
			},
			hitTheBonusTwo() {
				if (this.showBonusColTwo && this.firstSquareSumColTwo < 60)
					return -60 + this.firstSquareSumColTwo;
				
				return 0;
			},
			hitTheBonusThree() {
				if (this.showBonusColThree && this.firstSquareSumColThree < 60)
					return -60 + this.firstSquareSumColThree;
				
				return 0;
			},
			hitTheBonusFour() {
				if (this.showBonusColFour && this.firstSquareSumColFour < 60)
					return -60 + this.firstSquareSumColFour;
				
				return 0;
			},
		},
		watch: {
			firstSquareSumTotal: {
				handler() {
					this.$bus.$emit('basic-game-first-square-sum-total', this.firstSquareSumTotal);
				}
			},
			firstSquareSumColOne: {
				handler() {
					const isFilled = (element) => element.value !== null && element.value !== '';
					const arrForCheckBonus = [];
					const diff = -60 + this.firstSquareSumColOne;

					for (let i = 0; i < 6; i++) {
						arrForCheckBonus.push(this.basicGameFirstSquareData['column-1'][i]);
					}

					this.showBonusColOne = false;

					if (diff >= 0) {
						if (diff < 50) {
							this.plus30ColOne = true;

							this.$refs.plusThirtyColOne.classList.remove('hide');
							this.$refs.plusFourtyColOne.classList.add('hide');
							this.$refs.plusFiftyColOne.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusThirtyColOne.classList.add('animation');
								this.$refs.plusFourtyColOne.classList.remove('animation');
								this.$refs.plusFiftyColOne.classList.remove('animation');
							}, 0);
						}
						else if (diff < 70) {
							this.plus30ColOne = false;
							this.plus40ColOne = true;

							this.$refs.plusFourtyColOne.classList.remove('hide');
							this.$refs.plusThirtyColOne.classList.add('hide');
							this.$refs.plusFiftyColOne.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFourtyColOne.classList.add('animation');
								this.$refs.plusThirtyColOne.classList.remove('animation');
								this.$refs.plusFiftyColOne.classList.remove('animation');
							}, 0);
						}
						else {
							this.plus30ColOne = false;
							this.plus40ColOne = false;
							this.plus50ColOne = true;

							this.$refs.plusFiftyColOne.classList.remove('hide');
							this.$refs.plusThirtyColOne.classList.add('hide');
							this.$refs.plusFourtyColOne.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFiftyColOne.classList.add('animation');
								this.$refs.plusThirtyColOne.classList.remove('animation');
								this.$refs.plusFourtyColOne.classList.remove('animation');
							}, 0);
						}
					}
					else if (arrForCheckBonus.some(isFilled)) {
						this.showBonusColOne = true;

						if (arrForCheckBonus.every(isFilled))
							this.showBonusColOne = false;

						this.$refs.plusThirtyColOne.classList.remove('animation');
						this.$refs.plusFourtyColOne.classList.remove('animation');
						this.$refs.plusFiftyColOne.classList.remove('animation');
						this.$refs.plusThirtyColOne.classList.add('hide');
						this.$refs.plusFourtyColOne.classList.add('hide');
						this.$refs.plusFiftyColOne.classList.add('hide');
					}
				}
			},
			firstSquareSumColTwo: {
				handler() {
					const isFilled = (element) => element.value !== null && element.value !== '';
					const arrForCheckBonus = [];
					const diff = -60 + this.firstSquareSumColTwo;

					for (let i = 0; i < 6; i++) {
						arrForCheckBonus.push(this.basicGameFirstSquareData['column-2'][i]);
					}

					this.showBonusColTwo = false;

					if (diff >= 0) {
						if (diff < 50) {
							this.plus30ColTwo = true;

							this.$refs.plusThirtyColTwo.classList.remove('hide');
							this.$refs.plusFourtyColTwo.classList.add('hide');
							this.$refs.plusFiftyColTwo.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusThirtyColTwo.classList.add('animation');
								this.$refs.plusFourtyColTwo.classList.remove('animation');
								this.$refs.plusFiftyColTwo.classList.remove('animation');
							}, 0);
						}
						else if (diff < 70) {
							this.plus30ColTwo = false;
							this.plus40ColTwo = true;

							this.$refs.plusFourtyColTwo.classList.remove('hide');
							this.$refs.plusThirtyColTwo.classList.add('hide');
							this.$refs.plusFiftyColTwo.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFourtyColTwo.classList.add('animation');
								this.$refs.plusThirtyColTwo.classList.remove('animation');
								this.$refs.plusFiftyColTwo.classList.remove('animation');
							}, 0);
						}
						else {
							this.plus30ColTwo = false;
							this.plus40ColTwo = false;
							this.plus50ColTwo = true;

							this.$refs.plusFiftyColTwo.classList.remove('hide');
							this.$refs.plusThirtyColTwo.classList.add('hide');
							this.$refs.plusFourtyColTwo.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFiftyColTwo.classList.add('animation');
								this.$refs.plusThirtyColTwo.classList.remove('animation');
								this.$refs.plusFourtyColTwo.classList.remove('animation');
							}, 0);
						}
					}
					else if (arrForCheckBonus.some(isFilled)) {
						this.showBonusColTwo = true;

						if (arrForCheckBonus.every(isFilled))
							this.showBonusColTwo = false;

						this.$refs.plusThirtyColTwo.classList.remove('animation');
						this.$refs.plusFourtyColTwo.classList.remove('animation');
						this.$refs.plusFiftyColTwo.classList.remove('animation');
						this.$refs.plusThirtyColTwo.classList.add('hide');
						this.$refs.plusFourtyColTwo.classList.add('hide');
						this.$refs.plusFiftyColTwo.classList.add('hide');
					}
				}
			},
			firstSquareSumColThree: {
				handler() {
					const isFilled = (element) => element.value !== null && element.value !== '';
					const arrForCheckBonus = [];
					const diff = -60 + this.firstSquareSumColThree;

					for (let i = 0; i < 6; i++) {
						arrForCheckBonus.push(this.basicGameFirstSquareData['column-3'][i]);
					}

					this.showBonusColThree = false;

					if (diff >= 0) {
						if (diff < 50) {
							this.plus30ColThree = true;

							this.$refs.plusThirtyColThree.classList.remove('hide');
							this.$refs.plusFourtyColThree.classList.add('hide');
							this.$refs.plusFiftyColThree.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusThirtyColThree.classList.add('animation');
								this.$refs.plusFourtyColThree.classList.remove('animation');
								this.$refs.plusFiftyColThree.classList.remove('animation');
							}, 0);
						}
						else if (diff < 70) {
							this.plus30ColThree = false;
							this.plus40ColThree = true;

							this.$refs.plusFourtyColThree.classList.remove('hide');
							this.$refs.plusThirtyColThree.classList.add('hide');
							this.$refs.plusFiftyColThree.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFourtyColThree.classList.add('animation');
								this.$refs.plusThirtyColThree.classList.remove('animation');
								this.$refs.plusFiftyColThree.classList.remove('animation');
							}, 0);
						}
						else {
							this.plus30ColThree = false;
							this.plus40ColThree = false;
							this.plus50ColThree = true;

							this.$refs.plusFiftyColThree.classList.remove('hide');
							this.$refs.plusThirtyColThree.classList.add('hide');
							this.$refs.plusFourtyColThree.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFiftyColThree.classList.add('animation');
								this.$refs.plusThirtyColThree.classList.remove('animation');
								this.$refs.plusFourtyColThree.classList.remove('animation');
							}, 0);
						}
					}
					else if (arrForCheckBonus.some(isFilled)) {
						this.showBonusColThree = true;

						if (arrForCheckBonus.every(isFilled))
							this.showBonusColThree = false;

						this.$refs.plusThirtyColThree.classList.remove('animation');
						this.$refs.plusFourtyColThree.classList.remove('animation');
						this.$refs.plusFiftyColThree.classList.remove('animation');
						this.$refs.plusThirtyColThree.classList.add('hide');
						this.$refs.plusFourtyColThree.classList.add('hide');
						this.$refs.plusFiftyColThree.classList.add('hide');
					}
				}
			},
			firstSquareSumColFour: {
				handler() {
					const isFilled = (element) => element.value !== null && element.value !== '';
					const arrForCheckBonus = [];
					const diff = -60 + this.firstSquareSumColFour;

					for (let i = 0; i < 6; i++) {
						arrForCheckBonus.push(this.basicGameFirstSquareData['column-4'][i]);
					}

					this.showBonusColFour = false;
					
					if (diff >= 0) {
						if (diff < 50) {
							this.plus30ColFour = true;

							this.$refs.plusThirtyColFour.classList.remove('hide');
							this.$refs.plusFourtyColFour.classList.add('hide');
							this.$refs.plusFiftyColFour.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusThirtyColFour.classList.add('animation');
								this.$refs.plusFourtyColFour.classList.remove('animation');
								this.$refs.plusFiftyColFour.classList.remove('animation');
							}, 0);
						}
						else if (diff < 70) {
							this.plus30ColFour = false;
							this.plus40ColFour = true;

							this.$refs.plusFourtyColFour.classList.remove('hide');
							this.$refs.plusThirtyColFour.classList.add('hide');
							this.$refs.plusFiftyColFour.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFourtyColFour.classList.add('animation');
								this.$refs.plusThirtyColFour.classList.remove('animation');
								this.$refs.plusFiftyColFour.classList.remove('animation');
							}, 0);
						}
						else {
							this.plus30ColFour = false;
							this.plus40ColFour = false;
							this.plus50ColFour = true;

							this.$refs.plusFiftyColFour.classList.remove('hide');
							this.$refs.plusThirtyColFour.classList.add('hide');
							this.$refs.plusFourtyColFour.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFiftyColFour.classList.add('animation');
								this.$refs.plusThirtyColFour.classList.remove('animation');
								this.$refs.plusFourtyColFour.classList.remove('animation');
							}, 0);
						}
					}
					else if (arrForCheckBonus.some(isFilled)) {
						this.showBonusColFour = true;

						if (arrForCheckBonus.every(isFilled))
							this.showBonusColFour = false;

						this.$refs.plusThirtyColFour.classList.remove('animation');
						this.$refs.plusFourtyColFour.classList.remove('animation');
						this.$refs.plusFiftyColFour.classList.remove('animation');
						this.$refs.plusThirtyColFour.classList.add('hide');
						this.$refs.plusFourtyColFour.classList.add('hide');
						this.$refs.plusFiftyColFour.classList.add('hide');
					}
				},
				deep: true
			},
		},
		components: {
			firstSquareModal
		}
	}
</script>