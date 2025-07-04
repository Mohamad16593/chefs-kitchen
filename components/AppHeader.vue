<template>
  <client-only>
    <v-app-bar
      app
      v-if="$vuetify.display.mdAndUp"
      class="px-10"
      elevation="0"
      scroll-behavior="hide"
      scroll-threshold="100"
      style="
        background-color: rgb(251 251 251 / 30%);
        backdrop-filter: blur(20px);
      "
    >
      <div class="w-100 d-flex justify-space-between">
        <ChefsKitchen class="mx-2" />
        <v-list
          class="d-flex justify-space-between align-center ga-5"
          style="background-color: transparent"
        >
          <v-list-item
            class="text-primary text-lg-h6 text-sm-h9"
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            tag="NuxtLink"
            variant="plain"
          >
            {{ item.name }}
          </v-list-item>
        </v-list>
        <div class="d-flex align-center justify-center">
          <MainButton to="/login" text="Sign In" variant="text" />
          <MainButton to="/signup" text="Sign Up" variant="text" />
        </div>
      </div>
    </v-app-bar>

    <!-- app bar on small screens -->

    <v-app-bar
      v-else
      elevation="0"
      scroll-behavior="hide"
      scroll-threshold="100"
      style="
        background-color: rgb(251 251 251 / 30%);
        backdrop-filter: blur(20px);
      "
      app
    >
      <div class="w-100 d-flex justify-space-between">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          color="primary"
        ></v-app-bar-nav-icon>
        <ChefsKitchen />
        <div></div>
      </div>
    </v-app-bar>
  </client-only>

  <v-navigation-drawer
    v-model="drawer"
    v-if="showDrawer"
    temporary
    elevation="0"
    style="
      background-color: rgb(251 251 251 / 30%);
      backdrop-filter: blur(20px);
    "
  >
    <v-list>
      <v-list-item
        class="text-primary text-h9"
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        tag="NuxtLink"
        variant="text"
      >
        {{ item.name }}
      </v-list-item>
    </v-list>
    <div class="d-flex flex-column justify-center align-center mt-10 ga-4">
      <MainButton to="/login" text="Sign In" variant="outlined" />
      <MainButton to="/signup" text="Sign Up" variant="outlined" />
    </div>
  </v-navigation-drawer>
</template>
<script setup>
import { navItems } from "@/utilities/navItems";
import { ref, onMounted, onUnmounted } from "vue";

//for Drawer
const showDrawer = ref(false);
onMounted(() => {
  showDrawer.value = window.innerWidth < 768;
});

const drawer = ref(false);
</script>
<style scoped>
.v-list-item--active {
  border-bottom: 3px solid #df6853;
}
.v-list-item--variant-text .v-list-item__overlay {
  background-color: white !important;
}
</style>
