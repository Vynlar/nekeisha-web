import React from "react"
import { createCourseSlug } from "../utils/assignment-utils"
import { Text, PseudoBox, Heading, Stack, Badge } from "@chakra-ui/core"
import { Link } from "gatsby"
import useCourses from "../hooks/useCourses"

const Courses = () => {
  const courses = useCourses()

  return (
    <Stack spacing="4">
      {courses.map(course => (
        <Link to={`assignments/${createCourseSlug(course)}`}>
          <PseudoBox
            borderLeft="5px solid transparent"
            _hover={{ bg: "teal.50", borderColor: "teal.200" }}
            py="5"
            px={["0", "30px"]}
            mx={["0", "-30px"]}
          >
            <Text fontWeight="bold" color="teal.500" fontSize="xs">
              {course.semester} {course.year}
            </Text>
            <Heading as="h3" size="lg" mb="1">
              {course.name}
            </Heading>
            <Badge variantColor="teal">
              {course.assignmentCount} Assignment
              {course.assignmentCount > 1 ? "s" : ""}
            </Badge>
          </PseudoBox>
        </Link>
      ))}
    </Stack>
  )
}

export default Courses
