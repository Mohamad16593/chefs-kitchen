<template>
  <div class="container">
    <!-- ---------------landing------------------------------ -->
    <div class="landing pb-16" style="background-color: #f9fafb">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">

            <h1
              class="title text-md-left text-center text-h4 text-md-h3 font-weight-bold"
            >
              Cook anything with the experts
            </h1>
            <SlideWord
              customClass="mt-5 mb-10 text-md-left text-center"
              text="We belive that food is more than just substance...it's a way to connect,create,and celebrate.We hope you will enjoy with us ..."
            />
            <div
              class="d-flex align-center justify-center justify-md-start ga-2"
            >
              <MainButton
                to="/recipe"
                text="Lets Cook"
                variant="elevated"
                customClass="text-secondary bg-primary"
              />
              <MainButton
                to="/recipe"
                text="Explore now"
                variant="elevated"
                customClass="text-primary bg-secondary"
              />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="container position-relative">
              <v-img :src="banner"></v-img>
              <v-card
                style="
                  background-color: rgba(255, 255, 255, 50%);
                  backdrop-filter: blur(10px);
                "
                elevation="0"
                class="card-landing d-flex align-center pa-2 ga-2 rounded-lg"
              >
                <v-img class="card-img" :src="pizza"></v-img>
                <SlideWord
                  text="More than 500+ recipes."
                  customClass="font-weight-bold"
                />
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- ---------------End landing------------------------------ -->

    <!-- ---------------Features------------------------------ -->
    <slide-section custom-class="features">
      <SectionHeader
        label="Features"
        title="Get a many of interesting features."
      />
      <div class="feat-cards">
        <v-container>
          <v-row>
            <v-col
              v-for="card in cards"
              cols="12"
              sm="6"
              md="3"
              class="d-flex flex-column justify-center align-center"
            >
              <img
                :src="card.img"
                alt="featureOne"
                style="
                  width: 250px;
                  height: 250px;
                  border-radius: 50%;
                  margin-bottom: -50px;
                  z-index: 100 !important;
                  position: relative;
                "
              />
              <v-card
                class="d-flex flex-column align-center justify-scenter py-16 px-5 rounded-xl"
                style="
                  margin-top: -120px !important;
                  background: linear-gradient(to bottom, #f7f7f7, #ffffff);
                "
                elevation="0"
                height="auto"
              >
                <v-card-title class="font-weight-bold">{{
                  card.title
                }}</v-card-title>
                <SlideWord
                  :text="card.text"
                  customClass="text-center text-subtitle"
                />
                <v-btn
                  class="text-primary"
                  to="/recipe"
                  append-icon="mdi-arrow-right"
                  style="text-transform: none; font-size: 18px"
                  variant="text"
                  >Learn More</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </slide-section>

    <!-- ---------------End Features------------------------------ -->

    <!-- ---------------cook with us------------------------------ -->

    <slide-section custom-class="cook">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              :src="cook"
              alt="cook"
              max-width="100%"
              height="auto"
              contain
            />
          </v-col>
          <v-col cols="12" md="6">
            <SectionHeader
              label="cook with us"
              title="Cooking together with the expert."
            />
            <div
              class="d-flex flex-column justify-center justify-md-start align-center align-md-start"
            >
              <SlideSentence
                customClass="text-grey mt-5 text-center text-md-start"
                text="Cooking is more than preparing food—it’s a shared experience that brings people together. This title sets the scene for collaboration, where learning flows naturally between teacher and student. It highlights not just observation, but active participation guided by expertise. The process becomes interactive, where technique meets curiosity in real time. With an expert beside you, every step carries intention and insight. It’s not about perfection—it’s about growth, flavor, and confidence. Mistakes turn into lessons, and lessons turn into delicious victories. The expert becomes a partner in creativity, not just a source of instruction. Together, you build something greater than the recipe alone. In the end, it’s nourishment for the body—and the bond."
              />
              <MainButton
                to="/recipe"
                text="Learn More"
                variant="elevated"
                customClass="text-secondary bg-primary mt-10 d-flex justify-center justify-md-start"
              />
            </div>
            <v-img
              :src="burger"
              alt="burger"
              style="background-color: transparent"
              class="d-none d-md-block"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </slide-section>

    <!-- ---------------End cook with us------------------------------ -->

    <!-- ---------------Experts------------------------------ -->
    <div class="expert bg-secondary">
      <SectionHeader label="EXPERT CHEFS" title="Let's meet the expert." />
      <ClientOnly>
        <swiper
          :modules="[Autoplay, Navigation, Pagination]"
          class="d-flex pb-16" 
          :breakpoints="{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }"
          :loop="true"
          :autoplay="{ delay: 0, disableOnInteraction: false }"
          :speed="5000"
        >
          <swiper-slide v-for="(chef, index) in chefs" :key="index">
            <v-card
              class="pa-4 d-flex flex-column align-center text-center"
              style="background-color: transparent"
              elevation="0"
            >
              <div
                class="card-imgs position-relative"
                style="width: 250px; height: 250px"
              >
                <img
                  :src="chef.chefImg"
                  style="
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    border-radius: 50% 0 50% 50%;
                  "
                />
                <img
                  :src="linkedin"
                  style="
                    width: 200px;
                    height: 200px;
                    z-index: 200;
                    right: -100px;
                    bottom: -80px;
                    cursor: pointer;
                  "
                  class="position-absolute"
                />
              </div>
              <v-card-title class="font-weight-bold">{{
                chef.chefName
              }}</v-card-title>
              <SlideWord :text="chef.chefTitle" customClass="text-grey" />
            </v-card>
          </swiper-slide>
        </swiper>
      </ClientOnly>
    </div>
    <!-- ---------------End Experts------------------------------ -->

    <!-- ---------------Gallery------------------------------ -->
    <slide-section custom-class="gallery">
      <SectionHeader
        label="Our Gallery"
        title="Gallery of our cooked food."
        custom-class="mb-5"
      />
      <v-container>
        <v-row dense>
          <v-col
            v-for="(galimg, index) in galleryImgs"
            :key="index"
            cols="12"
            sm="6"
          >
            <v-hover v-slot:default="{ isHovering, props }">
              <div
                v-bind="props"
                class="food-img position-relative"
                style="overflow: hidden"
              >
                <v-img
                  :src="galimg.galleryImg"
                  width="100%"
                  style="max-height: 500px"
                  class="rounded-lg"
                  cover
                />

                <div
                  v-if="isHovering"
                  class="overlay pa-5 d-flex flex-column justify-center align-center"
                >
                  <p class="text-white text-center text-md-h4 text-h6">
                    Name: {{ galimg.name }}
                  </p>
                </div>
              </div>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </slide-section>
    <!-- ---------------End Gallery------------------------------ -->

    <!-- ---------------news-letter------------------------------ -->
    <slide-section
 
      custom-class="news-letter mt-16 mb-10 bg-primary position-relative d-block w-75  mx-auto">
      <v-img
        :src="soup"
        width="300"
        height="300"
        style="right: -50px; top: -60px"
        class="position-absolute position-absolute d-none d-md-block"
      />
      <v-img
        :src="lec"
        width="150"
        height="150"
        style="right: -50px; top: 42px"
        class="position-absolute d-none d-md-block"
      />
      <v-img
        :src="blue"
        width="25"
        height="25"
        style="bottom: 10px; right: 50px"
        class="position-absolute d-none d-md-block"
      />
      <v-img
        :src="yellow"
        width="50"
        height="50"
        style="right: 300px; bottom: 40px"
        class="position-absolute d-none d-md-block"
      />
      <v-img
        :src="onion"
        width="150"
        height="150"
        style="bottom: -75px; right: 50px"
        class="position-absolute d-none d-md-block"
      />
      <div class="news-letter-content pa-sm-10 pa-5">
        <p
          :style="{
            fontSize: '18px',
            letterSpacing: '10px',
            textTransform: 'uppercase',
          }"
        >
          newsletter
        </p>
        <h1 class="font-weight-bold">Subscribe our newsletter.</h1>
        <v-text-field
          type="email"
          class="bg-white text-primary rounded-xl pa-2 mt-4 w-100 w-sm-50"
          placeholder="@ enter your email-address"
          hide-details
          density="compact"
          variant="plain"
          :rules="emailRules"
        >
          <template v-slot:append-inner>
            <v-icon class="clickable-icon text-primary">
              mdi-arrow-right
            </v-icon>
          </template>
        </v-text-field>
      </div>
    </slide-section>
    <!-- ---------------End news-letter------------------------------ -->
  </div>
</template>
<style scoped>
.landing .card-landing {
  position: absolute;
  left: 0;
  bottom: 20px;
}
.landing .card-img {
  width: 50px;
  height: 50px;
}
.expert {
  @media (max-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 960px) {
    margin-top: -300px;
  }
}
.gallery .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  transform: translateY(100%);
}
.food-img:hover .overlay {
  animation: slideUp 1.2s ease forwards;
}
.news-letter {
  border-radius: 25px 190px 20px 25px;
}

@media (max-width: 768px) {
  .news-letter {
    border-radius: 25px 25px 20px 25px;
  }
}
.clickable-icon {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.clickable-icon:hover {
  opacity: 0.7;
}
.expert .head {
  margin-top: -220px !important;
}
@media (max-width: 960px) {
  .expert .head {
    margin-top: 50px !important;
  }
}
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}
</style>
<script setup>
import banner from "@/assets/images/banner-image.png";
import pizza from "@/assets/images/pizza.svg";
import cook from "@/assets/images/cook.png";
import burger from "@/assets/images/burger.png";
import linkedin from "@/assets/images/Linkedin.svg";
import soup from "@/assets/images/soup.svg";
import lec from "@/assets/images/lec.svg";
import blue from "@/assets/images/blue.svg";
import yellow from "@/assets/images/yellow.svg";
import onion from "@/assets/images/onion.svg";

import { galleryImgs } from "@/utilities/galleryItems";
import { chefs } from "@/utilities/expertsItems";
import { cards } from "@/utilities/servicesItems";

//swiper configuration
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const emailRules = [
  (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "E-mail must be valid",
];
</script>
