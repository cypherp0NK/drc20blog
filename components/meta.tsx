import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

const Meta = () => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/fav.jpeg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/fav.jpeg" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/fav.jpeg" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/assets/fav.jpeg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="DRC20 tutorial, DRC20 guide, and reference to use Dogecoin's new DRC20 tokens. An article that talks about Dogecoin's move from meme to mainstream"
      />
      <meta property="og:image" content="/assets/fav.jpeg" />
    </Head>
  );
};

export default Meta;
