<template>
	<div :class="numOfColumn" class="single-column">
		<template v-if="column === 5">
			<template v-for="(item, idx) in secondSquareDataFive">
				<div v-if="nameOfColumn === 'M'" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.max }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.min }}
					</template>
				</div>
				<!-- <div v-else class="field" :class="item.class" :id="item.id" :key="item.id" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled">
					<input type="number" v-model="item.value" @blur="numberFocused = true" @focus="numberFocused = false" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled" />
				</div> -->
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ secondSquareForMaxSum }}
				</template>
				<template v-else>
					{{ secondSquareSumColumnFive }}
				</template>
			</div>
		</template>
		<template v-else-if="column === 6">
			<template v-for="(item, idx) in secondSquareDataSix">
				<div v-if="nameOfColumn === 'M'" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.max }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.min }}
					</template>
				</div>
				<!-- <div v-else class="field" :class="item.class" :id="item.id" :key="item.id" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled">
					<input type="number" v-model="item.value" @blur="numberFocused = true" @focus="numberFocused = false" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled" />
				</div> -->
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ secondSquareForMaxSum }}
				</template>
				<template v-else>
					{{ secondSquareSumColumnSix }}
				</template>
			</div>
		</template>
		<template v-else-if="column === 7">
			<template v-for="(item, idx) in secondSquareDataSeven">
				<div v-if="nameOfColumn === 'M'" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.max }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.min }}
					</template>
				</div>
				<!-- <div v-else class="field" :class="item.class" :id="item.id" :key="item.id" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled">
					<input type="number" v-model="item.value" @blur="numberFocused = true" @focus="numberFocused = false" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled" />
				</div> -->
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ secondSquareForMaxSum }}
				</template>
				<template v-else>
					{{ secondSquareSumColumnSeven }}
				</template>
			</div>
		</template>
		<template v-else-if="column === 8">
			<template v-for="(item, idx) in secondSquareDataEight">
				<div v-if="nameOfColumn === 'M'" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.max }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.min }}
					</template>
				</div>
				<!-- <div v-else class="field" :class="item.class" :id="item.id" :key="item.id" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled">
					<input type="number" v-model="item.value" @blur="numberFocused = true" @focus="numberFocused = false" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled" />
				</div> -->
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ secondSquareForMaxSum }}
				</template>
				<template v-else>
					{{ secondSquareSumColumnEight }}
				</template>
			</div>
		</template>
		<template v-else-if="column === 9">
			<template v-for="(item, idx) in secondSquareDataNine">
				<div v-if="nameOfColumn === 'M'" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.max }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.min }}
					</template>
				</div>
				<!-- <div v-else class="field" :class="item.class" :id="item.id" :key="item.id" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled">
					<input type="number" v-model="item.value" @blur="numberFocused = true" @focus="numberFocused = false" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled" />
				</div> -->
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ secondSquareForMaxSum }}
				</template>
				<template v-else>
					{{ secondSquareSumColumnNine }}
				</template>
			</div>
		</template>
		<template v-else-if="column === 10">
			<template v-for="(item, idx) in secondSquareDataTen">
				<div v-if="nameOfColumn === 'M'" :key="idx" class="field" :class="item.class" :disabled="nameOfColumn === 'M'">
					<template v-if="idx === 0">
						{{ dataForMax.max }}
					</template>
					<template v-else-if="idx === 1">
						{{ dataForMax.min }}
					</template>
				</div>
				<!-- <div v-else class="field" :class="item.class" :id="item.id" :key="item.id" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled">
					<input type="number" v-model="item.value" @blur="numberFocused = true" @focus="numberFocused = false" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled" />
				</div> -->
				<div v-else class="field" @click="$parent.openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled, toMiddle ? 'toMiddle' : fromMiddle ? 'fromMiddle' : nameOfColumn === 'O' ? 'odjava' : '')" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue" :class="{'result': smallFont}">
				<template v-if="nameOfColumn === 'M'">
					{{ secondSquareForMaxSum }}
				</template>
				<template v-else>
					{{ secondSquareSumColumnTen }}
				</template>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'SingleColumnSecondSquare',
		props: {
			column: {
				type: Number,
				require: true
			},
			secondSquareDataFive: {
				type: Array,
				require: false
			},
			secondSquareDataSix: {
				type: Array,
				require: false
			},
			secondSquareDataSeven: {
				type: Array,
				require: false
			},
			secondSquareDataEight: {
				type: Array,
				require: false
			},
			secondSquareDataNine: {
				type: Array,
				require: false
			},
			secondSquareDataTen: {
				type: Array,
				require: false
			},
			firstSquareOneVal: {
				type: Object,
				require: false
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
			secondSquareForMaxSum: {
				type: Number,
				require: false,
				default: 0
			},
			disabledAllBtns: {
				type: Boolean,
				required: true
			},
		},
		data() {
			return {
				numberFocused: false
			}
		},
		computed: {
			numOfColumn() {
				let toMiddleClass = this.toMiddle ? 'to-middle-flag' : '';
				let fromMiddleClass = this.fromMiddle ? 'from-middle-flag' : '';
				return `column-${this.column} ${toMiddleClass} ${fromMiddleClass}`;
			},
			secondSquareSumColumnFive() {
				const item1 = this.firstSquareOneVal && this.firstSquareOneVal.value ? parseFloat(this.firstSquareOneVal.value) : 0;
				const max = this.secondSquareDataFive && this.secondSquareDataFive[0] && this.secondSquareDataFive[0].value ? parseFloat(this.secondSquareDataFive[0].value) : 0;
				const min = this.secondSquareDataFive && this.secondSquareDataFive[1] && this.secondSquareDataFive[1].value ? parseFloat(this.secondSquareDataFive[1].value) : 0;
				let filledAllFields = this.firstSquareOneVal && this.firstSquareOneVal.value && this.secondSquareDataFive && this.secondSquareDataFive[0] && this.secondSquareDataFive[0].value && this.secondSquareDataFive[1] && this.secondSquareDataFive[1].value;

				let sum = filledAllFields ? (max - min) * item1 : 0;

				return sum;
			},
			secondSquareSumColumnSix() {
				const item1 = this.firstSquareOneVal && this.firstSquareOneVal.value ? parseFloat(this.firstSquareOneVal.value) : 0;
				const max = this.secondSquareDataSix && this.secondSquareDataSix[0] && this.secondSquareDataSix[0].value ? parseFloat(this.secondSquareDataSix[0].value) : 0;
				const min = this.secondSquareDataSix && this.secondSquareDataSix[1] && this.secondSquareDataSix[1].value ? parseFloat(this.secondSquareDataSix[1].value) : 0;
				let filledAllFields = this.firstSquareOneVal && this.firstSquareOneVal.value && this.secondSquareDataSix && this.secondSquareDataSix[0] && this.secondSquareDataSix[0].value && this.secondSquareDataSix[1] && this.secondSquareDataSix[1].value;

				let sum = filledAllFields ? (max - min) * item1 : 0;

				return sum;
			},
			secondSquareSumColumnSeven() {
				const item1 = this.firstSquareOneVal && this.firstSquareOneVal.value ? parseFloat(this.firstSquareOneVal.value) : 0;
				const max = this.secondSquareDataSeven && this.secondSquareDataSeven[0] && this.secondSquareDataSeven[0].value ? parseFloat(this.secondSquareDataSeven[0].value) : 0;
				const min = this.secondSquareDataSeven && this.secondSquareDataSeven[1] && this.secondSquareDataSeven[1].value ? parseFloat(this.secondSquareDataSeven[1].value) : 0;
				let filledAllFields = this.firstSquareOneVal && this.firstSquareOneVal.value && this.secondSquareDataSeven && this.secondSquareDataSeven[0] && this.secondSquareDataSeven[0].value && this.secondSquareDataSeven[1] && this.secondSquareDataSeven[1].value;

				let sum = filledAllFields ? (max - min) * item1 : 0;

				return sum;
			},
			secondSquareSumColumnEight() {
				const item1 = this.firstSquareOneVal && this.firstSquareOneVal.value ? parseFloat(this.firstSquareOneVal.value) : 0;
				const max = this.secondSquareDataEight && this.secondSquareDataEight[0] && this.secondSquareDataEight[0].value ? parseFloat(this.secondSquareDataEight[0].value) : 0;
				const min = this.secondSquareDataEight && this.secondSquareDataEight[1] && this.secondSquareDataEight[1].value ? parseFloat(this.secondSquareDataEight[1].value) : 0;
				let filledAllFields = this.firstSquareOneVal && this.firstSquareOneVal.value && this.secondSquareDataEight && this.secondSquareDataEight[0] && this.secondSquareDataEight[0].value && this.secondSquareDataEight[1] && this.secondSquareDataEight[1].value;

				let sum = filledAllFields ? (max - min) * item1 : 0;

				return sum;
			},
			secondSquareSumColumnNine() {
				const item1 = this.firstSquareOneVal && this.firstSquareOneVal.value ? parseFloat(this.firstSquareOneVal.value) : 0;
				const max = this.secondSquareDataNine && this.secondSquareDataNine[0] && this.secondSquareDataNine[0].value ? parseFloat(this.secondSquareDataNine[0].value) : 0;
				const min = this.secondSquareDataNine && this.secondSquareDataNine[1] && this.secondSquareDataNine[1].value ? parseFloat(this.secondSquareDataNine[1].value) : 0;
				let filledAllFields = this.firstSquareOneVal && this.firstSquareOneVal.value && this.secondSquareDataNine && this.secondSquareDataNine[0] && this.secondSquareDataNine[0].value && this.secondSquareDataNine[1] && this.secondSquareDataNine[1].value;

				let sum = filledAllFields ? (max - min) * item1 : 0;

				return sum;
			},
			secondSquareSumColumnTen() {
				const item1 = this.firstSquareOneVal && this.firstSquareOneVal.value ? parseFloat(this.firstSquareOneVal.value) : 0;
				const max = this.secondSquareDataTen && this.secondSquareDataTen[0] && this.secondSquareDataTen[0].value ? parseFloat(this.secondSquareDataTen[0].value) : 0;
				const min = this.secondSquareDataTen && this.secondSquareDataTen[1] && this.secondSquareDataTen[1].value ? parseFloat(this.secondSquareDataTen[1].value) : 0;
				let filledAllFields = this.firstSquareOneVal && this.firstSquareOneVal.value && this.secondSquareDataTen && this.secondSquareDataTen[0] && this.secondSquareDataTen[0].value && this.secondSquareDataTen[1] && this.secondSquareDataTen[1].value;

				let sum = filledAllFields ? (max - min) * item1 : 0;

				return sum;
			},
		},
		watch: {
			numberFocused: {
				handler(newVal) {
					if (newVal)
						this.$parent.disabledAllBtns = true;
				}
			},
			secondSquareSumColumnFive: {
				handler() {
					this.$parent.secondSquareSumColFive = this.secondSquareSumColumnFive;
				}
			},
			secondSquareSumColumnSix: {
				handler() {
					this.$parent.secondSquareSumColSix = this.secondSquareSumColumnSix;
				}
			},
			secondSquareSumColumnSeven: {
				handler() {
					this.$parent.secondSquareSumColSeven = this.secondSquareSumColumnSeven;
				}
			},
			secondSquareSumColumnEight: {
				handler() {
					this.$parent.secondSquareSumColEight = this.secondSquareSumColumnEight;
				}
			},
			secondSquareSumColumnNine: {
				handler() {
					this.$parent.secondSquareSumColNine = this.secondSquareSumColumnNine;
				}
			},
			secondSquareSumColumnTen: {
				handler() {
					this.$parent.secondSquareSumColTen = this.secondSquareSumColumnTen;
				}
			},
		}
	}
</script>