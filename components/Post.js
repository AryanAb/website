import postStyles from "../styles/post.module.css";

import ScrollIndicator from "./ScrollIndicator";

import Link from "next/link";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { H1, H2, H3, H4, P, Img } from "./PostParts";
import CommentSection from "./CommentSection";

const Post = ({ children, meta }) => {
  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    img: Img,
  };

  return (
    <MDXProvider components={components}>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        />
        {/* <link rel="stylesheet" href="https://unpkg.com/prism-themes@1.9.0/themes/prism-vsc-dark-plus.css" /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
          integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"
          crossOrigin="anonymous"
        />

        <title>{meta.title} | Ari Abed</title>

        <meta property="og:title" content={meta.title} />
        <meta
          property="og:url"
          content="https://website-aryanab.vercel.app/posts"
        />
        <meta property="og:image" content={meta.image} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={meta.summary} />
      </Head>
      <ScrollIndicator />
      <div className={postStyles.wrapper}>
        <nav className={postStyles.sidenav}>
          <ul>
            <li
              key="backToWebsite"
              style={{
                paddingLeft: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link href="/">🔙 Back to Website</Link>
            </li>
            <li key="separator" className={postStyles.separator} />
            <li
              key="title"
              style={{
                paddingLeft: 0,
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {meta.title}
            </li>
            <li key="toc" className={postStyles.subheader}>
              Table of Contents
            </li>
            {meta.sections.map((section) => (
              <li key={section} className={postStyles.sections}>
                <a
                  style={{
                    margin: 0,
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                  href={`#${section.replace(" ", "_")}`}
                >
                  {section}
                </a>
              </li>
            ))}
            <hr
              style={{
                color: "rgba(0, 0, 0, 0.7)",
                marginLeft: "15px",
                marginRight: "15px",
              }}
            />
            <li key="other" className={postStyles.subheader}>
              Other
            </li>
            <li key="comments" className={postStyles.sections}>
              <a
                style={{
                  margin: 0,
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
                href="#Comments"
              >
                Comments
              </a>
            </li>
            {/* <li key="comments" className={postStyles.sections}>
              <a
                style={{
                  margin: 0,
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
                href="#citation"
              >
                Citation
              </a>
            </li> */}
          </ul>
        </nav>
        <main className={postStyles.main}>
          <article className={postStyles.article}>{children}</article>

          <hr />

          <CommentSection name={meta.title} />
        </main>
      </div>
    </MDXProvider>
  );
};

export default Post;
