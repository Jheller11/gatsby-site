import React from 'react'
import Layout from '../components/layout'
import articlesArray from '../data/articles'

const Articles = () => {
  const articles = articlesArray.map((item, i) => {
    return (
      <li key={i}>
        <a href={item.link}>{item.name}</a>
        <p>{item.description}</p>
      </li>
    )
  })
  return (
    <Layout>
      <p className="page-description" />
      <div>{articles}</div>
    </Layout>
  )
}

export default Articles
