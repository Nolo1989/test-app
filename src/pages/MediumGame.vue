<template>
	<section class="medium-game">
		<div class="first-square">
			<basic-game-first-square :basicGameFirstSquareData="firstSquareItems" :disabledAllBtns="disabledAllBtns" :game="'medium-game'"></basic-game-first-square>
			<single-column-first-square :column="5" :nameOfColumn="'R'" :firstSquareDataFive="firstSquareItems['column-5']" :disabledAllBtns="disabledAllBtns"></single-column-first-square>
			<single-column-first-square :column="6" :toMiddle="true" :firstSquareDataSix="firstSquareItems['column-6']" :disabledAllBtns="disabledAllBtns"></single-column-first-square>
			<single-column-first-square :column="7" :fromMiddle="true" :firstSquareDataSeven="firstSquareItems['column-7']" :disabledAllBtns="disabledAllBtns"></single-column-first-square>
			<div class="column-8">
				<div class="field smaller" :class="$attrs.themeColor">YAMB</div>
				<div class="field large"></div>
				<div class="field" :class="$attrs.themeColor">{{ firstSquareSumTotal }}</div>
			</div>
		</div>
		<div class="second-square">
			<basic-game-second-square :basicGameSecondSquareData="secondSquareItems" :basicGameFirstSquareData="firstSquareItems" :disabledAllBtns="disabledAllBtns"></basic-game-second-square>
			<single-column-second-square :column="5" :firstSquareOneVal="firstSquareItems['column-5'][0]" :secondSquareDataFive="secondSquareItems['column-5']" :disabledAllBtns="disabledAllBtns"></single-column-second-square>
			<single-column-second-square :column="6" :toMiddle="true" :firstSquareOneVal="firstSquareItems['column-6'][0]" :secondSquareDataSix="secondSquareItems['column-6']" :disabledAllBtns="disabledAllBtns"></single-column-second-square>
			<single-column-second-square :column="7" :fromMiddle="true" :firstSquareOneVal="firstSquareItems['column-7'][0]" :secondSquareDataSeven="secondSquareItems['column-7']" :disabledAllBtns="disabledAllBtns"></single-column-second-square>
			<div class="column-8">
				<div class="field large"></div>
				<div class="field" :class="$attrs.themeColor">{{ secondSquareSumTotal }}</div>
			</div>
		</div>
		<div class="third-square">
			<basic-game-third-square :basicGameThirdSquareData="thirdSquareItems" :disabledAllBtns="disabledAllBtns" :firstFulRowDisabled="firstFulRowDisabled" :secondFulRowDisabled="secondFulRowDisabled" :disabledNumber="disabledNumber"></basic-game-third-square>
			<single-column-third-square :column="5" :thirdSquareDataFive="thirdSquareItems['column-5']" :disabledAllBtns="disabledAllBtns"></single-column-third-square>
			<single-column-third-square :column="6" :toMiddle="true" :thirdSquareDataSix="thirdSquareItems['column-6']" :disabledAllBtns="disabledAllBtns"></single-column-third-square>
			<single-column-third-square :column="7" :fromMiddle="true" :thirdSquareDataSeven="thirdSquareItems['column-7']" :disabledAllBtns="disabledAllBtns"></single-column-third-square>
			<div class="column-8">
				<div class="field large">
					<p class="total">TOTAL:</p>
					<div class="total-field" @click="totalFieldActive = !totalFieldActive" :class="[{'active': totalFieldActive}, bkgTotal(), {'darken-2': isDarker()}]">
						{{ firstSquareSumTotal + secondSquareSumTotal + thirdSquareSumTotal }}
					</div>
				</div>
				<div class="field" :class="$attrs.themeColor">{{ thirdSquareSumTotal }}</div>
			</div>
		</div>

		<modal :show="showModal" @closeModal="showModal = false" class="confirmation-modal wide" :class="{ 'smaller-modal': modalMax || modalMin }">
			<div slot="header" class="modal-title-wrapper" v-if="!(modalMax || modalMin)">
				<p class="modal-title">Dobijena kombinacija:</p>
			</div>
			<div slot="body">
				<div v-if="modalOne">
					<div class="dice-wrap">
						<button class="modal-btn dice" :class="$attrs.themeColor">
							<span class="center"></span>
						</button>
					</div>
					<div class="dice-wrap">
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(1, fieldId)">x 1</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(2, fieldId)">x 2</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(3, fieldId)">x 3</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(4, fieldId)">x 4</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(5, fieldId)">x 5</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div v-else-if="modalTwo">
					<div class="dice-wrap">
						<button class="modal-btn dice" :class="$attrs.themeColor">
							<span class="three"></span>
							<span class="four"></span>
						</button>
					</div>
					<div class="dice-wrap">
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(2, fieldId)">x 1</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(4, fieldId)">x 2</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(6, fieldId)">x 3</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(8, fieldId)">x 4</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(10, fieldId)">x 5</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div v-else-if="modalThree">
					<div class="dice-wrap">
						<button class="modal-btn dice" :class="$attrs.themeColor">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
					</div>
					<div class="dice-wrap">
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(3, fieldId)">x 1</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(6, fieldId)">x 2</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(9, fieldId)">x 3</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(12, fieldId)">x 4</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(15, fieldId)">x 5</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div v-else-if="modalFour">
					<div class="dice-wrap">
						<button class="modal-btn dice" :class="$attrs.themeColor">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="dice-wrap">
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(4, fieldId)">x 1</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(8, fieldId)">x 2</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(12, fieldId)">x 3</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(16, fieldId)">x 4</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(20, fieldId)">x 5</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div v-else-if="modalFive">
					<div class="dice-wrap">
						<button class="modal-btn dice" :class="$attrs.themeColor">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="dice-wrap">
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(5, fieldId)">x 1</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(10, fieldId)">x 2</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(15, fieldId)">x 3</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(20, fieldId)">x 4</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(25, fieldId)">x 5</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div v-else-if="modalSix">
					<div class="dice-wrap">
						<button class="modal-btn dice" :class="$attrs.themeColor">
							<span class="one"></span>
							<span class="two"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="five"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="dice-wrap">
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(6, fieldId)">x 1</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(12, fieldId)">x 2</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(18, fieldId)">x 3</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(24, fieldId)">x 4</button>
						<button class="modal-btn dice white-btn" :style="getThemeColor" @click="setResult(30, fieldId)">x 5</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div v-else-if="modalMax">
					<div class="dice-wrap" ref="maxscroller">
						<button class="modal-btn dice white-btn" @click="setResult(5, fieldId)">5</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(6, fieldId)">6</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(7, fieldId)">7</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(8, fieldId)">8</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(9, fieldId)">9</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(10, fieldId)">10</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(11, fieldId)">11</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(12, fieldId)">12</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(13, fieldId)">13</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(14, fieldId)">14</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(15, fieldId)">15</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(16, fieldId)">16</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(17, fieldId)">17</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(18, fieldId)">18</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(19, fieldId)">19</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(20, fieldId)">20</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(21, fieldId)">21</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(22, fieldId)">22</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(23, fieldId)">23</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(24, fieldId)">24</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(25, fieldId)">25</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(26, fieldId)">26</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(27, fieldId)">27</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(28, fieldId)">28</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(29, fieldId)">29</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(30, fieldId)">30</button>
						<div class="divider" :class="$attrs.themeColor"></div>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">X</button>
					</div>
				</div>
				<div v-else-if="modalMin">
					<div class="dice-wrap" ref="minscroller">
						<button class="modal-btn dice white-btn" @click="setResult(5, fieldId)">5</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(6, fieldId)">6</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(7, fieldId)">7</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(8, fieldId)">8</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(9, fieldId)">9</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(10, fieldId)">10</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(11, fieldId)">11</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(12, fieldId)">12</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(13, fieldId)">13</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(14, fieldId)">14</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(15, fieldId)">15</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(16, fieldId)">16</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(17, fieldId)">17</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(18, fieldId)">18</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(19, fieldId)">19</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(20, fieldId)">20</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(21, fieldId)">21</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(22, fieldId)">22</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(23, fieldId)">23</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(24, fieldId)">24</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(25, fieldId)">25</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(26, fieldId)">26</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(27, fieldId)">27</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(28, fieldId)">28</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(29, fieldId)">29</button>
						<div class="divider" :class="$attrs.themeColor"></div>
						<button class="modal-btn dice white-btn" @click="setResult(30, fieldId)">30</button>
						<div class="divider" :class="$attrs.themeColor"></div>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">X</button>
					</div>
				</div>
				<div class="kenta" v-else-if="modalKenta">
					<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(55, fieldId)">55</button>
					<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(60, fieldId)">60</button>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div class="triling" v-else-if="modalTriling">
					<div class="dice-wrap">
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(23, fieldId)">
							<span class="center"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(26, fieldId)">
							<span class="three"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(29, fieldId)">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(32, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(35, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(38, fieldId)">
							<span class="one"></span>
							<span class="two"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="five"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div class="ful" v-else-if="modalFul">
					<div class="dice-wrap">
						<span class="multiplier">3 x </span>
						<button class="modal-btn dice" :class="[{'disabled': firstFulRowDisabled}, $attrs.themeColor]" :disabled="firstFulRowDisabled" @click="setFirstRowFul(3, 1)">
							<span class="center"></span>
						</button>
						<button class="modal-btn dice" :class="[{'disabled': firstFulRowDisabled}, $attrs.themeColor]" :disabled="firstFulRowDisabled" @click="setFirstRowFul(6, 2)">
							<span class="three"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn dice" :class="[{'disabled': firstFulRowDisabled}, $attrs.themeColor]" :disabled="firstFulRowDisabled" @click="setFirstRowFul(9, 3)">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn dice" :class="[{'disabled': firstFulRowDisabled}, $attrs.themeColor]" :disabled="firstFulRowDisabled" @click="setFirstRowFul(12, 4)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn dice" :class="[{'disabled': firstFulRowDisabled}, $attrs.themeColor]" :disabled="firstFulRowDisabled" @click="setFirstRowFul(15, 5)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn dice" :class="[{'disabled': firstFulRowDisabled}, $attrs.themeColor]" :disabled="firstFulRowDisabled" @click="setFirstRowFul(18, 6)">
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
						<button class="modal-btn dice" :class="[{'disabled': secondFulRowDisabled || disabledNumber === 1}, $attrs.themeColor]" :disabled="secondFulRowDisabled || disabledNumber === 1" @click="setFulResult(2, fieldId)">
							<span class="center"></span>
						</button>
						<button class="modal-btn dice" :class="[{'disabled': secondFulRowDisabled || disabledNumber === 2}, $attrs.themeColor]" :disabled="secondFulRowDisabled || disabledNumber === 2" @click="setFulResult(4, fieldId)">
							<span class="three"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn dice" :class="[{'disabled': secondFulRowDisabled || disabledNumber === 3}, $attrs.themeColor]" :disabled="secondFulRowDisabled || disabledNumber === 3" @click="setFulResult(6, fieldId)">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn dice" :class="[{'disabled': secondFulRowDisabled || disabledNumber === 4}, $attrs.themeColor]" :disabled="secondFulRowDisabled || disabledNumber === 4" @click="setFulResult(8, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn dice" :class="[{'disabled': secondFulRowDisabled || disabledNumber === 5}, $attrs.themeColor]" :disabled="secondFulRowDisabled || disabledNumber === 5" @click="setFulResult(10, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn dice" :class="[{'disabled': secondFulRowDisabled || disabledNumber === 6}, $attrs.themeColor]" :disabled="secondFulRowDisabled || disabledNumber === 6" @click="setFulResult(12, fieldId)">
							<span class="one"></span>
							<span class="two"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="five"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div class="poker" v-else-if="modalPoker">
					<div class="dice-wrap">
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(54, fieldId)">
							<span class="center"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(58, fieldId)">
							<span class="three"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(62, fieldId)">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(66, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(70, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(74, fieldId)">
							<span class="one"></span>
							<span class="two"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="five"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
				<div class="yamb" v-else-if="modalYamb">
					<div class="dice-wrap">
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(85, fieldId)">
							<span class="center"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(90, fieldId)">
							<span class="three"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(95, fieldId)">
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(100, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(105, fieldId)">
							<span class="one"></span>
							<span class="three"></span>
							<span class="center"></span>
							<span class="four"></span>
							<span class="six"></span>
						</button>
						<button class="modal-btn dice" :class="$attrs.themeColor" @click="setResult(110, fieldId)">
							<span class="one"></span>
							<span class="two"></span>
							<span class="three"></span>
							<span class="four"></span>
							<span class="five"></span>
							<span class="six"></span>
						</button>
					</div>
					<div class="bottom-wrap">
						<button class="modal-btn white-color" :class="$attrs.themeColor" @click="setResult(0, fieldId)">0</button>
						<button class="modal-btn red-btn reset" :disabled="disabledUndoResultBtn" @click="setResult('', fieldId)">Ponisti rezultat</button>
					</div>
				</div>
			</div>
		</modal>
	</section>
</template>

<script>
	import BasicGameFirstSquare from '../common/basic-game/basicGameFirstSquare.vue';
	import BasicGameSecondSquare from '../common/basic-game/basicGameSecondSquare.vue';
	import BasicGameThirdSquare from '../common/basic-game/basicGameThirdSquare.vue';
	import SingleColumnFirstSquare from '../common/single-column/singleColumnFirstSquare.vue';
	import SingleColumnSecondSquare from '../common/single-column/singleColumnSecondSquare.vue';
	import SingleColumnThirdSquare from '../common/single-column/singleColumnThirdSquare.vue';
	import modal from '../common/modal.vue';

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
				showModal: false,
				modalOne: false,
				modalTwo: false,
				modalThree: false,
				modalFour: false,
				modalFive: false,
				modalSix: false,
				modalMax: false,
				modalMin: false,
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
				totalFieldActive: true,
				disabledAllBtns: true,
				basicGameFirstSquareSumTotal: 0,
				basicGameSecondSquareSumTotal: 0,
				basicGameThirdSquareSumTotal: 0,
				firstSquareSumColFive: 0,
				firstSquareSumColSix: 0,
				firstSquareSumColSeven: 0,
				secondSquareSumColFive: 0,
				secondSquareSumColSix: 0,
				secondSquareSumColSeven: 0,
				thirdSquareSumColFive: 0,
				thirdSquareSumColSix: 0,
				thirdSquareSumColSeven: 0,
				activeModalColumn: '',
				disabledUndoResultBtn: false,
				counter: 0,
				mySavedObj: {},
			}
		},
		mounted() {
			this.getFirstSquare();
			this.getSecondSquare();
			this.getThirdSquare();
			this.$bus.$on('edit:changed', () => {
				this.disabledAllBtns = !this.disabledAllBtns;
			});
			this.$bus.$on('basic-game-first-square-sum-total', (firstSquareSumTotal) => {
				this.basicGameFirstSquareSumTotal = firstSquareSumTotal;
			});
			this.$bus.$on('basic-game-second-square-sum-total', (secondSquareSumTotal) => {
				this.basicGameSecondSquareSumTotal = secondSquareSumTotal;
			});
			this.$bus.$on('basic-game-third-square-sum-total', (thirdSquareSumTotal) => {
				this.basicGameThirdSquareSumTotal = thirdSquareSumTotal;
			});
			this.$bus.$on('resetMediumGame', () => {
				this.firstSquareItems = {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': [],
					'column-5': [],
					'column-6': [],
					'column-7': [],
				};
				this.secondSquareItems = {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': [],
					'column-5': [],
					'column-6': [],
					'column-7': [],
				};
				this.thirdSquareItems = {
					'column-1': [],
					'column-2': [],
					'column-3': [],
					'column-4': [],
					'column-5': [],
					'column-6': [],
					'column-7': [],
				};
				this.showModal = false;
				this.modalOne = false;
				this.modalTwo = false;
				this.modalThree = false;
				this.modalFour = false;
				this.modalFive = false;
				this.modalSix = false;
				this.modalMax = false;
				this.modalMin = false;
				this.modalKenta = false;
				this.modalTriling = false;
				this.modalFul = false;
				this.modalPoker = false;
				this.modalYamb = false;
				this.fieldId = '';
				this.firstFulRowDisabled = false;
				this.secondFulRowDisabled = true;
				this.firstRowFulResult = 0;
				this.disabledNumber = 0;
				this.totalFieldActive = true;
				this.disabledAllBtns = true;
				this.basicGameFirstSquareSumTotal = 0;
				this.basicGameSecondSquareSumTotal = 0;
				this.basicGameThirdSquareSumTotal = 0;
				this.firstSquareSumColFive = 0;
				this.firstSquareSumColSix = 0;
				this.firstSquareSumColSeven = 0;
				this.secondSquareSumColFive = 0;
				this.secondSquareSumColSix = 0;
				this.secondSquareSumColSeven = 0;
				this.thirdSquareSumColFive = 0;
				this.thirdSquareSumColSix = 0;
				this.thirdSquareSumColSeven = 0;
				this.activeModalColumn = '';
				this.disabledUndoResultBtn = false;
				this.counter = 0;

				this.getFirstSquare();
				this.getSecondSquare();
				this.getThirdSquare();
				this.$bus.$emit('isDisabledAllButtons', this.disabledAllBtns);
			});

			if (localStorage.getItem('mediumGame')) {
				this.mySavedObj = JSON.parse(localStorage.getItem('mediumGame'));

				this.firstSquareItems = this.mySavedObj.firstSquareItems;
				this.secondSquareItems = this.mySavedObj.secondSquareItems;
				this.thirdSquareItems = this.mySavedObj.thirdSquareItems;
				this.showModal = this.mySavedObj.showModal;
				this.modalOne = this.mySavedObj.modalOne;
				this.modalTwo = this.mySavedObj.modalTwo;
				this.modalThree = this.mySavedObj.modalThree;
				this.modalFour = this.mySavedObj.modalFour;
				this.modalFive = this.mySavedObj.modalFive;
				this.modalSix = this.mySavedObj.modalSix;
				this.modalMax = this.mySavedObj.modalMax;
				this.modalMin = this.mySavedObj.modalMin;
				this.modalKenta = this.mySavedObj.modalKenta;
				this.modalTriling = this.mySavedObj.modalTriling;
				this.modalFul = this.mySavedObj.modalFul;
				this.modalPoker = this.mySavedObj.modalPoker;
				this.modalYamb = this.mySavedObj.modalYamb;
				this.fieldId = this.mySavedObj.fieldId;
				this.firstFulRowDisabled = this.mySavedObj.firstFulRowDisabled;
				this.secondFulRowDisabled = this.mySavedObj.secondFulRowDisabled;
				this.firstRowFulResult = this.mySavedObj.firstRowFulResult;
				this.disabledNumber = this.mySavedObj.disabledNumber;
				this.totalFieldActive = this.mySavedObj.totalFieldActive;
				this.disabledAllBtns = this.mySavedObj.disabledAllBtns;
				this.basicGameFirstSquareSumTotal = this.mySavedObj.basicGameFirstSquareSumTotal;
				this.basicGameSecondSquareSumTotal = this.mySavedObj.basicGameSecondSquareSumTotal;
				this.basicGameThirdSquareSumTotal = this.mySavedObj.basicGameThirdSquareSumTotal;
				this.firstSquareSumColFive = this.mySavedObj.firstSquareSumColFive;
				this.firstSquareSumColSix = this.mySavedObj.firstSquareSumColSix;
				this.firstSquareSumColSeven = this.mySavedObj.firstSquareSumColSeven;
				this.secondSquareSumColFive = this.mySavedObj.secondSquareSumColFive;
				this.secondSquareSumColSix = this.mySavedObj.secondSquareSumColSix;
				this.secondSquareSumColSeven = this.mySavedObj.secondSquareSumColSeven;
				this.thirdSquareSumColFive = this.mySavedObj.thirdSquareSumColFive;
				this.thirdSquareSumColSix = this.mySavedObj.thirdSquareSumColSix;
				this.thirdSquareSumColSeven = this.mySavedObj.thirdSquareSumColSeven;
				this.activeModalColumn = this.mySavedObj.activeModalColumn;
				this.disabledUndoResultBtn = this.mySavedObj.disabledUndoResultBtn;
				this.counter = this.mySavedObj.counter;
			}

			this.$bus.$emit('isDisabledAllButtons', this.disabledAllBtns);
		},
		updated() {
			const myObj = {
				firstSquareItems: this.firstSquareItems,
				secondSquareItems: this.secondSquareItems,
				thirdSquareItems: this.thirdSquareItems,
				showModal: this.showModal,
				modalOne: this.modalOne,
				modalTwo: this.modalTwo,
				modalThree: this.modalThree,
				modalFour: this.modalFour,
				modalFive: this.modalFive,
				modalSix: this.modalSix,
				modalMax: this.modalMax,
				modalMin: this.modalMin,
				modalKenta: this.modalKenta,
				modalTriling: this.modalTriling,
				modalFul: this.modalFul,
				modalPoker: this.modalPoker,
				modalYamb: this.modalYamb,
				fieldId: this.fieldId,
				firstFulRowDisabled: this.firstFulRowDisabled,
				secondFulRowDisabled: this.secondFulRowDisabled,
				firstRowFulResult: this.firstRowFulResult,
				disabledNumber: this.disabledNumber,
				totalFieldActive: this.totalFieldActive,
				disabledAllBtns: this.disabledAllBtns,
				basicGameFirstSquareSumTotal: this.basicGameFirstSquareSumTotal,
				basicGameSecondSquareSumTotal: this.basicGameSecondSquareSumTotal,
				basicGameThirdSquareSumTotal: this.basicGameThirdSquareSumTotal,
				firstSquareSumColFive: this.firstSquareSumColFive,
				firstSquareSumColSix: this.firstSquareSumColSix,
				firstSquareSumColSeven: this.firstSquareSumColSeven,
				secondSquareSumColFive: this.secondSquareSumColFive,
				secondSquareSumColSix: this.secondSquareSumColSix,
				secondSquareSumColSeven: this.secondSquareSumColSeven,
				thirdSquareSumColFive: this.thirdSquareSumColFive,
				thirdSquareSumColSix: this.thirdSquareSumColSix,
				thirdSquareSumColSeven: this.thirdSquareSumColSeven,
				activeModalColumn: this.activeModalColumn,
				disabledUndoResultBtn: this.disabledUndoResultBtn,
				counter: this.counter,
				firstSquareSumTotal: this.firstSquareSumTotal,
				secondSquareSumTotal: this.secondSquareSumTotal,
				thirdSquareSumTotal: this.thirdSquareSumTotal,
				totalResult: this.totalResult
			}
			localStorage.setItem('mediumGame', JSON.stringify(myObj));
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
					if (i !== 1)
						item1.disabled = true;
					item2 = {
						class: `field-2${i}`,
						id: `first-2${i}`,
						value: null
					}
					item3 = {
						class: `field-3${i}`,
						id: `first-3${i}`,
						value: null,
						disabled: true
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
					if (i !== 1)
						item6.disabled = true;
					item7 = {
						class: `field-7${i}`,
						id: `first-7${i}`,
						value: null,
						disabled: true
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
						value: null,
						disabled: true
					}
					const item2 = {
						class: `field-sec-2${i}`,
						id: `second-2${i}`,
						value: null
					}
					const item3 = {
						class: `field-sec-3${i}`,
						id: `second-3${i}`,
						value: null,
						disabled: true
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
						value: null,
						disabled: true
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
						value: null,
						disabled: true
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
					if (i !== 5)
						item3.disabled = true;
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
					if (i !== 5)
						item6.disabled = true;
					const item7 = {
						class: `field-third-7${i}`,
						id: `third-7${i}`,
						value: null,
						disabled: true
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
			setResult(val, fieldId) {
				const area = fieldId.split('-')[0];
				const col = fieldId.split('-')[1][0];
				const row = fieldId.split('-')[1][1];

				if (area === 'first') {
					const oldVal = this.firstSquareItems[`column-${col}`][`${row - 1}`].value;
					
					if (val !== '' && (oldVal === null || oldVal === ''))
						this.counter++;
					else if (val === '' && oldVal !== null && oldVal !== '')
						this.counter--;

					this.firstSquareItems[`column-${col}`][`${row - 1}`].value = val;
				}
				else if (area === 'second') {
					const oldVal = this.secondSquareItems[`column-${col}`][`${row - 1}`].value;
					
					if (val !== '' && (oldVal === null || oldVal === ''))
						this.counter++;
					else if (val === '' && oldVal !== null && oldVal !== '')
						this.counter--;

					this.secondSquareItems[`column-${col}`][`${row - 1}`].value = val;
				}
				else if (area === 'third') {
					const oldVal = this.thirdSquareItems[`column-${col}`][`${row - 1}`].value;
					
					if (val !== '' && (oldVal === null || oldVal === ''))
						this.counter++;
					else if (val === '' && oldVal !== null && oldVal !== '')
						this.counter--;

					this.thirdSquareItems[`column-${col}`][`${row - 1}`].value = val;
				}

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
			},
			firstSquareSumPerCol(col) {
				const item1 = this.firstSquareItems[`column-${col}`][0] && this.firstSquareItems[`column-${col}`][0].value ? parseFloat(this.firstSquareItems[`column-${col}`][0].value) : 0;
				const item2 = this.firstSquareItems[`column-${col}`][1] && this.firstSquareItems[`column-${col}`][1].value ? parseFloat(this.firstSquareItems[`column-${col}`][1].value) : 0;
				const item3 = this.firstSquareItems[`column-${col}`][2] && this.firstSquareItems[`column-${col}`][2].value ? parseFloat(this.firstSquareItems[`column-${col}`][2].value) : 0;
				const item4 = this.firstSquareItems[`column-${col}`][3] && this.firstSquareItems[`column-${col}`][3].value ? parseFloat(this.firstSquareItems[`column-${col}`][3].value) : 0;
				const item5 = this.firstSquareItems[`column-${col}`][4] && this.firstSquareItems[`column-${col}`][4].value ? parseFloat(this.firstSquareItems[`column-${col}`][4].value) : 0;
				const item6 = this.firstSquareItems[`column-${col}`][5] && this.firstSquareItems[`column-${col}`][5].value ? parseFloat(this.firstSquareItems[`column-${col}`][5].value) : 0;
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
			secondSquareSumPerCol(col) {
				const item1 = this.firstSquareItems[`column-${col}`][0] && this.firstSquareItems[`column-${col}`][0].value ? parseFloat(this.firstSquareItems[`column-${col}`][0].value) : 0;
				const max = this.secondSquareItems[`column-${col}`][0] && this.secondSquareItems[`column-${col}`][0].value ? parseFloat(this.secondSquareItems[`column-${col}`][0].value) : 0;
				const min = this.secondSquareItems[`column-${col}`][1] && this.secondSquareItems[`column-${col}`][1].value ? parseFloat(this.secondSquareItems[`column-${col}`][1].value) : 0;
				let filledAllFields = this.firstSquareItems[`column-${col}`][0] && this.firstSquareItems[`column-${col}`][0].value && this.secondSquareItems[`column-${col}`][0] && this.secondSquareItems[`column-${col}`][0].value && this.secondSquareItems[`column-${col}`][1] && this.secondSquareItems[`column-${col}`][1].value;

				let sum = filledAllFields ? (max - min) * item1 : 0;

				return sum;
			},
			thirdSquareSumPerCol(col) {
				const item1 = this.thirdSquareItems[`column-${col}`][0] && this.thirdSquareItems[`column-${col}`][0].value ? parseFloat(this.thirdSquareItems[`column-${col}`][0].value) : 0;
				const item2 = this.thirdSquareItems[`column-${col}`][1] && this.thirdSquareItems[`column-${col}`][1].value ? parseFloat(this.thirdSquareItems[`column-${col}`][1].value) : 0;
				const item3 = this.thirdSquareItems[`column-${col}`][2] && this.thirdSquareItems[`column-${col}`][2].value ? parseFloat(this.thirdSquareItems[`column-${col}`][2].value) : 0;
				const item4 = this.thirdSquareItems[`column-${col}`][3] && this.thirdSquareItems[`column-${col}`][3].value ? parseFloat(this.thirdSquareItems[`column-${col}`][3].value) : 0;
				const item5 = this.thirdSquareItems[`column-${col}`][4] && this.thirdSquareItems[`column-${col}`][4].value ? parseFloat(this.thirdSquareItems[`column-${col}`][4].value) : 0;
				const item6 = this.thirdSquareItems[`column-${col}`][5] && this.thirdSquareItems[`column-${col}`][5].value ? parseFloat(this.thirdSquareItems[`column-${col}`][5].value) : 0;
				let sum = item1 + item2 + item3 + item4 + item5 + item6;

				return sum;
			},
			isDarker() {
				return this.$attrs.themeColor.includes('darken-3') ? true : false;
			},
			bkgTotal() {
				let color = this.$attrs.themeColor;

				if (this.isDarker())
					return color.replace('darken-3', '');

				return color;
			},
		},
		computed: {
			firstSquareSumTotal() {
				return this.basicGameFirstSquareSumTotal + this.firstSquareSumColFive + this.firstSquareSumColSix + this.firstSquareSumColSeven;
			},
			secondSquareSumTotal() {
				return this.basicGameSecondSquareSumTotal + this.secondSquareSumColFive + this.secondSquareSumColSix + this.secondSquareSumColSeven;
			},
			thirdSquareSumTotal() {
				return this.basicGameThirdSquareSumTotal + this.thirdSquareSumColFive + this.thirdSquareSumColSix + this.thirdSquareSumColSeven;
			},
			totalResult() {
				return this.firstSquareSumTotal + this.secondSquareSumTotal + this.thirdSquareSumTotal;
			},
			getThemeColor() {
				let color = '';
				let theme = this.$attrs.themeColor;

				if (theme === 'blue')
					color = '';
				else if (theme === 'pink')
					color = '#E91E63';
				else if (theme === 'yellow')
					color = '#FFEB3B';
				else if (theme === 'deep-purple')
					color = '#673AB7';
				else if (theme === 'green')
					color = '#4CAF50';
				else if (theme === 'deep-orange')
					color = '#FF5722';
				else if (theme === 'red')
					color = '#F44336';
				else if (theme === 'indigo')
					color = '#3F51B5';
				else if (theme === 'cyan darken-3')
					color = '#00838F';
				else if (theme === 'teal')
					color = '#009688';
				else if (theme === 'lime')
					color = '#CDDC39';
				else if (theme === 'blue-grey')
					color = '#607D8B';

				return {
					'color': color, 
					'border-color': color
				};
			}
		},
		components: {
			modal,
			BasicGameFirstSquare,
			BasicGameSecondSquare,
			BasicGameThirdSquare,
			SingleColumnFirstSquare,
			SingleColumnSecondSquare,
			SingleColumnThirdSquare
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
						this.disabledUndoResultBtn = false;
						this.activeModalColumn = '';
						setTimeout(() => {
							this.modalMax = false;
							this.modalMin = false;
						}, 100);
					} else {
						if (!this.disabledAllBtns) {
							let id = this.fieldId;
							let area = id.split('-')[0];
							let field = id.slice(-1);

							// TO MIDDLE COLUMN
							if (this.activeModalColumn === 'toMiddle') {
								if (area === 'first' && this['firstSquareItems']['column-6'][field] && this[`${area}SquareItems`]['column-6'][field].value !== null && this[`${area}SquareItems`]['column-6'][field].value !== '') {
									this.disabledUndoResultBtn = true;
								}
								if (area === 'first' && field === '6' && this.secondSquareItems['column-6'][0].value !== null && this.secondSquareItems['column-6'][0].value !== '') {
									this.disabledUndoResultBtn = true;
								}
		
								if (area === 'third' && this['thirdSquareItems']['column-6'][field - 2] && this[`${area}SquareItems`]['column-6'][field - 2].value !== null && this[`${area}SquareItems`]['column-6'][field - 2].value !== '') {
									this.disabledUndoResultBtn = true;
								}
								if (area === 'third' && field === '1' && this.secondSquareItems['column-6'][1].value !== null && this.secondSquareItems['column-6'][1].value !== '') {
									this.disabledUndoResultBtn = true;
								}
							} else if (this.activeModalColumn === 'fromMiddle') {
								// FROM MIDDLE COLUMN
								if (area === 'first' && this['firstSquareItems']['column-7'][field - 2] && this[`${area}SquareItems`]['column-7'][field - 2].value !== null && this[`${area}SquareItems`]['column-7'][field - 2].value !== '') {
									this.disabledUndoResultBtn = true;
								}
								if (area === 'first' && field === '6' && this.firstSquareItems['column-7'][4].value !== null && this.firstSquareItems['column-7'][4].value !== '') {
									this.disabledUndoResultBtn = true;
								}

								if (area === 'second' && field === '1' && this.firstSquareItems['column-7'][5].value !== null && this.firstSquareItems['column-7'][5].value !== '') {
									this.disabledUndoResultBtn = true;
								}
								if (area === 'second' && field === '2' && this.thirdSquareItems['column-7'][0].value !== null && this.thirdSquareItems['column-7'][0].value !== '') {
									this.disabledUndoResultBtn = true;
								}
		
								if (area === 'third' && this['thirdSquareItems']['column-7'][field] && this[`${area}SquareItems`]['column-7'][field].value !== null && this[`${area}SquareItems`]['column-7'][field].value !== '') {
									this.disabledUndoResultBtn = true;
								}
								if (area === 'third' && field === '1' && this.thirdSquareItems['column-7'][1].value !== null && this.thirdSquareItems['column-7'][1].value !== '') {
									this.disabledUndoResultBtn = true;
								}
							} else {
								// OTHER CASES
								if (this[`${area}SquareItems`][`column-${this.odjava}`] && this[`${area}SquareItems`][`column-${this.odjava}`][field] && this[`${area}SquareItems`][`column-${this.odjava}`][field].value !== null) {
									this.disabledUndoResultBtn = true;
								}
								if (area === 'first' && field === '6' && this.secondSquareItems[`column-${this.odjava}`][0].value !== null) {
									this.disabledUndoResultBtn = true;
								}
							}
						}
						if (this.modalMax) {
							this.$nextTick(() => {
								this.$refs.maxscroller.scrollTop = 1110;
							});
						}
						if (this.modalMin) {
							this.$nextTick(() => {
								this.$refs.minscroller.scrollTop = 10;
							});
						}
					}
				}
			},
			firstSquareItems: {
				handler() {
					for (let k = this.firstSquareItems['column-1'].length - 2; k > 0; k--) {
						if (this.firstSquareItems['column-1'][k - 1].value || this.firstSquareItems['column-1'][k - 1].value === 0)
							this.firstSquareItems['column-1'][k].disabled = false;
						else
							this.firstSquareItems['column-1'][k].disabled = true;

						if (k === 5 && (this.firstSquareItems['column-1'][k].value || this.firstSquareItems['column-1'][k].value === 0)) {
							this.secondSquareItems['column-1'][0].disabled = false;
							break;
						}
						else
							this.secondSquareItems['column-1'][0].disabled = true;
					}

					for (let l = this.firstSquareItems['column-3'].length - 2; l > 0; l--) {
						if (this.firstSquareItems['column-3'][l].value || this.firstSquareItems['column-3'][l].value === 0)
							this.firstSquareItems['column-3'][l - 1].disabled = false;
						else
							this.firstSquareItems['column-3'][l - 1].disabled = true;
					}

					if (Object.keys(this.firstSquareItems).length && this.firstSquareItems['column-6']) {
						for (let n = this.firstSquareItems['column-6'].length - 2; n > 0; n--) {
							if (this.firstSquareItems['column-6'][n - 1].value || this.firstSquareItems['column-6'][n - 1].value === 0)
								this.firstSquareItems['column-6'][n].disabled = false;
							else
								this.firstSquareItems['column-6'][n].disabled = true;

							if (this.firstSquareItems['column-6'][5].value || this.firstSquareItems['column-6'][5].value === 0)
								this.secondSquareItems['column-6'][0].disabled = false;
							else
								this.secondSquareItems['column-6'][0].disabled = true;
						}
					}

					if (Object.keys(this.firstSquareItems).length && this.firstSquareItems['column-7']) {
						for (let o = this.firstSquareItems['column-7'].length - 2; o > 0; o--) {
							if (this.firstSquareItems['column-7'][o].value || this.firstSquareItems['column-7'][o].value === 0)
								this.firstSquareItems['column-7'][o - 1].disabled = false;
							else
								this.firstSquareItems['column-7'][o - 1].disabled = true;
						}
					}
				},
				deep: true
			},
			secondSquareItems: {
				handler() {
					if (this.secondSquareItems['column-1'][0].value || this.secondSquareItems['column-1'][0].value === 0)
						this.secondSquareItems['column-1'][1].disabled = false;
					else
						this.secondSquareItems['column-1'][1].disabled = true;

					if (this.secondSquareItems['column-1'][1].value || this.secondSquareItems['column-1'][1].value === 0)
						this.thirdSquareItems['column-1'][0].disabled = false;
					else
						this.thirdSquareItems['column-1'][0].disabled = true;

					if (this.secondSquareItems['column-3'][1].value || this.secondSquareItems['column-3'][1].value === 0)
						this.secondSquareItems['column-3'][0].disabled = false;
					else
						this.secondSquareItems['column-3'][0].disabled = true;

					if (this.secondSquareItems['column-3'][0].value || this.secondSquareItems['column-3'][0].value === 0)
						this.firstSquareItems['column-3'][5].disabled = false;
					else
						this.firstSquareItems['column-3'][5].disabled = true;

					if (Object.keys(this.secondSquareItems).length && this.secondSquareItems['column-7']) {
						if (this.secondSquareItems['column-7'][0].value || this.secondSquareItems['column-7'][0].value === 0)
							this.firstSquareItems['column-7'][5].disabled = false;
						else
							this.firstSquareItems['column-7'][5].disabled = true;

						if (this.secondSquareItems['column-7'][1].value || this.secondSquareItems['column-7'][1].value === 0)
							this.thirdSquareItems['column-7'][0].disabled = false;
						else
							this.thirdSquareItems['column-7'][0].disabled = true;
					}
				},
				deep: true
			},
			thirdSquareItems: {
				handler() {
					for (let l = this.thirdSquareItems['column-1'].length - 1; l > 0; l--) {
						if (this.thirdSquareItems['column-1'][l - 1].value || this.thirdSquareItems['column-1'][l - 1].value === 0)
							this.thirdSquareItems['column-1'][l].disabled = false;
						else
							this.thirdSquareItems['column-1'][l].disabled = true;
					}

					for (let m = this.thirdSquareItems['column-3'].length - 1; m > 0; m--) {
						if (this.thirdSquareItems['column-3'][m].value || this.thirdSquareItems['column-3'][m].value === 0)
							this.thirdSquareItems['column-3'][m - 1].disabled = false;
						else
							this.thirdSquareItems['column-3'][m - 1].disabled = true;

					}

					if (this.thirdSquareItems['column-3'][0].value || this.thirdSquareItems['column-3'][0].value === 0)
						this.secondSquareItems['column-3'][1].disabled = false;

					if (Object.keys(this.thirdSquareItems).length && this.thirdSquareItems['column-6']) {
						for (let n = this.thirdSquareItems['column-6'].length - 1; n > 0; n--) {
							if (this.thirdSquareItems['column-6'][n].value || this.thirdSquareItems['column-6'][n].value === 0)
								this.thirdSquareItems['column-6'][n - 1].disabled = false;
							else
								this.thirdSquareItems['column-6'][n - 1].disabled = true;

							if (this.thirdSquareItems['column-6'][0].value || this.thirdSquareItems['column-6'][0].value === 0)
								this.secondSquareItems['column-6'][1].disabled = false;
							else
								this.secondSquareItems['column-6'][1].disabled = true;
						}
					}

					if (Object.keys(this.thirdSquareItems).length && this.thirdSquareItems['column-7']) {
						for (let o = this.thirdSquareItems['column-7'].length - 1; o > 0; o--) {
							if (this.thirdSquareItems['column-7'][o - 1].value || this.thirdSquareItems['column-7'][o - 1].value === 0)
								this.thirdSquareItems['column-7'][o].disabled = false;
							else
								this.thirdSquareItems['column-7'][o].disabled = true;
						}
					}
				},
				deep: true
			},
			counter: {
				handler() {
					if (this.counter === 91) {
						this.$nextTick(() => {
							this.$bus.$emit('showTotalResult', this.totalResult);
						});
					}
				},
				deep: true
			}
		}
	}
</script>
