import React from "react"
import {
  Link,
  Stack,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Divider,
  Image,
} from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "katex/dist/katex.min.css"
import "prismjs/themes/prism-solarizedlight.css"

import Layout from "./layout"

const PostLayout = props => {
  return (
    <MDXProvider
      components={{
        h1: props => <Heading {...props} as="h1" size="2xl" mt="8" mb="2" />,
        h2: props => <Heading {...props} as="h2" size="xl" mt="6" mb="2" />,
        h3: props => <Heading {...props} as="h3" size="lg" mt="4" mb="1" />,
        h4: props => <Heading {...props} as="h4" size="md" mt="3" mb="1" />,
        h5: props => <Heading {...props} as="h5" size="sm" mt="2" mb="1" />,
        h6: props => <Heading {...props} as="h6" size="xs" mt="1" />,
        p: props => <Text {...props} />,
        ul: props => <List styleType="disc" {...props} />,
        ol: props => <List styleType="decimal" {...props} />,
        li: ListItem,
        a: props => <Link color="teal.500" {...props} />,
        hr: Divider,
        thematicBreak: Divider,
        blockquote: props => (
          <Box
            bg="teal.50"
            py="3"
            px="4"
            borderLeft="5px solid"
            borderColor="teal.300"
          >
            <Text {...props} />
          </Box>
        ),
        image: props => <Image maxW="100%" {...props} />,
      }}
    >
      <Layout>
        <Stack spacing="4">
          <Heading size="xs" color="teal.500">
            {props.pageContext.frontmatter.course}
          </Heading>
          <Heading size="2xl" mb="1">
            {props.pageContext.frontmatter.title}
          </Heading>
          <Stack isInline spacing="4" flexWrap="wrap">
            <Box mb="2">
              <Text fontWeight="bold">Due</Text>
              <Text>{props.pageContext.frontmatter.due}</Text>
            </Box>

            <Box mb="2">
              <Text fontWeight="bold">Assignment Type</Text>
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
    </MDXProvider>
  )
}

export default PostLayout
