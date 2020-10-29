import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import { Button } from '../components/button';
import { BLOG_PAGE_QUERY } from '../queries/blog.js';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, BLOG_PAGE_QUERY.site.siteMetadata.title);
    const posts = get(this, BLOG_PAGE_QUERY.allContentfulBlogPost.edges);
    const people = get(this, BLOG_PAGE_QUERY.allContentfulPerson.edges);
    const mission = get(this, BLOG_PAGE_QUERY.contentfulMission);
    const firstPerson = people.length > 0 ? people[0].node.name : 'No person found'

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Button title={firstPerson} />
          <Button title={mission.text.text} />
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Blog</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex;
