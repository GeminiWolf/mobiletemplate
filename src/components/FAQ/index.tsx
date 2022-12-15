import {
  Text,
  Image,
  Flex,
  Stack,
  Button,
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

const items = [
  {
    title: "Is there a free trial available?",
    description:
      "Unfotunatly not Some NFT’s go for millions of dollers ours is just a meer fration of the amount.",
  },
  {
    title: "How quick is the process?",
    description: "",
  },
  {
    title: "What is your cancellation policy?",
    description: "",
  },
  {
    title: "Can I trade my NFT?",
    description: "",
  },
  {
    title: "How does billing work?",
    description: "",
  },
  {
    title: "How do I change my account email?",
    description: "",
  },
];

const FAQ: React.FC = () => {
  return (
    <Flex
      w="100%"
      h="600px"
      bg="#FFFFF"
      padding="96px, 0px"
      gap="64px"
      flexDirection="column"
    >
      <Flex
        alignItems="center"
        padding="0px 32px"
        // flex="1"
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
          Frequently asked questions
        </Text>
        <Text
          fontWeight="400"
          fontSize="20px"
          lineHeight="30px"
          color="#667085"
          textAlign="center"
        >
          Everything you needd to know about the product and billing
        </Text>
      </Flex>
      <Flex justifyContent="center">
        <Accordion w="100%" maxW="1280px" allowToggle>
          {items.map((item) => (
            <Item title={item.title} description={item.description} />
          ))}
        </Accordion>
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text
          fontWeight="400"
          fontSize="20px"
          lineHeight="30px"
          color="#667085"
          textAlign="center"
        >
          Still have questions
        </Text>
        <Button color="#FFFF" bg="#7F56D9" maxW="130px">
          Get in touch
        </Button>
      </Flex>
    </Flex>
  );
};

const Item: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          +
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{description}</AccordionPanel>
    </AccordionItem>
  );
};

export default FAQ;
