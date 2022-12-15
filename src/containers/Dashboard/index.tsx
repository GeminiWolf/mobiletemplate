import { Box, Button, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import Gallery from "../../components/Gallery";
import { AuthContext } from "../../utils/contexts";

const Dashboard = () => {
	const { signOut, user } = useContext(AuthContext);

	return (
		<Box>
			<Gallery />
			{/* <Button
				w="50%"
				mt={4}
				colorScheme="blue"
				type="button"
				onClick={() => signOut()}
			>
				Logout
			</Button> */}
		</Box>
	);
};

export default Dashboard;
