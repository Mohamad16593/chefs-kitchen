<template>
  <v-container>
    <v-row class="mb-16 mt-5">
      <v-col cols="12" md="6">
        <h2 class="text-primary">{{ recipe.name }}</h2>
        <v-rating
          :model-value="recipe.rating"
          readonly
          color="amber"
          size="small"
          density="comfortable"
          half-increment
        />
        <h4 class="mb-4">
          Origin : {{ recipe.cuisine }} - Calories :
          {{ recipe.caloriesPerServing }}
        </h4>
        <h3>ingredients :</h3>
        <v-list density="compact">
          <v-list-item
            style="min-height: 32px"
            v-for="(ingredient, index) in recipe.ingredients"
            :key="index"
            class="text-subtitle-2"
            >{{ index + 1 }}. {{ ingredient }}</v-list-item
          >
        </v-list>
        <h3>How to cook ?</h3>
        <v-list density="compact">
          <v-list-item
            style="min-height: 32px"
            v-for="(instruction, index) in recipe.instructions"
            :key="index"
            >{{ index + 1 }}. {{ instruction }}</v-list-item
          >
        </v-list>
      </v-col>
      <v-col cols="12" md="6">
        <v-img :src="recipe.image" class="rounded-xl"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const route = useRoute();
const recipeId = Number(route.params.id);
const recipeStore = useRecipeStore();
const recipes = recipeStore.recipes;
const recipe = computed(() => {
  return recipes.find((r) => r.id === recipeId);
});
if (!recipe.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Receipe Not Found",
  });
}
</script>
