import postStyles from "../styles/post.module.css";

import ScrollIndicator from "./ScrollIndicator";

import Link from "next/link";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { H1, H2, H3, H4, P, Img } from "./PostParts";

import { useRef } from 'react';
import { Html } from "next/document";

const Post = ({ children, meta }) => {

  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    img: Img
  };

  return (
    <MDXProvider components={components}>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
      </Head>
      <body>
        <ScrollIndicator />
        <div className={postStyles.wrapper}>
          <div className={postStyles.sidenav}>
            <ul>
              <li key="backToWebsite" style={{ paddingLeft: 0, display: "flex", justifyContent: 'center' }}><Link href="/">🔙 Back to Website</Link></li>
              <li key="separator" className={postStyles.separator} />
              <li key="title" style={{ paddingLeft: 0, display: "flex", justifyContent: 'center', textAlign: 'center' }}>{meta.title}</li>
              <li key="toc" className={postStyles.subheader}>Table of Contents</li>
              {meta.sections.map(section => <li key={section} className={postStyles.sections}><a style={{ margin: 0, display: 'block', width: '100%', height: '100%' }} href={`#${section.replace(' ', '_')}`}>{section}</a></li>)}
            </ul>
          </div>
          <main className={postStyles.main}>
            {children}
          </main>
        </div>
      </body>
    </MDXProvider>
  );
};

export default Post;
