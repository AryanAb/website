import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import Title from "../components/Title";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const postsData = getSortedPostsData();
  return {
    props: {
      postsData
    }
  }
}

const postsPage = ({ postsData }) => {
  return (
    <body>
      <Navbar />

      <main style={{ marginTop: 80, marginBottom: 20 }}>
        <Title str="Posts" />
        <Posts posts={postsData} onLeft />
      </main>
    </body>
  );
};

export default postsPage;
