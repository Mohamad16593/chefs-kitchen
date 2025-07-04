<template>
  <v-container class="my-6">
    <h1 class="mb-6 text-primary text-center text-sm-left">Recipes List</h1>

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="searchQuery"
          label="Search for a recipe..."
          prepend-inner-icon="mdi-magnify"
          clearable
          class="text-primary"
          color="primary"
          variant="outlined"
        />

        <v-list v-if="results?.recipes?.length">
          <v-list-item
            v-for="recipe in results.recipes"
            :key="recipe.id"
            @click="goToMeal(recipe.id)"
            class="cursor-pointer text-primary"
            density="compact"
          >
            <v-list-item-title>{{ recipe.name }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <div v-else-if="!pending && searchQuery">
          <p>No recipes found for "{{ searchQuery }}".</p>
        </div>
      </v-col>
      <v-col cols="12">
        <v-tabs v-model="selectedMealType" show-arrows color="primary">
          <v-tab v-for="type in mealTypes" :key="type" :value="type">
            {{ type }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col
        cols="12"
        md="4"
        lg="3"
        v-for="recipe in filteredMeals"
        :key="recipe.id"
        class="my-2"
      >
        <v-card style="justify-items: center" elevation="0">
          <v-img
            :src="recipe.image"
            height="200px"
            class="w-100 rounded-lg"
            cover
          />
          <v-card-title class="text-subtitle-1 text-primary">
            {{ recipe.name }}</v-card-title
          >
          <v-card-subtitle class="d-flex align-center justify-center ga-3">
            <v-rating
              :model-value="recipe.rating"
              readonly
              color="amber"
              size="small"
              density="comfortable"
              half-increment
            />
            <span class="text-grey-darken-1" style="font-size: 12px">{{
              recipe.rating
            }}</span>
          </v-card-subtitle>
          <v-btn
            @click="goToMeal(recipe.id)"
            class="text-primary my-4"
            variant="outlined"
            >Details</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useRecipeStore } from "~/stores/recipe";

//fetching data with api
const recipeStore = useRecipeStore();
await recipeStore.fetchRecipes();
const recipes = computed(() => recipeStore.recipes);

//getting available meals types
const mealTypes = computed(() => {
  const types = new Set();
  recipes.value.forEach((recipe) =>
    recipe.mealType.forEach((t) => types.add(t))
  );
  return Array.from(types);
});
//for the tabs
const selectedMealType = ref(mealTypes.value[0]); //start with the first type

//meals filtering by type
const filteredMeals = computed(() => {
  return recipes.value.filter((recipe) =>
    recipe.mealType.includes(selectedMealType.value)
  );
});
//Go to meal page when click the button
const router = useRouter();
const goToMeal = (id) => {
  if (!id) return;
  router.push(`/meals/${id}`);
};

//For Searching
const searchQuery = ref("");
const timeout = ref(null);
const {
  data: results,
  pending,
  error,
  refresh,
} = useFetch(
  () =>
    searchQuery.value.trim()
      ? `https://dummyjson.com/recipes/search?q=${searchQuery.value}`
      : null,
  {
    immediate: false, // Don't fetch on component mount
  }
);
watch(searchQuery, (newVal) => {
  clearTimeout(timeout.value);
  if (!newVal.trim()) {
    results.value = null;
    return;
  }
});

timeout.value = setTimeout(async () => {
  try {
    await refresh(); // trigger useFetch
  } catch (err) {
    console.error("Search failed:", err);
  }
}, 400);
// results.value.recipes = your data

// pending.value = loading state

// error.value = caught errors
</script>
