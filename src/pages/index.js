import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import resume from '../files/DGRresume.pdf'

const projects = [1, 2, 3, 4]

const Portfolio = (project) => {
  return (
    <div className='flex flex-wrap flex-col w-80 p-2'>
      <StaticImage src='../images/header.jpeg' alt='image' width='200' />
      <h3>Title</h3>
      <p>
        Description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </p>
      <a href='/test'>Check it Out</a>
    </div>
  )
}

const IndexPage = () => {
  return (
    <main className='flex bg-gradient-to-br from-orange-100 to-yellow-50 flex-col'>
      <div className='flex mx-auto container flex-col flex-grow'>
        <StaticImage
          src='../images/header.jpeg'
          alt='A man standing in front of Yosemite Valley'
          height='400'
        />
        <h1 className='text-8xl text-center'>
          Hi there, I'm Daniel Gale-Rosen
        </h1>
        <p>
          I'm a full-stack developer with deep (and now somewhat useless)
          marketing experience. I've been coding on the side for years,
          primarily in JavaScript and Python, and I'm ready to move into the
          professional software development world.
        </p>
        <p>
          I've always had a passion for creating, whether that means designing
          an escape room, learning how to code or engineer something new, or
          perfecting the Old Fashioned. I have a passion for games, immersive
          experiences, and finding other ways to break people out of their usual
          routine.
        </p>
        <p>
          If you'd like to talk about something you're working on or what we
          could make together, let's chat.
        </p>
        <a href={resume} download>
          Resume
        </a>
        <h2>Portfolio</h2>
        <div className='flex flex-wrap'>
          {projects.map((project) => {
            return <Portfolio project={project} />
          })}
        </div>
      </div>
      <footer className='flex container mx-auto bg-red-500 p-2'>
        <div className='flex flex-col flex-grow'>
          <a href='/'>Home</a>
          <h2 className='font-bold text-lg'>Other Endeavors</h2>
          <ul className='list-disc list-inside'>
            <li>
              <a href='/escapes'>Escape Rooms</a>
            </li>
            <li>
              <a href='/photos'>Photography</a>
            </li>
            <li>
              <a href='/cocktails'>Cocktails</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col flex-grow'>
          <h2 className='font-bold text-lg'>Social Media</h2>
          <ul className='list-disc list-inside'>
            <li>GitHub </li>
            <li>Instagram</li>
            <li>Twitter </li>
          </ul>
        </div>
        <p className='self-end'>
          This website is created with Gatsby.js and styled with Tailwind.css
        </p>
      </footer>
    </main>
  )
}

export default IndexPage
