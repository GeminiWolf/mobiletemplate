import { Text, Image, Box, Stack, Button } from "@chakra-ui/react";
import Mascot from "../../assets/mascot.svg";
import dog from "../../assets/dog.svg";
import { useContext } from "react";
import { AuthContext } from "../../utils/contexts";
import { useLocation, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate()
  const location: any = useLocation()
  const { signin } = useContext(AuthContext)

  return (
    <Box
     display="flex"
     justifyContent="center"
     alignItems="start"
     w="100%"
     p={5}
    >
      <Stack
       display="flex"
       flexDirection="column"
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
          <Image src={dog} alt="React Logo"/>
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
          Enter your meta Mask details
        </Text>
        <Stack
          w="360px"
          h="64px"
          color="#667085"
          spacing={5}
          textAlign="center"
        >
          <Text
           color="#667085"
          >
            Contact Support
          </Text>
          <Text>
            sovtechmetakennal@gmail.com
          </Text>
        </Stack>

        <Box
          w="360px"
          h="44px"
          bg="#7F56D9"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderRadius={10}
        >
          <Button
            w="100%"
            fontWeight={500}
            fontSize="16px"
            lineHeight="24px"
            colorScheme="#7F56D9"
            onClick={() => signin(
              () => navigate(location.state?.from?.pathname || "/profile", {
                replace: true,
              })
            )}
          >
            Enter Meta Mask Account
          </Button>
        </Box>
      </Stack>

      <Box
       w="529px"
       h="528px"
      >
        <Image src={Mascot} alt="React Logo" />
      </Box>
    </Box>
  );
};

export default Login;