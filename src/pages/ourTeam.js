import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'


class OurTeam extends React.Component {
    render() {

    return (
        <Layout location={this.props.location}>
        </Layout>
    )
    }
}

export default OurTeam;

//export const pageQuery = graphql``