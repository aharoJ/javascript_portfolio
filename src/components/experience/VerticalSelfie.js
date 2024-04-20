import Link from "next/link";
import Image from "next/image";
import React from "react";
import profile_pic from "public/images/profile/aharoJ.jpg";

const VerticalSelfie = () => {
  return (
    <>
      <div className="flex w-[55%] flex-col p-2 md:mb-8 md:w-[90%] md:items-center md:justify-center">
        <div
          className=" relative h-auto w-auto rounded-3xl border-2 border-solid border-dark 
            bg-light p-2 hover:border-4 hover:border-pink-900 
            dark:bg-dark dark:hover:border-orange-200 xl:col-span-4 md:order-1 md:col-span-8 sm:col-span-12 
            "
        >
          <div className=" justify-content absolute -right-3 top-0 -z-20 h-[101.5%] w-[103%] rounded-[2rem] bg-dark dark:bg-light/60" />
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       IMAGE         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <Image
            src={profile_pic}
            alt="aharoJ"
            className=" h-auto w-full rounded-2xl"
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       GITHUB         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="justify-content mt-2 self-start lg:self-center">
            <Link
              href="https://github.com/aharoJ"
              target={"_blank"}
              className="mt-2 flex items-center justify-center rounded-lg border border-solid border-transparent
                bg-gray-800 p-0 text-base text-light hover:border-dark hover:bg-light
                hover:text-dark dark:bg-gray-400 hover:dark:border-light
                hover:dark:bg-dark hover:dark:text-light md:mx-4
                md:p-2 xs:p-0.5 xs:text-sm"
             >
              <p className="text-2xl font-extrabold tracking-tight">Github</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalSelfie;
