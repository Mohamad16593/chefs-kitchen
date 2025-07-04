<template>
  <div class="sign-in w-100 d-flex align-center justify-center">
    <div
      class="content w-md-50 w-100 mx-5 mx-mx-0 d-flex flex-column justify-center align-center"
    >
      <ChefsKitchen class="py-7" />
      <div class="btns d-flex align-center justify-center ga-3">
        <v-btn
          color="primary"
          append-icon="mdi-google"
          style="text-transform: none"
          >Sign Up</v-btn
        >
        <v-btn
          color="primary"
          append-icon="mdi-github"
          style="text-transform: none"
          >Sign Up</v-btn
        >
      </div>
      <p class="my-10">OR</p>
      <v-form class="w-100" v-model="valid" @submit.prevent="onSubmit">
        <v-text-field
          v-model="name"
          variant="outlined"
          label="Full Name"
          class="mb-5"
          color="primary"
          :rules="nameRules"
          prepend-icon="mdi-account"
          required
        />
        <v-text-field
          variant="outlined"
          color="primary"
          class="mb-5"
          v-model="email"
          label="Email"
          :rules="emailRules"
          prepend-icon="mdi-email"
          type="email"
          required
        />

        <v-text-field
          v-model="password"
          label="Password"
          variant="outlined"
          color="primary"
          :rules="passwordRules"
          prepend-icon="mdi-lock"
          type="password"
          required
        />

        <v-btn
          :disabled="!valid"
          type="submit"
          color="primary"
          style="text-transform: none"
          class="mt-4 mx-auto d-block"
        >
          Sign Up
        </v-btn>
      </v-form>
      <p class="text-center my-3">
        By creating an account you are agree with our
        <span class="text-primary">privacy</span> and
        <span class="text-primary">policy</span>
      </p>
      <div class="w-100 d-flex justify-end">
        <v-btn
          to="/"
          color="primary"
          variant="text"
          style="text-transform: none"
          >Back to home</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
  layout: false,
});
const name = ref("");
const email = ref("");
const password = ref("");

const valid = ref(false);

const nameRules = [
  (v) => !!v || "Name is required",
  (v) =>
    /^[a-zA-Z\s]{2,30}$/.test(v) || "Only letters and spaces, 2–30 characters",
];

const emailRules = [
  (v) => !!v || "Email is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];

const passwordRules = [
  (v) => !!v || "Password is required",
  (v) => v.length >= 6 || "Minimum 6 characters",
  (v) => /[A-Z]/.test(v) || "At least one uppercase letter required",
  (v) => /[^A-Za-z0-9]/.test(v) || "At least one special character required",
];

const onSubmit = () => {
  // TODO: Handle authentication logic
  console.log("Form Submitted:", {
    email: email.value,
    password: password.value,
  });
  email.value = "";
  password.value = "";
};
</script>
