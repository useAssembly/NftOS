import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

import { Card, Content, Header } from "@/common/components/Card";

interface Props {
  linkHref: string;
  icon: JSX.Element;
  label: string;
  description: string;
  size?: "sm" | "md";
}

export const PageLink: FunctionComponent<Props> = ({
  linkHref,
  icon,
  label,
  description,
  size = "md",
}) => {
  return (
    <Link href={linkHref}>
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
              <Text size="3xl">{label}</Text>
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
    </Link>
  );
};
