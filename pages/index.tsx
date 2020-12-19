import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <Box position="relative" backgroundColor="blue.50" as="main" h="100vh" w="100vw" >
      <Head>
        <title>Welcome</title>
      </Head>
      <Heading as="header" position="sticky" shadow="md" padding={4} backgroundColor="white" color="blue.900">
        Hello World
      </Heading>
      <Container mt={8}>
        <Text color="blue.900" mb={4}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dolorum minima quibusdam autem, provident, debitis, libero doloremque commodi quidem optio laudantium similique iure. Ipsa illum voluptatibus minus alias, nihil obcaecati.
        </Text>
        <Text color="blue.900">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dolorum minima quibusdam autem, provident, debitis, libero doloremque commodi quidem optio laudantium similique iure. Ipsa illum voluptatibus minus alias, nihil obcaecati.
        </Text><Text color="blue.900">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dolorum minima quibusdam autem, provident, debitis, libero doloremque commodi quidem optio laudantium similique iure. Ipsa illum voluptatibus minus alias, nihil obcaecati.
        </Text><Text color="blue.900">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dolorum minima quibusdam autem, provident, debitis, libero doloremque commodi quidem optio laudantium similique iure. Ipsa illum voluptatibus minus alias, nihil obcaecati.
        </Text><Text color="blue.900">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dolorum minima quibusdam autem, provident, debitis, libero doloremque commodi quidem optio laudantium similique iure. Ipsa illum voluptatibus minus alias, nihil obcaecati.
        </Text>
      </Container>
    </Box>
  )
}
