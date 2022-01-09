<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="header"
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
    <div class="eye-btn-wrap" v-if="!enableEdit" @click="editChanged()">
        <img src="./images/eye-off.svg" alt="Hide" class="icon" />
        <p class="text show">Prikazi</p>
    </div>
    <div class="eye-btn-wrap" v-else @click="editChanged()">
        <img src="./images/eye-on.svg" alt="Show" class="icon" />
        <p class="text">Sakrij</p>
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
    showModal: false,
    enableEdit: false
  }),
  mounted() {
    this.$bus.$on('openModal', () => {
      this.openModal();
    });
    this.$bus.$on('edit:hide', () => {
      this.enableEdit = false;
    });
  },
  methods: {
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
    }
  },
  components: {
    modal
  }
};
</script>

<style src="./styles/style.scss" lang="scss"></style>
