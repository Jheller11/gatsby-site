import React from 'react'
import Layout from '../components/layout'

const Repl = () => {
  return (
    <Layout>
      <h2>JS REPL</h2>
      <div style={{ height: '600' }}>
        <iframe
          height="600px"
          width="100%"
          src="https://repl.it/@jheller11/SecondaryGreatBrains?lite=true"
          scrolling="no"
          frameBorder="no"
          allowFullScreen
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </Layout>
  )
}
export default Repl
