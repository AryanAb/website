import Link from "next/link";

const SelectedPosts = ({ posts }) => (
  posts.map(post => <Link href={`posts/${post.id}`} >{post.id}</Link>)
);

export default SelectedPosts;
