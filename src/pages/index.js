import React from 'react'
import PostLink from '../components/post-link'
import Layout from '../components/layout'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  // const Posts = edges
  //   .filter(edge => !!edge.node.frontmatter.date)
  //   .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  let basics = []
  let javascript = []
  let style = []
  let sorting = []
  let cs = []
  edges.forEach(edge => {
    let string = edge.node.frontmatter.path
    switch (string) {
      case string.startsWith('/ba'):
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
    return 'done'
  })
  return (
    <Layout>
      <h3>Basics</h3>
      <div>{basics}</div>
      <h3>JavaScript</h3>
      <div>{javascript}</div>
      <h3>Style</h3>
      <div>{style}</div>
      <h3>Sorting</h3>
      <div>{sorting}</div>
      <h3>Computer Science</h3>
      <div>{cs}</div>
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
