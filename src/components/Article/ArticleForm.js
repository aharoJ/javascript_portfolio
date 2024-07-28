// components/ArticleForm.js
import { useState, useEffect } from "react";

const ArticleForm = ({ onSubmit, articleData }) => {
  const [article, setArticle] = useState({
    title: "",
    summary: "",
    imageUrl: "",
    link: "",
  });

  useEffect(() => {
    // If articleData is provided, we"re in "edit" mode and should populate the form fields
    if (articleData) {
      setArticle(articleData);
    }
  }, [articleData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(article);
    setArticle({ title: "", summary: "", imageUrl: "", link: "" }); // Clear form after submit
  };

  return (
    <form onSubmit={handleSubmit} className="article-form">
      <input
        name="title"
        value={article.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="summary"
        value={article.summary}
        onChange={handleChange}
        placeholder="Summary"
        required
      />
      <input
        name="imageUrl"
        value={article.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        name="link"
        value={article.link}
        onChange={handleChange}
        placeholder="Article Link"
      />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default ArticleForm;
