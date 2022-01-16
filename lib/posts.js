import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'pages/posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {

    const id = fileName.replace(/\.mdx$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const str = fileContents.split('{/* end of meta data */}')[0].split('=')[1];
    const meta = JSON.parse(str);

    return { id, ...meta };
  });

  return allPostsData.sort(({ data: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return - 1;
    } else {
      return 0;
    }
  });
}