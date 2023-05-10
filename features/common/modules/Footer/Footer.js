import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { footerLinks } from "../Footer/footerConsts";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    //paddingY = vertical
    //display são os breakpoints para adaptar para as versoes mobile e desktop, base é mobile e md desktop
    <Box
      backgroundColor="#726BEA"
      paddingY="2rem"
      paddingX={{ base: "1rem", sm: "0" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Link href="/">
          <Box display="flex" alignItems="center">
            <Image
              position="relative"
              src={"/images/whitelogo.svg"}
              width="176px"
              top="0"
              marginY="1rem"
            />
          </Box>
        </Link>
        <Divider
          borderWidth="2px"
          orientation="horizontal"
          marginY="1rem"
          borderColor="#FCFCFC"
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={{ base: "1.3rem", sm: "10" }}
          padding="1rem"
        >
          <Text
            color="#FFFFFF"
            fontSize={{ base: "0.6rem", sm: "1rem" }}
            fontFamily="Montserrat"
            fontWeight="light"
          >
            Terms & Conditions
          </Text>
          <Text
            color="#FFFFFF"
            fontSize={{ base: "0.6rem", sm: "1rem" }}
            fontFamily="Montserrat"
            fontWeight="light"
          >
            Privacy Policy
          </Text>
          <Spacer />
          <Flex
            gap={{ base: "0.8rem", sm: "6" }}
            alignItems="center"
            fontSize={{ base: "0.7rem", sm: "1.3rem" }}
            justifyContent="space-between"
          >
            {footerLinks.map((item) => (
              <FooterLinks key={item.icon} {...item} />
            ))}
          </Flex>
        </Box>
        <Text
          display="flex"
          gap="3"
          marginTop="1rem"
          fontSize="xs"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          color="#FCFCFC"
        >
          Developed by Giovanna Calegaro
          <a href="https://github.com/GLCalegaro">
            <BsGithub fontSize="1.1rem" />
          </a>
          <a href="https://www.linkedin.com/in/giovanna-calegaro-a01775129/">
            <BsLinkedin color="#006097" fontSize="1.1rem" />
          </a>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

const FooterLinks = ({ icon, link }) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5rem" color="#FFFFFF">
        {icon}
      </Flex>
    </Link>
  );
};
