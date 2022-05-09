import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import resume from '../files/DGRresume.pdf'

const projects = [
  {
    thumbnail: 0,
    title: 'Pop Market',
    description:
      'Pop Market is an interface for betting on the success of songs in the Global Top 50 playlist on Spotify. Chase the top ten users on the leaderboard and become a points millionaire!',
    link: 'floating-earth-98213.herokuapp.com/',
    code: 'https://github.com/dangrous/pop_market',
  },
  {
    thumbnail: 1,
    title: 'Quicktionary',
    description:
      'This is an sandbox app to play party games online such as Dictionary, Wise and Otherwise, or the Game of Things. Start your room, send the code to your friends, and have fun!',
    link: 'http://dangrous.pythonanywhere.com/',
    code: 'https://github.com/dangrous/quicktionary',
  },
  {
    thumbnail: 2,
    title: 'Nailspiration',
    description:
      'This is a simple tool for providing inspiration for creating new nail art. Although it was created specifically for one person, it can be used by anyone! The application uses the Unsplash and Smithsonian APIs, as well as web scraping to get fun images.',
    link: 'http://www.ishmanail.xyz/',
    code: 'https://github.com/dangrous/nailspiration',
  },
]

const Portfolio = ({ project }) => {
  const thumbnails = [
    <StaticImage
      src='../images/popmarket.jpg'
      alt='Pop Market'
      className='m-1'
    />,
    <StaticImage
      src='../images/quicktionary.jpg'
      alt='Quicktionary'
      className='m-1'
    />,
    <StaticImage
      src='../images/nailspiration.jpg'
      alt='Nailspiration'
      className='m-1'
    />,
  ]

  return (
    <div className='flex text-center flex-col bg-white rounded p-3 m-1 lg:basis-96'>
      <h3 className='text-lg'>{project.title}</h3>
      {thumbnails[project.thumbnail]}
      <p className='m-2 flex-grow'>{project.description}</p>
      <div className='flex justify-between'>
        <a className='underline' href={project.link}>
          Check it Out
        </a>
        <a className='underline' href={project.code}>
          See the Code
        </a>
      </div>
    </div>
  )
}

const IndexPage = () => {
  return (
    <main className='flex bg-gradient-to-br from-orange-200 to-yellow-50 flex-col'>
      {/* <StaticImage
        src='../images/header.jpeg'
        alt='A man standing in front of Yosemite Valley'
        height='400'
        layout='constrained'
      /> */}
      <div id='mainstuff' className='flex mx-auto container flex-col flex-grow'>
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
        <a className='underline' href={resume} download>
          Resume
        </a>
        <h2 className='text-2xl'>Portfolio</h2>
        <div className='flex flex-wrap'>
          {projects.map((project) => {
            return <Portfolio project={project} />
          })}
        </div>
      </div>
      <footer className='flex p-5 bg-white'>
        {/* <div className='flex flex-col flex-grow'>
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
        </div> */}
        <div className='flex flex-col flex-grow'>
          <h2 className='font-bold text-lg'>Links</h2>
          <ul className='list-disc list-inside'>
            <li>
              <a href='https://github.com/dangrous/'>GitHub</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/dgalerosen/'>LinkedIn</a>
            </li>
            <li>
              <a href='https://www.instagram.com/dangrous/'>Instagram</a>
            </li>
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
