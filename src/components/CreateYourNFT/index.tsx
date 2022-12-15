import { Text, Image, Flex, Stack, Button, Box } from "@chakra-ui/react";

const CreateYourNFT: React.FC = () => {
  return (
    <Flex
      w="100%"
      h="370px"
      bg="#53389E"
      padding="96px, 0px"
      gap="64px"
      flexDirection="column"
      alignItems="center"
    >
      <Flex
        alignItems="center"
        padding="0px 32px"
        height="182px"
        flex="1"
        flexDirection="column"
        justifyContent="center"
      >
        <Text
          fontWeight="600"
          fontSize="36px"
          lineHeight="44px"
          color="#FFF"
          textAlign="center"
        >
          Create your NFT
        </Text>
        <Text
          fontWeight="500"
          fontSize="18px"
          lineHeight="28px"
          color="#E9D7FE"
          textAlign="center"
        >
          Join over Millions+ NFT owners arround the world.
        </Text>
        <Flex gap="8px">
          <Button color="#FFFF" bg="#7F56D9" maxW="130px">
            Learn more
          </Button>
          <Button color="#FFFF" bg="#7F56D9" maxW="130px">
            Get Started
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CreateYourNFT;
