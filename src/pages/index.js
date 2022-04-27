import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main className='h-screen bg-gradient-to-br from-orange-100 to-yellow-50'>
      <div className='flex mx-auto container flex-col'>
        <StaticImage
          src='../images/header.jpeg'
          alt='A man standing in front of Yosemite Valley'
        />
        <h1 className='text-8xl text-center'>
          Hi there, I'm Daniel Gale-Rosen
        </h1>
      </div>
    </main>
  )
}

export default IndexPage
