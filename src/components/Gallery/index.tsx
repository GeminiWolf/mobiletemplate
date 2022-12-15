import {
	Box,
	Button,
	Heading,
	HStack,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";

const Gallery = () => {
	return (
		<Box>
			<VStack alignItems="center">
				<Text color="#42307D">Welcome Back! </Text>
				<Heading color="#000" fontSize="2rem">
					Say hello to your pets...
				</Heading>
				<Text textAlign="center" color="#42307D">
					We are using the lastest technology to ensure the integrity of your
					NFT
				</Text>
				<HStack>
					<Button>Read our principles</Button>
					<Button>+ Add more pets!S</Button>
				</HStack>
			</VStack>
			<SimpleGrid columns={2} gap={5} p={5} pos="relative">
				<Box
					flexDir="column"
					alignItems=" flex-start"
					p="24px 20px"
					gap="32px"
					w="480px"
					h="480px"
					bgColor="rgba(255, 255, 255, 0.3)"
					border="1px solid rgba(255, 255, 255, 0.5)"
					backdropFilter="blur(24px)"
				>
					<Image
						src="https://media.istockphoto.com/photos/pug-puppy-dog-picture-id454238885?k=20&m=454238885&s=612x612&w=0&h=bu7n89Qifct2UD381WkxAuPjbUiTRXsylkOMcHXa7W0="
						alt=""
						h="full"
						w="full"
					/>
					<Box pos="absolute" zIndex={1000}>
						<Text
							color="#FFFFFF"
							fontSize="30px"
							fontWeight={600}
							lineHeight="38px"
						></Text>
						<Text
							color="#FFFFFF"
							fontSize="18px"
							fontWeight={600}
							height="28px"
						></Text>
						<Text
							color="#FFFFFF"
							fontSize="16px"
							fontWeight={400}
							height="24px"
						></Text>
					</Box>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default Gallery;
