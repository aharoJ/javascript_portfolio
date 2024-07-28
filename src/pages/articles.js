import AnimatedText from "@/components/animation/TextAnimation";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Head from "next/head";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/animation/TransitionEffect";
const FramerImage = motion(Image);
import under_devlopment from "public/images/articles/actively_dev.jpeg";
import more_development from "public/images/articles/work-to-be-done.jpeg";
import brain from "public/images/articles/brain.jpg";

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(500);
    // x.set(event.pageX
    y.set(0);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline hover:decoration-sky-400/80 hover:underline-offset-4 ">
        {title}
      </h2>

      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="absolute z-10 hidden h-auto w-96 rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative my-4 flex w-full items-center justify-center rounded-xl border
      border-b-4 border-r-8 border-solid border-dark bg-light p-4 py-6
      text-dark first:mt-0 dark:border-light dark:bg-dark dark:text-light
      sm:flex-col
      "
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="pl-4 font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {" "}
        {date}{" "}
      </span>
    </motion.li>
  );
};

const FeatureArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark dark:text-light">
      <div
        className="absolute -right-3 top-0 -z-10 h-[102%] w-[101%] rounded-[2rem] rounded-br-3xl
        bg-dark  dark:bg-light xs:-right-1.5 xs:rounded-br-2xl "
      />
      <Link
        href={link}
        target="_blank"
        className="inline-block w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="my-2 mt-4 text-2xl font-bold capitalize hover:underline hover:decoration-sky-400/80 xs:text-lg ">
          {title}
        </h2>
      </Link>
      <p className="mb-2 text-sm">{summary}</p>
      <span className="font-semibold text-primary dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title> aharoJ | Articles </title>
        <meta name="description" content="Created by aharoJ" />
      </Head>
      <TransitionEffect />

      <main className="mb-16 flex w-full flex-col items-center justify-center overflow-hidden dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="M y B l o g s | A r t i c l e s"
            className="mb-16 font-extralight normal-case tracking-tighter lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
            "
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 ">
            <FeatureArticle
              title="this section is actively under devoplment"
              summary="abcdefghijklmnopqrstuvwxyz"
              time="9 min read"
              link="/"
              img={under_devlopment}
            />

            <FeatureArticle
              title="this section is actively under devoplment"
              summary="abcdefghijklmnopqrstuvwxyz"
              time="9 min read"
              link="/"
              img={brain}
            />
          </ul>
          <h2 className="my-16 mt-32 w-full text-center text-4xl font-bold">
            {" "}
            Actively in Development
          </h2>
          <ul>
            <Article
              title="abcdefghijklmnopqrstuvwxyz"
              date="June 30, 1990"
              link="/"
              img={more_development}
            />

            <Article
              title="abcdefghijklmnopqrstuvwxyz"
              date="Jan 00, 100 B.C."
              link="/"
              img={more_development}
            />

            <Article
              title="abcdefghijklmnopqrstuvwxyz"
              date="December 44, 2048"
              link="/"
              img={more_development}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
