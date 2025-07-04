<template>
  <div class="logo d-flex align-center justify-start">
    <v-img :src="logo" style="width: 55px; height: 55px" contain></v-img>
    <p class="text-lg-h5 text-sm-h8 font-weight-bold text-primary">
      Chef's Kitchen.
    </p>
  </div>
</template>
<script setup>
import logo from "@/assets/images/Logo.svg";
</script>
