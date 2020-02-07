/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const {
  createAssignmentPath,
  createCourseSlug,
} = require("./src/utils/assignment-utils")
const R = require("ramda")

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            body
            frontmatter {
              title
              points
              due: due(formatString: "ddd, MMM DD - hh:mm a")
              rawDue: due
              category
              course {
                name
                year
                semester
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const assignments = result.data.allMdx.edges
  assignments.forEach(({ node }) => {
    const pagePath = createAssignmentPath(node)

    createPage({
      path: pagePath,
      component: path.resolve(`./src/components/assignment-layout.js`),
      context: {
        id: node.id,
        frontmatter: node.frontmatter,
        mdx: { body: node.body },
      },
    })
  })

  // Course listing pages
  const courses = R.uniqBy(
    createCourseSlug,
    assignments.map(
      ({
        node: {
          frontmatter: { course },
        },
      }) => course
    )
  )

  courses.forEach(course => {
    createPage({
      path: `assignments/${createCourseSlug(course)}`,
      component: path.resolve(`./src/components/assignment-list-layout.js`),
      context: {
        course,
        assignments: assignments.filter(
          ({ node }) =>
            createCourseSlug(node.frontmatter.course) ===
            createCourseSlug(course)
        ),
      },
    })
  })
}
