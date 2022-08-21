<template>
	<div :class="numOfColumn" class="single-column">
		<template v-if="column === 5">
			<template v-for="(item, idx) in thirdSquareDataFive">
				<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.kenta }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.triling }}
					</template>
					<template v-else-if="idx === 2">
						{{ dataForMax.ful }}
					</template>
					<template v-else-if="idx === 3">
						{{ dataForMax.poker }}
					</template>
					<template v-else-if="idx === 4">
						{{ dataForMax.yamb }}
					</template>
				</div>
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ thirdSquareForMaxSum }}
				</template>
				<template v-else>
					{{ thirdSquareSumColumnFive }}
				</template>
			</div>
		</template>		
		<template v-else-if="column === 6">
			<template v-for="(item, idx) in thirdSquareDataSix">
				<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.kenta }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.triling }}
					</template>
					<template v-else-if="idx === 2">
						{{ dataForMax.ful }}
					</template>
					<template v-else-if="idx === 3">
						{{ dataForMax.poker }}
					</template>
					<template v-else-if="idx === 4">
						{{ dataForMax.yamb }}
					</template>
				</div>
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ thirdSquareForMaxSum }}
				</template>
				<template v-else>
					{{ thirdSquareSumColumnSix }}
				</template>
			</div>
		</template>		
		<template v-else-if="column === 7">
			<template v-for="(item, idx) in thirdSquareDataSeven">
				<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.kenta }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.triling }}
					</template>
					<template v-else-if="idx === 2">
						{{ dataForMax.ful }}
					</template>
					<template v-else-if="idx === 3">
						{{ dataForMax.poker }}
					</template>
					<template v-else-if="idx === 4">
						{{ dataForMax.yamb }}
					</template>
				</div>
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ thirdSquareForMaxSum }}
				</template>
				<template v-else>
					{{ thirdSquareSumColumnSeven }}
				</template>
			</div>
		</template>		
		<template v-else-if="column === 8">
			<template v-for="(item, idx) in thirdSquareDataEight">
				<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.kenta }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.triling }}
					</template>
					<template v-else-if="idx === 2">
						{{ dataForMax.ful }}
					</template>
					<template v-else-if="idx === 3">
						{{ dataForMax.poker }}
					</template>
					<template v-else-if="idx === 4">
						{{ dataForMax.yamb }}
					</template>
				</div>
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ thirdSquareForMaxSum }}
				</template>
				<template v-else>
					{{ thirdSquareSumColumnEight }}
				</template>
			</div>
		</template>		
		<template v-else-if="column === 9">
			<template v-for="(item, idx) in thirdSquareDataNine">
				<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.kenta }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.triling }}
					</template>
					<template v-else-if="idx === 2">
						{{ dataForMax.ful }}
					</template>
					<template v-else-if="idx === 3">
						{{ dataForMax.poker }}
					</template>
					<template v-else-if="idx === 4">
						{{ dataForMax.yamb }}
					</template>
				</div>
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ thirdSquareForMaxSum }}
				</template>
				<template v-else>
					{{ thirdSquareSumColumnNine }}
				</template>
			</div>
		</template>		
		<template v-else-if="column === 10">
			<template v-for="(item, idx) in thirdSquareDataTen">
				<div v-if="nameOfColumn === 'M' && idx !== 6" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.kenta }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.triling }}
					</template>
					<template v-else-if="idx === 2">
						{{ dataForMax.ful }}
					</template>
					<template v-else-if="idx === 3">
						{{ dataForMax.poker }}
					</template>
					<template v-else-if="idx === 4">
						{{ dataForMax.yamb }}
					</template>
				</div>
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ thirdSquareForMaxSum }}
				</template>
				<template v-else>
					{{ thirdSquareSumColumnTen }}
				</template>
			</div>
		</template>		
	</div>
</template>

<script>
	export default {
		name: 'SingleColumnThirdSquare',
		props: {
			column: {
				type: Number,
				require: true
			},
			thirdSquareDataFive: {
				type: Array,
				require: false
			},
			thirdSquareDataSix: {
				type: Array,
				require: false
			},
			thirdSquareDataSeven: {
				type: Array,
				require: false
			},
			thirdSquareDataEight: {
				type: Array,
				require: false
			},
			thirdSquareDataNine: {
				type: Array,
				require: false
			},
			thirdSquareDataTen: {
				type: Array,
				require: false
			},
			disabledAllBtns: {
				type: Boolean,
				required: true
			},
			smallFont: {
				type: Boolean,
				require: false,
				default: false
			},
			toMiddle: {
				type: Boolean,
				require: false
			},
			fromMiddle: {
				type: Boolean,
				require: false
			},
			nameOfColumn: {
				type: String,
				require: false
			},
			dataForMax: {
				type: Object,
				require: false,
			},
			thirdSquareForMaxSum: {
				type: Number,
				require: false,
				default: 0
			}
		},
		computed: {
			numOfColumn() {
				let toMiddleClass = this.toMiddle ? 'to-middle-flag' : '';
				return `column-${this.column} ${toMiddleClass}`;
			},
			thirdSquareSumColumnFive() {
				const item1 = this.thirdSquareDataFive && this.thirdSquareDataFive[0] && this.thirdSquareDataFive[0].value ? parseFloat(this.thirdSquareDataFive[0].value) : 0;
				const item2 = this.thirdSquareDataFive && this.thirdSquareDataFive[1] && this.thirdSquareDataFive[1].value ? parseFloat(this.thirdSquareDataFive[1].value) : 0;
				const item3 = this.thirdSquareDataFive && this.thirdSquareDataFive[2] && this.thirdSquareDataFive[2].value ? parseFloat(this.thirdSquareDataFive[2].value) : 0;
				const item4 = this.thirdSquareDataFive && this.thirdSquareDataFive[3] && this.thirdSquareDataFive[3].value ? parseFloat(this.thirdSquareDataFive[3].value) : 0;
				const item5 = this.thirdSquareDataFive && this.thirdSquareDataFive[4] && this.thirdSquareDataFive[4].value ? parseFloat(this.thirdSquareDataFive[4].value) : 0;
				const item6 = this.thirdSquareDataFive && this.thirdSquareDataFive[5] && this.thirdSquareDataFive[5].value ? parseFloat(this.thirdSquareDataFive[5].value) : 0;
				let sum = item1 + item2 + item3 + item4 + item5 + item6;

				return sum;
			},
			thirdSquareSumColumnSix() {
				const item1 = this.thirdSquareDataSix && this.thirdSquareDataSix[0] && this.thirdSquareDataSix[0].value ? parseFloat(this.thirdSquareDataSix[0].value) : 0;
				const item2 = this.thirdSquareDataSix && this.thirdSquareDataSix[1] && this.thirdSquareDataSix[1].value ? parseFloat(this.thirdSquareDataSix[1].value) : 0;
				const item3 = this.thirdSquareDataSix && this.thirdSquareDataSix[2] && this.thirdSquareDataSix[2].value ? parseFloat(this.thirdSquareDataSix[2].value) : 0;
				const item4 = this.thirdSquareDataSix && this.thirdSquareDataSix[3] && this.thirdSquareDataSix[3].value ? parseFloat(this.thirdSquareDataSix[3].value) : 0;
				const item5 = this.thirdSquareDataSix && this.thirdSquareDataSix[4] && this.thirdSquareDataSix[4].value ? parseFloat(this.thirdSquareDataSix[4].value) : 0;
				const item6 = this.thirdSquareDataSix && this.thirdSquareDataSix[5] && this.thirdSquareDataSix[5].value ? parseFloat(this.thirdSquareDataSix[5].value) : 0;
				let sum = item1 + item2 + item3 + item4 + item5 + item6;

				return sum;
			},
			thirdSquareSumColumnSeven() {
				const item1 = this.thirdSquareDataSeven && this.thirdSquareDataSeven[0] && this.thirdSquareDataSeven[0].value ? parseFloat(this.thirdSquareDataSeven[0].value) : 0;
				const item2 = this.thirdSquareDataSeven && this.thirdSquareDataSeven[1] && this.thirdSquareDataSeven[1].value ? parseFloat(this.thirdSquareDataSeven[1].value) : 0;
				const item3 = this.thirdSquareDataSeven && this.thirdSquareDataSeven[2] && this.thirdSquareDataSeven[2].value ? parseFloat(this.thirdSquareDataSeven[2].value) : 0;
				const item4 = this.thirdSquareDataSeven && this.thirdSquareDataSeven[3] && this.thirdSquareDataSeven[3].value ? parseFloat(this.thirdSquareDataSeven[3].value) : 0;
				const item5 = this.thirdSquareDataSeven && this.thirdSquareDataSeven[4] && this.thirdSquareDataSeven[4].value ? parseFloat(this.thirdSquareDataSeven[4].value) : 0;
				const item6 = this.thirdSquareDataSeven && this.thirdSquareDataSeven[5] && this.thirdSquareDataSeven[5].value ? parseFloat(this.thirdSquareDataSeven[5].value) : 0;
				let sum = item1 + item2 + item3 + item4 + item5 + item6;

				return sum;
			},
			thirdSquareSumColumnEight() {
				const item1 = this.thirdSquareDataEight && this.thirdSquareDataEight[0] && this.thirdSquareDataEight[0].value ? parseFloat(this.thirdSquareDataEight[0].value) : 0;
				const item2 = this.thirdSquareDataEight && this.thirdSquareDataEight[1] && this.thirdSquareDataEight[1].value ? parseFloat(this.thirdSquareDataEight[1].value) : 0;
				const item3 = this.thirdSquareDataEight && this.thirdSquareDataEight[2] && this.thirdSquareDataEight[2].value ? parseFloat(this.thirdSquareDataEight[2].value) : 0;
				const item4 = this.thirdSquareDataEight && this.thirdSquareDataEight[3] && this.thirdSquareDataEight[3].value ? parseFloat(this.thirdSquareDataEight[3].value) : 0;
				const item5 = this.thirdSquareDataEight && this.thirdSquareDataEight[4] && this.thirdSquareDataEight[4].value ? parseFloat(this.thirdSquareDataEight[4].value) : 0;
				const item6 = this.thirdSquareDataEight && this.thirdSquareDataEight[5] && this.thirdSquareDataEight[5].value ? parseFloat(this.thirdSquareDataEight[5].value) : 0;
				let sum = item1 + item2 + item3 + item4 + item5 + item6;

				return sum;
			},
			thirdSquareSumColumnNine() {
				const item1 = this.thirdSquareDataNine && this.thirdSquareDataNine[0] && this.thirdSquareDataNine[0].value ? parseFloat(this.thirdSquareDataNine[0].value) : 0;
				const item2 = this.thirdSquareDataNine && this.thirdSquareDataNine[1] && this.thirdSquareDataNine[1].value ? parseFloat(this.thirdSquareDataNine[1].value) : 0;
				const item3 = this.thirdSquareDataNine && this.thirdSquareDataNine[2] && this.thirdSquareDataNine[2].value ? parseFloat(this.thirdSquareDataNine[2].value) : 0;
				const item4 = this.thirdSquareDataNine && this.thirdSquareDataNine[3] && this.thirdSquareDataNine[3].value ? parseFloat(this.thirdSquareDataNine[3].value) : 0;
				const item5 = this.thirdSquareDataNine && this.thirdSquareDataNine[4] && this.thirdSquareDataNine[4].value ? parseFloat(this.thirdSquareDataNine[4].value) : 0;
				const item6 = this.thirdSquareDataNine && this.thirdSquareDataNine[5] && this.thirdSquareDataNine[5].value ? parseFloat(this.thirdSquareDataNine[5].value) : 0;
				let sum = item1 + item2 + item3 + item4 + item5 + item6;

				return sum;
			},
			thirdSquareSumColumnTen() {
				const item1 = this.thirdSquareDataTen && this.thirdSquareDataTen[0] && this.thirdSquareDataTen[0].value ? parseFloat(this.thirdSquareDataTen[0].value) : 0;
				const item2 = this.thirdSquareDataTen && this.thirdSquareDataTen[1] && this.thirdSquareDataTen[1].value ? parseFloat(this.thirdSquareDataTen[1].value) : 0;
				const item3 = this.thirdSquareDataTen && this.thirdSquareDataTen[2] && this.thirdSquareDataTen[2].value ? parseFloat(this.thirdSquareDataTen[2].value) : 0;
				const item4 = this.thirdSquareDataTen && this.thirdSquareDataTen[3] && this.thirdSquareDataTen[3].value ? parseFloat(this.thirdSquareDataTen[3].value) : 0;
				const item5 = this.thirdSquareDataTen && this.thirdSquareDataTen[4] && this.thirdSquareDataTen[4].value ? parseFloat(this.thirdSquareDataTen[4].value) : 0;
				const item6 = this.thirdSquareDataTen && this.thirdSquareDataTen[5] && this.thirdSquareDataTen[5].value ? parseFloat(this.thirdSquareDataTen[5].value) : 0;
				let sum = item1 + item2 + item3 + item4 + item5 + item6;

				return sum;
			},
		},
		watch: {
			thirdSquareSumColumnFive: {
				handler() {
					this.$parent.thirdSquareSumColFive = this.thirdSquareSumColumnFive;
				}
			},
			thirdSquareSumColumnSix: {
				handler() {
					this.$parent.thirdSquareSumColSix = this.thirdSquareSumColumnSix;
				}
			},
			thirdSquareSumColumnSeven: {
				handler() {
					this.$parent.thirdSquareSumColSeven = this.thirdSquareSumColumnSeven;
				}
			},
			thirdSquareSumColumnEight: {
				handler() {
					this.$parent.thirdSquareSumColEight = this.thirdSquareSumColumnEight;
				}
			},
			thirdSquareSumColumnNine: {
				handler() {
					this.$parent.thirdSquareSumColNine = this.thirdSquareSumColumnNine;
				}
			},
			thirdSquareSumColumnTen: {
				handler() {
					this.$parent.thirdSquareSumColTen = this.thirdSquareSumColumnTen;
				}
			},
		}
	}
</script>