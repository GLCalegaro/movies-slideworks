import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

const NavigationMobile = () => {
  return (
    <Box
      paddingY="2rem"
      bgGradient="linear(to-r, #0a0129, #726BEA)"
      display={{ base: "block", md: "none" }}
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
                marginX="1rem"
              />
            </Box>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationMobile;
