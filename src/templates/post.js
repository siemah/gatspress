import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
    const post = data.wordpressPost;
    console.log(post);
    return (
      <Layout>
        <SEO title={post.title} keywords={[post.title]} />
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <h3>
            date: {post.date} tags: {extractTags(post)}{' '}
          </h3>
          {
            post.featured_media &&
            <img src={post.featured_media.source_url} alt={post.featured_media.slug} />
          }
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Layout>
    )
}

const extractTags = post =>
    post.tags ? post.tags.map(x => x.name).join(', ') : 'none'

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      author
      date(formatString: "DD/MM/YYYY")
      status
      template
      content
      tags {
        id
        slug
      }
      format
      featured_media {
        id
        alt_text
        slug
        source_url
      }
    }
  }
`