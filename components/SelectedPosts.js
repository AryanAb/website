import Link from "next/link";

const SelectedPosts = ({ posts }) => {
	return (
		posts.map(post => <Link href={`posts/${post.id}`} >{post.id}</Link>)
	);
};

export default SelectedPosts;
