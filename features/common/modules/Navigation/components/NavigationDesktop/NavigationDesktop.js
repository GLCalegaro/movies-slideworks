import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

const NavigationDesktop = () => {
  return (
    //paddingY = vertical
    //display são os breakpoints para adaptar para as versoes mobile e desktop, base é mobile e md/sm desktop
    <Box
      paddingY="2rem"
      backgroundColor="#FCFCFC"
      display={{ base: "none", md: "block" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" alignItems="center">
              <Image
                position="relative"
                src={"/images/logoipsum.svg"}
                width="176px"
                top="0"
              />
            </Box>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;
