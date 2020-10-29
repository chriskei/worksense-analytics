import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'
import { Button } from '../components/button';

class BlogIndex extends React.Component {
  render() {

    return (
      <h1>Blog Index page</h1>
    )
  }
}

export default BlogIndex