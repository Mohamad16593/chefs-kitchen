<template>
  <section
    class="feat-header mt-16 d-flex flex-column align-center justify-content-center"
    :class="customClass"
  >
    <p
      class="text-primary"
      :style="{
        fontSize: '18px',
        letterSpacing: '10px',
        textTransform: 'uppercase',
      }"
    >
      {{ label }}
    </p>

    <slide-word
      :text="title"
      custom-class="font-weight-bold text-center text-h5"
    ></slide-word>
  </section>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: "Label" },
  title: { type: String, default: "Section Title" },
  customClass: {
    type: String,
    default: "",
  },
});
</script>
