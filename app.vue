<template>
  <div>
    <AppPreloader v-if="loading" />
    <nuxtLayout v-else>
      <NuxtPage />
    </nuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.6s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(500px);
}
</style>
<script setup>
import { onMounted, ref } from "vue";
import AppPreloader from "~/components/AppPreloader.vue";

const loading = ref(true);
onMounted(() => {
  setTimeout(() => (loading.value = false), 2000);
});

useSeoMeta({
  title: "Chef's Kitchen",
  ogTitle: "Chef's Kitchen",
  description:
    "Welcome to food website you will find here a lot of delicious food meals ",
  ogDescription:
    "Welcome to food website you will find here a lot of delicious food meals",
  // ogImage: "fav-icon.svg", must be url's
  //ogUrl ,ogType
  keywords:
    "food kitchen delivery salad chicken cheese soup vegitables banana apple diet",
  robots: "index, follow",
});
</script>
