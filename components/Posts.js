import PostCard from "./PostCards";
import postsStyles from '../styles/posts.module.css';

const Posts = ({ posts }) => {
  return (
    <div className={postsStyles.wrapper}>
      {posts.map(post => <PostCard id={post.id} image={post.image} title={post.title} authors={post.authors} date={post.date} summary={post.summary} />)}
    </div>)
};

export default Posts;
