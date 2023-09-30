// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import bookmarkView from './views/bookmarkView';
import addRecipeView from './views/addRecipeView';
import paginationView from './views/paginationView';
import { state } from './model';
import {MODAL_CLOSE_SEC} from './config';


const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 0. Update result view to mark selected search results
    resultsView.update(model.getSearchResultPage());
    // 1. Updating Bookmark View
    bookmarkView.update(model.state.bookmarks);
    // 2. Loading Recipe
    await model.loadRecipe(id);
    // 3. Rendering Recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    recipeView.renderError();
    console.log(err);
  }
};

const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner();

    // 1. Get Search Query
    const query = searchView.getQuery();
    if (!query) return;
    // 2. Load Search Results
    await model.loadSearchResults(query);
    // 3. Render Search Results
    resultsView.render(model.getSearchResultPage());
    // 4. Render Pagination
    paginationView.render(model.state.search);
  }catch (err){
    console.log(err);
  }
};

const controlPagination = function(goToPage) {
  // 1. Render New Search Results
  resultsView.render(model.getSearchResultPage(goToPage));
  // 2. Render New Pagination
  paginationView.render(model.state.search);
};

const controlServing = function(newServings) {
  //Update recipe servings
  model.updateServing(newServings);
  //Update the recipe View
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlBookmark = function() {
  // 1. Add/Remove bookmark
  if (model.state.recipe.bookmarked) model.removeBookmark(model.state.recipe.id);
  else model.addBookmark(model.state.recipe);
  // 2. Update Recipe View
  recipeView.update(model.state.recipe);
  // 3. Render Bookmark View
  bookmarkView.render(model.state.bookmarks);
};

const controlBookmarks = function(){
  bookmarkView.render(model.state.bookmarks);
}

const controlAddRecipe = async function(newRecipe) {
  try {
    // Add Spinner
    addRecipeView.renderSpinner();
    // Upload New recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    // Render recipe
    recipeView.render(model.state.recipe);
    // Render Massage
    addRecipeView.renderMessage();
    // Render bookmark View
    bookmarkView.render(model.state.bookmarks);
    // Change id in URL
    window.history.pushState(null,'',`#${model.state.recipe.id}`);
    // Closing Form window
    setTimeout(function (){
      addRecipeView.toggleWindow()},MODAL_CLOSE_SEC * 1000);
  }catch (err){
    console.error(err,'😀😀😀');
    addRecipeView.renderError(err.message);
  }
};

const init = function(){
  bookmarkView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServing);
  recipeView.addHandlerBookmark(controlBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerRender(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
