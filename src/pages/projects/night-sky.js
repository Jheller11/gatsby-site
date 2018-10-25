import React from 'react'
import Layout from '../../components/layout'

const NightSky = () => {
  return (
    <Layout>
      <p>Using JS/CSS to render a randmom night sky with a shooting star.</p>
      <iframe
        scrolling="no"
        title="Stars"
        src="//codepen.io/jheller11/embed/wjGrYX/?height=500&theme-id=light&default-tab=js,result"
        frameBorder="no"
        allowFullScreen
        style={{ width: '100%', height: '500px' }}
      >
        See the Pen <a href="https://codepen.io/jheller11/pen/wjGrYX/">Stars</a>{' '}
        by Jeffrey Heller (<a href="https://codepen.io/jheller11">@jheller11</a>
        ) on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </Layout>
  )
}

export default NightSky
