<template>
  <v-footer class="position-relative bg-secondary">
    <v-container>
      <v-row>
        <v-col cols="6" xs="4" sm="3">
          <ChefsKitchen class="pb-4 ga-5" />
          <SlideWord
            custom-class="mb-3  text-start font-subtitle-2"
            text="Open an account in minutes, get full financial control for much longer."
          />
          <div class="social d-flex justify-center justify-md-start ga-5">
            <v-btn
              v-for="icon in icons"
              icon
              :href="icon.link"
              target="_blank"
              class="text-black bg-white"
              width="30"
              height="30"
            >
              <v-icon class="text-primary">{{ icon.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="6"
          xs="4"
          sm="3"
          v-for="(section, index) in footerLinks"
          :key="index"
        >
          <h4>{{ section.title }}</h4>
          <v-list density="compact" class="pa-0 ma-0 bg-secondary" nav>
            <v-list-item
              class="pa-0 ma-0 text-body-2"
              v-for="(item, idx) in section.items"
              :key="idx"
              :href="item.href"
              target="_blank"
              style="cursor: pointer"
              variant="plain"
            >
              {{ item.text }}
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12" md="8">
          <div
            class="text-grey d-flex align-center justify-center justify-md-start"
            style="font-size: 12px"
          >
            @{{ new Date().getFullYear() }} — Chef's kitchen. Distributed By
            ThemeWagon and Developed by Mohamad wakkaf
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div
            class="text-grey d-flex align-center justify-md-end justify-center ga-3"
            style="font-size: 12px"
          >
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script setup>
const icons = [
  {
    link: "https://facebook.com",
    icon: "mdi-facebook",
  },
  {
    link: "https://instagram.com",
    icon: "mdi-instagram",
  },
  {
    link: "https://twitter.com",
    icon: "mdi-twitter",
  },
];

const footerLinks = [
  {
    title: "Company",
    items: [
      { text: "About", href: "https://www.google.com/about" },
      { text: "Career", href: "https://www.google.com/Career" },
      { text: "Mobile", href: "https://www.google.com/Mobile" },
      { text: "Blog", href: "https://www.google.com/Blog" },
      { text: "How we work?", href: "https://www.google.com/How we work?" },
    ],
  },
  {
    title: "Information",
    items: [
      { text: "Help/FAQ", href: "https://www.google.com/Help/FAQ" },
      { text: "Press", href: "https://www.google.com/Press" },
      { text: "Affiliates", href: "https://www.google.com/Affiliates" },
      { text: "Hotel Owners", href: "https://www.google.com/Hotel-Owners" },
      { text: "Partners", href: "https://www.google.com/Partners" },
    ],
  },
  {
    title: "More",
    items: [
      { text: "Home", href: "https://www.google.com/Home" },
      { text: "About us", href: "https://www.google.com/About us" },
      { text: "Recipe", href: "https://www.google.com/Recipe" },
      { text: "Gallery", href: "https://www.google.com/Gallery" },
    ],
  },
];
</script>
