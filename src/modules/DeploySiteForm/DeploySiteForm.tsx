import {
  Avatar,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Textarea,
} from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import { Card, Content, Footer } from "@/common/components/Card";
import { WalletConnect } from "@/common/components/WalletConnect";

const LABEL_WIDTH = 190;
const Wrapper = ({ children }) => {
  return (
    <Flex
      align={{ base: "start" }}
      flexDirection={{ base: "column", md: "row" }}
      mb={4}
    >
      {children}
    </Flex>
  );
};

export const DeploySiteForm = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const fileRef = useRef(null);

  const router = useRouter();

  const address = useAddress();

  const triggerUpload = () => {
    fileRef.current.click();
  };

  const onSubmit = async (data) => {
    try {
      await fetch(`/api/createPage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, address }),
      });
    } catch (e) {
      console.error(e);
    }

    router.push("/deploy/site");
  };

  return (
    <>
      {address ? (
        <Card maxWidth={900} minWidth={{ base: "full", md: 476 }}>
          <Content>
            <Center>
              <Heading pb={4}>Deploy a site</Heading>
            </Center>
            <FormControl>
              {/* <Wrapper>
                <FormLabel minWidth={LABEL_WIDTH}>
                  NFT Contract Address
                </FormLabel>
                <Input
                  {...register("nftContractAddress", { required: true })}
                  isInvalid={!!errors.nftContractAddress}
                />
              </Wrapper>
              <Wrapper>
                <FormLabel minWidth={LABEL_WIDTH}>Background Color</FormLabel>
                <Input type="color" {...register("background")} />
              </Wrapper> */}
              <Wrapper>
                <FormLabel minWidth={LABEL_WIDTH}>Favicon</FormLabel>
                <Flex align="center" gap={4}>
                  <Avatar
                    height="100"
                    src={
                      watch("photo")
                        ? URL.createObjectURL(watch("photo")[0])
                        : null
                    }
                    width="100"
                  />
                  <Input
                    ref={fileRef}
                    accept="image/*"
                    display="none"
                    type="file"
                    onChange={(e) => setValue("photo", e.target.files)}
                  />
                  <Button size="lg" onClick={triggerUpload}>
                    Upload
                  </Button>
                </Flex>
              </Wrapper>
              <Wrapper>
                <FormLabel minWidth={LABEL_WIDTH}>Site Name</FormLabel>
                <Input
                  {...register("siteName", { required: true })}
                  isInvalid={!!errors.siteName}
                />
              </Wrapper>
              <FormLabel minWidth={LABEL_WIDTH}>
                Environment Variables
              </FormLabel>
              <Textarea
                {...register("envVariables", { required: true })}
                isInvalid={!!errors.envVariables}
              />
            </FormControl>
          </Content>
          <Footer>
            <Flex justify="end">
              <Button
                width={{ base: "full", md: "auto" }}
                onClick={handleSubmit(onSubmit)}
              >
                Deploy
              </Button>
            </Flex>
          </Footer>
        </Card>
      ) : (
        <WalletConnect />
      )}
    </>
  );
};
