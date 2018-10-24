import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const keywords = frontmatter.keywords.split(', ').map(keyword => {
    return <li key={keyword}>{keyword}</li>
  })
  return (
    <Layout>
      <div>
        <div>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <ul>{keywords}</ul>
          <div
            dangerouslySetInnerHTML={{ __html: html ? html : 'Coming soon.' }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        keywords
      }
    }
  }
`
