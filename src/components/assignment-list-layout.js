import React from "react"
import { Heading, Text, Stack, PseudoBox, Badge } from "@chakra-ui/core"

import Layout from "../components/layout"
import { Link } from "gatsby"
import { createAssignmentPath } from "../utils/assignment-utils"
import Header from "./header"
import SEO from "./seo"

const Assignments = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.course.name} />
      <Header />

      <Heading size="xs" color="teal.500">
        {pageContext.course.semester} {pageContext.course.year}
      </Heading>
      <Heading as="h1" size="xl" mb="5">
        {pageContext.course.name} Assignments
      </Heading>

      <Stack spacing="4">
        {pageContext.assignments.map(({ node }) => {
          return (
            <Link to={createAssignmentPath(node)}>
              <PseudoBox
                borderLeft="5px solid transparent"
                _hover={{ bg: "teal.50", borderColor: "teal.200" }}
                py="5"
                px={["0", "30px"]}
                mx={["0", "-30px"]}
              >
                <Text fontWeight="bold" color="teal.500" fontSize="xs">
                  {node.frontmatter.course.name}
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
      </Stack>
    </Layout>
  )
}

export default Assignments
