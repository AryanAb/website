import postStyles from "../styles/post.module.css";

import ScrollIndicator from "./ScrollIndicator";

const Post = ({ children, meta }) => {
  return (
    <>
      <ScrollIndicator />
      <div className={postStyles.wrapper}>
        <div className={postStyles.sidenav}>
          <ul>
            <li key="backToWebsite">Back to Website</li>
            <li key="separator" className={postStyles.separator} />
            <li key="title" style={{ paddingLeft: 0, display: "flex", justifyContent: 'center' }}>{meta.title}</li>
            <li key="toc" className={postStyles.subheader}>Table of Contents</li>
            {meta.sections.map(section => <li key={section} className={postStyles.sections} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>{section}</li>)}
          </ul>
        </div>
        <main className={postStyles.main}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Post;
