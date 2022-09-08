import "@/styles/globals.scss";

import { ChakraProvider } from "@chakra-ui/react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

import { CoreLayout } from "@/common/components/CoreLayout";
import { ChakraFonts } from "@/common/components/CustomFont";
import { PageHead } from "@/common/components/PageHead";
import { TemplateProvider } from "@/common/providers/TemplateProvider";

import theme from "@/theme";

const activeChainId = ChainId.Goerli;

export const App = ({ Component, pageProps }) => {
  const Layout = Component.layout ? Component.layout : CoreLayout;
  return (
    <ChakraProvider theme={theme}>
      <ThirdwebProvider desiredChainId={activeChainId}>
        <ChakraFonts />
        <Head>
          <meta
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            name="viewport"
          />
          <PageHead />
        </Head>
        <TemplateProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster />
        </TemplateProvider>
      </ThirdwebProvider>
    </ChakraProvider>
  );
};

export default App;
