import React from 'react'
import Layout from '../components/layout'

const Projects = () => {
  const projects = []
  return (
    <Layout>
      <p className="page-description">
        A collection of some of my small projects/games/code samples.
      </p>
      <div>{projects}</div>
    </Layout>
  )
}

export default Projects
