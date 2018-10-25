import React from 'react'
import Layout from '../components/layout'

const Resources = () => {
  const resources = []
  return (
    <Layout>
      <p className="page-description">Useful links, tools, etc.</p>
      <div>{resources}</div>
    </Layout>
  )
}

export default Resources
