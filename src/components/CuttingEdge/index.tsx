import { Text, Image, Flex, Stack, Button, Box } from "@chakra-ui/react";
import letterSVG from "../../assets/icons/letter.svg";
import boltSVG from "../../assets/icons/bolt.svg";
import graphSVG from "../../assets/icons/graph.svg";

const CuttingEdge: React.FC = () => {
  return (
    <Flex
      w="100%"
      h="564px"
      bg="#FFFFFF"
      padding="96px 0px"
      gap="64px"
      flexDirection="column"
    >
      <Flex
        alignItems="center"
        padding="0px 32px"
        height="94px"
        flex="1"
        justifyContent="flex-start"
        flexDirection="column"
      >
        <Text
          fontWeight="600"
          fontSize="36px"
          lineHeight="44px"
          color="#101828"
          textAlign="center"
        >
          Cutting-edge features for to assist with Minting
        </Text>
        <Text
          fontWeight="400"
          fontSize="20px"
          lineHeight="30px"
          color="#667085"
          textAlign="center"
        >
          Feature ritch application to assist with minting and mantining you
          digital pet.
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        padding="0px 32px"
        height="178px"
        flex="1"
        justifyContent="space-around"
      >
        <Flex
          alignItems="center"
          gap="20px"
          flexDirection="column"
          maxW="384px"
        >
          <Box w="48px" h="48px">
            <Image src={letterSVG} />
          </Box>
          <Text
            fontWeight="500"
            fontSize="20px"
            lineHeight="30px"
            color="#42307D"
          >
            Share your NFT
          </Text>
          <Text
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
            color="#6941C6"
            textAlign="center"
          >
            Display your newly made NFT on all social media platforms.
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          gap="20px"
          flexDirection="column"
          maxW="384px"
        >
          <Box w="48px" h="48px">
            <Image src={boltSVG} />
          </Box>
          <Text
            fontWeight="500"
            fontSize="20px"
            lineHeight="30px"
            color="#42307D"
          >
            Instant
          </Text>
          <Text
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
            color="#6941C6"
            textAlign="center"
          >
            Don’t stress about the jargen and complex technology. With us it
            takes seconds to make your own NFT.
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          gap="20px"
          flexDirection="column"
          maxW="384px"
        >
          <Box w="48px" h="48px">
            <Image src={graphSVG} />
          </Box>
          <Text
            fontWeight="500"
            fontSize="20px"
            lineHeight="30px"
            color="#42307D"
          >
            Manage your NFT
          </Text>
          <Text
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
            color="#6941C6"
            textAlign="center"
          >
            Why only have one NFT with our application you will be able to mange
            your entire kennels worth of NFT’s
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CuttingEdge;
