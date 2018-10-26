import React from 'react'
import PostLink from '../components/post-link'
import Layout from '../components/layout'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  let categories = {
    basics: [],
    javascript: [],
    style: [],
    sorting: [],
    cs: [],
    react: [],
    ruby: [],
  }
  edges.forEach(edge => {
    let string = edge.node.frontmatter.path
    switch (string.slice(0, 3)) {
      case '/ba':
        categories.basics.push(<PostLink key={edge.node.id} post={edge.node} />)
        break
      case '/js':
        categories.javascript.push(
          <PostLink key={edge.node.id} post={edge.node} />
        )
        break
      case '/st':
        categories.style.push(<PostLink key={edge.node.id} post={edge.node} />)
        break
      case '/so':
        categories.sorting.push(
          <PostLink key={edge.node.id} post={edge.node} />
        )
        break
      case '/cs':
        categories.cs.push(<PostLink key={edge.node.id} post={edge.node} />)
        break
      case '/re':
        categories.react.push(<PostLink key={edge.node.id} post={edge.node} />)
        break
      case '/ru':
        categories.ruby.push(<PostLink key={edge.node.id} post={edge.node} />)
        break
      default:
        break
    }
  })
  return (
    <Layout>
      <p className="page-description">
        A collection of my own posts about topics that can be confusing or that
        I've been asked about in interviews. Code samples and sources included
        where appropriate.
      </p>
      <div className="flex-2-columns">
        <div className="column">
          <div className="post-list">
            <h3>Basics</h3>
            {categories.basics}
          </div>
          <div className="post-list">
            <h3>JavaScript</h3>
            {categories.javascript}
          </div>
          <div className="post-list">
            <h3>Style</h3>
            {categories.style}
          </div>
        </div>
        <div className="column column-middle">
          <div className="post-list">
            <h3>Sorting</h3>
            {categories.sorting}
          </div>
          <div className="post-list">
            <h3>Computer Science</h3>
            {categories.cs}
          </div>
        </div>
        <div className="column">
          <div className="post-list">
            <h3>React</h3>
            {categories.react}
          </div>
          <div className="post-list">
            <h3>Ruby</h3>
            {categories.ruby}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            keywords
          }
        }
      }
    }
  }
`
