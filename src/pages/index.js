import React from "react"
import { countBy, uniqBy } from "ramda"
import { graphql } from "gatsby"
import { Heading } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { createCourseSlug } from "../utils/assignment-utils"
import Home from "../components/home.mdx"
import Courses from "../components/courses.mdx"

const IndexPage = props => {
  const coursesWithDuplicates = props.data.allMdx.edges.map(
    ({
      node: {
        frontmatter: { course },
      },
    }) => course
  )

  // Course listing pages
  const assignmentsPerCourse = countBy(createCourseSlug, coursesWithDuplicates)
  const courses = uniqBy(createCourseSlug, coursesWithDuplicates).map(
    course => ({
      ...course,
      assignmentCount: assignmentsPerCourse[createCourseSlug(course)],
    })
  )

  return (
    <Layout>
      <SEO title="Home" />
      <Heading as="h1" size="2xl" mb="5">
        {props.data.site.siteMetadata.title}
      </Heading>

      <Home />
      <Courses courses={courses} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query Assignments {
    allMdx {
      edges {
        node {
          frontmatter {
            course {
              name
              semester
              year
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
