import PostCardRight from "./PostCardRight";
import PostCardLeft from "./PostCardLeft";
import postsStyles from '../styles/posts.module.css';

const Posts = ({ posts, onLeft }) => {
  if (onLeft) {
    return (
      <div className={postsStyles.wrapper}>
        {posts.map(post => <PostCardLeft id={post.id} image={post.image} title={post.title} authors={post.authors} date={post.date} summary={post.summary} />)}
      </div>
    );
  } else {
    return (
      <div className={postsStyles.wrapper}>
        {posts.map(post => <PostCardRight id={post.id} image={post.image} title={post.title} authors={post.authors} date={post.date} summary={post.summary} />)}
      </div>
    );
  }
};

export default Posts;
