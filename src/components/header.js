import React from "react"
import {
  Flex,
  Stack,
  Heading,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/core"
import { Link, graphql, useStaticQuery } from "gatsby"
import { MdMenu } from "react-icons/md"

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const links = [
    <Button key="home" as={Link} to="/" variant="link" variantColor="teal">
      Home
    </Button>,

    <Button
      key="publications"
      as={Link}
      to="/publications"
      variant="link"
      variantColor="teal"
    >
      Publications
    </Button>,

    /*
    <Button
      key="teaching"
      as={Link}
      to="/teaching"
      variant="link"
      variantColor="teal"
    >
      Teaching
    </Button>,
     */
  ]

  const menuState = useDisclosure()

  return (
    <Flex as="header" justify="flex-start" align="center" mb="8">
      <IconButton
        variant="ghost"
        icon={MdMenu}
        onClick={menuState.onOpen}
        mr="2"
        display={["flex", "none"]}
      />

      <Link to="/">
        <Heading as="h1" size="md">
          {site.siteMetadata.title}
        </Heading>
      </Link>
      <Stack isInline spacing="5" ml="auto" display={["none", "block"]}>
        {links}
      </Stack>
      <Drawer {...menuState} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack spacing="4" alignItems="flex-start">
              {links}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Header
