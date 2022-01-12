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
				<template v-for="(item, idx) in firstSquareItems['column-1']">
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
                        {{ item.value }}
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
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
                        {{ item.value }}
					</div>
				</template>
				<div class="field blue">{{ firstSquareSumColTwo }}</div>
			</div>
			<div class="column-3">
				<div class="field blue">
					<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
				</div>
				<template v-for="(item, idx) in firstSquareItems['column-3']">
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
                        {{ item.value }}
					</div>
				</template>
				<div class="field blue">{{ firstSquareSumColThree }}</div>
			</div>
			<div class="column-4">
				<div class="field blue">N</div>
				<template v-for="(item, idx) in firstSquareItems['column-4']">
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" v-if="idx !== 6" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
                        {{ item.value }}
					</div>
				</template>
				<div class="field blue">{{ firstSquareSumColFour }}</div>
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
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
                        {{ item.value }}
					</div>
				</template>
				<div class="field blue" ref="third-1">{{ thirdSquareSumColOne }}</div>
			</div>
			<div class="column-2">
				<template v-for="item in thirdSquareItems['column-2']">
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
                        {{ item.value }}
					</div>
				</template>
				<div class="field blue">{{ thirdSquareSumColTwo }}</div>
			</div>
			<div class="column-3">
				<template v-for="item in thirdSquareItems['column-3']">
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
                        {{ item.value }}
					</div>
				</template>
				<div class="field blue">{{ thirdSquareSumColThree }}</div>
			</div>
			<div class="column-4">
				<template v-for="item in thirdSquareItems['column-4']">
					<div class="field" @click="openModal(item.id, (item.value || item.value == 0) && item.value !== '' && disabledAllBtns)" :class="item.class" :disabled="(item.value || item.value == 0) && item.value !== '' && disabledAllBtns" :id="item.id" :key="item.id">
						<input type="hidden" v-model="item.value" />
                        {{ item.value }}
					</div>
				</template>
				<div class="field blue">{{ thirdSquareSumColFour }}</div>
			</div>
			<div class="column-5">
				<div class="field large">
					<p class="total">TOTAL:</p>
					<div class="total-field" @click="totalFieldActive = !totalFieldActive" :class="{'active': totalFieldActive}">
						{{ firstSquareSumTotal + secondSquareSumTotal + thirdSquareSumTotal }}
					</div>
				</div>
				<div class="field blue">{{ thirdSquareSumTotal }}</div>
			</div>
		</div>

        <modal :show="showModal" @closeModal="showModal = false" class="confirmation-modal wide">
            <div slot="header" class="modal-title-wrapper">
                <p class="modal-title">Dobijena kombinacija:</p>
            </div>
            <div slot="body">
                <div v-if="modalOne">
                    <div class="dice-wrap">
                        <button class="modal-btn blue dice">
                            <span class="center"></span>
                        </button>
                    </div>
                    <div class="dice-wrap">
                        <button class="modal-btn dice white-btn" @click="setResult(1, fieldId)">x 1</button>
                        <button class="modal-btn dice white-btn" @click="setResult(2, fieldId)">x 2</button>
                        <button class="modal-btn dice white-btn" @click="setResult(3, fieldId)">x 3</button>
                        <button class="modal-btn dice white-btn" @click="setResult(4, fieldId)">x 4</button>
                        <button class="modal-btn dice white-btn" @click="setResult(5, fieldId)">x 5</button>
                    </div>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
                <div v-else-if="modalTwo">
                    <div class="dice-wrap">
                        <button class="modal-btn blue dice">
                            <span class="three"></span>
                            <span class="four"></span>
                        </button>
                    </div>
                    <div class="dice-wrap">
                        <button class="modal-btn dice white-btn" @click="setResult(2, fieldId)">x 1</button>
                        <button class="modal-btn dice white-btn" @click="setResult(4, fieldId)">x 2</button>
                        <button class="modal-btn dice white-btn" @click="setResult(6, fieldId)">x 3</button>
                        <button class="modal-btn dice white-btn" @click="setResult(8, fieldId)">x 4</button>
                        <button class="modal-btn dice white-btn" @click="setResult(10, fieldId)">x 5</button>
                    </div>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
                <div v-else-if="modalThree">
                    <div class="dice-wrap">
                        <button class="modal-btn blue dice">
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                        </button>
                    </div>
                    <div class="dice-wrap">
                        <button class="modal-btn dice white-btn" @click="setResult(3, fieldId)">x 1</button>
                        <button class="modal-btn dice white-btn" @click="setResult(6, fieldId)">x 2</button>
                        <button class="modal-btn dice white-btn" @click="setResult(9, fieldId)">x 3</button>
                        <button class="modal-btn dice white-btn" @click="setResult(12, fieldId)">x 4</button>
                        <button class="modal-btn dice white-btn" @click="setResult(15, fieldId)">x 5</button>
                    </div>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
                <div v-else-if="modalFour">
                    <div class="dice-wrap">
                        <button class="modal-btn blue dice">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                    </div>
                    <div class="dice-wrap">
                        <button class="modal-btn dice white-btn" @click="setResult(4, fieldId)">x 1</button>
                        <button class="modal-btn dice white-btn" @click="setResult(8, fieldId)">x 2</button>
                        <button class="modal-btn dice white-btn" @click="setResult(12, fieldId)">x 3</button>
                        <button class="modal-btn dice white-btn" @click="setResult(16, fieldId)">x 4</button>
                        <button class="modal-btn dice white-btn" @click="setResult(20, fieldId)">x 5</button>
                    </div>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
                <div v-else-if="modalFive">
                    <div class="dice-wrap">
                        <button class="modal-btn blue dice">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                    </div>
                    <div class="dice-wrap">
                        <button class="modal-btn dice white-btn" @click="setResult(5, fieldId)">x 1</button>
                        <button class="modal-btn dice white-btn" @click="setResult(10, fieldId)">x 2</button>
                        <button class="modal-btn dice white-btn" @click="setResult(15, fieldId)">x 3</button>
                        <button class="modal-btn dice white-btn" @click="setResult(20, fieldId)">x 4</button>
                        <button class="modal-btn dice white-btn" @click="setResult(25, fieldId)">x 5</button>
                    </div>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
                <div v-else-if="modalSix">
                    <div class="dice-wrap">
                        <button class="modal-btn blue dice">
                            <span class="one"></span>
                            <span class="two"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="five"></span>
                            <span class="six"></span>
                        </button>
                    </div>
                    <div class="dice-wrap">
                        <button class="modal-btn dice white-btn" @click="setResult(6, fieldId)">x 1</button>
                        <button class="modal-btn dice white-btn" @click="setResult(12, fieldId)">x 2</button>
                        <button class="modal-btn dice white-btn" @click="setResult(18, fieldId)">x 3</button>
                        <button class="modal-btn dice white-btn" @click="setResult(24, fieldId)">x 4</button>
                        <button class="modal-btn dice white-btn" @click="setResult(30, fieldId)">x 5</button>
                    </div>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
                <div class="kenta" v-else-if="modalKenta">
                    <button class="modal-btn blue" @click="setResult(55, fieldId)">55</button>
                    <button class="modal-btn blue" @click="setResult(60, fieldId)">60</button>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
                <div class="triling" v-else-if="modalTriling">
                    <div class="dice-wrap">
                        <button class="modal-btn blue dice" @click="setResult(23, fieldId)">
                            <span class="center"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(26, fieldId)">
                            <span class="three"></span>
                            <span class="four"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(29, fieldId)">
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(32, fieldId)">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(35, fieldId)">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(38, fieldId)">
                            <span class="one"></span>
                            <span class="two"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="five"></span>
                            <span class="six"></span>
                        </button>
                    </div>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
                <div class="ful" v-else-if="modalFul">
                    <div class="dice-wrap">
                        <span class="multiplier">3 x </span>
                        <button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(3, 1)">
                            <span class="center"></span>
                        </button>
                        <button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(6, 2)">
                            <span class="three"></span>
                            <span class="four"></span>
                        </button>
                        <button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(9, 3)">
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                        </button>
                        <button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(12, 4)">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                        <button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(15, 5)">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                        <button class="modal-btn blue dice" :class="{'disabled': firstFulRowDisabled}" :disabled="firstFulRowDisabled" @click="setFirstRowFul(18, 6)">
                            <span class="one"></span>
                            <span class="two"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="five"></span>
                            <span class="six"></span>
                        </button>
                    </div>
                    <div class="dice-wrap">
                        <span class="multiplier">2 x </span>
                        <button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 1}" :disabled="secondFulRowDisabled || disabledNumber === 1" @click="setFulResult(2, fieldId)">
                            <span class="center"></span>
                        </button>
                        <button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 2}" :disabled="secondFulRowDisabled || disabledNumber === 2" @click="setFulResult(4, fieldId)">
                            <span class="three"></span>
                            <span class="four"></span>
                        </button>
                        <button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 3}" :disabled="secondFulRowDisabled || disabledNumber === 3" @click="setFulResult(6, fieldId)">
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                        </button>
                        <button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 4}" :disabled="secondFulRowDisabled || disabledNumber === 4" @click="setFulResult(8, fieldId)">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                        <button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 5}" :disabled="secondFulRowDisabled || disabledNumber === 5" @click="setFulResult(10, fieldId)">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                        <button class="modal-btn blue dice" :class="{'disabled': secondFulRowDisabled || disabledNumber === 6}" :disabled="secondFulRowDisabled || disabledNumber === 6" @click="setFulResult(12, fieldId)">
                            <span class="one"></span>
                            <span class="two"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="five"></span>
                            <span class="six"></span>
                        </button>
                    </div>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
                <div class="poker" v-else-if="modalPoker">
                    <div class="dice-wrap">
                        <button class="modal-btn blue dice" @click="setResult(54, fieldId)">
                            <span class="center"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(58, fieldId)">
                            <span class="three"></span>
                            <span class="four"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(62, fieldId)">
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(66, fieldId)">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(70, fieldId)">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(74, fieldId)">
                            <span class="one"></span>
                            <span class="two"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="five"></span>
                            <span class="six"></span>
                        </button>
                    </div>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
                <div class="yamb" v-else-if="modalYamb">
                    <div class="dice-wrap">
                        <button class="modal-btn blue dice" @click="setResult(85, fieldId)">
                            <span class="center"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(90, fieldId)">
                            <span class="three"></span>
                            <span class="four"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(95, fieldId)">
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(100, fieldId)">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(105, fieldId)">
                            <span class="one"></span>
                            <span class="three"></span>
                            <span class="center"></span>
                            <span class="four"></span>
                            <span class="six"></span>
                        </button>
                        <button class="modal-btn blue dice" @click="setResult(110, fieldId)">
                            <span class="one"></span>
                            <span class="two"></span>
                            <span class="three"></span>
                            <span class="four"></span>
                            <span class="five"></span>
                            <span class="six"></span>
                        </button>
                    </div>
                    <div class="bottom-wrap">
                        <button class="modal-btn blue" @click="setResult(0, fieldId)">0</button>
                        <button class="modal-btn red-btn reset" @click="setResult('', fieldId)">Ponisti rezultat</button>
                    </div>
                </div>
            </div>
        </modal>
    </section>
</template>

<script>
    import modal from '../common/modal.vue';
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
                showModal: false,
                modalOne: false,
                modalTwo: false,
                modalThree: false,
                modalFour: false,
                modalFive: false,
                modalSix: false,
                modalKenta: false,
                modalTriling: false,
                modalFul: false,
                modalPoker: false,
                modalYamb: false,
                fieldId: '',
                firstFulRowDisabled: false,
                secondFulRowDisabled: true,
                firstRowFulResult: 0,
                disabledNumber: 0,
                totalFieldActive: false,
                disabledAllBtns: true
            }
        },
        // beforeRouteLeave(to, from, next) {
        //     if (from && from.meta && from.meta.gameInProgress) {
        //         this.$bus.$emit('openModal');
        //         return;
        //     }
        //     next();
        // },
        mounted() {
            this.getFirstSquare();
            this.getSecondSquare();
            this.getThirdSquare();
            this.$bus.$on('edit:changed', () => {
                this.disabledAllBtns = !this.disabledAllBtns;
            });
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
                        game: game
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
            openModal(fieldId, isDisabled) {
                if (isDisabled)
                    return;

                this.showModal = true;
                this.fieldId = fieldId;

                const area = fieldId.split('-')[0];
                const row = fieldId.split('-')[1][1];

                if (area === 'first') {
                    if (row === '1')
                        this.modalOne = true;
                    else if (row === '2')
                        this.modalTwo = true;
                    else if (row === '3')
                        this.modalThree = true;
                    else if (row === '4')
                        this.modalFour = true;
                    else if (row === '5')
                        this.modalFive = true;
                    else if (row === '6')
                        this.modalSix = true;
                }
                else if (area === 'third') {
                    if (row === '1')
                        this.modalKenta = true;
                    else if (row === '2')
                        this.modalTriling = true;
                    else if (row === '3')
                        this.modalFul = true;
                    else if (row === '4')
                        this.modalPoker = true;
                    else if (row === '5')
                        this.modalYamb = true;
                }
            },
            setResult(val, fieldId) {
                const area = fieldId.split('-')[0];
                const col = fieldId.split('-')[1][0];
                const row = fieldId.split('-')[1][1];

                if (area === 'first')
                    this.firstSquareItems[`column-${col}`][`${row - 1}`].value = val;
                else if (area === 'second')
                    this.secondSquareItems[`column-${col}`][`${row - 1}`].value = val;
                else if (area === 'third')
                    this.thirdSquareItems[`column-${col}`][`${row - 1}`].value = val;

                this.showModal = false;
                this.disabledNumber = 0;
                this.firstFulRowDisabled = false;
                this.secondFulRowDisabled = true;
                this.disabledAllBtns = true;
                this.$bus.$emit('edit:hide');
            },
            setFirstRowFul(result, number) {
                this.firstFulRowDisabled = true;
                this.secondFulRowDisabled = false;
                this.firstRowFulResult = result;
                this.disabledNumber = number;
            },
            setFulResult(result, fieldId) {
                this.firstFulRowDisabled = false;
                this.secondFulRowDisabled = true;
                this.disabledNumber === 0;
                const totalFulResult = this.firstRowFulResult + result + 30;
                this.setResult(totalFulResult, fieldId);
            }
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
            firstSquareSumTotal() {
                return this.firstSquareSumColOne + this.firstSquareSumColTwo + this.firstSquareSumColThree + this.firstSquareSumColFour;
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
            secondSquareSumTotal() {
                return this.secondSquareSumColOne + this.secondSquareSumColTwo + this.secondSquareSumColThree + this.secondSquareSumColFour;
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
            thirdSquareSumTotal() {
                return this.thirdSquareSumColOne + this.thirdSquareSumColTwo + this.thirdSquareSumColThree + this.thirdSquareSumColFour;
            },
        },
        components: {
            modal
        },
        watch: {
            showModal: {
                handler() {
                    if (!this.showModal) {
                        this.modalOne = false;
                        this.modalTwo = false;
                        this.modalThree = false;
                        this.modalFour = false;
                        this.modalFive = false;
                        this.modalSix = false;
                        this.modalKenta = false;
                        this.modalTriling = false;
                        this.modalFul = false;
                        this.modalPoker = false;
                        this.modalYamb = false;
                        this.firstRowFulResult = 0;
                    } 
                }
            }
        }
    }
</script>
