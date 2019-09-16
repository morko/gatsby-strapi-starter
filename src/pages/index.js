import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Moi!</h1>
    <p>
      Tämä Sivusto käyttää hyväkseen Strapi CMS sisällönhallintaa. Gatsby hakee
      Strapista sisällön ja rakentaa niistä staattisen sivuston, joka toimii
      huomattavasti nopeammin kuin sivustot jotka lataavat sisältönsä
      dynaamisesti.
    </p>

    <div className="row">
      {data.allArticle.edges.map(article => (
        <div className="card col-md-6" key={article.node.id}>
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

export default IndexPage;

export const pageQuery = graphql`
  query FeaturedArticles {
    allArticle {
      edges {
        node {
          id
          title
          slug
          image {
            childImageSharp {
              fluid(maxWidth: 570) {
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
