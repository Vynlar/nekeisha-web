import React from "react"
import { Box, Flex, Heading, Icon, Button } from "@chakra-ui/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header />

    <Flex align="center" direction="column">
      <Icon name="warning-2" color="teal.400" mr="3" size="8" mb="4" />
      <Heading as="h1" size="2xl" mb="4">
        404!
      </Heading>
      <Button as={Link} to="/" variantColor="teal">
        Go Back Home
      </Button>
    </Flex>
  </Layout>
)

export default NotFoundPage
