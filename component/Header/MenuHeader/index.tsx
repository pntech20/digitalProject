import {
  Box,
  Flex,
  Link,
  Spacer,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../../../public/img/DummyLogo.png";
import { ReactNode } from "react";
import Image from "next/image";
const Links = ["About", "Services", "Client", "Block", "Contact"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={5}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function MenuHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} mb={10}>
        <Flex h={16} alignItems={"center"} justifyContent="flex-end">
          <Image src={Logo} alt="Logo" />
          <Spacer />
          <Box>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
