import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const LogoSmall = ({ className, style }) => {

  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Img className={className} style={style} fixed={data.file.childImageSharp.fixed} />
  )
}

export default LogoSmall
