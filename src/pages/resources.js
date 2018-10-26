import React from 'react'
import Layout from '../components/layout'

const Resources = () => {
  const array = [
    {
      name: 'HTML Validator',
      link: 'https://validator.w3.org/#validate_by_input',
      description: 'HTML Validator from W3',
    },
    {
      name: 'CSS Validator',
      link: 'https://jigsaw.w3.org/css-validator/#validate_by_input',
      description: 'CSS Validator from W3',
    },
    {
      name: 'JS Validator',
      link: 'https://codebeautify.org/jsvalidate',
      description: 'JS Validator (Code Beautify)',
    },
  ]
  const resources = array.map(item => {
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
