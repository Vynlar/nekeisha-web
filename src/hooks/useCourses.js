import { useStaticQuery, graphql } from "gatsby"
import { countBy, uniqBy } from "ramda"
import { createCourseSlug } from "../utils/assignment-utils"

const useCourses = () => {
  const { allMdx } = useStaticQuery(graphql`
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
    }
  `)

  const coursesWithDuplicates = allMdx.edges.map(
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

  return courses
}

export default useCourses
