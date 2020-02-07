import React from "react"
import { Flex, Box, Heading, Button } from "@chakra-ui/core"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Flex as="header" justify="space-between" align="center" mb="8">
      <Heading as="h1" size="md">
        Nekeisha Johnson
      </Heading>
      <Box>
        <Button as={Link} to="/" variant="link" variantColor="teal">
          Home
        </Button>
      </Box>
    </Flex>
  )
}

export default Header
