import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Img from 'gatsby-image';

const Articles = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <h1>Artikkelit</h1>

    <div className="row">
      {data.allArticle.edges.map(article => (
        <div className="card col-md-4" key={article.node.id}>
          {article.node.image && (
            <Img
              className="card-img-top"
              fluid={article.node.image.childImageSharp.fluid}
            />
          )}
          <div className="card-body">
            <h5 className="card-title">{article.node.title}</h5>
            <p className="card-text">{article.node.teaser}</p>
            <Link to={article.node.slug} className="card-link">
              Lue lisää
            </Link>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default Articles;

export const pageQuery = graphql`
  query ArticleListing {
    allArticle {
      edges {
        node {
          id
          title
          slug
          image {
            childImageSharp {
              fluid(maxWidth: 1140) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          teaser
          childMarkdownRemark {
            html
          }
          content
        }
      }
    }
  }
`;
