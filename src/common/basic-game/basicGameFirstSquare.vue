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
			<div v-if="game && game === 'large-game'" class="field blue">S</div>
			<div v-else class="field blue">SUM</div>
		</div>
		<div class="column-1">
			<div class="field blue">
				<img src="../../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
			</div>
			<template v-for="(item, idx) in basicGameFirstSquareData['column-1']">
				<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue result">{{ firstSquareSumColOne }}</div>
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
			<div class="field blue result">{{ firstSquareSumColTwo }}</div>
		</div>
		<div class="column-3">
			<div class="field blue">
				<img src="../../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
			</div>
			<template v-for="(item, idx) in basicGameFirstSquareData['column-3']">
				<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue result">{{ firstSquareSumColThree }}</div>
		</div>
		<div class="column-4">
			<div class="field blue">N</div>
			<template v-for="(item, idx) in basicGameFirstSquareData['column-4']">
				<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
					<input type="hidden" v-model="item.value" />
					{{ item.value }}
				</div>
			</template>
			<div class="field blue result">{{ firstSquareSumColFour }}</div>
		</div>

		<firstSquareModal :basicGameFirstSquareData="basicGameFirstSquareData" :showModal="showModal"></firstSquareModal>
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
			}
		},
		data() {
			return {
				showModal: false
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
		},
		watch: {
			firstSquareSumTotal: {
				handler() {
					this.$bus.$emit('basic-game-first-square-sum-total', this.firstSquareSumTotal);
				}
			},
		},
		components: {
			firstSquareModal
		}
	}
</script>