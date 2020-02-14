import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  Stack,
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  Tooltip,
  Icon,
} from "@chakra-ui/core"

import "katex/dist/katex.min.css"
import "prismjs/themes/prism-solarizedlight.css"

import Layout from "./layout"
import SEO from "./seo"
import Header from "./header"

const PostLayout = props => {
  return (
    <Layout>
      <SEO title={props.pageContext.frontmatter.title} />
      <Header />
      <Heading size="xs" color="teal.500">
        <Flex align="center">
          {props.pageContext.frontmatter.course.name}
          <Tooltip
            label={`${props.pageContext.frontmatter.course.semester} ${props.pageContext.frontmatter.course.year}`}
            shouldWrapChildren
            hasArrow
            placement="right"
          >
            <Icon ml="1" name="info-outline" color="gray.400" />
          </Tooltip>
        </Flex>
      </Heading>
      <Heading size="xl" mb="1">
        {props.pageContext.frontmatter.title}
      </Heading>
      <Stack spacing="4">
        <Stack isInline spacing="4" flexWrap="wrap">
          <Box mb="2">
            <Text fontWeight="bold">Due</Text>
            <Text>{props.pageContext.frontmatter.due}</Text>
          </Box>

          <Box mb="2">
            <Text fontWeight="bold">Type</Text>
            <Text>{props.pageContext.frontmatter.category}</Text>
          </Box>

          <Box mb="2">
            <Text fontWeight="bold">Points</Text>
            <Text>{props.pageContext.frontmatter.points}</Text>
          </Box>
        </Stack>
        <Divider />
        <Box>
          <MDXRenderer>{props.pageContext.mdx.body}</MDXRenderer>
        </Box>
      </Stack>
    </Layout>
  )
}

export default PostLayout
