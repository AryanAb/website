import remarkPrism from "remark-prism";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";


const configuration = {
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  // Support loading `.md`, `.mdx`:
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            /* jsxImportSource: …, otherOptions… */
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [remarkPrism, remarkMath],
            rehypePlugins: [rehypeMathjax]
          },
        },
      ],
    });

    return config;
  },
};

export default configuration;
