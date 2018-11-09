const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug
          }
        });
      });
      resolve();
    });
  });

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsEvent {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsEvent.edges.map(({ node: event }) => {
        createPage({
          path: `events/${event.slug}`,
          component: path.resolve(`./src/templates/event.js`),
          context: {
            slug: event.slug
          }
        });
      });
      resolve();
    });
  });
};
