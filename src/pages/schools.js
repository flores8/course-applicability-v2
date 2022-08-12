import * as React from "react"
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Link, Flex } from "../components/ui"
import ChevronRight from "../components/chevron-right"
import * as styles from "../components/404.css"

export default function NotFound() {
  return (
    <Layout title="Schools">
      <Box paddingY={4}>
        <Container>
          <Flex variant="column">
            <Heading as="h1">Schools page</Heading>
            <Flex variant="column" gap={0}>
              <Text variant="lead" className={styles.text}>
                Adding schools here soon...
              </Text>
              <Link to="/" className={styles.link}>
                <span>Back to home</span>
                <ChevronRight className={styles.linkChevron} />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}
