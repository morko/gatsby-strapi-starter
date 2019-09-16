import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const LogoMedium = ({ className, style }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 64, height: 64) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <Img
      className={className}
      style={style}
      fixed={data.file.childImageSharp.fixed}
    />
  );
};

export default LogoMedium;
