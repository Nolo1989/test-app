<template>
  <v-app>
    <v-app-bar
      app
      :color="themeColor"
      dark
      class="header darken-2"
    >
    <modal :show="showModal" @closeModal="[showModal = false, showTotalResult = false, showResetModal = false, showMyGameModal= false]" class="confirmation-modal" :class="{'show-animation': showTotalResult}">
      <div slot="header" class="modal-title-wrapper">
        <p class="modal-title" v-if="showResetModal">
          <span>Da li želite da započnete novu igru?</span>
        </p>
        <p class="modal-title" v-else-if="showMyGameModal">
          <span>Da li želite da nastavite započetu igru?</span>
        </p>
        <p class="modal-title" v-else-if="showTotalResult">
          <span>Partija je završena!</span>
          <span class="blocked-elem">Vaš rezultat je:</span>
        </p>
        <template v-else>
          <p class="modal-title" v-if="$route.name === 'Dashboard'">Da li želite da napustite igru?</p>
          <p class="modal-title" v-else>Da li želite da napustite partiju?</p>
        </template>
      </div>
      <div slot="body">
        <template v-if="showResetModal">
          <button class="modal-btn" :style="getThemeColor" @click="closeResetModal()">NE</button>
          <button class="modal-btn white-color" :class="themeColor" @click="resetGame()">DA</button>
        </template>

        <template v-else-if="showMyGameModal">
          <button class="modal-btn" :style="getThemeColor" @click="goToMyGame(false)">NE</button>
          <button class="modal-btn white-color" :class="themeColor" @click="goToMyGame(true)">DA</button>
        </template>
        
        <div v-else-if="showTotalResult" class="modal-result total-field active" :class="themeColor" style="border-color: #000 !important;">{{ totalResult }}</div>

        <template v-else>
          <button class="modal-btn" :style="getThemeColor" @click="showModal = false">NE</button>
          <button class="modal-btn white-color" :class="themeColor" @click="$route.name === 'Dashboard' ? exitApp() : goToDashboard()">DA</button>
        </template>
      </div>
    </modal>
    <div class="back-btn-wrap" :class="{'not-clickable': notClickable}" @click="openModal()">
        <img src="./images/arrow-down-outline.svg" alt="Down icon" class="icon" />
    </div>
    <template v-if="($route.name !== 'Dashboard' && $route.name !== 'MyGame') || ($route.name === 'MyGame' && showEye)">
      <div class="eye-btn-wrap reset" @click="openModalForResetGame()">
          <img src="./images/reset.svg" alt="Reset" class="icon" />
          <p class="text show">Reset</p>
      </div>
      <div class="eye-btn-wrap" v-if="!enableEdit" @click="editChanged()">
          <img src="./images/eye-off.svg" alt="Hide" class="icon" />
          <p class="text show">Izmeni</p>
      </div>
      <div class="eye-btn-wrap" v-else @click="editChanged()">
          <img src="./images/eye-on.svg" alt="Show" class="icon" />
          <p class="text show">Izmeni</p>
      </div>
    </template>
    <template v-if="$route.name === 'Dashboard'">
      <div class="change-theme" @click="openChangeThemeModal()">
          <img src="./images/change-theme-icon.jpg" alt="Change theme" />
      </div>
    </template>
    <div id="modal-container" @click.prevent="closeChangeThemeModal()">
      <div class="modal-background">
        <div class="modal" @click.stop>
          <h2>Izaberite svoju temu:</h2>
          <div class="choose-color">
            <div class="color blue" @click="setThemeColor('blue')"></div>
            <div class="color pink" @click="setThemeColor('pink')"></div>
            <div class="color yellow" @click="setThemeColor('yellow')"></div>
            <div class="color deep-purple" @click="setThemeColor('deep-purple')"></div>
            <div class="color green" @click="setThemeColor('green')"></div>
            <div class="color deep-orange" @click="setThemeColor('deep-orange')"></div>
            <div class="color red" @click="setThemeColor('red')"></div>
            <div class="color indigo" @click="setThemeColor('indigo')"></div>
            <div class="color cyan darken-3" @click="setThemeColor('cyan darken-3')"></div>
            <div class="color teal" @click="setThemeColor('teal')"></div>
            <div class="color lime" @click="setThemeColor('lime')"></div>
            <div class="color blue-grey" @click="setThemeColor('blue-grey')"></div>
          </div>
        </div>
      </div>
    </div>
    </v-app-bar>

    <v-main>
      <router-view :themeColor="themeColor"></router-view>
    </v-main>
  </v-app>
</template>

<script>

import modal from './common/modal.vue';
import { App } from '@capacitor/app';
import { KeepAwake } from '@capacitor-community/keep-awake';

// https://stackoverflow.com/questions/65542665/error-package-android-view-does-not-exist
KeepAwake.keepAwake();

window.screen.orientation.lock('portrait');
window.screen.orientation.unlock('landscape');

export default {
  name: 'App',

  data: () => ({
    showModal: false,
    enableEdit: false,
    showEye: false,
    showTotalResult: false,
    totalResult: 0,
    themeColor: 'blue',
    notClickable: false,
    showResetModal: false,
    showMyGameModal: false,
  }),
  mounted() {
    this.$bus.$on('openModal', () => {
      this.openModal();
    });
    this.$bus.$on('edit:hide', () => {
      this.enableEdit = false;
    });
    this.$bus.$on('showEyeBtn', show => {
      this.showEye = show; 
    });
    this.$bus.$on('showTotalResult', res => {
      this.totalResult = res;
      this.showTotalResult = true;
      this.openModal();
    });

    const rememberedTheme = localStorage.getItem('themeColor');

    if (rememberedTheme)
      this.setThemeColor(rememberedTheme);

    App.addListener('backButton', () => {
      this.openModal();
    });

    this.$bus.$on('isDisabledAllButtons', (isDisabledAllBtns) => {
      this.enableEdit = !isDisabledAllBtns;
    });
  },
  methods: {
    exitApp() {
      App.exitApp();
    },
    openModal() {
      this.showModal = true;
    },
    goToDashboard() {
      this.$router.push({ name: 'Dashboard' });
      this.showModal = false;
    },
    editChanged() {
      this.$bus.$emit('edit:changed');
      this.enableEdit = !this.enableEdit;
    },
    openChangeThemeModal() {
      var modalContainer = document.querySelector('#modal-container');
      var body = document.getElementsByTagName('body')[0];

      this.notClickable = true;
      modalContainer.removeAttribute('class');
      modalContainer.classList.add('one')
      body.classList.add('modal-active');
    },
    closeChangeThemeModal() {
      var modalContainer = document.querySelector('#modal-container');
      var body = document.getElementsByTagName('body')[0];

      this.notClickable = false;
      modalContainer.classList.add('out');
      body.classList.remove('modal-active');
    },
    setThemeColor(color) {
      this.themeColor = color;
      localStorage.setItem('themeColor', color);
      this.closeChangeThemeModal();
    },
    openModalForResetGame() {
      this.showModal = true;
      this.showResetModal = true;
    },
    closeResetModal() {
      this.showModal = false;
      this.showResetModal = false;
    },
    resetGame() {
      const component = this.$route.name;

      if (component === 'SmallGame')
        this.$bus.$emit('resetSmallGame');
      if (component === 'MediumGame')
        this.$bus.$emit('resetMediumGame');
      if (component === 'LargeGame')
        this.$bus.$emit('resetLargeGame');
      if (component === 'MyGame')
        this.$bus.$emit('resetMyGame');

      this.showModal = false;
      this.showResetModal = false;
    },
    goToMyGame(flag) {
      this.showModal = false;
      this.showMyGameModal = false;
      this.$bus.$emit('isExistedGame', flag);
    }
  },
  computed: {
    getThemeColor() {
			let color = '';
			if (this.themeColor === 'blue')
				color = '';
			else if (this.themeColor === 'pink')
				color = '#E91E63';
			else if (this.themeColor === 'yellow')
				color = '#FFEB3B';
			else if (this.themeColor === 'deep-purple')
				color = '#673AB7';
			else if (this.themeColor === 'green')
				color = '#4CAF50';
			else if (this.themeColor === 'deep-orange')
				color = '#FF5722';
			else if (this.themeColor === 'red')
				color = '#F44336';
			else if (this.themeColor === 'indigo')
				color = '#3F51B5';
			else if (this.themeColor === 'cyan darken-3')
				color = '#00838F';
			else if (this.themeColor === 'teal')
				color = '#009688';
			else if (this.themeColor === 'lime')
				color = '#CDDC39';
			else if (this.themeColor === 'blue-grey')
				color = '#607D8B';

			return {
        'color': color,
				'border-color': color
			};
		}
  },
  components: {
    modal
  }
};
</script>

<style src="./styles/style.scss" lang="scss"></style>
