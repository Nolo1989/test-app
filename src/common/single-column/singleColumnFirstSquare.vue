<template>
	<div :class="numOfColumn" class="single-column">
		<template v-if="toMiddle || fromMiddle">
			<div v-if="toMiddle" class="field blue to-middle">
				<img src="../../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
				<div class="divider"></div>
				<img src="../../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
			</div>
			<div v-else-if="fromMiddle" class="field blue from-middle">
				<img src="../../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
				<div class="divider"></div>
				<img src="../../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
			</div>
		</template>
		<div v-else class="field blue">{{ nameOfColumn }}</div>
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
				<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
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
			<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
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
			<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
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
			<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
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
			<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
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
			<div v-else-if="idx !== 6" class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
				<input type="hidden" v-model="item.value" />
				{{ item.value }}
			</div>
		</template>
		<div v-if="column === 5" class="field blue" :class="{'result': smallFont}">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				{{ firstSquareSumColumnFive }}
			</template>
		</div>
		<div v-else-if="column === 6" class="field blue" :class="{'result': smallFont}">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				{{ firstSquareSumColumnSix }}
			</template>
		</div>
		<div v-else-if="column === 7" class="field blue" :class="{'result': smallFont}">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				{{ firstSquareSumColumnSeven }}
			</template>
		</div>
		<div v-else-if="column === 8" class="field blue" :class="{'result': smallFont}">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				{{ firstSquareSumColumnEight }}
			</template>
		</div>
		<div v-else-if="column === 9" class="field blue" :class="{'result': smallFont}">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
				{{ firstSquareSumColumnNine }}
			</template>
		</div>
		<div v-else-if="column === 10" class="field blue" :class="{'result': smallFont}">
			<template v-if="nameOfColumn === 'M'">
				{{ firstSquareForMaxSum }}
			</template>
			<template v-else>
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
			}
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
		},
		watch: {
			firstSquareSumColumnFive: {
				handler() {
					this.$parent.firstSquareSumColFive = this.firstSquareSumColumnFive;
				}
			},
			firstSquareSumColumnSix: {
				handler() {
					this.$parent.firstSquareSumColSix = this.firstSquareSumColumnSix;
				}
			},
			firstSquareSumColumnSeven: {
				handler() {
					this.$parent.firstSquareSumColSeven = this.firstSquareSumColumnSeven;
				}
			},
			firstSquareSumColumnEight: {
				handler() {
					this.$parent.firstSquareSumColEight = this.firstSquareSumColumnEight;
				}
			},
			firstSquareSumColumnNine: {
				handler() {
					this.$parent.firstSquareSumColNine = this.firstSquareSumColumnNine;
				}
			},
			firstSquareSumColumnTen: {
				handler() {
					this.$parent.firstSquareSumColTen = this.firstSquareSumColumnTen;
				}
			},
		}
	}
</script>