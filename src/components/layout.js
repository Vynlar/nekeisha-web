/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {
  Link,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Divider,
  Image,
} from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"

const Layout = ({ children }) => {
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
            my="4"
            borderLeft="5px solid"
            borderColor="teal.300"
          >
            <Text {...props} />
          </Box>
        ),
        image: props => <Image maxW="100%" {...props} />,
        table: props => (
          <Box
            as="table"
            border="1px solid"
            borderColor="gray.300"
            bg="red.400"
            my="4"
            mx="auto"
            {...props}
          />
        ),
        tr: props => <Box as="tr" bg="red" mb="2" {...props} />,
        td: props => <Box as="td" bg="gray.50" px="4" py="3" {...props} />,
        th: props => (
          <Box
            as="td"
            bg="gray.100"
            px="4"
            py="3"
            fontWeight="bold"
            borderBottom="1px"
            borderColor="gray.300"
            {...props}
          />
        ),
      }}
    >
      <Box as="main" mx="auto" maxW="containers.md" my="10" px="4">
        {children}
      </Box>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
