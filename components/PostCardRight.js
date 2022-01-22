import Image from 'next/image';
import postsStyles from '../styles/posts.module.css';
import Link from 'next/link';
import parseDate from '../lib/parseDate';

const PostCardRight = ({ id, image, title, authors, summary, date }) => (
  <Link href={`posts/${id}`}>
    <div className={postsStyles.container}>
      <div className={postsStyles.info}>
        <div className={postsStyles.row} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <h3 className={postsStyles.title}>{title}</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p className={postsStyles.creators}>{authors}</p>
          <p className={postsStyles.date}>{parseDate(date)}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p style={{ textAlign: 'left' }}>{summary}</p>
        </div>
      </div>

      <div className={postsStyles.banner}>
        <Image src={image} layout="fill" />
      </div>
    </div>
  </Link>
);

export default PostCardRight;
