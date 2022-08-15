import "@/styles/globals.scss";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import { CoreLayout } from "@/common/components/CoreLayout";
import { ChakraFonts } from "@/common/components/CustomFont";
import { PageHead } from "@/common/components/PageHead";

import theme from "@/theme";

export const App = ({ Component, pageProps }) => {
  const Layout = Component.layout ? Component.layout : CoreLayout;
  return (
    <ChakraProvider theme={theme}>
      <ChakraFonts />
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <PageHead />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
