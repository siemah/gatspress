import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  _onLoad = e => console.log(window)
  componentWillMount = () => {
    console.log(window)
    this._onLoad();
  }
  render () {
    return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
  }
}

export default NotFoundPage
