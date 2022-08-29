import {
  Avatar,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import { Card, Content, Footer } from "@/common/components/Card";

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
  } = useForm();
  const fileRef = useRef(null);

  const triggerUpload = () => {
    fileRef.current.click();
  };

  return (
    <Card maxWidth={900} minWidth={{ base: "full", md: 476 }}>
      <Content>
        <Center>
          <Heading pb={4}>Deploy a site</Heading>
        </Center>
        <FormControl>
          <Wrapper>
            <FormLabel minWidth={LABEL_WIDTH}>NFT Contract Address</FormLabel>
            <Input
              {...register("address", { required: true })}
              isInvalid={!!errors.address}
            />
          </Wrapper>
          <Wrapper>
            <FormLabel minWidth={LABEL_WIDTH}>Background Color</FormLabel>
            <Input type="color" {...register("background")} />
          </Wrapper>
          <Wrapper>
            <FormLabel minWidth={LABEL_WIDTH}>Favicon</FormLabel>
            <Flex align="center" gap={4}>
              <Avatar
                height="100"
                src={
                  watch("photo") ? URL.createObjectURL(watch("photo")[0]) : null
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
        </FormControl>
      </Content>
      <Footer>
        <Flex justify="end">
          <Button width={{ base: "full", md: "auto" }}>
            <Link href="/deploy/site">Deploy</Link>
          </Button>
        </Flex>
      </Footer>
    </Card>
  );
};
