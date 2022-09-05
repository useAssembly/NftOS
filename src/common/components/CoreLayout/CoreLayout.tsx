import { Box } from "@chakra-ui/react";

import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

export const CoreLayout = ({ children }) => {
  return (
    <Box
      background="linear-gradient(180deg, #E2E8F0 60.94%, rgba(226, 232, 240, 0.2) 100%), #FFFFFF"
      minHeight="100vh"
      pb="60px"
      position="relative"
    >
      {/* <Header className="sticky h-[50px] top-0 w-full z-10 bg-navy-600" /> */}
      {/* Height is 100% minus header and footer height */}
      {/* <main className="bg-navy-700 h-[calc(100%-50px-32px)] overflow-y-auto"> */}
      <NavBar />
      {children}
      {/* </main> */}
      <Footer />
    </Box>
  );
};
