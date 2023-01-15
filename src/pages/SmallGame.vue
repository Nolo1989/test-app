<template>
	<section>
		<div class="first-square">
			<basic-game-first-square :basicGameFirstSquareData="firstSquareItems" :disabledAllBtns="disabledAllBtns" :game="'small-game'"></basic-game-first-square>
			<div class="column-5">
				<div class="field thick" :class="$attrs.themeColor">YAMB</div>
				<div class="field large"></div>
				<div class="field" :class="$attrs.themeColor">{{ basicGameFirstSquareSumTotal }}</div>
			</div>
		</div>
		<div class="second-square">
			<basic-game-second-square :basicGameSecondSquareData="secondSquareItems" :basicGameFirstSquareData="firstSquareItems" :disabledAllBtns="disabledAllBtns"></basic-game-second-square>
			<div class="column-5">
				<div class="field large"></div>
				<div class="field" :class="$attrs.themeColor">{{ basicGameSecondSquareSumTotal }}</div>
			</div>
		</div>
		<div class="third-square">
			<basic-game-third-square :basicGameThirdSquareData="thirdSquareItems" :disabledAllBtns="disabledAllBtns" :firstFulRowDisabled="firstFulRowDisabled" :secondFulRowDisabled="secondFulRowDisabled" :disabledNumber="disabledNumber"></basic-game-third-square>
			<div class="column-5">
				<div class="field large">
					<p class="total">TOTAL:</p>
					<div class="total-field" @click="totalFieldActive = !totalFieldActive" :class="[{'active': totalFieldActive}, bkgTotal(), {'darken-2': isDarker()}]">
						{{ basicGameFirstSquareSumTotal + basicGameSecondSquareSumTotal + basicGameThirdSquareSumTotal }}
					</div>
					<!-- <img src="../images/hand-cursor.svg" alt="Hand cursor icon" class="icon" /> -->
				</div>
				<div class="field" :class="$attrs.themeColor">{{ basicGameThirdSquareSumTotal }}</div>
			</div>
		</div>
	</section>
</template>

<script>
	import BasicGameFirstSquare from '../common/basic-game/basicGameFirstSquare.vue';
	import BasicGameSecondSquare from '../common/basic-game/basicGameSecondSquare.vue';
	import BasicGameThirdSquare from '../common/basic-game/basicGameThirdSquare.vue';

	export default {
		name: "SmallGame",
		data() {
			return {
				firstSquareItems: {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': []
				},
				secondSquareItems: {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': []
				},
				thirdSquareItems: {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': []
				},
				firstFulRowDisabled: false,
				secondFulRowDisabled: true,
				firstRowFulResult: 0,
				disabledNumber: 0,
				totalFieldActive: true,
				disabledAllBtns: true,
				basicGameFirstSquareSumTotal: 0,
				basicGameSecondSquareSumTotal: 0,
				basicGameThirdSquareSumTotal: 0,
				activeModalColumn: '',
				counter: 0,
				mySavedObj: {},
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
			this.$bus.$on('resetSmallGame', () => {
				this.firstSquareItems = {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': []
				};
				this.secondSquareItems = {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': []
				};
				this.thirdSquareItems = {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': []
				};
				this.firstFulRowDisabled = false;
				this.secondFulRowDisabled = true;
				this.firstRowFulResult = 0;
				this.disabledNumber = 0;
				this.totalFieldActive = true;
				this.disabledAllBtns = true;
				this.basicGameFirstSquareSumTotal = 0;
				this.basicGameSecondSquareSumTotal = 0;
				this.basicGameThirdSquareSumTotal = 0;
				this.activeModalColumn = '';
				this.counter = 0;

				this.getFirstSquare();
				this.getSecondSquare();
				this.getThirdSquare();
				this.$bus.$emit('isDisabledAllButtons', this.disabledAllBtns);
			});

			if (localStorage.getItem('smallGame')) {
				this.mySavedObj = JSON.parse(localStorage.getItem('smallGame'));

				this.firstSquareItems = this.mySavedObj.firstSquareItems;
				this.secondSquareItems = this.mySavedObj.secondSquareItems;
				this.thirdSquareItems = this.mySavedObj.thirdSquareItems;
				this.firstFulRowDisabled = this.mySavedObj.firstFulRowDisabled;
				this.secondFulRowDisabled = this.mySavedObj.secondFulRowDisabled;
				this.firstRowFulResult = this.mySavedObj.firstRowFulResult;
				this.disabledNumber = this.mySavedObj.disabledNumber;
				this.totalFieldActive = this.mySavedObj.totalFieldActive;
				this.disabledAllBtns = this.mySavedObj.disabledAllBtns;
				this.basicGameFirstSquareSumTotal= this.mySavedObj.basicGameFirstSquareSumTotal;
				this.basicGameSecondSquareSumTotal= this.mySavedObj.basicGameSecondSquareSumTotal;
				this.basicGameThirdSquareSumTotal= this.mySavedObj.basicGameThirdSquareSumTotal;
				this.activeModalColumn = this.mySavedObj.activeModalColumn;
				this.counter = this.mySavedObj.counter;
			}

			this.$bus.$emit('isDisabledAllButtons', this.disabledAllBtns);
		},
		updated() {
			const myObj = {
				firstSquareItems: this.firstSquareItems,
				secondSquareItems: this.secondSquareItems,
				thirdSquareItems: this.thirdSquareItems,
				firstFulRowDisabled: this.firstFulRowDisabled,
				secondFulRowDisabled: this.secondFulRowDisabled,
				firstRowFulResult: this.firstRowFulResult,
				disabledNumber: this.disabledNumber,
				totalFieldActive: this.totalFieldActive,
				disabledAllBtns: this.disabledAllBtns,
				basicGameFirstSquareSumTotal: this.basicGameFirstSquareSumTotal,
				basicGameSecondSquareSumTotal: this.basicGameSecondSquareSumTotal,
				basicGameThirdSquareSumTotal: this.basicGameThirdSquareSumTotal,
				activeModalColumn: this.activeModalColumn,
				counter: this.counter,
				totalResult: this.totalResult
			}
			localStorage.setItem('smallGame', JSON.stringify(myObj));
		},
		methods: {
			getFirstSquare() {
				let item1;
				let item2;
				let item3;
				let item4;
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
					this.firstSquareItems['column-1'].push(item1);
					this.firstSquareItems['column-2'].push(item2);
					this.firstSquareItems['column-3'].push(item3);
					this.firstSquareItems['column-4'].push(item4);
				}
				this.firstSquareItems['column-1'].push(sumOfFirstCol);
				this.firstSquareItems['column-2'].push(sumOfSecondCol);
				this.firstSquareItems['column-3'].push(sumOfThirdCol);
				this.firstSquareItems['column-4'].push(sumOfFourthCol);

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

					this.secondSquareItems['column-1'].push(item1);
					this.secondSquareItems['column-2'].push(item2);
					this.secondSquareItems['column-3'].push(item3);
					this.secondSquareItems['column-4'].push(item4);
				}
			},
			getThirdSquare() {
				for (let i = 1; i <= 5; i++) {
					let game;
					if (i === 1) {
						game = 'kenta';
					} else if (i === 2) {
						game = 'triling';
					} else if (i === 3) {
						game = 'ful';
					} else if (i === 4) {
						game = 'poker';
					} else if (i === 5) {
						game = 'yamb';
					}

					const item1 = {
						class: `field-third-1${i}`,
						id: `third-1${i}`,
						value: null,
						game: game,
						disabled: true
					}
					const item2 = {
						class: `field-third-2${i}`,
						id: `third-2${i}`,
						value: null,
						game: game
					}
					const item3 = {
						class: `field-third-3${i}`,
						id: `third-3${i}`,
						value: null,
						game: game
					}
					if (i !== 5)
						item3.disabled = true;
					const item4 = {
						class: `field-third-4${i}`,
						id: `third-4${i}`,
						value: null,
						game: game
					}

					this.thirdSquareItems['column-1'].push(item1);
					this.thirdSquareItems['column-2'].push(item2);
					this.thirdSquareItems['column-3'].push(item3);
					this.thirdSquareItems['column-4'].push(item4);
				}
			},
			isDarker() {
				return this.$attrs.themeColor.includes('darken-3') ? true : false;
			},
			bkgTotal() {
				let color = this.$attrs.themeColor;

				if (this.isDarker())
					return color.replace('darken-3', '');

				return color;
			},
		},
		watch: {
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
				},
				deep: true
			},
			counter: {
				handler() {
					if (this.counter === 52) {
						this.$nextTick(() => {
							this.$bus.$emit('showTotalResult', this.totalResult);
						});
					}
				},
				deep: true
			}
		},
		computed: {
			totalResult() {
				return this.basicGameFirstSquareSumTotal + this.basicGameSecondSquareSumTotal + this.basicGameThirdSquareSumTotal;
			}
		},
		components: {
			BasicGameFirstSquare,
			BasicGameSecondSquare,
			BasicGameThirdSquare,
		},
	}
</script>
