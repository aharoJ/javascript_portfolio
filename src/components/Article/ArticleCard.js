import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="mx-auto my-12 max-w-3xl overflow-hidden rounded-2xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <h2 className=" block text-2xl font-medium leading-tight text-black">
            {article.title}
          </h2>
          <p className="mt-2 text-gray-500">{article.summary}</p>
          {article.imageUrl && (
            <img
              className="mt-2 h-auto w-full object-cover"
              src={article.imageUrl}
              alt={article.title}
            />
          )}
          {article.link && (
            <a
              href={article.link}
              className="text-blue-500 hover:text-blue-800"
            >
              Read more
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
