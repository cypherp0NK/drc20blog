import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline flex flex-row items-center">
        <Image
          src="/assets/fav.jpeg"
          // src="https://ipfs.io/ipfs/QmPS17FAqPkzsFKo41FugkZSuEQqMGG6p7316rvyL3NTBq"
          alt="img"
          width={40}
          height={40}
        />
        <span>{"Web3"}</span>
      </Link>
      {/* . */}
    </h2>
  );
};

export default Header;
