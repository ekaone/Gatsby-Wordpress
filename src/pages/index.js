import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <br />
    {/* highlight-start */}
    <h1>My WordPress Blog</h1>
    <h4>Posts</h4>
    {data.allWpPost.nodes.map(node => (
      <div key={node.slug}>
        {/* highlight-start */}
        <Link to={node.slug}>
          <p>{node.title}</p>
        </Link>
        {/* highlight-end */}
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
    {/* highlight-end */}
    <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

//highlight-start
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
//highlight-end

export default IndexPage
