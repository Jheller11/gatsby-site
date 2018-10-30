import React from 'react'
import Layout from '../components/layout'
import tutorialsArray from '../data/tutorials'

const Tutorials = props => {
  console.log(props)
  const tutorials = tutorialsArray.map((item, i) => {
    let style = item.completed ? 'green' : 'red'
    return (
      <li
        style={{
          border: `1px solid ${style}`,
          padding: '1em',
          listStyle: 'none',
        }}
        key={i}
      >
        <a href={item.link}>{item.name}</a>
        <p>{item.description}</p>
        <p style={{ color: style }}>
          {item.completed ? 'Complete' : 'Not Complete'}
        </p>
        <p>{item.completed ? <a href={item.linkToCode}>View Code</a> : ''}</p>
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
