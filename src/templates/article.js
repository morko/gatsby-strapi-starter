import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Img from 'gatsby-image';

const ArticleTemplate = ({ data }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-8">
          <h1>{data.article.title}</h1>
        </div>
        <div className="col-md-4">
          {data.article.image && <Img fluid={data.article.image.childImageSharp.fluid} />}
        </div>
      </div>
      <div className="row">
        <div className="article-content" dangerouslySetInnerHTML={{ __html: data.article.childMarkdownRemark.html }} />
      </div>
    </Layout>
  );
};

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    article(id: { eq: $id }) {
      title
      childMarkdownRemark {
        html
      }
      image {
        childImageSharp {
          fluid(maxWidth: 930) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;