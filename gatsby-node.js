const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

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
    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx' || node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value: `/blog${value}`,
    });
  }
};
