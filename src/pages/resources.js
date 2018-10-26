import React from 'react'
import Layout from '../components/layout'
import resourcesArray from '../data/resources'

const Resources = () => {
  const resources = resourcesArray.map(item => {
    return (
      <li>
        <a href={item.link}>{item.name}</a>
        <p>{item.description}</p>
      </li>
    )
  })
  return (
    <Layout>
      <p className="page-description">Useful links, tools, etc.</p>
      <ul>{resources}</ul>
    </Layout>
  )
}

export default Resources
