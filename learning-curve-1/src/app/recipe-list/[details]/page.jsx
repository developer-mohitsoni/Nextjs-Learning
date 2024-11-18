import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const response = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(e);
  }
}

export default async function RecipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
}
