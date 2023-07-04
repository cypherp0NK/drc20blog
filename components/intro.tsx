import { CMS_NAME } from "../lib/constants";
import Header from "./header";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="flex-row flex items-center mt-16 mb-16 md:mb-12">
      <Image
        src="/assets/fav.jpeg"
        // src="https://ipfs.io/ipfs/QmPS17FAqPkzsFKo41FugkZSuEQqMGG6p7316rvyL3NTBq"
        alt="img"
        width={40}
        height={40}
      />
      <h1 className="text-5xl font-bold tracking-tighter leading-tight">
        <span>{"Web3"}</span>
      </h1>
      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4> */}
    </section>
  );
};

export default Intro;
