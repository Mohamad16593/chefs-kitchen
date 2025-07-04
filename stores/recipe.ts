import { defineStore } from "pinia";
interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  image: string;
  instructions?: string[];
  cuisine: string;
  rating?: number;
  mealType: string[];
}
export const useRecipeStore = defineStore("recipes", {
  state: () => ({
    recipes: [] as Recipe[],
    isLoaded: false,
    error: null as string | null,
  }),
  actions: {
    async fetchRecipes() {
      if (this.isLoaded) return;
      try {
        const { data } = await useFetch<{ recipes: Recipe[] }>(
          "https://dummyjson.com/recipes"
        );
        this.recipes = data.value?.recipes || [];
        this.isLoaded = true;
      } catch (e: unknown) {
        if (e instanceof Error) {
          this.error = e.message;
        } else {
          this.error = "Something went wrong";
        }
      }
    },
  },
});
