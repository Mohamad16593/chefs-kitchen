<template>
  <v-btn
    :to="to"
    :class="['text-sm-subtitle text-subtitle-2', customClass]"
    rounded
    color="primary"
    :variant="variant"
    size="large"
    >{{ text }}</v-btn
  >
</template>
<script setup>
defineProps({
  to: String,
  text: String,
  variant: String,
  customClass: {
    type: String,
    default: "",
  },
});
</script>
