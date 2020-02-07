import React from "react"
import { countBy, identity, uniq } from "ramda"
import { Link, graphql } from "gatsby"
import { Text, PseudoBox, Heading, SimpleGrid, Badge } from "@chakra-ui/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  const coursesWithDuplicates = props.data.allMdx.edges.map(
    ({
      node: {
        frontmatter: { course },
      },
    }) => course
  )
  const courses = uniq(coursesWithDuplicates)
  const assignmentsPerCourse = countBy(identity, coursesWithDuplicates)

  const getCourseMetadata = course =>
    props.data.site.siteMetadata.courses.find(({ name }) => name === course)

  return (
    <Layout>
      <SEO title="Home" />
      <Heading as="h1" size="2xl" mb="5" mx="6">
        Nekeisha Johnson
      </Heading>

      <Heading as="h2" size="lg" mb="2" mx="6">
        Courses
      </Heading>

      <SimpleGrid minChildWidth="200px" spacing="4">
        {courses.map(course => (
          <Link to={`assignments/${course}`}>
            <PseudoBox
              borderLeft="5px solid transparent"
              _hover={{ bg: "teal.50", borderColor: "teal.200" }}
              py="5"
              px="6"
            >
              <Text fontWeight="bold" color="teal.500" fontSize="xs">
                {getCourseMetadata(course).semester}{" "}
                {getCourseMetadata(course).year}
              </Text>
              <Heading as="h3" size="lg" mb="1">
                {course}
              </Heading>
              <Badge variantColor="teal">
                {assignmentsPerCourse[course]} Assignment
                {assignmentsPerCourse[course] > 1 ? "s" : ""}
              </Badge>
            </PseudoBox>
          </Link>
        ))}
      </SimpleGrid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Assignments {
    allMdx {
      edges {
        node {
          frontmatter {
            course
          }
        }
      }
    }
    site {
      siteMetadata {
        courses {
          name
          year
          semester
        }
      }
    }
  }
`

export default IndexPage
