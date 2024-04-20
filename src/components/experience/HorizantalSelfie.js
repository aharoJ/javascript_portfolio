import React from "react";
import Image from "next/image";
import k from "public/images/profile/k.png";

const HorizantalSelfie = () => {
  return (
    <>
      <div
        className="relative mb-5 flex h-auto w-[100%] rounded-2xl border-0
        border-solid border-dark bg-light dark:bg-gray-600 md:w-[100%] xs:w-[80%]"
      >
        <div className="absolute -right-2 top-0 -z-20 h-[102%] w-[100%] rounded-[1.5rem] bg-dark dark:bg-white" />
        <Image
          src={k}
          alt="horizantal-pic"
          className="h-auto w-full rounded-xl"
          priority
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </>
  );
};

export default HorizantalSelfie;
