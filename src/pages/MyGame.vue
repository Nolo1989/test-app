<template>
	<section class="page-wrap">
		<template v-if="!showMyGame">
			<div class="my-game-draft">
				<div class="column" v-if="basicGame">
					<div class="draft-field blue">Y</div>
					<div class="draft-field">1</div>
					<div class="draft-field">2</div>
					<div class="draft-field">3</div>
					<div class="draft-field">4</div>
					<div class="draft-field">5</div>
					<div class="draft-field">6</div>
					<div class="draft-field blue">S</div>
					<div class="draft-field smaller">MAX</div>
					<div class="draft-field smaller">MIN</div>
					<div class="draft-field blue">S</div>
					<div class="draft-field">K</div>
					<div class="draft-field">T</div>
					<div class="draft-field">F</div>
					<div class="draft-field">P</div>
					<div class="draft-field">Y</div>
					<div class="draft-field blue without-border">S</div>
				</div>
				<div class="column" v-if="basicGame">
					<div class="draft-field blue">
						<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
					</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue">0</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue">0</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue without-border">0</div>
				</div>
				<div class="column" v-if="basicGame">
					<div class="draft-field blue">
						<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
						<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
					</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue">0</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue">0</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue without-border">0</div>
				</div>
				<div class="column" v-if="basicGame">
					<div class="draft-field blue">
						<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
					</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue">0</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue">0</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue without-border">0</div>
				</div>
				<div class="column" v-if="basicGame">
					<div class="draft-field blue">N</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue">0</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue">0</div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field"></div>
					<div class="draft-field blue without-border">0</div>
				</div>
				<transition name="bounce">
					<div class="column" v-if="R" :style="{'order': rOrder}">
						<div class="draft-field blue">R</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue without-border">0</div>
					</div>
				</transition>
				<transition name="bounce">
					<div class="column" v-if="D" :style="{'order': dOrder}">
						<div class="draft-field blue">D</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue without-border">0</div>
					</div>
				</transition>
				<transition name="bounce">
					<div class="column" v-if="toMiddle" :style="{'order': toMiddleOrder}">
						<div class="draft-field blue to-middle">
							<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
							<div class="divider"></div>
							<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
						</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue without-border">0</div>
					</div>
				</transition>
				<transition name="bounce">
					<div class="column" v-if="fromMiddle" :style="{'order': fromMiddleOrder}">
						<div class="draft-field blue from-middle">
							<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
							<div class="divider"></div>
							<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
						</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue without-border">0</div>
					</div>
				</transition>
				<transition name="bounce">
					<div class="column" v-if="O" :style="{'order': oOrder}">
						<div class="draft-field blue">O</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue without-border">0</div>
					</div>
				</transition>
				<transition name="bounce">
					<div class="column" v-if="M" :style="{'order': mOrder}">
						<div class="draft-field blue">M</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue without-border">0</div>
					</div>
				</transition>
				<transition name="bounce">
					<div class="column last-column" style="order: 12">
						<div class="draft-field blue">Y</div>
						<div class="draft-field without-border"></div>
						<div class="draft-field without-border"></div>
						<div class="draft-field without-border"></div>
						<div class="draft-field without-border"></div>
						<div class="draft-field without-border"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field without-border"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue">0</div>
						<div class="draft-field without-border"></div>
						<div class="draft-field without-border"></div>
						<div class="draft-field without-border"></div>
						<div class="draft-field without-border"></div>
						<div class="draft-field"></div>
						<div class="draft-field blue without-border">0</div>
					</div>
				</transition>
			</div>
			<div class="choose-my-game">
				<div class="selected-games-wrap">
					<h1 class="choose-my-game-title">Izabrane igre:</h1>
					<div class="selected-columns">
						<div class="selected-column" style="order: 1">OSNOVNA IGRA</div>
						<div class="choose-game" v-if="R" @click="toggleR()" :style="{'order': rOrder}">R <span class="close">X</span> </div>
						<div class="choose-game" v-if="D" @click="toggleD()" :style="{'order': dOrder}">D <span class="close">X</span> </div>
						<div class="choose-game" v-if="toMiddle"  @click="toggleToMiddle()" :style="{'order': toMiddleOrder}">
							<div class="draft-field to-middle">
								<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
								<div class="divider"></div>
								<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
							</div>
							<span class="close">X</span>
						</div>
						<div class="choose-game" v-if="fromMiddle" @click="toggleFromMiddle()" :style="{'order': fromMiddleOrder}">
							<div class="draft-field from-middle">
								<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
								<div class="divider"></div>
								<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
							</div>
							<span class="close">X</span>
						</div>
						<div class="choose-game" v-if="O" @click="toggleO()" :style="{'order': oOrder}">O <span class="close">X</span> </div>
						<div class="choose-game" v-if="M" @click="toggleM()" :style="{'order': mOrder}">M <span class="close">X</span> </div>
					</div>
				</div>
				<div class="choose-game-wrap">
					<h1 class="choose-my-game-title">Izaberite igru:</h1>
					<div class="choose-games">
						<div class="choose-game" v-if="!R" @click="toggleR()">R</div>
						<div class="choose-game" v-if="!D" @click="toggleD()">D</div>
						<div class="choose-game" v-if="!toMiddle" @click="toggleToMiddle()">
							<div class="draft-field to-middle">
								<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
								<div class="divider"></div>
								<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
							</div>
						</div>
						<div class="choose-game" v-if="!fromMiddle" @click="toggleFromMiddle()">
							<div class="draft-field from-middle">
								<img src="../images/arrow-up-outline.svg" alt="Up icon" class="icon" />
								<div class="divider"></div>
								<img src="../images/arrow-down-outline.svg" alt="Down icon" class="icon" />
							</div>
						</div>
						<div class="choose-game" v-if="!O" @click="toggleO()">O</div>
						<div class="choose-game" v-if="!M" @click="toggleM()">M</div>
					</div>
				</div>
			</div>
			<button class="btn-continue" @click="goToMyGameData()">Nastavite dalje</button>
		</template>

		<KeepAlive v-else>
			<my-game-yamb :myGameData="myGameData"></my-game-yamb>
		</KeepAlive>
	</section>
</template>

<script>
	import MyGameYamb from '../components/myGameYamb.vue';

	export default {
		name: 'MyGame',
		data() {
			return {
				basicGame: true,
				R: false,
				D: false,
				toMiddle: false,
				fromMiddle: false,
				O: false,
				M: false,
				rOrder: null,
				dOrder: null,
				toMiddleOrder: null,
				fromMiddleOrder: null,
				oOrder: null,
				mOrder: null,
				numOfGames: 5,
				myGameData: [],
				showMyGame: false,
			};
		},
		methods: {
			toggleR() {
				if (this.R) {
					this.R = false;
					this.numOfGames--;
					this.rOrder = null;
				}
				else {
					this.R = true;
					this.numOfGames++;
					this.rOrder = this.numOfGames;
				}
			},
			toggleD() {
				if (this.D) {
					this.D = false;
					this.numOfGames--;
					this.dOrder = null;
				}
				else {
					this.D = true;
					this.numOfGames++;
					this.dOrder = this.numOfGames;
				}
			},
			toggleToMiddle() {
				if (this.toMiddle) {
					this.toMiddle = false;
					this.numOfGames--;
					this.toMiddleOrder = null;
				}
				else {
					this.toMiddle = true;
					this.numOfGames++;
					this.toMiddleOrder = this.numOfGames;
				}
			},
			toggleFromMiddle() {
				if (this.fromMiddle) {
					this.fromMiddle = false;
					this.numOfGames--;
					this.fromMiddleOrder = null;
				}
				else {
					this.fromMiddle = true;
					this.numOfGames++;
					this.fromMiddleOrder = this.numOfGames;
				}
			},
			toggleO() {
				if (this.O) {
					this.O = false;
					this.numOfGames--;
					this.oOrder = null;
				}
				else {
					this.O = true;
					this.numOfGames++;
					this.oOrder = this.numOfGames;
				}
			},
			toggleM() {
				if (this.M) {
					this.M = false;
					this.numOfGames--;
					this.mOrder = null;
				}
				else {
					this.M = true;
					this.numOfGames++;
					this.mOrder = this.numOfGames;
				}
			},
			goToMyGameData() {
				const data = [];

				if (this.R) {
					data.push({
						game: 'R',
						order: this.rOrder
					});
				}
				if (this.D) {
					data.push({
						game: 'D',
						order: this.dOrder
					});
				}
				if (this.toMiddle) {
					data.push({
						game: 'toMiddle',
						order: this.toMiddleOrder
					});
				}
				if (this.fromMiddle) {
					data.push({
						game: 'fromMiddle',
						order: this.fromMiddleOrder
					});
				}
				if (this.O) {
					data.push({
						game: 'O',
						order: this.oOrder
					});
				}
				if (this.M) {
					data.push({
						game: 'M',
						order: this.mOrder
					});
				}

				this.myGameData = data;
				this.showMyGame = true;
			}
		},
		watch: {
			// numOfGames: {
			// 	handler(newVal, oldVal) {
			// 		if (newVal < oldVal) {
			// 			this.rOrder ? this.rOrder-- : '';
			// 			this.dOrder ? this.dOrder-- : '';
			// 			this.toMiddleOrder ? this.toMiddleOrder-- : '';
			// 			this.fromMiddleOrder ? this.fromMiddleOrder-- : '';
			// 			this.oOrder ? this.oOrder-- : '';
			// 			this.mOrder ? this.mOrder-- : '';
			// 		}
			// 	}
			// },
			rOrder: {
				handler(newVal, oldVal) {
					if (newVal === null) {
						if (this.dOrder && this.dOrder > oldVal)
							this.dOrder--;
						if (this.toMiddleOrder && this.toMiddleOrder > oldVal)
							this.toMiddleOrder--;
						if (this.fromMiddleOrder && this.fromMiddleOrder > oldVal)
							this.fromMiddleOrder--;
						if (this.oOrder && this.oOrder > oldVal)
							this.oOrder--;
						if (this.mOrder && this.mOrder > oldVal)
							this.mOrder--;
					}
				}
			},
			dOrder: {
				handler(newVal, oldVal) {
					if (newVal === null) {
						if (this.rOrder && this.rOrder > oldVal)
							this.rOrder--;
						if (this.toMiddleOrder && this.toMiddleOrder > oldVal)
							this.toMiddleOrder--;
						if (this.fromMiddleOrder && this.fromMiddleOrder > oldVal)
							this.fromMiddleOrder--;
						if (this.oOrder && this.oOrder > oldVal)
							this.oOrder--;
						if (this.mOrder && this.mOrder > oldVal)
							this.mOrder--;
					}
				}
			},
			toMiddleOrder: {
				handler(newVal, oldVal) {
					if (newVal === null) {
						if (this.rOrder && this.rOrder > oldVal)
							this.rOrder--;
						if (this.dOrder && this.dOrder > oldVal)
							this.dOrder--;
						if (this.fromMiddleOrder && this.fromMiddleOrder > oldVal)
							this.fromMiddleOrder--;
						if (this.oOrder && this.oOrder > oldVal)
							this.oOrder--;
						if (this.mOrder && this.mOrder > oldVal)
							this.mOrder--;
					}
				}
			},
			fromMiddleOrder: {
				handler(newVal, oldVal) {
					if (newVal === null) {
						if (this.rOrder && this.rOrder > oldVal)
							this.rOrder--;
						if (this.dOrder && this.dOrder > oldVal)
							this.dOrder--;
						if (this.toMiddleOrder && this.toMiddleOrder > oldVal)
							this.toMiddleOrder--;
						if (this.oOrder && this.oOrder > oldVal)
							this.oOrder--;
						if (this.mOrder && this.mOrder > oldVal)
							this.mOrder--;
					}
				}
			},
			oOrder: {
				handler(newVal, oldVal) {
					if (newVal === null) {
						if (this.rOrder && this.rOrder > oldVal)
							this.rOrder--;
						if (this.dOrder && this.dOrder > oldVal)
							this.dOrder--;
						if (this.toMiddleOrder && this.toMiddleOrder > oldVal)
							this.toMiddleOrder--;
						if (this.fromMiddleOrder && this.fromMiddleOrder > oldVal)
							this.fromMiddleOrder--;
						if (this.mOrder && this.mOrder > oldVal)
							this.mOrder--;
					}
				}
			},
			mOrder: {
				handler(newVal, oldVal) {
					if (newVal === null) {
						if (this.rOrder && this.rOrder > oldVal)
							this.rOrder--;
						if (this.dOrder && this.dOrder > oldVal)
							this.dOrder--;
						if (this.toMiddleOrder && this.toMiddleOrder > oldVal)
							this.toMiddleOrder--;
						if (this.fromMiddleOrder && this.fromMiddleOrder > oldVal)
							this.fromMiddleOrder--;
						if (this.oOrder && this.oOrder > oldVal)
							this.oOrder--;
					}
				}
			},
			
		},
		components: {
			MyGameYamb
		}
	}
</script>