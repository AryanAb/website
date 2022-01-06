import postStyles from "../styles/post.module.css";

import ScrollIndicator from "./ScrollIndicator";

import Link from "next/link";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { H1, H2, H3, H4, P, Img } from "./PostParts";

const Post = ({ children, meta }) => {
  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    img: Img
  }
  return (
    <MDXProvider components={components}>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
      </Head>
      <ScrollIndicator />
      <div className={postStyles.wrapper}>
        <div className={postStyles.sidenav}>
          <ul>
            <li key="backToWebsite" style={{ paddingLeft: 0, display: "flex", justifyContent: 'center' }}><Link href="/">🔙 Back to Website</Link></li>
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
    </MDXProvider>
  );
};

export default Post;
