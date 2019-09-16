import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const LogoLarge = ({ className, style }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 128, height: 128) {
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

export default LogoLarge;
