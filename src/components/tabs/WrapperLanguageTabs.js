import React, { useState } from "react";
import { FaJava, FaDatabase } from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGnubash,
} from "react-icons/si";

const tabsData = [
  {
    label: "JAVA",
    icon: FaJava,
    content:
      "Spring-Boot | Spring-Security | Maven | MVC | LittleDarwin | Pitest | Junit | JPA | Hibernate | Thymeleaf | JDBC | JavaFX | JavaSwing",
  },
  {
    label: "DATABASES",
    icon: FaDatabase,
    content: "MySQL | PostgreSQL | SQLite | NoSQL | CassandraDB",
  },
  {
    label: "SCRIPTING",
    icon: SiGnubash,
    content: "Bash | Zsh | Lua | Yaml | Toml | Tmux | Vim | Nvim | Skhd",
  },
  {
    label: "PYTHON",
    icon: SiPython,
    content:
      "Django | Flask | TensorFlow | Pandas | Seaborn | NumPy | Matplotlib |  Poetry | Pipenv | Jupyter ",
  },
  {
    label: "JAVASCRIPT",
    icon: SiJavascript,
    content:
      "React.js | Next.js | HTML&CSS | TailwindCSS | React-Icons | Framer-Motion",
  },
  {
    label: "TYPESCRIPT",
    icon: SiTypescript,
    content: "React.js | HTML&CSS | TailwindCSS | React-Icons | Framer-Motion",
  },
];

function WrapperLanguageTabs() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-2">
        {tabsData.map((tab, index) => (
          <React.Fragment key={index}>
            <button
              className={`flex items-center rounded-lg border-2 px-4 py-2 text-lg font-semibold transition duration-300 ease-out dark:text-white ${
                activeTab === index
                  ? "border-gray-300 bg-gray-300 dark:border-cyan-500 dark:bg-gray-700" // ACTIVE
                  : "border-gray-200 bg-white  dark:border-cyan-100 dark:bg-gray-500" // NON-ACTIVE
              }`}
              onClick={() => toggleTab(index)}
            >
              <tab.icon className="mr-6" />
              {tab.label}
            </button>
            {activeTab === index && (
              <div
                className="text-md rounded-lg border border-gray-200 bg-gray-100 dark:bg-gray-700 dark:text-white p-2 font-normal 
                  text-gray-600 opacity-100 transition-opacity duration-300 ease-out"
              >
                {tab.content}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default WrapperLanguageTabs;
