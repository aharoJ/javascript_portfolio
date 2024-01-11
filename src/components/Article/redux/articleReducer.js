import { FETCH_ARTICLES, ADD_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE, SET_EDITING_ARTICLE } from './articleActions';

const initialState = {
  articles: [],
  editingArticle: null,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) 
  {
    case FETCH_ARTICLES:
      return { ...state, articles: action.payload };

    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };

    case UPDATE_ARTICLE:
      return {
        ...state,
        articles: state.articles.map((article) =>
          article.id === action.payload.id ? action.payload : article
        ),
      };
    
    case SET_EDITING_ARTICLE:
      return { ...state, editingArticle: action.payload };

    case DELETE_ARTICLE:
      return { 
        ...state, 
        articles: state.articles.filter(article => article.id !== action.payload)
      };

    default:
      return state;
  }
};

export default articleReducer;
