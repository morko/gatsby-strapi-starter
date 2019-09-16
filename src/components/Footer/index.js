import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import LogoLarge from '../LogoLarge';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <LogoLarge />
          <small className="d-block mb-3 text-muted">
            © {new Date().getFullYear()} {data.site.siteMetadata.author}
          </small>
        </div>
        <div className="col-6 col-md">
          <h5>Site map</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/example">
                Example
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/articles">
                Articles
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Links</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a
                className="text-muted"
                href="https://github.com/morko/gatsby-strapi/starter"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/example">
                Example
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/articles">
                Articles
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
