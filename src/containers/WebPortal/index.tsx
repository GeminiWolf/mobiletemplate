import { Flex } from "@chakra-ui/react";
import React from "react";
import InfoBox from "../../components/InfoBox";
import FuryFriendsOnline from "../../components/FurryFriendsOnline/index";
import CuttingEdge from "../../components/CuttingEdge/index";
import FAQ from "../../components/FAQ";
import TechStack from "../../components/TechSatck/TeckStack";

import CreateYourNFT from "../../components/CreateYourNFT";
const WebPortal = () => {
  return (
    <Flex flexDirection="column">
      <InfoBox />
      <TechStack />
      <FuryFriendsOnline />
      <FAQ />
      <CreateYourNFT />
    </Flex>
  );
};

export default WebPortal;
