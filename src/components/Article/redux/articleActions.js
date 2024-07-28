// Action Types
export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const ADD_ARTICLE = "ADD_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const SET_EDITING_ARTICLE = "SET_EDITING_ARTICLE";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const ARTICLE_URL = process.env.NEXT_PUBLIC_ARTICLES_API;

// I think this talks directly to the endpoint
export const fetchArticles = () => async (dispatch) => {
  try {
    const response = await fetch(`${ARTICLE_URL}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({ type: FETCH_ARTICLES, payload: data });
  } catch (error) {
    console.error("Error fetching articles:", error); // Handle the error appropriately
  }
};

export const addArticle = (article) => async (dispatch) => {
  try {
    const response = await fetch(`${ARTICLE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({ type: ADD_ARTICLE, payload: data });
  } catch (error) {
    console.error("Error adding article:", error); // Handle the error appropriately
  }
};

export const updateArticle = (id, article) => async (dispatch) => {
  try {
    const response = await fetch(`${ARTICLE_URL}/ ${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({ type: UPDATE_ARTICLE, payload: data });
  } catch (error) {
    console.error("Error updating article:", error); // Handle the error appropriately
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${ARTICLE_URL}/ ${id}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    dispatch({ type: DELETE_ARTICLE, payload: id });
  } catch (error) {
    console.error("Error deleting article:", error); // Handle the error appropriately
  }
};

export const setEditingArticle = (article) => ({
  type: SET_EDITING_ARTICLE,
  payload: article,
});
