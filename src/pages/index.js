import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import resume from '../files/DGRresume.pdf'

const projects = [
  {
    thumbnail: 2,
    title: 'Nailspiration',
    description:
      'This is a simple tool for providing inspiration for creating new nail art. Although it was created specifically for one person, it can be used by anyone! The application uses the Unsplash and Smithsonian APIs, as well as web scraping to get fun images.',
    link: 'http://www.ishmanail.xyz/',
    code: 'https://github.com/dangrous/nailspiration',
  },
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
]

const PortfolioProject = ({ project }) => {
  // These should be in 1408x920 format
  const thumbnails = [
    <StaticImage
      src='../images/popmarket.jpg'
      alt='Pop Market'
      className='m-1 rounded border'
    />,
    <StaticImage
      src='../images/quicktionary.jpg'
      alt='Quicktionary'
      className='m-1 rounded border'
    />,
    <StaticImage
      src='../images/nailspiration.jpg'
      alt='Nailspiration'
      className='m-1 rounded border'
    />,
  ]

  return (
    <div className='flex text-center flex-col bg-white rounded p-3 m-1 lg:basis-96'>
      {thumbnails[project.thumbnail]}
      <h3 className='text-lg'>{project.title}</h3>
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
    <main className='flex bg-gradient-to-br from-orange-200 to-yellow-50 flex-col min-h-screen'>
      {/* <StaticImage
        src='../images/header.jpeg'
        alt='A man standing in front of Yosemite Valley'
        height='400'
      /> */}
      <div id='mainstuff' className='flex container flex-col flex-grow mx-3'>
        <p className='text-4xl mt-2 mb-8 mr-8'>
          Hi there, I'm Daniel Gale-Rosen.
        </p>
        <div className='flex flex-col mr-8'>
          <div className='flex mb-3'>
            <p className='lg:basis-1/2'>
              I'm a full-stack developer with deep (and now somewhat useless)
              marketing experience. I've been coding on the side for years,
              primarily in JavaScript and Python, and I'm ready to move into the
              professional software development world.
            </p>
          </div>
          <div className='flex mb-3'>
            <p className='lg:basis-1/2'>
              I've always had a passion for creating, whether that means
              designing an escape room, learning how to code or engineer
              something new, or perfecting the Old Fashioned. I have a passion
              for games, immersive experiences, and finding other ways to break
              people out of their usual routine.
            </p>
          </div>
          <div className='flex mb-3'>
            <p className='lg:basis-1/2'>
              If you'd like to talk about something you're working on or what we
              could make together, let's chat.
            </p>
          </div>
        </div>
        <a className='underline' href={resume} download>
          Resume
        </a>
        <h2 className='text-2xl my-3'>Portfolio</h2>
        <div className='flex flex-wrap mr-6'>
          {projects.map((project) => {
            return <PortfolioProject project={project} />
          })}
        </div>
        <h2 className='text-2xl my-3'>Other Endeavors</h2>
        <ul className='list-disc list-inside'>
          <li>
            <a href='https://www.blackwoodcharter.org'>Escape Rooms</a>
          </li>
          <li>
            <a href='https://52frames.com/photographer/13983'>Photography</a>
          </li>
          <li>
            <a href='https://www.boozynewsie.com'>Cocktails</a>
          </li>
        </ul>
      </div>
      <footer className='flex p-5 bg-amber-100 mt-6 justify-between'>
        <div className='flex flex-col flex-grow-0 basis-1/4 mr-5'>
          <h2 className='font-bold text-lg'>Contact and Links</h2>
          <ul className='list-inside flex justify-between flex-grow-0'>
            <a href='mailto:dangalerosen@gmail.com'>Email</a>
            <span>/</span>
            <a href='https://github.com/dangrous/'>GitHub</a>
            <span>/</span>
            <a href='https://www.linkedin.com/in/dgalerosen/'>LinkedIn</a>
            <span>/</span>
            <a href='https://www.instagram.com/dangrous/'>Instagram</a>
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
