<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-3 text-primary text-center text-sm-left">About Us</h1>
        <SlideSentence
          customClass="text-center text-sm-left"
          text="Welcome to Chef's Kitchen , You're go to destination for delicious
          recipes and culinary inspiration . our mission is to make cooking
          accessible and enjoyable for everyone from beginners to seasoned chefs
          .We belive that food is more than just substance ; it's a way to
          connect ,create , and celebrate.
        "
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" v-for="owner in owners" class="my-3">
        <v-card
          class="d-flex flex-column align-center justify-center"
          elevation="0"
        >
          <v-img
            :src="owner.image"
            width="200"
            height="200"
            rounded="circle"
          ></v-img>
          <slide-word
            :text="owner.name"
            custom-class="font-weight-bold text-primary"
          ></slide-word>
          <slide-word :text="owner.title"></slide-word>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import own1 from "@/assets/images/owner-1.png";
import own2 from "@/assets/images/owner-2.png";
import own3 from "@/assets/images/owner-3.png";

const owners = [
  {
    image: own1,
    name: "Mark Thompson",
    title: "Head Chef & Recipe Developer",
  },
  {
    image: own2,
    name: "Lara Michel",
    title: "Food Photographer & Stylist",
  },
  {
    image: own3,
    name: "Ibraham Tomas",
    title: "Content Manager & Editor",
  },
];
</script>
