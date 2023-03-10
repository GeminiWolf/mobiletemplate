import React from "react"
import { 
  Box, 
  Container, 
  Flex, 
  Heading,
  Link, 
  useColorModeValue 
} from "@chakra-ui/react"
import { Link as LinkTo } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      top={0}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{backdropFilter: "blur(10px)"}}
      zIndex={1}
    >
      <Container display="flex" p={2} maxW="contaier.md">
        <Flex align="center" mr={5}>
          <LinkTo to="/">
            <Link>
              <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                meta kennel
              </Heading>
            </Link>
          </LinkTo>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar;