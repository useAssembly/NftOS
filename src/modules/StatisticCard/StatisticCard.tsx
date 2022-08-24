import { Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

import { Card, Content, Footer, Header } from "@/common/components/Card";

interface Props {
  label: React.ReactNode;
  mainStats: React.ReactNode;
  footerStats?: React.ReactNode;
}

export const StatisticCard: FunctionComponent<Props> = ({
  label,
  mainStats,
  footerStats,
}) => {
  return (
    <Card px={6} py={5}>
      <Header minWidth={177} textAlign="left">
        <Text color="gray.700" fontWeight={500} size="sm">
          {label}
        </Text>
      </Header>
      <Content minWidth={177} mt={6} textAlign="left">
        <Text color="gray.700" fontWeight={500} size="4xl">
          {mainStats}
        </Text>
      </Content>
      {footerStats && (
        <Footer minWidth={177} mt={1} textAlign="left">
          <Text color="gray.700" fontWeight={500} opacity={0.8} size="sm">
            {footerStats}
          </Text>
        </Footer>
      )}
    </Card>
  );
};
