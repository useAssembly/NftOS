import { Box, HStack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

import { Card, Content, Header } from "@/common/components/Card";

interface Props {
  icon: JSX.Element;
  label: string;
  description: string;
  size?: "sm" | "md";
}

export const PageLink: FunctionComponent<Props> = ({
  icon,
  label,
  description,
  size = "md",
}) => {
  return (
    <Card
      borderRadius={size === "md" ? 16 : 12}
      paddingX={3}
      paddingY={size === "md" ? 3 : 2}
      width={size === "md" ? "200px" : "fit-content"}
    >
      {size === "md" ? (
        <>
          <Header marginBottom={"36px"}>{icon}</Header>
          <Content>
            <Text size="xxxl">{label}</Text>
            <Text color="gray.500" size="sm">
              {description}
            </Text>
          </Content>
        </>
      ) : (
        <Content>
          <HStack spacing={2}>
            <Box>{icon}</Box>
            <Box>
              <Text size="xl">{label}</Text>
            </Box>
          </HStack>
        </Content>
      )}
    </Card>
  );
};
