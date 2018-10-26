import React from 'react'
import Layout from '../components/layout'
import tutorialsArray from '../data/tutorials'

const Tutorials = () => {
  const tutorials = tutorialsArray.map((item, i) => {
    let style = item.completed ? 'green' : 'red'
    return (
      <li key={i}>
        <a href={item.link}>{item.name}</a>
        <p>{item.description}</p>
        <p style={{ backgroundColor: style }}>Completed: {item.completed}</p>
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
