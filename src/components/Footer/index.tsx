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

const Footer = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bottom={0}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{backdropFilter: "blur(10px)"}}
      zIndex={1}
    >
      <Container display="flex" p={2} maxW="contaier.md">
        <Flex mx="auto">
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

export default Footer;