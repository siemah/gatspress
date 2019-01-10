import React from 'react'
import {graphql, Link} from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../assets/css/blog.css'

export default ({data}) => {
  let { totalCount, edges} = data.allWordpressPost;
  console.log(totalCount)
  console.log(edges)
  return (
    <Layout>
      <SEO title="Blog" keywords={[]} />
      <div className='blog'>
        <h1>Blog</h1>
        {
          edges.map(({node}) => (
            <Link to={`/post/${node.slug}`} key={node.id}>
              <div className={`post-card post-${node.id}`}>
                  {
                    node.featured_media &&
                    <div className='post-image-container'>
                      <img
                        src={node.featured_media.source_url}
                        className='post-image'
                        alt={node.featured_media.slug} />
                    </div>
                  }
                <div className="post-details">
                  <h2>{node.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  <div className="post-card-date">
                    {node.date}
                  </div>
                </div>
              </div>  
            </Link> 
          ))
        }
      </div>
    </Layout>
  )
};

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: {fields: [date], order: DESC}) {
      totalCount
      edges {
        node {
          id 
          title
          excerpt
          slug
          featured_media {
            alt_text
            source_url
            slug
          }
          date(formatString: "Do MMMM")
        }
      }
    }
  }
` 
