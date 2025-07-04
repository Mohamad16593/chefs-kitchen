export default defineNuxtRouteMiddleware(async () => {
  const store = useRecipeStore();
  if (!store.isLoaded) {
    await store.fetchRecipes();
  }
});
