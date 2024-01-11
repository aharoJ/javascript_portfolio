import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="max-w-3xl mx-auto my-12 bg-white rounded-2xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <h2 className=" block text-2xl leading-tight font-medium text-black">
            {article.title}
          </h2>
          <p className="mt-2 text-gray-500">
            {article.summary}
          </p>
          {article.imageUrl && (
          <img className="w-full h-auto object-cover mt-2" 
            src={article.imageUrl} alt={article.title} 
          />
          )}
          {article.link && (
          <a href={article.link} className="text-blue-500 hover:text-blue-800"
            >Read more
          </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;