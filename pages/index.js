import Head from 'next/head'
import Image from 'next/image'

import ProfileCard from "../components/profile-card"

const Home = () =>  {
  return (
    <>
      <Head>
        <title>Profile Card Component</title>
        <meta property="og:title" content="Profile Card Component" key="title" />
        <meta name="description" content="A frontend mentor project." key="description" />
      </Head>
      <div className='w-screen h-screen flex justify-center items-center bg-darkCyan'>
        <ProfileCard />
      </div>
    </>
  )
}

export default Home
