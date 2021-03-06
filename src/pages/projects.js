import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Projects = () => {
  return (
    <Layout>
      <p className="page-description">
        A collection of some of my small projects/games/code samples.
      </p>
      <ul>
        <li>
          <Link to="projects/night-sky">Stars</Link>
          <p>
            A codepen which creates a night sky with random star placement,
            color, and size.
          </p>
        </li>
        <li>
          <Link to="projects/car-scraper">Scraper (Python)</Link>
          <p>Code to scrape used car prices from ebay.com.</p>
        </li>
      </ul>
    </Layout>
  )
}

export default Projects
