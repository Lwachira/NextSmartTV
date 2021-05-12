import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from "@chakra-ui/react"
import Menu from '../Components/Menu'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Lincoln Smart TV App</title>
        <meta name="description" content="Lincoln Smart TV App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     

      <Menu>

      </Menu>
    </Box>
  )
}
