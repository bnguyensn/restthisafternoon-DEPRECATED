const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const log = require('./utils/log');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`./src/templates/BlogPost.js`);
  const postsData = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (postsData.errors) {
    reporter.panicOnBuild("ERROR at 'createPages()' query");
    throw postsData.errors;
  }

  const posts = postsData.data.allMdx.edges;

  posts.forEach(post => {
    // https://www.gatsbyjs.org/docs/actions/#createPage
    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      // This context object is passed as a 'pageObject' prop to the created
      // page's component (get it using 'props.pageObject').
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
};

/**
 * When a page is created:
 * - the 'pages' and 'component' Redux namespace is updated
 * - this hook is executed
 * https://www.gatsbyjs.org/docs/page-creation/
 */
exports.onCreatePage = (...args) => {
  // Debug info 🔧
  log.info('gatsby just created another page!');
  log.info('arguments passed:');
  args.forEach(arg => {
    log.info(
      `  - ${typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg}`
    );
  });
  log.info('end of arguments passed');
};

/**
 * This hook is executed when a new node is executed.
 * This is useful for a plugin to grab nodes created by other plugins.
 * https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx' || node.internal.type === 'MarkdownRemark') {
    const filePath = createFilePath({ node, getNode });

    // Create a 'slug' field on the Mdx / MarkdownRemark node with a value like:
    // '/blog/my-blog-post'. The tail end is based on the Mdx / MarkdownRemark
    // node's file path, provided by the createFilePath() function above.
    // The 'slug' field lives under a 'fields' property which in turn is directly
    // under 'node'.
    // https://www.gatsbyjs.org/docs/node-creation/#changing-a-nodes-fields
    // https://www.gatsbyjs.org/docs/actions/#createNodeField
    //
    // Interesting tidbits:
    // - Once a plugin has claimed a field name, that field name can't be used
    // by other plugins
    // - Nodes can't be mutated directly and createNodeField() is the only way
    // to extend them.
    createNodeField({
      node,
      name: 'slug',
      value: `/blog${filePath}`,
    });

    // Debug info 🔧
    log.info('gatsby just created another node!');
    log.info('created node:');
    log.info(`- ${JSON.stringify(node, null, 2)}`);
    log.info('end of created node');
  }
};
