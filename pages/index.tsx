import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts, getPostBySlug } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import type PostType from "../interfaces/post";
import PostHeader from "../components/post-header";
import PostTitle from "../components/post-title";
import PostBody from "../components/post-body";
import markdownToHtml from "../lib/markdownToHtml";

// type Props = {
//   allPosts: Post[];
// };
type Props = {
  post: PostType;
  allPosts: Post[];
  preview?: boolean;
};
export default function Index({ post, allPosts, preview }: Props) {
  const title = `${post.title} | Web3 Blog`;
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{`DRC20`}</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head>
        <Container>
          <Intro />
          <article className="mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
            {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </article>

          {/* <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const post = getPostBySlug("drc20-explained", [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
      },
    },
  };
}
// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     "title",
//     "date",
//     "slug",
//     "author",
//     "coverImage",
//     "excerpt",
//   ]);

//   return {
//     props: { allPosts },
//   };
// };
