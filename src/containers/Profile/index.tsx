import { Text, Image, Box, Stack } from "@chakra-ui/react";
import profileIcon from "../../assets/profileIcon.svg";
import DetailsForm from "../../components/DetailsForm";

const Profile: React.FC = () => {

  return (
    <Box
     display="flex"
     flexDirection="column"
     justifyContent="center"
     alignItems="center"
     w="100%"
     p={10}
    >
      <Stack
       justifyContent="center"
       alignItems="center"
       spacing={10}
      >
        <Box
          bg="#F4EBFF"
          borderWidth={1}
          borderRadius={10}
          p={1}
        >
          <Image src={profileIcon} alt="React Logo"/>
        </Box>
        <Text
          color="#101828"
          fontSize="30px"
          lineHeight="38px"
          fontWeight={500}
          textAlign="center"
          w="360px"
          h="76px"
        >
          Complete our Meta Kennal profile
        </Text>
        <Text color="#667085">
            Please tell us more about you! 
        </Text>
      </Stack>
      <DetailsForm />
    </Box>
  );
};

export default Profile;