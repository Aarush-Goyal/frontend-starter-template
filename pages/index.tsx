import SEO from '@/components/SEO'
import { chakra, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <SEO
        title="Your title here"
        image="/assets/banner.png"
        description="Your Description here"
      />
      <Flex h="100vh" align={'center'} justify={'center'}>
        <chakra.h1 fontSize={['4xl', '9xl']}>Hello there 👋</chakra.h1>
      </Flex>
    </div>
  )
}

export default Home
