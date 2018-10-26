import React from 'react'
import Layout from '../components/layout'
import tutorialsArray from '../data/tutorials'

const Tutorials = () => {
  const tutorials = tutorialsArray.map(item => {
    return (
      <li>
        <a href={item.link}>{item.name}</a>
        <p>{item.description}</p>
        <p>{item.status}</p>
      </li>
    )
  })
  return (
    <Layout>
      <div>{tutorials}</div>
    </Layout>
  )
}

export default Tutorials
