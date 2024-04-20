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

function LanguageTabs() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="container-for-language-tabs">
      <div className="flex flex-wrap justify-center gap-10 text-xl font-semibold">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`flex items-center rounded-xl border px-4 py-3 text-dark ${
              activeTab === index
                ? "bg-gray-200 dark:bg-orange-200"
                : "bg-white"
            }`}
            onClick={() => toggleTab(index)}
          >
            <tab.icon className="mx-3 text-2xl" />
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab !== null && (
          <div className="mx-6 p-2 text-2xl font-light text-gray-500 dark:text-orange-200">
            {tabsData[activeTab].content}
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageTabs;
