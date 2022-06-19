import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Header from '../header'

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={6}>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header path={router} />
      <Container pt={6} maxW='sm'>
        {children}
      </Container>
    </Box>
  )
}

export default Main
