<template>
    <section class="basic-game-third-suare">
        <div class="column-0">
                <template v-if="game && game === 'large-game'">
                    <div class="field">K</div>
                    <div class="field">T</div>
                    <div class="field">F</div>
                    <div class="field">P</div>
                    <div class="field">Y</div>
                    <div class="field blue">S</div>
                </template>
                <template v-else>
                    <div class="field">KENTA</div>
                    <div class="field">TRILING</div>
                    <div class="field">FUL</div>
                    <div class="field">POKER</div>
                    <div class="field">YAMB</div>
                    <div class="field blue">SUM</div>
                </template>
			</div>
			<div class="column-1">
				<template v-for="item in basicGameThirdSquareData['column-1']">
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
						{{ item.value }}
					</div>
				</template>
				<div class="field blue result">{{ thirdSquareSumColOne }}</div>
			</div>
			<div class="column-2">
				<template v-for="item in basicGameThirdSquareData['column-2']">
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
						{{ item.value }}
					</div>
				</template>
				<div class="field blue result">{{ thirdSquareSumColTwo }}</div>
			</div>
			<div class="column-3">
				<template v-for="item in basicGameThirdSquareData['column-3']">
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
						{{ item.value }}
					</div>
				</template>
				<div class="field blue result">{{ thirdSquareSumColThree }}</div>
			</div>
			<div class="column-4">
				<template v-for="item in basicGameThirdSquareData['column-4']">
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
						{{ item.value }}
					</div>
				</template>
				<div class="field blue result">{{ thirdSquareSumColFour }}</div>
			</div>

            <thirdSquareModal :basicGameThirdSquareData="basicGameThirdSquareData" :showModal="showModal" :firstFulRowDisabled="firstFulRowDisabled" :secondFulRowDisabled="secondFulRowDisabled" :disabledNumber="disabledNumber"></thirdSquareModal>
    </section>
</template>

<script>
    import thirdSquareModal from '../../components/modals/thirdSquareModal.vue';

    export default {
        name: 'BasicGameThirdSquare',
        props: {
			basicGameThirdSquareData: {
				type: Object,
				required: true,
			},
			disabledAllBtns: {
				type: Boolean,
				required: true
			},
			game: {
				type: String,
				require: false,
                default: ''
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
            }
		},
        data() {
			return {
				showModal: false
			}
		},
        methods: {
            thirdSquareSumPerCol(col) {
				const item1 = this.basicGameThirdSquareData[`column-${col}`][0] && this.basicGameThirdSquareData[`column-${col}`][0].value ? parseFloat(this.basicGameThirdSquareData[`column-${col}`][0].value) : 0;
				const item2 = this.basicGameThirdSquareData[`column-${col}`][1] && this.basicGameThirdSquareData[`column-${col}`][1].value ? parseFloat(this.basicGameThirdSquareData[`column-${col}`][1].value) : 0;
				const item3 = this.basicGameThirdSquareData[`column-${col}`][2] && this.basicGameThirdSquareData[`column-${col}`][2].value ? parseFloat(this.basicGameThirdSquareData[`column-${col}`][2].value) : 0;
				const item4 = this.basicGameThirdSquareData[`column-${col}`][3] && this.basicGameThirdSquareData[`column-${col}`][3].value ? parseFloat(this.basicGameThirdSquareData[`column-${col}`][3].value) : 0;
				const item5 = this.basicGameThirdSquareData[`column-${col}`][4] && this.basicGameThirdSquareData[`column-${col}`][4].value ? parseFloat(this.basicGameThirdSquareData[`column-${col}`][4].value) : 0;
				const item6 = this.basicGameThirdSquareData[`column-${col}`][5] && this.basicGameThirdSquareData[`column-${col}`][5].value ? parseFloat(this.basicGameThirdSquareData[`column-${col}`][5].value) : 0;
				let sum = item1 + item2 + item3 + item4 + item5 + item6;

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
            thirdSquareSumColOne() {
				return this.thirdSquareSumPerCol(1);
			},
			thirdSquareSumColTwo() {
				return this.thirdSquareSumPerCol(2);
			},
			thirdSquareSumColThree() {
				return this.thirdSquareSumPerCol(3);
			},
			thirdSquareSumColFour() {
				return this.thirdSquareSumPerCol(4);
			},
			thirdSquareSumTotal() {
				return this.thirdSquareSumColOne + this.thirdSquareSumColTwo + this.thirdSquareSumColThree + this.thirdSquareSumColFour;
			},
        },
        watch: {
			thirdSquareSumTotal: {
				handler() {
					this.$bus.$emit('basic-game-third-square-sum-total', this.thirdSquareSumTotal);
				}
			},
		},
        components: {
            thirdSquareModal
		}
    }
</script>