<script setup>
import { useError, clearError } from "#app";
const error = useError();
const handleBack = () => clearError({ redirect: "/" });
</script>
<template>
  <div
    class="d-flex flex-column align-center justify-center bg-secondary"
    style="width: 100%; height: 100vh"
  >
    <ChefsKitchen />
    <div class="d-flex justify-center align-center">
      <v-icon size="64" color="primary">mdi-alert-circle</v-icon>

      <h1 class="ml-2">{{ error?.statusCode || "Oops" }} Access Error</h1>
    </div>
    <p class="text-body-1 mb-6">
      {{ error?.message || "Something went wrong." }}
    </p>
    <v-btn variant="outlined" color="primary" @click="handleBack"
      >Back to Home</v-btn
    >
  </div>
</template>
