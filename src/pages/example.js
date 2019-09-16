import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ExamplePage = () => (
  <Layout>
    <SEO title="Example" />
    <h1>Example</h1>
    <p>This is an example of a static page.</p>
    <p>
      The code for this page is located at <code>src/pages/example.js</code>
    </p>
    <p>
      You can create more pages like this by just creating a new JavaScript file
      to <code>src/pages/your-file-name.js</code>.
    </p>
    <p>
      To create a navigation link for the page you can add &nbsp;
      <code>&lt;Link to="your-file-name"&gt;Link to new page&lt;/Link&gt;</code>
      &nbsp;to the Footer component in{' '}
      <code>src/components/Footer/index.js</code>.
    </p>
  </Layout>
);

export default ExamplePage;
