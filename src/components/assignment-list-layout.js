import React from "react"
import {
  Heading,
  Text,
  Stack,
  SimpleGrid,
  PseudoBox,
  Divider,
  Badge,
} from "@chakra-ui/core"

import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { createAssignmentPath } from "../utils/assignment-utils"

const Assignments = ({ pageContext }) => {
  return (
    <Layout>
      <Heading as="h1" px="6" mb="5">
        Assignments
      </Heading>

      <SimpleGrid minChildWidth="200px" spacing="4">
        {pageContext.assignments.map(({ node }) => {
          return (
            <Link to={createAssignmentPath(node)}>
              <PseudoBox
                borderLeft="5px solid transparent"
                _hover={{ bg: "teal.50", borderColor: "teal.200" }}
                py="5"
                px="6"
              >
                <Text fontWeight="bold" color="teal.500" fontSize="xs">
                  {node.frontmatter.course}
                </Text>
                <Heading as="h2" size="lg" mb="1">
                  {node.frontmatter.title}
                </Heading>
                <Text
                  color="black"
                  textTransform="uppercase"
                  fontSize="xs"
                  mb="2"
                >
                  <Text as="span" fontWeight="bold">
                    Due
                  </Text>{" "}
                  {node.frontmatter.due}
                </Text>
                <Stack isInline>
                  <Badge variantColor="teal">{node.frontmatter.category}</Badge>
                  <Badge variantColor="orange">
                    {node.frontmatter.points} points
                  </Badge>
                </Stack>
              </PseudoBox>
            </Link>
          )
        })}
      </SimpleGrid>
    </Layout>
  )
}

export default Assignments
