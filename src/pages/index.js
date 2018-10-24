import React from 'react'
import PostLink from '../components/post-link'
import Layout from '../components/layout'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  let basics = []
  let javascript = []
  let style = []
  let sorting = []
  let cs = []
  edges.forEach(edge => {
    let string = edge.node.frontmatter.path
    console.log(string)
    switch (string.slice(0, 3)) {
      case '/ba':
        basics.push(<PostLink key={edge.node.id} post={edge.node} />)
        break
      case '/js':
        javascript.push(<PostLink key={edge.node.id} post={edge.node} />)
        break
      case '/st':
        style.push(<PostLink key={edge.node.id} post={edge.node} />)
        break
      case '/so':
        sorting.push(<PostLink key={edge.node.id} post={edge.node} />)
        break
      case '/cs':
        cs.push(<PostLink key={edge.node.id} post={edge.node} />)
        break
      default:
        break
    }
  })
  return (
    <Layout>
      <div className="flex-2-columns">
        <div className="column">
          <div className="post-list">
            <h3>Basics</h3>
            {basics}
          </div>
          <div className="post-list">
            <h3>JavaScript</h3>
            {javascript}
          </div>
          <div className="post-list">
            <h3>Style</h3>
            {style}
          </div>
        </div>
        <div className="column">
          <div className="post-list">
            <h3>Sorting</h3>
            {sorting}
          </div>
          <div className="post-list">
            <h3>Computer Science</h3>
            {cs}
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
