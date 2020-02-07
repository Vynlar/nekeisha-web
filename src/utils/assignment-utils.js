const createAssignmentPath = node => {
  const { course, category, title } = node.frontmatter
  return `assignments/${course}/${category}/${title.replace(/\W/g, "-")}`
}

module.exports = { createAssignmentPath }
