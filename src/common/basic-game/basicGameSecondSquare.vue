<template>
    <section  class="basic-game-second-suare">
        <div class="column-0">
				<div class="field smaller">MAX</div>
				<div class="field smaller">MIN</div>
				<div v-if="game === 'large-game'" class="field" :class="$parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor">S</div>
				<div v-else class="field" :class="$parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor">SUM</div>
			</div>
			<div class="column-1">
				<template v-for="item in basicGameSecondSquareData['column-1']">
					<!-- <div class="field" :class="item.class" :id="item.id" :key="item.id" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled">
						<input type="number" v-model="item.value" @blur="numberFocused = true" @focus="numberFocused = false" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled" />
					</div> -->
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
						{{ item.value }}
					</div>
				</template>
				<div class="field result" :class="$parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor">{{ secondSquareSumColOne }}</div>
			</div>
			<div class="column-2">
				<template v-for="item in basicGameSecondSquareData['column-2']">
					<!-- <div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div> -->
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
						{{ item.value }}
					</div>
				</template>
				<div class="field result" :class="$parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor">{{ secondSquareSumColTwo }}</div>
			</div>
			<div class="column-3">
				<template v-for="item in basicGameSecondSquareData['column-3']">
					<!-- <div class="field" :class="item.class" :id="item.id" :key="item.id" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled">
						<input type="number" v-model="item.value" @blur="numberFocused = true" @focus="numberFocused = false" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns && numberFocused || item.disabled" />
					</div> -->
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
						{{ item.value }}
					</div>
				</template>
				<div class="field result" :class="$parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor">{{ secondSquareSumColThree }}</div>
			</div>
			<div class="column-4">
				<template v-for="item in basicGameSecondSquareData['column-4']">
					<!-- <div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div> -->
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns || item.disabled" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
						{{ item.value }}
					</div>
				</template>
				<div class="field result" :class="$parent.$attrs.themeColor || $parent.$parent.$attrs.themeColor">{{ secondSquareSumColFour }}</div>
			</div>

			<secondSquareModal :basicGameSecondSquareData="basicGameSecondSquareData" :showModal="showModal" :disabledAllBtns="disabledAllBtns"></secondSquareModal>
    </section>
</template>

<script>
	import secondSquareModal from '../../components/modals/secondSquareModal.vue';

    export default {
        name: 'BasicGameSecondSquare',
        props: {
			basicGameSecondSquareData: {
				type: Object,
				required: true,
			},
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
			}
		},
		data() {
			return {
				showModal: false,
				numberFocused: false
			}
		},
        methods: {
            secondSquareSumPerCol(col) {
				const item1 = this.basicGameFirstSquareData[`column-${col}`][0] && this.basicGameFirstSquareData[`column-${col}`][0].value ? parseFloat(this.basicGameFirstSquareData[`column-${col}`][0].value) : 0;
				const max = this.basicGameSecondSquareData[`column-${col}`][0] && this.basicGameSecondSquareData[`column-${col}`][0].value ? parseFloat(this.basicGameSecondSquareData[`column-${col}`][0].value) : 0;
				const min = this.basicGameSecondSquareData[`column-${col}`][1] && this.basicGameSecondSquareData[`column-${col}`][1].value ? parseFloat(this.basicGameSecondSquareData[`column-${col}`][1].value) : 0;
				let filledAllFields = this.basicGameFirstSquareData[`column-${col}`][0] && this.basicGameFirstSquareData[`column-${col}`][0].value && this.basicGameSecondSquareData[`column-${col}`][0] && this.basicGameSecondSquareData[`column-${col}`][0].value && this.basicGameSecondSquareData[`column-${col}`][1] && this.basicGameSecondSquareData[`column-${col}`][1].value;

				let sum = filledAllFields ? (max - min) * item1 : 0;

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
            secondSquareSumColOne() {
				return this.secondSquareSumPerCol(1);
			},
			secondSquareSumColTwo() {
				return this.secondSquareSumPerCol(2);
			},
			secondSquareSumColThree() {
				return this.secondSquareSumPerCol(3);
			},
			secondSquareSumColFour() {
				return this.secondSquareSumPerCol(4);
			},
			secondSquareSumTotal() {
				return this.secondSquareSumColOne + this.secondSquareSumColTwo + this.secondSquareSumColThree + this.secondSquareSumColFour;
			},
        },
        watch: {
			secondSquareSumTotal: {
				handler() {
					this.$bus.$emit('basic-game-second-square-sum-total', this.secondSquareSumTotal);
				}
			},
			numberFocused: {
				handler(newVal) {
					if (newVal)
						this.$parent.disabledAllBtns = true;
				}
			}
		},
		components: {
			secondSquareModal
		}
    }
</script>