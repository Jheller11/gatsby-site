import React from 'react'
import { Link } from 'gatsby'

const linkStyle = {
  color: 'red',
  textDecoration: 'none',
  marginRight: '1em',
}

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path} style={linkStyle}>
      {post.frontmatter.title}
    </Link>
  </div>
)

export default PostLink
