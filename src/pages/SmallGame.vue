<template>
    <section>
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
				<template v-for="item in firstSquareItems['column-1']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<!-- <ion-input type="number" v-model="item.value"></ion-input> -->
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateFirstSquarePerCol(1) }}</div>
			</div>
			<div class="column-2">
				<div class="field blue">
					<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
					<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
				</div>
				<template v-for="item in firstSquareItems['column-2']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateFirstSquarePerCol(2) }}</div>
			</div>
			<div class="column-3">
				<div class="field blue">
					<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
				</div>
				<template v-for="item in firstSquareItems['column-3']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateFirstSquarePerCol(3) }}</div>
			</div>
			<div class="column-4">
				<div class="field blue">N</div>
				<template v-for="item in firstSquareItems['column-4']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateFirstSquarePerCol(4) }}</div>
			</div>
			<div class="column-5">
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
				<div class="field blue">{{ calculateSecondSquarePerCol(1) }}</div>
			</div>
			<div class="column-2">
				<template v-for="item in secondSquareItems['column-2']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateSecondSquarePerCol(2) }}</div>
			</div>
			<div class="column-3">
				<template v-for="item in secondSquareItems['column-3']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateSecondSquarePerCol(3) }}</div>
			</div>
			<div class="column-4">
				<template v-for="item in secondSquareItems['column-4']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateSecondSquarePerCol(4) }}</div>
			</div>
			<div class="column-5">
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
				<div class="field blue" ref="third-1">{{ calculateThirdSquarePerCol(1) }}</div>
			</div>
			<div class="column-2">
				<template v-for="item in thirdSquareItems['column-2']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateThirdSquarePerCol(2) }}</div>
			</div>
			<div class="column-3">
				<template v-for="item in thirdSquareItems['column-3']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateThirdSquarePerCol(3) }}</div>
			</div>
			<div class="column-4">
				<template v-for="item in thirdSquareItems['column-4']">
					<div class="field" :class="item.class" :id="item.id" :key="item.id">
						<input type="number" v-model="item.value" />
					</div>
				</template>
				<div class="field blue">{{ calculateThirdSquarePerCol(4) }}</div>
			</div>
			<div class="column-5">
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
                firstSquareSumCol_1: 0,
                firstSquareSumCol_2: 0,
                firstSquareSumCol_3: 0,
                firstSquareSumCol_4: 0,
                firstSquareSumTotal: 0,
                secondSquareSumCol_1: 0,
                secondSquareSumCol_2: 0,
                secondSquareSumCol_3: 0,
                secondSquareSumCol_4: 0,
                secondSquareSumTotal: 0,
                thirdSquareSumCol_1: 0,
                thirdSquareSumCol_2: 0,
                thirdSquareSumCol_3: 0,
                thirdSquareSumCol_4: 0,
                thirdSquareSumTotal: 0,
            }
        },
        mounted() {
            this.getFirstSquare();
            this.getSecondSquare();
            this.getThirdSquare();
        },
        methods: {
            getFirstSquare() {
                for (let i = 1; i <= 6; i++) {
                    const item1 = {
                        class: `field-1${i}`,
                        id: `first-1${i}`,
                        value: null
                    }
                    const item2 = {
                        class: `field-2${i}`,
                        id: `first-2${i}`,
                        value: null
                    }
                    const item3 = {
                        class: `field-3${i}`,
                        id: `first-3${i}`,
                        value: null
                    }
                    const item4 = {
                        class: `field-4${i}`,
                        id: `first-4${i}`,
                        value: null
                    }

                    this.firstSquareItems['column-1'].push(item1);
                    this.firstSquareItems['column-2'].push(item2);
                    this.firstSquareItems['column-3'].push(item3);
                    this.firstSquareItems['column-4'].push(item4);
                }
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

                    this.secondSquareItems['column-1'].push(item1);
                    this.secondSquareItems['column-2'].push(item2);
                    this.secondSquareItems['column-3'].push(item3);
                    this.secondSquareItems['column-4'].push(item4);
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

                    this.thirdSquareItems['column-1'].push(item1);
                    this.thirdSquareItems['column-2'].push(item2);
                    this.thirdSquareItems['column-3'].push(item3);
                    this.thirdSquareItems['column-4'].push(item4);
                }
            },
            calculateFirstSquarePerCol(numberOfCol) {
                let sum = 0;
                let numOfFilledFields = 0;
                let tot = 0;
                
                for (let i = 0; i < this.firstSquareItems[`column-${numberOfCol}`].length; i++) {
                    let item = this.firstSquareItems[`column-${numberOfCol}`][i];

                    if (item.value && item.value !== null) {
                        sum += parseInt(item.value);
                        numOfFilledFields++;
                    }
                }

                console.log('numOfFilledFields', sum);

                if (numOfFilledFields === 6) {
                    if (sum >= 80)
                        sum += 50;
                    else if (sum >= 70)
                        sum += 40;
                    else if (sum >= 60)
                        sum += 30;
                }

                tot = this.firstSquareSumCol_1 + this.firstSquareSumCol_2 + this.firstSquareSumCol_3 + this.firstSquareSumCol_4 + sum;

                this.firstSquareSumTotal = tot;

                if (numberOfCol === 1) {
                    this.firstSquareSumCol_1 = sum;
                    return this.firstSquareSumCol_1 ? this.firstSquareSumCol_1 : 0;
                }
                else if (numberOfCol === 2) {
                    this.firstSquareSumCol_2 = sum;
                    return this.firstSquareSumCol_2 ? this.firstSquareSumCol_2 : 0;
                }
                else if (numberOfCol === 3) {
                    this.firstSquareSumCol_3 = sum;
                    return this.firstSquareSumCol_3 ? this.firstSquareSumCol_3 : 0;
                }
                else if (numberOfCol === 4) {
                    this.firstSquareSumCol_4 = sum;
                    return this.firstSquareSumCol_4 ? this.firstSquareSumCol_4 : 0;
                }
            },
            calculateSecondSquarePerCol(numberOfCol) {
                let sum = 0;

                for (let i = 0; i < this.secondSquareItems[`column-${numberOfCol}`].length; i++) {
                    let maxValue = this.secondSquareItems[`column-${numberOfCol}`][0].value;
                    let minValue = this.secondSquareItems[`column-${numberOfCol}`][1].value;
                    let valueOfOne = this.firstSquareItems[`column-${numberOfCol}`][0].value;

                    if (maxValue !== null && minValue !== null && valueOfOne !== null) {
                        sum = (maxValue - minValue) * valueOfOne;
                    }
                }

                this.secondSquareSumTotal = this.secondSquareSumCol_1 + this.secondSquareSumCol_2 + this.secondSquareSumCol_3 + this.secondSquareSumCol_4 + sum;

                if (numberOfCol === 1) {
                    this.secondSquareSumCol_1 = sum;
                    return this.secondSquareSumCol_1 ? this.secondSquareSumCol_1 : 0;
                }
                else if (numberOfCol === 2) {
                    this.secondSquareSumCol_2 = sum;
                    return this.secondSquareSumCol_2 ? this.secondSquareSumCol_2 : 0;
                }
                else if (numberOfCol === 3) {
                    this.secondSquareSumCol_3 = sum;
                    return this.secondSquareSumCol_3 ? this.secondSquareSumCol_3 : 0;
                }
                else if (numberOfCol === 4) {
                    this.secondSquareSumCol_4 = sum;
                    return this.secondSquareSumCol_4 ? this.secondSquareSumCol_4 : 0;
                }
            },
            calculateThirdSquarePerCol(numberOfCol) {
                let sum = 0;

                for (let i = 0; i < this.thirdSquareItems[`column-${numberOfCol}`].length; i++) {
                    let item = this.thirdSquareItems[`column-${numberOfCol}`][i];

                    if (item.value && item.value !== null) {
                        sum += parseInt(item.value);
                    }
                }

                this.thirdSquareSumTotal = this.thirdSquareSumCol_1 + this.thirdSquareSumCol_2 + this.thirdSquareSumCol_3 + this.thirdSquareSumCol_4 + sum;

                if (numberOfCol === 1) {
                    this.thirdSquareSumCol_1 = sum;
                    return this.thirdSquareSumCol_1 ? this.thirdSquareSumCol_1 : 0;
                }
                else if (numberOfCol === 2) {
                    this.thirdSquareSumCol_2 = sum;
                    return this.thirdSquareSumCol_2 ? this.thirdSquareSumCol_2 : 0;
                }
                else if (numberOfCol === 3) {
                    this.thirdSquareSumCol_3 = sum;
                    return this.thirdSquareSumCol_3 ? this.thirdSquareSumCol_3 : 0;
                }
                else if (numberOfCol === 4) {
                    this.thirdSquareSumCol_4 = sum;
                    return this.thirdSquareSumCol_4 ? this.thirdSquareSumCol_4 : 0;
                }
            },
        },
        computed: {
            
        }
    }
</script>
