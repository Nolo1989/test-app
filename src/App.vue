<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <modal :show="showModal" @closeModal="showModal = false" class="confirmation-modal">
      <div slot="header" class="modal-title-wrapper">
        <p class="modal-title">Da li ste sigurni da zelite da napustite igru?</p>
      </div>
      <div slot="body">
        <button class="modal-btn" @click="showModal = false">NE</button>
        <button class="modal-btn blue" @click="goToDashboard()">DA</button>
      </div>
    </modal>
    <div class="back-btn-wrap" @click="openModal()">
        <img src="./images/arrow-down-outline.svg" alt="Down icon" class="icon" />
    </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import modal from './common/modal.vue';
export default {
  name: 'App',

  data: () => ({
    showModal: false
  }),
  mounted() {
    this.$bus.$on('openModal', () => {
      this.openModal();
    });
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    goToDashboard() {
      this.$router.push({ name: 'Dashboard' });
      this.showModal = false;
    }
  },
  components: {
    modal
  }
};
</script>

<style src="./styles/style.scss" lang="scss"></style>
