/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const crypto = require(`crypto`);
const _ = require(`lodash`);
const path = require(`path`);

/**
 * This builds slugs for contents using their "title" field.
 * 
 * WARNING!
 * This function creates slugs that can overlap if the Content title
 * is not set as unique in Strapi.
 */
function buildSlug(node) {
  let slug = `/${_.kebabCase(node.title)}`;
  return slug;
};

/**
 * Creates hash of Gatsby node.
 * 
 * This is used by Gatsby in createNode API to detect if the node has changed.
 * 
 * @param {object} data - Gatsby node object.
 */
function digest(data) {
  return crypto
    .createHash(`md5`)
    .update(JSON.stringify(data))
    .digest(`hex`);
};
exports.onCreateNode = ({ node, actions }) => {

  const { createNode } = actions;

  // Create a new node called Article from StrapiArticle to be able to use
  // the gatsby-transformer-remark plugin to convert the content from
  // Markdown into HTML.
  if (node.internal.type === "StrapiArticle") {
    createNode({
      ...node,
      slug: buildSlug(node),
      id: node.id + "-markdown",
      parent: node.id,
      children: [],
      internal: {
        type: "Article",
        mediaType: "text/markdown",
        content: node.content,
        contentDigest: digest(node)
      }
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  // Create pages for articles.
  try {
    const articles = await graphql(`
      {
        allArticle {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `);
    articles.data.allArticle.edges.forEach(({ node }) => {
      createPage({
        path: buildSlug(node),
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id
        }
      });
    });
    return Promise.resolve(articles);
  } catch (e) {
    console.error(`Error getting posts from Strapi: {$e.message}`);
    return Promise.reject(e);
  }
};