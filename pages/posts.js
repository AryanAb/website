import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import Title from "../components/Title";
import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";

export async function getStaticProps() {
  const postsData = await getSortedPostsData();
  return {
    props: {
      postsData,
    },
  };
}

const postsPage = ({ postsData }) => {
  return (
    <>
      <Head>
        <title> Posts | Ari Abed </title>

        <meta property="og:title" content="Aryan Abed" />
        <meta
          property="og:url"
          content="https://website-aryanab.vercel.app/posts"
        />
        <meta property="og:image" content="/images/fun.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="See a full list of my blog posts and read them if you want :)"
        />
      </Head>

      <body>
        <Navbar />

        <main style={{ marginTop: 80, marginBottom: 20 }}>
          <Title str="Posts" />
          <Posts posts={postsData} onLeft />
        </main>
      </body>
    </>
  );
};

export default postsPage;
