<template>
    <section class="medium-game">
        <div class="first-square">
			<div class="column-0">
				<div class="field blue">YAMB</div>
				<div class="field">1</div>
				<div class="field">2</div>
				<div class="field">3</div>
				<div class="field">4</div>
				<div class="field">5</div>
				<div class="field">6</div>
				<div class="field blue">SUM</div>
			</div>
			<div class="column-1">
				<div class="field blue">
					<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
				</div>
				<template v-for="(item, idx) in firstSquareItems['column-1']">
					<div class="field" v-if="idx !== 6" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ firstSquareSumColOne }}</div>
			</div>
			<div class="column-2">
				<div class="field blue">
					<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
					<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
				</div>
				<template v-for="(item, idx) in firstSquareItems['column-2']">
					<div class="field" v-if="idx !== 6" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ firstSquareSumColTwo }}</div>
			</div>
			<div class="column-3">
				<div class="field blue">
					<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
				</div>
				<template v-for="(item, idx) in firstSquareItems['column-3']">
					<div class="field" v-if="idx !== 6" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ firstSquareSumColThree }}</div>
			</div>
			<div class="column-4">
				<div class="field blue">N</div>
				<template v-for="(item, idx) in firstSquareItems['column-4']">
					<div class="field" v-if="idx !== 6" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ firstSquareSumColFour }}</div>
			</div>
            <div class="column-5">
				<div class="field blue">R</div>
				<template v-for="(item, idx) in firstSquareItems['column-5']">
					<div class="field" v-if="idx !== 6" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ firstSquareSumColFive }}</div>
			</div>
            <div class="column-6">
				<div class="field blue to-middle">
                    <img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
                    <div class="divider"></div>
					<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
                </div>
				<template v-for="(item, idx) in firstSquareItems['column-6']">
					<div class="field" v-if="idx !== 6" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ firstSquareSumColSix }}</div>
			</div>
            <div class="column-7">
				<div class="field blue from-middle">
					<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
                    <div class="divider"></div>
                    <img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
                </div>
				<template v-for="(item, idx) in firstSquareItems['column-7']">
					<div class="field" v-if="idx !== 6" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ firstSquareSumColSeven }}</div>
			</div>
			<div class="column-8">
				<div class="field blue">YAMB</div>
				<div class="field large"></div>
				<div class="field blue">{{ firstSquareSumTotal }}</div>
			</div>
		</div>
		<div class="second-square">
			<div class="column-0">
				<div class="field">MAX</div>
				<div class="field">MIN</div>
				<div class="field blue">SUM</div>
			</div>
			<div class="column-1">
				<template v-for="item in secondSquareItems['column-1']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ secondSquareSumColOne }}</div>
			</div>
			<div class="column-2">
				<template v-for="item in secondSquareItems['column-2']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ secondSquareSumColTwo }}</div>
			</div>
			<div class="column-3">
				<template v-for="item in secondSquareItems['column-3']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ secondSquareSumColThree }}</div>
			</div>
			<div class="column-4">
				<template v-for="item in secondSquareItems['column-4']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ secondSquareSumColFour }}</div>
			</div>
            <div class="column-5">
				<template v-for="item in secondSquareItems['column-5']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ secondSquareSumColFive }}</div>
			</div>
            <div class="column-6">
				<template v-for="item in secondSquareItems['column-6']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ secondSquareSumColSix }}</div>
			</div>
            <div class="column-7">
				<template v-for="item in secondSquareItems['column-7']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ secondSquareSumColSeven }}</div>
			</div>
			<div class="column-8">
				<div class="field large"></div>
				<div class="field blue">{{ secondSquareSumTotal }}</div>
			</div>
		</div>
		<div class="third-square">
			<div class="column-0">
				<div class="field">KENTA</div>
				<div class="field">TRILING</div>
				<div class="field">FUL</div>
				<div class="field">POKER</div>
				<div class="field">YAMB</div>
				<div class="field blue">SUM</div>
			</div>
			<div class="column-1">
				<template v-for="item in thirdSquareItems['column-1']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue" ref="third-1">{{ thirdSquareSumColOne }}</div>
			</div>
			<div class="column-2">
				<template v-for="item in thirdSquareItems['column-2']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ thirdSquareSumColTwo }}</div>
			</div>
			<div class="column-3">
				<template v-for="item in thirdSquareItems['column-3']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ thirdSquareSumColThree }}</div>
			</div>
			<div class="column-4">
				<template v-for="item in thirdSquareItems['column-4']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ thirdSquareSumColFour }}</div>
			</div>
            <div class="column-5">
				<template v-for="item in thirdSquareItems['column-5']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ thirdSquareSumColFive }}</div>
			</div>
            <div class="column-6">
				<template v-for="item in thirdSquareItems['column-6']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ thirdSquareSumColSix }}</div>
			</div>
            <div class="column-7">
				<template v-for="item in thirdSquareItems['column-7']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ thirdSquareSumColSeven }}</div>
			</div>
			<div class="column-8">
				<div class="field large">
					<p class="total">TOTAL:</p>
					<div class="total-field">
						{{ firstSquareSumTotal + secondSquareSumTotal + thirdSquareSumTotal }}
					</div>
				</div>
				<div class="field blue">{{ thirdSquareSumTotal }}</div>
			</div>
		</div>
    </section>
</template>

<script>
    export default {
        name: "MediumGame",
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
                },
                secondSquareItems: {
                    'column-1': [],
                    'column-2': [],
                    'column-3': [],
                    'column-4': [],
                    'column-5': [],
                    'column-6': [],
                    'column-7': [],
                },
                thirdSquareItems: {
                    'column-1': [],
                    'column-2': [],
                    'column-3': [],
                    'column-4': [],
                    'column-5': [],
                    'column-6': [],
                    'column-7': [],
                },
            }
        },
        mounted() {
            this.getFirstSquare();
            this.getSecondSquare();
            this.getThirdSquare();
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
                    this.firstSquareItems['column-1'].push(item1);
                    this.firstSquareItems['column-2'].push(item2);
                    this.firstSquareItems['column-3'].push(item3);
                    this.firstSquareItems['column-4'].push(item4);
                    this.firstSquareItems['column-5'].push(item5);
                    this.firstSquareItems['column-6'].push(item6);
                    this.firstSquareItems['column-7'].push(item7);
                }
                this.firstSquareItems['column-1'].push(sumOfFirstCol);
                this.firstSquareItems['column-2'].push(sumOfSecondCol);
                this.firstSquareItems['column-3'].push(sumOfThirdCol);
                this.firstSquareItems['column-4'].push(sumOfFourthCol);
                this.firstSquareItems['column-5'].push(sumOfFifththCol);
                this.firstSquareItems['column-6'].push(sumOfSixthCol);
                this.firstSquareItems['column-7'].push(sumOfSeventhCol);

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

                    this.secondSquareItems['column-1'].push(item1);
                    this.secondSquareItems['column-2'].push(item2);
                    this.secondSquareItems['column-3'].push(item3);
                    this.secondSquareItems['column-4'].push(item4);
                    this.secondSquareItems['column-5'].push(item5);
                    this.secondSquareItems['column-6'].push(item6);
                    this.secondSquareItems['column-7'].push(item7);
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

                    this.thirdSquareItems['column-1'].push(item1);
                    this.thirdSquareItems['column-2'].push(item2);
                    this.thirdSquareItems['column-3'].push(item3);
                    this.thirdSquareItems['column-4'].push(item4);
                    this.thirdSquareItems['column-5'].push(item5);
                    this.thirdSquareItems['column-6'].push(item6);
                    this.thirdSquareItems['column-7'].push(item7);
                }
            },
        },
        computed: {
            firstSquareSumColOne() {
                const item1 = this.firstSquareItems['column-1'][0] && this.firstSquareItems['column-1'][0].value ? parseFloat(this.firstSquareItems['column-1'][0].value) : 0;
                const item2 = this.firstSquareItems['column-1'][1] && this.firstSquareItems['column-1'][1].value ? parseFloat(this.firstSquareItems['column-1'][1].value) : 0;
                const item3 = this.firstSquareItems['column-1'][2] && this.firstSquareItems['column-1'][2].value ? parseFloat(this.firstSquareItems['column-1'][2].value) : 0;
                const item4 = this.firstSquareItems['column-1'][3] && this.firstSquareItems['column-1'][3].value ? parseFloat(this.firstSquareItems['column-1'][3].value) : 0;
                const item5 = this.firstSquareItems['column-1'][4] && this.firstSquareItems['column-1'][4].value ? parseFloat(this.firstSquareItems['column-1'][4].value) : 0;
                const item6 = this.firstSquareItems['column-1'][5] && this.firstSquareItems['column-1'][5].value ? parseFloat(this.firstSquareItems['column-1'][5].value) : 0;
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
            firstSquareSumColTwo() {
                const item1 = this.firstSquareItems['column-2'][0] && this.firstSquareItems['column-2'][0].value ? parseFloat(this.firstSquareItems['column-2'][0].value) : 0;
                const item2 = this.firstSquareItems['column-2'][1] && this.firstSquareItems['column-2'][1].value ? parseFloat(this.firstSquareItems['column-2'][1].value) : 0;
                const item3 = this.firstSquareItems['column-2'][2] && this.firstSquareItems['column-2'][2].value ? parseFloat(this.firstSquareItems['column-2'][2].value) : 0;
                const item4 = this.firstSquareItems['column-2'][3] && this.firstSquareItems['column-2'][3].value ? parseFloat(this.firstSquareItems['column-2'][3].value) : 0;
                const item5 = this.firstSquareItems['column-2'][4] && this.firstSquareItems['column-2'][4].value ? parseFloat(this.firstSquareItems['column-2'][4].value) : 0;
                const item6 = this.firstSquareItems['column-2'][5] && this.firstSquareItems['column-2'][5].value ? parseFloat(this.firstSquareItems['column-2'][5].value) : 0;
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
            firstSquareSumColThree() {
                const item1 = this.firstSquareItems['column-3'][0] && this.firstSquareItems['column-3'][0].value ? parseFloat(this.firstSquareItems['column-3'][0].value) : 0;
                const item2 = this.firstSquareItems['column-3'][1] && this.firstSquareItems['column-3'][1].value ? parseFloat(this.firstSquareItems['column-3'][1].value) : 0;
                const item3 = this.firstSquareItems['column-3'][2] && this.firstSquareItems['column-3'][2].value ? parseFloat(this.firstSquareItems['column-3'][2].value) : 0;
                const item4 = this.firstSquareItems['column-3'][3] && this.firstSquareItems['column-3'][3].value ? parseFloat(this.firstSquareItems['column-3'][3].value) : 0;
                const item5 = this.firstSquareItems['column-3'][4] && this.firstSquareItems['column-3'][4].value ? parseFloat(this.firstSquareItems['column-3'][4].value) : 0;
                const item6 = this.firstSquareItems['column-3'][5] && this.firstSquareItems['column-3'][5].value ? parseFloat(this.firstSquareItems['column-3'][5].value) : 0;
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
            firstSquareSumColFour() {
                const item1 = this.firstSquareItems['column-4'][0] && this.firstSquareItems['column-4'][0].value ? parseFloat(this.firstSquareItems['column-4'][0].value) : 0;
                const item2 = this.firstSquareItems['column-4'][1] && this.firstSquareItems['column-4'][1].value ? parseFloat(this.firstSquareItems['column-4'][1].value) : 0;
                const item3 = this.firstSquareItems['column-4'][2] && this.firstSquareItems['column-4'][2].value ? parseFloat(this.firstSquareItems['column-4'][2].value) : 0;
                const item4 = this.firstSquareItems['column-4'][3] && this.firstSquareItems['column-4'][3].value ? parseFloat(this.firstSquareItems['column-4'][3].value) : 0;
                const item5 = this.firstSquareItems['column-4'][4] && this.firstSquareItems['column-4'][4].value ? parseFloat(this.firstSquareItems['column-4'][4].value) : 0;
                const item6 = this.firstSquareItems['column-4'][5] && this.firstSquareItems['column-4'][5].value ? parseFloat(this.firstSquareItems['column-4'][5].value) : 0;
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
            firstSquareSumColFive() {
                const item1 = this.firstSquareItems['column-5'][0] && this.firstSquareItems['column-5'][0].value ? parseFloat(this.firstSquareItems['column-5'][0].value) : 0;
                const item2 = this.firstSquareItems['column-5'][1] && this.firstSquareItems['column-5'][1].value ? parseFloat(this.firstSquareItems['column-5'][1].value) : 0;
                const item3 = this.firstSquareItems['column-5'][2] && this.firstSquareItems['column-5'][2].value ? parseFloat(this.firstSquareItems['column-5'][2].value) : 0;
                const item4 = this.firstSquareItems['column-5'][3] && this.firstSquareItems['column-5'][3].value ? parseFloat(this.firstSquareItems['column-5'][3].value) : 0;
                const item5 = this.firstSquareItems['column-5'][4] && this.firstSquareItems['column-5'][4].value ? parseFloat(this.firstSquareItems['column-5'][4].value) : 0;
                const item6 = this.firstSquareItems['column-5'][5] && this.firstSquareItems['column-5'][5].value ? parseFloat(this.firstSquareItems['column-5'][5].value) : 0;
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
            firstSquareSumColSix() {
                const item1 = this.firstSquareItems['column-6'][0] && this.firstSquareItems['column-6'][0].value ? parseFloat(this.firstSquareItems['column-6'][0].value) : 0;
                const item2 = this.firstSquareItems['column-6'][1] && this.firstSquareItems['column-6'][1].value ? parseFloat(this.firstSquareItems['column-6'][1].value) : 0;
                const item3 = this.firstSquareItems['column-6'][2] && this.firstSquareItems['column-6'][2].value ? parseFloat(this.firstSquareItems['column-6'][2].value) : 0;
                const item4 = this.firstSquareItems['column-6'][3] && this.firstSquareItems['column-6'][3].value ? parseFloat(this.firstSquareItems['column-6'][3].value) : 0;
                const item5 = this.firstSquareItems['column-6'][4] && this.firstSquareItems['column-6'][4].value ? parseFloat(this.firstSquareItems['column-6'][4].value) : 0;
                const item6 = this.firstSquareItems['column-6'][5] && this.firstSquareItems['column-6'][5].value ? parseFloat(this.firstSquareItems['column-6'][5].value) : 0;
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
            firstSquareSumColSeven() {
                const item1 = this.firstSquareItems['column-7'][0] && this.firstSquareItems['column-7'][0].value ? parseFloat(this.firstSquareItems['column-7'][0].value) : 0;
                const item2 = this.firstSquareItems['column-7'][1] && this.firstSquareItems['column-7'][1].value ? parseFloat(this.firstSquareItems['column-7'][1].value) : 0;
                const item3 = this.firstSquareItems['column-7'][2] && this.firstSquareItems['column-7'][2].value ? parseFloat(this.firstSquareItems['column-7'][2].value) : 0;
                const item4 = this.firstSquareItems['column-7'][3] && this.firstSquareItems['column-7'][3].value ? parseFloat(this.firstSquareItems['column-7'][3].value) : 0;
                const item5 = this.firstSquareItems['column-7'][4] && this.firstSquareItems['column-7'][4].value ? parseFloat(this.firstSquareItems['column-7'][4].value) : 0;
                const item6 = this.firstSquareItems['column-7'][5] && this.firstSquareItems['column-7'][5].value ? parseFloat(this.firstSquareItems['column-7'][5].value) : 0;
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
            firstSquareSumTotal() {
                return this.firstSquareSumColOne + this.firstSquareSumColTwo + this.firstSquareSumColThree + this.firstSquareSumColFour + this.firstSquareSumColFive + this.firstSquareSumColSix + this.firstSquareSumColSeven;
            },
            secondSquareSumColOne() {
                const item1 = this.firstSquareItems['column-1'][0] && this.firstSquareItems['column-1'][0].value ? parseFloat(this.firstSquareItems['column-1'][0].value) : 0;
                const max = this.secondSquareItems['column-1'][0] && this.secondSquareItems['column-1'][0].value ? parseFloat(this.secondSquareItems['column-1'][0].value) : 0;
                const min = this.secondSquareItems['column-1'][1] && this.secondSquareItems['column-1'][1].value ? parseFloat(this.secondSquareItems['column-1'][1].value) : 0;
                let filledAllFields = this.firstSquareItems['column-1'][0] && this.firstSquareItems['column-1'][0].value && this.secondSquareItems['column-1'][0] && this.secondSquareItems['column-1'][0].value && this.secondSquareItems['column-1'][1] && this.secondSquareItems['column-1'][1].value;

                let sum = filledAllFields ? (max - min) * item1 : 0;

                return sum;
            },
            secondSquareSumColTwo() {
                const item1 = this.firstSquareItems['column-2'][0] && this.firstSquareItems['column-2'][0].value ? parseFloat(this.firstSquareItems['column-2'][0].value) : 0;
                const max = this.secondSquareItems['column-2'][0] && this.secondSquareItems['column-2'][0].value ? parseFloat(this.secondSquareItems['column-2'][0].value) : 0;
                const min = this.secondSquareItems['column-2'][1] && this.secondSquareItems['column-2'][1].value ? parseFloat(this.secondSquareItems['column-2'][1].value) : 0;
                let filledAllFields = this.firstSquareItems['column-2'][0] && this.firstSquareItems['column-2'][0].value && this.secondSquareItems['column-2'][0] && this.secondSquareItems['column-2'][0].value && this.secondSquareItems['column-2'][1] && this.secondSquareItems['column-1'][1].value;

                let sum = filledAllFields ? (max - min) * item1 : 0;

                return sum;
            },
            secondSquareSumColThree() {
                const item1 = this.firstSquareItems['column-3'][0] && this.firstSquareItems['column-3'][0].value ? parseFloat(this.firstSquareItems['column-3'][0].value) : 0;
                const max = this.secondSquareItems['column-3'][0] && this.secondSquareItems['column-3'][0].value ? parseFloat(this.secondSquareItems['column-3'][0].value) : 0;
                const min = this.secondSquareItems['column-3'][1] && this.secondSquareItems['column-3'][1].value ? parseFloat(this.secondSquareItems['column-3'][1].value) : 0;
                let filledAllFields = this.firstSquareItems['column-3'][0] && this.firstSquareItems['column-3'][0].value && this.secondSquareItems['column-3'][0] && this.secondSquareItems['column-3'][0].value && this.secondSquareItems['column-3'][1] && this.secondSquareItems['column-3'][1].value;

                let sum = filledAllFields ? (max - min) * item1 : 0;

                return sum;
            },
            secondSquareSumColFour() {
                const item1 = this.firstSquareItems['column-4'][0] && this.firstSquareItems['column-4'][0].value ? parseFloat(this.firstSquareItems['column-4'][0].value) : 0;
                const max = this.secondSquareItems['column-4'][0] && this.secondSquareItems['column-4'][0].value ? parseFloat(this.secondSquareItems['column-4'][0].value) : 0;
                const min = this.secondSquareItems['column-4'][1] && this.secondSquareItems['column-4'][1].value ? parseFloat(this.secondSquareItems['column-4'][1].value) : 0;
                let filledAllFields = this.firstSquareItems['column-4'][0] && this.firstSquareItems['column-4'][0].value && this.secondSquareItems['column-4'][0] && this.secondSquareItems['column-4'][0].value && this.secondSquareItems['column-4'][1] && this.secondSquareItems['column-4'][1].value;

                let sum = filledAllFields ? (max - min) * item1 : 0;

                return sum;
            },
            secondSquareSumColFive() {
                const item1 = this.firstSquareItems['column-5'][0] && this.firstSquareItems['column-5'][0].value ? parseFloat(this.firstSquareItems['column-5'][0].value) : 0;
                const max = this.secondSquareItems['column-5'][0] && this.secondSquareItems['column-5'][0].value ? parseFloat(this.secondSquareItems['column-5'][0].value) : 0;
                const min = this.secondSquareItems['column-5'][1] && this.secondSquareItems['column-5'][1].value ? parseFloat(this.secondSquareItems['column-5'][1].value) : 0;
                let filledAllFields = this.firstSquareItems['column-5'][0] && this.firstSquareItems['column-5'][0].value && this.secondSquareItems['column-5'][0] && this.secondSquareItems['column-5'][0].value && this.secondSquareItems['column-5'][1] && this.secondSquareItems['column-5'][1].value;

                let sum = filledAllFields ? (max - min) * item1 : 0;

                return sum;
            },
            secondSquareSumColSix() {
                const item1 = this.firstSquareItems['column-6'][0] && this.firstSquareItems['column-6'][0].value ? parseFloat(this.firstSquareItems['column-6'][0].value) : 0;
                const max = this.secondSquareItems['column-6'][0] && this.secondSquareItems['column-6'][0].value ? parseFloat(this.secondSquareItems['column-6'][0].value) : 0;
                const min = this.secondSquareItems['column-6'][1] && this.secondSquareItems['column-6'][1].value ? parseFloat(this.secondSquareItems['column-6'][1].value) : 0;
                let filledAllFields = this.firstSquareItems['column-6'][0] && this.firstSquareItems['column-6'][0].value && this.secondSquareItems['column-6'][0] && this.secondSquareItems['column-6'][0].value && this.secondSquareItems['column-6'][1] && this.secondSquareItems['column-6'][1].value;

                let sum = filledAllFields ? (max - min) * item1 : 0;

                return sum;
            },
            secondSquareSumColSeven() {
                const item1 = this.firstSquareItems['column-7'][0] && this.firstSquareItems['column-7'][0].value ? parseFloat(this.firstSquareItems['column-7'][0].value) : 0;
                const max = this.secondSquareItems['column-7'][0] && this.secondSquareItems['column-7'][0].value ? parseFloat(this.secondSquareItems['column-7'][0].value) : 0;
                const min = this.secondSquareItems['column-7'][1] && this.secondSquareItems['column-7'][1].value ? parseFloat(this.secondSquareItems['column-7'][1].value) : 0;
                let filledAllFields = this.firstSquareItems['column-7'][0] && this.firstSquareItems['column-7'][0].value && this.secondSquareItems['column-7'][0] && this.secondSquareItems['column-7'][0].value && this.secondSquareItems['column-7'][1] && this.secondSquareItems['column-7'][1].value;

                let sum = filledAllFields ? (max - min) * item1 : 0;

                return sum;
            },
            secondSquareSumTotal() {
                return this.secondSquareSumColOne + this.secondSquareSumColTwo + this.secondSquareSumColThree + this.secondSquareSumColFour + this.secondSquareSumColFive + this.secondSquareSumColSix + this.secondSquareSumColSeven;
            },
            thirdSquareSumColOne() {
                const item1 = this.thirdSquareItems['column-1'][0] && this.thirdSquareItems['column-1'][0].value ? parseFloat(this.thirdSquareItems['column-1'][0].value) : 0;
                const item2 = this.thirdSquareItems['column-1'][1] && this.thirdSquareItems['column-1'][1].value ? parseFloat(this.thirdSquareItems['column-1'][1].value) : 0;
                const item3 = this.thirdSquareItems['column-1'][2] && this.thirdSquareItems['column-1'][2].value ? parseFloat(this.thirdSquareItems['column-1'][2].value) : 0;
                const item4 = this.thirdSquareItems['column-1'][3] && this.thirdSquareItems['column-1'][3].value ? parseFloat(this.thirdSquareItems['column-1'][3].value) : 0;
                const item5 = this.thirdSquareItems['column-1'][4] && this.thirdSquareItems['column-1'][4].value ? parseFloat(this.thirdSquareItems['column-1'][4].value) : 0;
                const item6 = this.thirdSquareItems['column-1'][5] && this.thirdSquareItems['column-1'][5].value ? parseFloat(this.thirdSquareItems['column-1'][5].value) : 0;
                let sum = item1 + item2 + item3 + item4 + item5 + item6;

                return sum;
            },
            thirdSquareSumColTwo() {
                const item1 = this.thirdSquareItems['column-2'][0] && this.thirdSquareItems['column-2'][0].value ? parseFloat(this.thirdSquareItems['column-2'][0].value) : 0;
                const item2 = this.thirdSquareItems['column-2'][1] && this.thirdSquareItems['column-2'][1].value ? parseFloat(this.thirdSquareItems['column-2'][1].value) : 0;
                const item3 = this.thirdSquareItems['column-2'][2] && this.thirdSquareItems['column-2'][2].value ? parseFloat(this.thirdSquareItems['column-2'][2].value) : 0;
                const item4 = this.thirdSquareItems['column-2'][3] && this.thirdSquareItems['column-2'][3].value ? parseFloat(this.thirdSquareItems['column-2'][3].value) : 0;
                const item5 = this.thirdSquareItems['column-2'][4] && this.thirdSquareItems['column-2'][4].value ? parseFloat(this.thirdSquareItems['column-2'][4].value) : 0;
                const item6 = this.thirdSquareItems['column-2'][5] && this.thirdSquareItems['column-2'][5].value ? parseFloat(this.thirdSquareItems['column-2'][5].value) : 0;
                let sum = item1 + item2 + item3 + item4 + item5 + item6;

                return sum;
            },
            thirdSquareSumColThree() {
                const item1 = this.thirdSquareItems['column-3'][0] && this.thirdSquareItems['column-3'][0].value ? parseFloat(this.thirdSquareItems['column-3'][0].value) : 0;
                const item2 = this.thirdSquareItems['column-3'][1] && this.thirdSquareItems['column-3'][1].value ? parseFloat(this.thirdSquareItems['column-3'][1].value) : 0;
                const item3 = this.thirdSquareItems['column-3'][2] && this.thirdSquareItems['column-3'][2].value ? parseFloat(this.thirdSquareItems['column-3'][2].value) : 0;
                const item4 = this.thirdSquareItems['column-3'][3] && this.thirdSquareItems['column-3'][3].value ? parseFloat(this.thirdSquareItems['column-3'][3].value) : 0;
                const item5 = this.thirdSquareItems['column-3'][4] && this.thirdSquareItems['column-3'][4].value ? parseFloat(this.thirdSquareItems['column-3'][4].value) : 0;
                const item6 = this.thirdSquareItems['column-3'][5] && this.thirdSquareItems['column-3'][5].value ? parseFloat(this.thirdSquareItems['column-3'][5].value) : 0;
                let sum = item1 + item2 + item3 + item4 + item5 + item6;

                return sum;
            },
            thirdSquareSumColFour() {
                const item1 = this.thirdSquareItems['column-4'][0] && this.thirdSquareItems['column-4'][0].value ? parseFloat(this.thirdSquareItems['column-4'][0].value) : 0;
                const item2 = this.thirdSquareItems['column-4'][1] && this.thirdSquareItems['column-4'][1].value ? parseFloat(this.thirdSquareItems['column-4'][1].value) : 0;
                const item3 = this.thirdSquareItems['column-4'][2] && this.thirdSquareItems['column-4'][2].value ? parseFloat(this.thirdSquareItems['column-4'][2].value) : 0;
                const item4 = this.thirdSquareItems['column-4'][3] && this.thirdSquareItems['column-4'][3].value ? parseFloat(this.thirdSquareItems['column-4'][3].value) : 0;
                const item5 = this.thirdSquareItems['column-4'][4] && this.thirdSquareItems['column-4'][4].value ? parseFloat(this.thirdSquareItems['column-4'][4].value) : 0;
                const item6 = this.thirdSquareItems['column-4'][5] && this.thirdSquareItems['column-4'][5].value ? parseFloat(this.thirdSquareItems['column-4'][5].value) : 0;
                let sum = item1 + item2 + item3 + item4 + item5 + item6;

                return sum;
            },
            thirdSquareSumColFive() {
                const item1 = this.thirdSquareItems['column-5'][0] && this.thirdSquareItems['column-5'][0].value ? parseFloat(this.thirdSquareItems['column-5'][0].value) : 0;
                const item2 = this.thirdSquareItems['column-5'][1] && this.thirdSquareItems['column-5'][1].value ? parseFloat(this.thirdSquareItems['column-5'][1].value) : 0;
                const item3 = this.thirdSquareItems['column-5'][2] && this.thirdSquareItems['column-5'][2].value ? parseFloat(this.thirdSquareItems['column-5'][2].value) : 0;
                const item4 = this.thirdSquareItems['column-5'][3] && this.thirdSquareItems['column-5'][3].value ? parseFloat(this.thirdSquareItems['column-5'][3].value) : 0;
                const item5 = this.thirdSquareItems['column-5'][4] && this.thirdSquareItems['column-5'][4].value ? parseFloat(this.thirdSquareItems['column-5'][4].value) : 0;
                const item6 = this.thirdSquareItems['column-5'][5] && this.thirdSquareItems['column-5'][5].value ? parseFloat(this.thirdSquareItems['column-5'][5].value) : 0;
                let sum = item1 + item2 + item3 + item4 + item5 + item6;

                return sum;
            },
            thirdSquareSumColSix() {
                const item1 = this.thirdSquareItems['column-6'][0] && this.thirdSquareItems['column-6'][0].value ? parseFloat(this.thirdSquareItems['column-6'][0].value) : 0;
                const item2 = this.thirdSquareItems['column-6'][1] && this.thirdSquareItems['column-6'][1].value ? parseFloat(this.thirdSquareItems['column-6'][1].value) : 0;
                const item3 = this.thirdSquareItems['column-6'][2] && this.thirdSquareItems['column-6'][2].value ? parseFloat(this.thirdSquareItems['column-6'][2].value) : 0;
                const item4 = this.thirdSquareItems['column-6'][3] && this.thirdSquareItems['column-6'][3].value ? parseFloat(this.thirdSquareItems['column-6'][3].value) : 0;
                const item5 = this.thirdSquareItems['column-6'][4] && this.thirdSquareItems['column-6'][4].value ? parseFloat(this.thirdSquareItems['column-6'][4].value) : 0;
                const item6 = this.thirdSquareItems['column-6'][5] && this.thirdSquareItems['column-6'][5].value ? parseFloat(this.thirdSquareItems['column-6'][5].value) : 0;
                let sum = item1 + item2 + item3 + item4 + item5 + item6;

                return sum;
            },
            thirdSquareSumColSeven() {
                const item1 = this.thirdSquareItems['column-7'][0] && this.thirdSquareItems['column-7'][0].value ? parseFloat(this.thirdSquareItems['column-7'][0].value) : 0;
                const item2 = this.thirdSquareItems['column-7'][1] && this.thirdSquareItems['column-7'][1].value ? parseFloat(this.thirdSquareItems['column-7'][1].value) : 0;
                const item3 = this.thirdSquareItems['column-7'][2] && this.thirdSquareItems['column-7'][2].value ? parseFloat(this.thirdSquareItems['column-7'][2].value) : 0;
                const item4 = this.thirdSquareItems['column-7'][3] && this.thirdSquareItems['column-7'][3].value ? parseFloat(this.thirdSquareItems['column-7'][3].value) : 0;
                const item5 = this.thirdSquareItems['column-7'][4] && this.thirdSquareItems['column-7'][4].value ? parseFloat(this.thirdSquareItems['column-7'][4].value) : 0;
                const item6 = this.thirdSquareItems['column-7'][5] && this.thirdSquareItems['column-7'][5].value ? parseFloat(this.thirdSquareItems['column-7'][5].value) : 0;
                let sum = item1 + item2 + item3 + item4 + item5 + item6;

                return sum;
            },
            thirdSquareSumTotal() {
                return this.thirdSquareSumColOne + this.thirdSquareSumColTwo + this.thirdSquareSumColThree + this.thirdSquareSumColFour + this.thirdSquareSumColFive + this.thirdSquareSumColSix + this.thirdSquareSumColSeven;
            },
        },
    }
</script>
