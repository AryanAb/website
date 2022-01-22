import Image from 'next/image';
import postsStyles from '../styles/posts.module.css';
import Link from 'next/link';
import parseDate from '../lib/parseDate';

const PostCardLeft = ({ id, image, title, authors, summary, date }) => (
  <Link href={`posts/${id}`}>
    <div className={postsStyles.container}>
      <div className={postsStyles.banner}>
        <Image src={image} layout="fill" />
      </div>

      <div className={postsStyles.info}>
        <div className={postsStyles.row} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <h3 className={postsStyles.title}>{title}</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <p className={postsStyles.creators} style={{ marginLeft: 0, marginRight: 20 }}>{authors}</p>
          <p className={postsStyles.date} style={{ marginLeft: 0, marginRight: 20 }}>{parseDate(date)}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p style={{ textAlign: 'left' }}>{summary}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default PostCardLeft;
