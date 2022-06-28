import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'pages/posts');

export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = [];
  for (let fileName of fileNames) {
    try {
      const id = fileName.replace(/\.mdx$/, '');

      const { meta } = await import(`../pages/posts/${fileName}`);
      allPostsData.push({id, ...meta});
    } catch (err) {
      console.error(err);
    }
  }

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return - 1;
    } else {
      return 0;
    }
  });
}