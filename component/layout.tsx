import Navbar from "./navbar";
import Footer from "./footer";
import { useColorModeValue, Box } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
