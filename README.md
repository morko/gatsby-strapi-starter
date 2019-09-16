<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Strapi Starter
</h1>

## 💎️ Features

- Bootstrap 4 configured to be loaded from a CDN.
- Source plugin for strapi ready to go.
- Strapi related Markdown to HTML hacks (see `gatsby-node.js`).
- Webhooks to automate builds.

## 📜 Requirements

This project has some requirements from the Strapi CMS to be able to build.
You can use my [strapi starter project](https://github.com/morko/strapi-starter) to bootstrap the Strapi.

You have to make sure that

- [Strapi](https://strapi.io/) configured and running.
- Strapi has a content type **Article** with following fields.
  - `title` _String_
  - `content` _Text_
  - `image` _Media_
  - `user` _Relation with User (from: users-permissions)_
  - `teaser` _Text_
- **Article** content type should have at least one entry.
  - The entry should have all fields present!

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the starter.

    ```sh
    gatsby new my-gatsby-site https://github.com/morko/gatsby-strapi-starter
    ```

2.  **Start developing.**

    Make sure you have Strapi running and then run

    ```sh
    cd my-gatsby-site
    npm run develop
    ```

3.  **Open the source code and start editing!**

    Gatsby site: `http://localhost:8000`

    Tool to experiment with querying your data from Gatsby: `http://localhost:8000/___graphql`

    Open the `my-site` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 📌 Automate builds with webhook

To automatically rebuild the project when some Strapi content changes you can use the webhook script located in `./webhook/index.js`.

e.g.

```sh
cd <project>
node ./webhook
```

This will run a [simple-webhooks](https://www.npmjs.com/package/simple-webhooks) server that will listen port 8338.
You can now trigger the webhook from the Strapi model files.

See my strapi starter for an example https://github.com/morko/strapi-starter/blob/master/api/article/models/Article.js.
