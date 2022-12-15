import {
	Box,
	Center,
	Flex,
	Heading,
	Image,
	Link,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import metamask from "./../../assets/metamask.svg";
import moralis from "./../../assets/moralis.svg";
import netlify from "./../../assets/netlify.svg";
import react from "./../../assets/react.svg";

const techStackInfo = [
	{
		icon: metamask,
		title: "Metamask",
		description: "Market leading technology to store your wallet.",
		link: "View Integration",
	},
	{
		icon: react,
		title: "React",
		description:
			"Leading web friont end technology to ensure the most advanced features.",
		link: "View Integration",
	},
	{
		icon: netlify,
		title: "Netlify",
		description: "Cloud servers to ensure 100% Uptime.",
		link: "View Integration",
	},
	{
		icon: moralis,
		title: "Moralis",
		description: "The latest in NFT Minting technology.",
		link: "View Integration",
	},
];

const TechStack = () => {
	return (
		<Box
			w="100%"
			bgColor="#fff"
			padding="96px, 0px"
			gap="64px"
			flex-direction="column"
			alignItems="center"
		>
			<VStack alignItems="center">
				<Text color="#42307D">Integrations</Text>
				<Heading color="#000" fontSize="2rem">
					Tools we are using
				</Heading>
				<Text textAlign="center" color="#42307D">
					We are using the lastest technology to ensure the integrity of your
					NFT
				</Text>
			</VStack>
			<Flex px={10} wrap="wrap" justify="center">
				{techStackInfo.map(({ icon, title, description, link }) => (
					<VStack w="calc(100%/3)" my="10">
						<Image src={icon} alt={title} height="80px" m={0} p={0} />
						<Heading color="#000" fontSize="1.5rem" as="h4">
							{title}
						</Heading>
						<Text textAlign="center" color="#42307D">
							{description}
						</Text>
						<Link textAlign="center" href={link} color="#7F56D9">
							{link} -&gt;
						</Link>
					</VStack>
				))}
			</Flex>
		</Box>
	);
};

export default TechStack;
