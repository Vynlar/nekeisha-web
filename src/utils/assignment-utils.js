const createAssignmentPath = node => {
  const { course, category, title } = node.frontmatter
  return `assignments/${course.semester}-${course.year}/${
    course.name
  }/${category}/${title.replace(/\W/g, "-")}`
}

const createCourseSlug = ({ name, year, semester }) =>
  `${name}-${semester}-${year}`

module.exports = { createAssignmentPath, createCourseSlug }
