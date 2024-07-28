import { useDispatch } from "react-redux";
import { setEditingArticle } from "./redux/articleActions";

// components/ArticleList.js
const ArticleList = ({ articles, onDelete }) => {
  const dispatch = useDispatch();

  const handleEdit = (article) => {
    dispatch(setEditingArticle(article));
  };

  return (
    <div className="articles-container">
      {articles.map((article) => (
        <div key={article.id} className="article-item">
          <h2>{article.title}</h2>
          {/* Add buttons for editing and deleting */}
          <button onClick={() => handleEdit(article)}>Edit</button>
          <button onClick={() => onDelete(article.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
