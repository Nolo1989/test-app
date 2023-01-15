<template>
	<div :class="numOfColumn" class="single-column">
		<template v-if="toMiddle || fromMiddle">
			<div v-if="toMiddle" class="field to-middle" :class="$parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor">
				<img src="../../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
				<div class="divider"></div>
				<img src="../../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
			</div>
			<div v-else-if="fromMiddle" class="field from-middle" :class="$parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor">
				<img src="../../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
				<div class="divider"></div>
				<img src="../../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
			</div>
		</template>
		<div v-else class="field" :class="[$parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor, {'thick': totalNumberOfCols && totalNumberOfCols < 7}]">{{ nameOfColumn }}</div>
		<template v-if="column === 5">
			<template v-for="(item, idx) in firstSquareDataFive">
				<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.one }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.two }}
					</template>
					<template v-else-if="idx === 2">
						{{ dataForMax.three }}
					</template>
					<template v-else-if="idx === 3">
						{{ dataForMax.four }}
					</template>
					<template v-else-if="idx === 4">
						{{ dataForMax.five }}
					</template>
					<template v-else-if="idx === 5">
						{{ dataForMax.six }}
					</template>
				</div>
				<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O'), toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O')" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
		</template>
		<template v-for="(item, idx) in firstSquareDataSix" v-else-if="column === 6">
			<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
				<template v-if="idx === 0">
					{{ dataForMax.one }}
				</template>
				<template v-else-if="idx === 1">
					{{ dataForMax.two }}
				</template>
				<template v-else-if="idx === 2">
					{{ dataForMax.three }}
				</template>
				<template v-else-if="idx === 3">
					{{ dataForMax.four }}
				</template>
				<template v-else-if="idx === 4">
					{{ dataForMax.five }}
				</template>
				<template v-else-if="idx === 5">
					{{ dataForMax.six }}
				</template>
			</div>
			<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O'), toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O')" :id="item.id" :key="item.id">
				<input type="hidden" v-model="item.value" />
				{{ item.value }}
			</div>
		</template>
		<template v-for="(item, idx) in firstSquareDataSeven" v-else-if="column === 7">
			<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
				<template v-if="idx === 0">
					{{ dataForMax.one }}
				</template>
				<template v-else-if="idx === 1">
					{{ dataForMax.two }}
				</template>
				<template v-else-if="idx === 2">
					{{ dataForMax.three }}
				</template>
				<template v-else-if="idx === 3">
					{{ dataForMax.four }}
				</template>
				<template v-else-if="idx === 4">
					{{ dataForMax.five }}
				</template>
				<template v-else-if="idx === 5">
					{{ dataForMax.six }}
				</template>
			</div>
			<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O'), toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O')" :id="item.id" :key="item.id">
				<input type="hidden" v-model="item.value" />
				{{ item.value }}
			</div>
		</template>
		<template v-for="(item, idx) in firstSquareDataEight" v-else-if="column === 8">
			<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
				<template v-if="idx === 0">
					{{ dataForMax.one }}
				</template>
				<template v-else-if="idx === 1">
					{{ dataForMax.two }}
				</template>
				<template v-else-if="idx === 2">
					{{ dataForMax.three }}
				</template>
				<template v-else-if="idx === 3">
					{{ dataForMax.four }}
				</template>
				<template v-else-if="idx === 4">
					{{ dataForMax.five }}
				</template>
				<template v-else-if="idx === 5">
					{{ dataForMax.six }}
				</template>
			</div>
			<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O'), toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O')" :id="item.id" :key="item.id">
				<input type="hidden" v-model="item.value" />
				{{ item.value }}
			</div>
		</template>
		<template v-for="(item, idx) in firstSquareDataNine" v-else-if="column === 9">
			<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
				<template v-if="idx === 0">
					{{ dataForMax.one }}
				</template>
				<template v-else-if="idx === 1">
					{{ dataForMax.two }}
				</template>
				<template v-else-if="idx === 2">
					{{ dataForMax.three }}
				</template>
				<template v-else-if="idx === 3">
					{{ dataForMax.four }}
				</template>
				<template v-else-if="idx === 4">
					{{ dataForMax.five }}
				</template>
				<template v-else-if="idx === 5">
					{{ dataForMax.six }}
				</template>
			</div>
			<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O'), toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O')" :id="item.id" :key="item.id">
				<input type="hidden" v-model="item.value" />
				{{ item.value }}
			</div>
		</template>
		<template v-for="(item, idx) in firstSquareDataTen" v-else-if="column === 10">
			<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
				<template v-if="idx === 0">
					{{ dataForMax.one }}
				</template>
				<template v-else-if="idx === 1">
					{{ dataForMax.two }}
				</template>
				<template v-else-if="idx === 2">
					{{ dataForMax.three }}
				</template>
				<template v-else-if="idx === 3">
					{{ dataForMax.four }}
				</template>
				<template v-else-if="idx === 4">
					{{ dataForMax.five }}
				</template>
				<template v-else-if="idx === 5">
					{{ dataForMax.six }}
				</template>
			</div>
			<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O'), toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled || (startOdjava && nameOfColumn === 'O')" :id="item.id" :key="item.id">
				<input type="hidden" v-model="item.value" />
				{{ item.value }}
			</div>
		</template>
		<div v-if="column === 5" class="field" :class="[{'result': smallFont}, $parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor]">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				<div class="hit-bonus" v-if="showBonusColFive">{{ hitTheBonusFive }}</div>
				<div class="hit-bonus" ref="plusThirtyColFive" v-show="plus30ColFive">+30</div>
				<div class="hit-bonus" ref="plusFourtyColFive" v-show="plus40ColFive">+40</div>
				<div class="hit-bonus" ref="plusFiftyColFive" v-show="plus50ColFive">+50</div>
				{{ firstSquareSumColumnFive }}
			</template>
		</div>
		<div v-else-if="column === 6" class="field" :class="[{'result': smallFont}, $parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor]">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				<div class="hit-bonus" v-if="showBonusColSix">{{ hitTheBonusSix }}</div>
				<div class="hit-bonus" ref="plusThirtyColSix" v-show="plus30ColSix">+30</div>
				<div class="hit-bonus" ref="plusFourtyColSix" v-show="plus40ColSix">+40</div>
				<div class="hit-bonus" ref="plusFiftyColSix" v-show="plus50ColSix">+50</div>
				{{ firstSquareSumColumnSix }}
			</template>
		</div>
		<div v-else-if="column === 7" class="field" :class="[{'result': smallFont}, $parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor]">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				<div class="hit-bonus" v-if="showBonusColSeven">{{ hitTheBonusSeven }}</div>
				<div class="hit-bonus" ref="plusThirtyColSeven" v-show="plus30ColSeven">+30</div>
				<div class="hit-bonus" ref="plusFourtyColSeven" v-show="plus40ColSeven">+40</div>
				<div class="hit-bonus" ref="plusFiftyColSeven" v-show="plus50ColSeven">+50</div>
				{{ firstSquareSumColumnSeven }}
			</template>
		</div>
		<div v-else-if="column === 8" class="field" :class="[{'result': smallFont}, $parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor]">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				<div class="hit-bonus" v-if="showBonusColEight">{{ hitTheBonusEight }}</div>
				<div class="hit-bonus" ref="plusThirtyColEight" v-show="plus30ColEight">+30</div>
				<div class="hit-bonus" ref="plusFourtyColEight" v-show="plus40ColEight">+40</div>
				<div class="hit-bonus" ref="plusFiftyColEight" v-show="plus50ColEight">+50</div>
				{{ firstSquareSumColumnEight }}
			</template>
		</div>
		<div v-else-if="column === 9" class="field" :class="[{'result': smallFont}, $parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor]">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				<div class="hit-bonus" v-if="showBonusColNine">{{ hitTheBonusNine }}</div>
				<div class="hit-bonus" ref="plusThirtyColNine" v-show="plus30ColNine">+30</div>
				<div class="hit-bonus" ref="plusFourtyColNine" v-show="plus40ColNine">+40</div>
				<div class="hit-bonus" ref="plusFiftyColNine" v-show="plus50ColNine">+50</div>
				{{ firstSquareSumColumnNine }}
			</template>
		</div>
		<div v-else-if="column === 10" class="field" :class="[{'result': smallFont}, $parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor]">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				<div class="hit-bonus" v-if="showBonusColTen">{{ hitTheBonusTen }}</div>
				<div class="hit-bonus" ref="plusThirtyColTen" v-show="plus30ColTen">+30</div>
				<div class="hit-bonus" ref="plusFourtyColTen" v-show="plus40ColTen">+40</div>
				<div class="hit-bonus" ref="plusFiftyColTen" v-show="plus50ColTen">+50</div>
				{{ firstSquareSumColumnTen }}
			</template>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SingleColumnFirstSquare',
		props: {
			column: {
				type: Number,
				require: true
			},
			nameOfColumn: {
				type: String,
				require: false
			},
			firstSquareDataFive: {
				type: Array,
				require: false
			},
			firstSquareDataSix: {
				type: Array,
				require: false
			},
			firstSquareDataSeven: {
				type: Array,
				require: false
			},
			firstSquareDataEight: {
				type: Array,
				require: false
			},
			firstSquareDataNine: {
				type: Array,
				require: false
			},
			firstSquareDataTen: {
				type: Array,
				require: false
			},
			disabledAllBtns: {
				type: Boolean,
				required: true
			},
			toMiddle: {
				type: Boolean,
				require: false
			},
			fromMiddle: {
				type: Boolean,
				require: false
			},
			smallFont: {
				type: Boolean,
				require: false,
				default: false
			},
			dataForMax: {
				type: Object,
				require: false,
			},
			firstSquareForMaxSum: {
				type: Number,
				require: false,
				default: 0
			},
			totalNumberOfCols: {
				type: Number,
				require: false
			}
		},
		data() {
			return {
				showBonusColFive: false,
				plus30ColFive: false,
				plus40ColFive: false,
				plus50ColFive: false,
				showBonusColSix: false,
				plus30ColSix: false,
				plus40ColSix: false,
				plus50ColSix: false,
				showBonusColSeven: false,
				plus30ColSeven: false,
				plus40ColSeven: false,
				plus50ColSeven: false,
				showBonusColEight: false,
				plus30ColEight: false,
				plus40ColEight: false,
				plus50ColEight: false,
				showBonusColNine: false,
				plus30ColNine: false,
				plus40ColNine: false,
				plus50ColNine: false,
				showBonusColTen: false,
				plus30ColTen: false,
				plus40ColTen: false,
				plus50ColTen: false,
				startOdjava: true
			};
		},
		mounted() {
			this.$bus.$on('startOdjava', (bool) => {
				this.startOdjava = bool;
			});
		},
		computed: {
			numOfColumn() {
				let toMiddleClass = this.toMiddle ? 'to-middle-flag' : '';
				let fromMiddleClass = this.fromMiddle ? 'from-middle-flag' : '';
				return `column-${this.column} ${toMiddleClass} ${fromMiddleClass}`;
			},
			firstSquareSumColumnFive() {
				const item1 = this.firstSquareDataFive && this.firstSquareDataFive[0] && this.firstSquareDataFive[0].value ? parseFloat(this.firstSquareDataFive[0].value) : 0;
				const item2 = this.firstSquareDataFive && this.firstSquareDataFive[1] && this.firstSquareDataFive[1].value ? parseFloat(this.firstSquareDataFive[1].value) : 0;
				const item3 = this.firstSquareDataFive && this.firstSquareDataFive[2] && this.firstSquareDataFive[2].value ? parseFloat(this.firstSquareDataFive[2].value) : 0;
				const item4 = this.firstSquareDataFive && this.firstSquareDataFive[3] && this.firstSquareDataFive[3].value ? parseFloat(this.firstSquareDataFive[3].value) : 0;
				const item5 = this.firstSquareDataFive && this.firstSquareDataFive[4] && this.firstSquareDataFive[4].value ? parseFloat(this.firstSquareDataFive[4].value) : 0;
				const item6 = this.firstSquareDataFive && this.firstSquareDataFive[5] && this.firstSquareDataFive[5].value ? parseFloat(this.firstSquareDataFive[5].value) : 0;
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
			firstSquareSumColumnSix() {
				const item1 = this.firstSquareDataSix && this.firstSquareDataSix[0] && this.firstSquareDataSix[0].value ? parseFloat(this.firstSquareDataSix[0].value) : 0;
				const item2 = this.firstSquareDataSix && this.firstSquareDataSix[1] && this.firstSquareDataSix[1].value ? parseFloat(this.firstSquareDataSix[1].value) : 0;
				const item3 = this.firstSquareDataSix && this.firstSquareDataSix[2] && this.firstSquareDataSix[2].value ? parseFloat(this.firstSquareDataSix[2].value) : 0;
				const item4 = this.firstSquareDataSix && this.firstSquareDataSix[3] && this.firstSquareDataSix[3].value ? parseFloat(this.firstSquareDataSix[3].value) : 0;
				const item5 = this.firstSquareDataSix && this.firstSquareDataSix[4] && this.firstSquareDataSix[4].value ? parseFloat(this.firstSquareDataSix[4].value) : 0;
				const item6 = this.firstSquareDataSix && this.firstSquareDataSix[5] && this.firstSquareDataSix[5].value ? parseFloat(this.firstSquareDataSix[5].value) : 0;
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
			firstSquareSumColumnSeven() {
				const item1 = this.firstSquareDataSeven && this.firstSquareDataSeven[0] && this.firstSquareDataSeven[0].value ? parseFloat(this.firstSquareDataSeven[0].value) : 0;
				const item2 = this.firstSquareDataSeven && this.firstSquareDataSeven[1] && this.firstSquareDataSeven[1].value ? parseFloat(this.firstSquareDataSeven[1].value) : 0;
				const item3 = this.firstSquareDataSeven && this.firstSquareDataSeven[2] && this.firstSquareDataSeven[2].value ? parseFloat(this.firstSquareDataSeven[2].value) : 0;
				const item4 = this.firstSquareDataSeven && this.firstSquareDataSeven[3] && this.firstSquareDataSeven[3].value ? parseFloat(this.firstSquareDataSeven[3].value) : 0;
				const item5 = this.firstSquareDataSeven && this.firstSquareDataSeven[4] && this.firstSquareDataSeven[4].value ? parseFloat(this.firstSquareDataSeven[4].value) : 0;
				const item6 = this.firstSquareDataSeven && this.firstSquareDataSeven[5] && this.firstSquareDataSeven[5].value ? parseFloat(this.firstSquareDataSeven[5].value) : 0;
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
			firstSquareSumColumnEight() {
				const item1 = this.firstSquareDataEight && this.firstSquareDataEight[0] && this.firstSquareDataEight[0].value ? parseFloat(this.firstSquareDataEight[0].value) : 0;
				const item2 = this.firstSquareDataEight && this.firstSquareDataEight[1] && this.firstSquareDataEight[1].value ? parseFloat(this.firstSquareDataEight[1].value) : 0;
				const item3 = this.firstSquareDataEight && this.firstSquareDataEight[2] && this.firstSquareDataEight[2].value ? parseFloat(this.firstSquareDataEight[2].value) : 0;
				const item4 = this.firstSquareDataEight && this.firstSquareDataEight[3] && this.firstSquareDataEight[3].value ? parseFloat(this.firstSquareDataEight[3].value) : 0;
				const item5 = this.firstSquareDataEight && this.firstSquareDataEight[4] && this.firstSquareDataEight[4].value ? parseFloat(this.firstSquareDataEight[4].value) : 0;
				const item6 = this.firstSquareDataEight && this.firstSquareDataEight[5] && this.firstSquareDataEight[5].value ? parseFloat(this.firstSquareDataEight[5].value) : 0;
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
			firstSquareSumColumnNine() {
				const item1 = this.firstSquareDataNine && this.firstSquareDataNine[0] && this.firstSquareDataNine[0].value ? parseFloat(this.firstSquareDataNine[0].value) : 0;
				const item2 = this.firstSquareDataNine && this.firstSquareDataNine[1] && this.firstSquareDataNine[1].value ? parseFloat(this.firstSquareDataNine[1].value) : 0;
				const item3 = this.firstSquareDataNine && this.firstSquareDataNine[2] && this.firstSquareDataNine[2].value ? parseFloat(this.firstSquareDataNine[2].value) : 0;
				const item4 = this.firstSquareDataNine && this.firstSquareDataNine[3] && this.firstSquareDataNine[3].value ? parseFloat(this.firstSquareDataNine[3].value) : 0;
				const item5 = this.firstSquareDataNine && this.firstSquareDataNine[4] && this.firstSquareDataNine[4].value ? parseFloat(this.firstSquareDataNine[4].value) : 0;
				const item6 = this.firstSquareDataNine && this.firstSquareDataNine[5] && this.firstSquareDataNine[5].value ? parseFloat(this.firstSquareDataNine[5].value) : 0;
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
			firstSquareSumColumnTen() {
				const item1 = this.firstSquareDataTen && this.firstSquareDataTen[0] && this.firstSquareDataTen[0].value ? parseFloat(this.firstSquareDataTen[0].value) : 0;
				const item2 = this.firstSquareDataTen && this.firstSquareDataTen[1] && this.firstSquareDataTen[1].value ? parseFloat(this.firstSquareDataTen[1].value) : 0;
				const item3 = this.firstSquareDataTen && this.firstSquareDataTen[2] && this.firstSquareDataTen[2].value ? parseFloat(this.firstSquareDataTen[2].value) : 0;
				const item4 = this.firstSquareDataTen && this.firstSquareDataTen[3] && this.firstSquareDataTen[3].value ? parseFloat(this.firstSquareDataTen[3].value) : 0;
				const item5 = this.firstSquareDataTen && this.firstSquareDataTen[4] && this.firstSquareDataTen[4].value ? parseFloat(this.firstSquareDataTen[4].value) : 0;
				const item6 = this.firstSquareDataTen && this.firstSquareDataTen[5] && this.firstSquareDataTen[5].value ? parseFloat(this.firstSquareDataTen[5].value) : 0;
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
			hitTheBonusFive() {
				if (this.showBonusColFive && this.firstSquareSumColumnFive < 60)
					return -60 + this.firstSquareSumColumnFive;
			
				return 0;
			},
			hitTheBonusSix() {
				if (this.showBonusColSix && this.firstSquareSumColumnSix < 60)
					return -60 + this.firstSquareSumColumnSix;
			
				return 0;
			},
			hitTheBonusSeven() {
				if (this.showBonusColSeven && this.firstSquareSumColumnSeven < 60)
					return -60 + this.firstSquareSumColumnSeven;
			
				return 0;
			},
			hitTheBonusEight() {
				if (this.showBonusColEight && this.firstSquareSumColumnEight < 60)
					return -60 + this.firstSquareSumColumnEight;
			
				return 0;
			},
			hitTheBonusNine() {
				if (this.showBonusColNine && this.firstSquareSumColumnNine < 60)
					return -60 + this.firstSquareSumColumnNine;
			
				return 0;
			},
			hitTheBonusTen() {
				if (this.showBonusColTen && this.firstSquareSumColumnTen < 60)
					return -60 + this.firstSquareSumColumnTen;
			
				return 0;
			},
		},
		watch: {
			firstSquareSumColumnFive: {
				handler() {
					this.$parent.firstSquareSumColFive = this.firstSquareSumColumnFive;

					const isFilled = (element) => element.value !== null && element.value !== '';
					const arrForCheckBonus = [];
					const diff = -60 + this.firstSquareSumColumnFive;

					for (let i = 0; i < 6; i++) {
						arrForCheckBonus.push(this.firstSquareDataFive[i]);
					}

					this.showBonusColFive = false;

					if (diff >= 0) {
						if (diff < 50) {
							this.plus30ColFive = true;

							this.$refs.plusThirtyColFive.classList.remove('hide');
							this.$refs.plusFourtyColFive.classList.add('hide');
							this.$refs.plusFiftyColFive.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusThirtyColFive.classList.add('animation');
								this.$refs.plusFourtyColFive.classList.remove('animation');
								this.$refs.plusFiftyColFive.classList.remove('animation');
							}, 0);
						}
						else if (diff < 70) {
							this.plus30ColFive = false;
							this.plus40ColFive = true;

							this.$refs.plusFourtyColFive.classList.remove('hide');
							this.$refs.plusThirtyColFive.classList.add('hide');
							this.$refs.plusFiftyColFive.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFourtyColFive.classList.add('animation');
								this.$refs.plusThirtyColFive.classList.remove('animation');
								this.$refs.plusFiftyColFive.classList.remove('animation');
							}, 0);
						}
						else {
							this.plus30ColFive = false;
							this.plus40ColFive = false;
							this.plus50ColFive = true;

							this.$refs.plusFiftyColFive.classList.remove('hide');
							this.$refs.plusThirtyColFive.classList.add('hide');
							this.$refs.plusFourtyColFive.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFiftyColFive.classList.add('animation');
								this.$refs.plusThirtyColFive.classList.remove('animation');
								this.$refs.plusFourtyColFive.classList.remove('animation');
							}, 0);
						}
					}
					else if (arrForCheckBonus.some(isFilled)) {
						this.showBonusColFive = true;

						if (arrForCheckBonus.every(isFilled))
							this.showBonusColFive = false;

						this.$refs.plusThirtyColFive.classList.remove('animation');
						this.$refs.plusFourtyColFive.classList.remove('animation');
						this.$refs.plusFiftyColFive.classList.remove('animation');
						this.$refs.plusThirtyColFive.classList.add('hide');
						this.$refs.plusFourtyColFive.classList.add('hide');
						this.$refs.plusFiftyColFive.classList.add('hide');
					}
				}
			},
			firstSquareSumColumnSix: {
				handler() {
					this.$parent.firstSquareSumColSix = this.firstSquareSumColumnSix;

					const isFilled = (element) => element.value !== null && element.value !== '';
					const arrForCheckBonus = [];
					const diff = -60 + this.firstSquareSumColumnSix;

					for (let i = 0; i < 6; i++) {
						arrForCheckBonus.push(this.firstSquareDataSix[i]);
					}

					this.showBonusColSix = false;

					if (diff >= 0) {
						if (diff < 50) {
							this.plus30ColSix = true;

							this.$refs.plusThirtyColSix.classList.remove('hide');
							this.$refs.plusFourtyColSix.classList.add('hide');
							this.$refs.plusFiftyColSix.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusThirtyColSix.classList.add('animation');
								this.$refs.plusFourtyColSix.classList.remove('animation');
								this.$refs.plusFiftyColSix.classList.remove('animation');
							}, 0);
						}
						else if (diff < 70) {
							this.plus30ColSix = false;
							this.plus40ColSix = true;

							this.$refs.plusFourtyColSix.classList.remove('hide');
							this.$refs.plusThirtyColSix.classList.add('hide');
							this.$refs.plusFiftyColSix.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFourtyColSix.classList.add('animation');
								this.$refs.plusThirtyColSix.classList.remove('animation');
								this.$refs.plusFiftyColSix.classList.remove('animation');
							}, 0);
						}
						else {
							this.plus30ColSix = false;
							this.plus40ColSix = false;
							this.plus50ColSix = true;

							this.$refs.plusFiftyColSix.classList.remove('hide');
							this.$refs.plusThirtyColSix.classList.add('hide');
							this.$refs.plusFourtyColSix.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFiftyColSix.classList.add('animation');
								this.$refs.plusThirtyColSix.classList.remove('animation');
								this.$refs.plusFourtyColSix.classList.remove('animation');
							}, 0);
						}
					}
					else if (arrForCheckBonus.some(isFilled)) {
						this.showBonusColSix = true;

						if (arrForCheckBonus.every(isFilled))
							this.showBonusColSix = false;

						this.$refs.plusThirtyColSix.classList.remove('animation');
						this.$refs.plusFourtyColSix.classList.remove('animation');
						this.$refs.plusFiftyColSix.classList.remove('animation');
						this.$refs.plusThirtyColSix.classList.add('hide');
						this.$refs.plusFourtyColSix.classList.add('hide');
						this.$refs.plusFiftyColSix.classList.add('hide');
					}
				}
			},
			firstSquareSumColumnSeven: {
				handler() {
					this.$parent.firstSquareSumColSeven = this.firstSquareSumColumnSeven;

					const isFilled = (element) => element.value !== null && element.value !== '';
					const arrForCheckBonus = [];
					const diff = -60 + this.firstSquareSumColumnSeven;

					for (let i = 0; i < 6; i++) {
						arrForCheckBonus.push(this.firstSquareDataSeven[i]);
					}

					this.showBonusColSeven = false;

					if (diff >= 0) {
						if (diff < 50) {
							this.plus30ColSeven = true;

							this.$refs.plusThirtyColSeven.classList.remove('hide');
							this.$refs.plusFourtyColSeven.classList.add('hide');
							this.$refs.plusFiftyColSeven.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusThirtyColSeven.classList.add('animation');
								this.$refs.plusFourtyColSeven.classList.remove('animation');
								this.$refs.plusFiftyColSeven.classList.remove('animation');
							}, 0);
						}
						else if (diff < 70) {
							this.plus30ColSeven = false;
							this.plus40ColSeven = true;

							this.$refs.plusFourtyColSeven.classList.remove('hide');
							this.$refs.plusThirtyColSeven.classList.add('hide');
							this.$refs.plusFiftyColSeven.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFourtyColSeven.classList.add('animation');
								this.$refs.plusThirtyColSeven.classList.remove('animation');
								this.$refs.plusFiftyColSeven.classList.remove('animation');
							}, 0);
						}
						else {
							this.plus30ColSeven = false;
							this.plus40ColSeven = false;
							this.plus50ColSeven = true;

							this.$refs.plusFiftyColSeven.classList.remove('hide');
							this.$refs.plusThirtyColSeven.classList.add('hide');
							this.$refs.plusFourtyColSeven.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFiftyColSeven.classList.add('animation');
								this.$refs.plusThirtyColSeven.classList.remove('animation');
								this.$refs.plusFourtyColSeven.classList.remove('animation');
							}, 0);
						}
					}
					else if (arrForCheckBonus.some(isFilled)) {
						this.showBonusColSeven = true;

						if (arrForCheckBonus.every(isFilled))
							this.showBonusColSeven = false;

						this.$refs.plusThirtyColSeven.classList.remove('animation');
						this.$refs.plusFourtyColSeven.classList.remove('animation');
						this.$refs.plusFiftyColSeven.classList.remove('animation');
						this.$refs.plusThirtyColSeven.classList.add('hide');
						this.$refs.plusFourtyColSeven.classList.add('hide');
						this.$refs.plusFiftyColSeven.classList.add('hide');
					}
				}
			},
			firstSquareSumColumnEight: {
				handler() {
					this.$parent.firstSquareSumColEight = this.firstSquareSumColumnEight;

					const isFilled = (element) => element.value !== null && element.value !== '';
					const arrForCheckBonus = [];
					const diff = -60 + this.firstSquareSumColumnEight;

					for (let i = 0; i < 6; i++) {
						arrForCheckBonus.push(this.firstSquareDataEight[i]);
					}

					this.showBonusColEight = false;

					if (diff >= 0) {
						if (diff < 50) {
							this.plus30ColEight = true;

							this.$refs.plusThirtyColEight.classList.remove('hide');
							this.$refs.plusFourtyColEight.classList.add('hide');
							this.$refs.plusFiftyColEight.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusThirtyColEight.classList.add('animation');
								this.$refs.plusFourtyColEight.classList.remove('animation');
								this.$refs.plusFiftyColEight.classList.remove('animation');
							}, 0);
						}
						else if (diff < 70) {
							this.plus30ColEight = false;
							this.plus40ColEight = true;

							this.$refs.plusFourtyColEight.classList.remove('hide');
							this.$refs.plusThirtyColEight.classList.add('hide');
							this.$refs.plusFiftyColEight.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFourtyColEight.classList.add('animation');
								this.$refs.plusThirtyColEight.classList.remove('animation');
								this.$refs.plusFiftyColEight.classList.remove('animation');
							}, 0);
						}
						else {
							this.plus30ColEight = false;
							this.plus40ColEight = false;
							this.plus50ColEight = true;

							this.$refs.plusFiftyColEight.classList.remove('hide');
							this.$refs.plusThirtyColEight.classList.add('hide');
							this.$refs.plusFourtyColEight.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFiftyColEight.classList.add('animation');
								this.$refs.plusThirtyColEight.classList.remove('animation');
								this.$refs.plusFourtyColEight.classList.remove('animation');
							}, 0);
						}
					}
					else if (arrForCheckBonus.some(isFilled)) {
						this.showBonusColEight = true;

						if (arrForCheckBonus.every(isFilled))
							this.showBonusColEight = false;

						this.$refs.plusThirtyColEight.classList.remove('animation');
						this.$refs.plusFourtyColEight.classList.remove('animation');
						this.$refs.plusFiftyColEight.classList.remove('animation');
						this.$refs.plusThirtyColEight.classList.add('hide');
						this.$refs.plusFourtyColEight.classList.add('hide');
						this.$refs.plusFiftyColEight.classList.add('hide');
					}
				}
			},
			firstSquareSumColumnNine: {
				handler() {
					this.$parent.firstSquareSumColNine = this.firstSquareSumColumnNine;

					const isFilled = (element) => element.value !== null && element.value !== '';
					const arrForCheckBonus = [];
					const diff = -60 + this.firstSquareSumColumnNine;

					for (let i = 0; i < 6; i++) {
						arrForCheckBonus.push(this.firstSquareDataNine[i]);
					}

					this.showBonusColNine = false;

					if (diff >= 0) {
						if (diff < 50) {
							this.plus30ColNine = true;

							this.$refs.plusThirtyColNine.classList.remove('hide');
							this.$refs.plusFourtyColNine.classList.add('hide');
							this.$refs.plusFiftyColNine.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusThirtyColNine.classList.add('animation');
								this.$refs.plusFourtyColNine.classList.remove('animation');
								this.$refs.plusFiftyColNine.classList.remove('animation');
							}, 0);
						}
						else if (diff < 70) {
							this.plus30ColNine = false;
							this.plus40ColNine = true;

							this.$refs.plusFourtyColNine.classList.remove('hide');
							this.$refs.plusThirtyColNine.classList.add('hide');
							this.$refs.plusFiftyColNine.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFourtyColNine.classList.add('animation');
								this.$refs.plusThirtyColNine.classList.remove('animation');
								this.$refs.plusFiftyColNine.classList.remove('animation');
							}, 0);
						}
						else {
							this.plus30ColNine = false;
							this.plus40ColNine = false;
							this.plus50ColNine = true;

							this.$refs.plusFiftyColNine.classList.remove('hide');
							this.$refs.plusThirtyColNine.classList.add('hide');
							this.$refs.plusFourtyColNine.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFiftyColNine.classList.add('animation');
								this.$refs.plusThirtyColNine.classList.remove('animation');
								this.$refs.plusFourtyColNine.classList.remove('animation');
							}, 0);
						}
					}
					else if (arrForCheckBonus.some(isFilled)) {
						this.showBonusColNine = true;

						if (arrForCheckBonus.every(isFilled))
							this.showBonusColNine = false;

						this.$refs.plusThirtyColNine.classList.remove('animation');
						this.$refs.plusFourtyColNine.classList.remove('animation');
						this.$refs.plusFiftyColNine.classList.remove('animation');
						this.$refs.plusThirtyColNine.classList.add('hide');
						this.$refs.plusFourtyColNine.classList.add('hide');
						this.$refs.plusFiftyColNine.classList.add('hide');
					}
				}
			},
			firstSquareSumColumnTen: {
				handler() {
					this.$parent.firstSquareSumColTen = this.firstSquareSumColumnTen;

					const isFilled = (element) => element.value !== null && element.value !== '';
					const arrForCheckBonus = [];
					const diff = -60 + this.firstSquareSumColumnTen;

					for (let i = 0; i < 6; i++) {
						arrForCheckBonus.push(this.firstSquareDataTen[i]);
					}

					this.showBonusColTen = false;

					if (diff >= 0) {
						if (diff < 50) {
							this.plus30ColTen = true;

							this.$refs.plusThirtyColTen.classList.remove('hide');
							this.$refs.plusFourtyColTen.classList.add('hide');
							this.$refs.plusFiftyColTen.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusThirtyColTen.classList.add('animation');
								this.$refs.plusFourtyColTen.classList.remove('animation');
								this.$refs.plusFiftyColTen.classList.remove('animation');
							}, 0);
						}
						else if (diff < 70) {
							this.plus30ColTen = false;
							this.plus40ColTen = true;

							this.$refs.plusFourtyColTen.classList.remove('hide');
							this.$refs.plusThirtyColTen.classList.add('hide');
							this.$refs.plusFiftyColTen.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFourtyColTen.classList.add('animation');
								this.$refs.plusThirtyColTen.classList.remove('animation');
								this.$refs.plusFiftyColTen.classList.remove('animation');
							}, 0);
						}
						else {
							this.plus30ColTen = false;
							this.plus40ColTen = false;
							this.plus50ColTen = true;

							this.$refs.plusFiftyColTen.classList.remove('hide');
							this.$refs.plusThirtyColTen.classList.add('hide');
							this.$refs.plusFourtyColTen.classList.add('hide');
							setTimeout(() => {
								this.$refs.plusFiftyColTen.classList.add('animation');
								this.$refs.plusThirtyColTen.classList.remove('animation');
								this.$refs.plusFourtyColTen.classList.remove('animation');
							}, 0);
						}
					}
					else if (arrForCheckBonus.some(isFilled)) {
						this.showBonusColTen = true;

						if (arrForCheckBonus.every(isFilled))
							this.showBonusColTen = false;

						this.$refs.plusThirtyColTen.classList.remove('animation');
						this.$refs.plusFourtyColTen.classList.remove('animation');
						this.$refs.plusFiftyColTen.classList.remove('animation');
						this.$refs.plusThirtyColTen.classList.add('hide');
						this.$refs.plusFourtyColTen.classList.add('hide');
						this.$refs.plusFiftyColTen.classList.add('hide');
					}
				}
			},
		}
	}
</script>