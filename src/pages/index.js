import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import resume from '../files/DGRresume.pdf';

const projects = [
  {
    thumbnail: 2,
    title: 'Nailspiration',
    description:
      'This is a simple tool for providing inspiration for creating new nail art. Although it was created specifically for one person, it can be used by anyone! The application uses the Unsplash and Smithsonian APIs, as well as web scraping to get fun images.',
    link: 'https://www.ishmanail.xyz/',
    code: 'https://github.com/dangrous/nailspiration',
  },
  {
    thumbnail: 0,
    title: 'Pop Market',
    description:
      'Pop Market is an interface for betting on the success of songs in the Global Top 50 playlist on Spotify. Chase the top ten users on the leaderboard and become a points millionaire!',
    link: 'https://pop-market.fly.dev/',
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
];

const PortfolioProject = ({ project }) => {
  // These should be in 1408x920 format
  const thumbnails = [
    <StaticImage
      src='../images/popmarket.jpg'
      alt='Pop Market'
      className='m-1 border'
    />,
    <StaticImage
      src='../images/quicktionary.jpg'
      alt='Quicktionary'
      className='m-1 border'
    />,
    <StaticImage
      src='../images/nailspiration.jpg'
      alt='Nailspiration'
      className='m-1 border'
    />,
  ];

  return (
    <div className='flex text-center flex-col bg-white p-3 m-1 lg:basis-96'>
      <h3 className='text-lg font-header mb-2 tracking-wide'>
        {project.title}
      </h3>
      <a href={project.link}>{thumbnails[project.thumbnail]}</a>
      <p className='m-2 flex-grow'>{project.description}</p>
      <div className='flex justify-between mt-8'>
        <a
          className='text-slate-600 hover:underline hover:text-black'
          href={project.link}
        >
          Check it Out
        </a>
        <a
          className='text-slate-600 hover:underline hover:text-black'
          href={project.code}
        >
          See the Code
        </a>
      </div>
    </div>
  );
};

const IndexPage = () => {
  return (
    <main className='flex bg-gradient-to-br from-slate-300 to-white flex-col max-h-screen overflow-hidden border border-slate-500 border-8'>
      {/* <StaticImage
      src='../images/header.jpeg'
      alt='A man standing in front of Yosemite Valley'
      height='400'
    /> */}
      <div
        id='mainstuff'
        className='overflow-y-auto flex container flex-col flex-grow max-w-full mx-3 mt-3 md:mt-0 font-body'
      >
        <div className='flex flex-wrap 2xl:flex-nowrap items-center mb-8 mr-4 2xl:mt-24'>
          <StaticImage
            src='../images/icon.jpg'
            alt=''
            className='md:mt-2 md:w-20 mr-2'
          />
          <p className='text-8xl uppercase font-header text-slate-500 pt-3'>
            Hi there, I'm Daniel Gale-Rosen.
          </p>
        </div>

        <div className='flex flex-col pt-2 mr-8 my-10'>
          <div className='flex mb-3'>
            <p className='lg:basis-1/2'>
              I'm a seasoned full-stack developer with deep marketing
              experience. I've been coding for years, primarily in
              React/JavaScript and Python. This initially began as a tool for
              data analysis, but I'm now at home in the professional software
              development world.
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
              could make together,{' '}
              <a
                className='text-slate-600 hover:underline hover:text-black'
                href='mailto:dangalerosen@gmail.com'
              >
                let's chat
              </a>
              .
            </p>
          </div>
        </div>
        <h2 className='text-2xl mt-3 font-header text-slate-500 mb-10 tracking-wide'>
          Portfolio
        </h2>
        <div className='flex flex-wrap mr-6 mb-10'>
          {projects.map((project) => {
            return <PortfolioProject project={project} key={project.title} />;
          })}
        </div>
        <h2 className='text-2xl mt-3 mb-10 font-header text-slate-500 tracking-wide'>
          Other Endeavors
        </h2>
        <ul className='list-disc list-inside mb-6'>
          <li>
            <a
              href='https://www.blackwoodcharter.org'
              className='text-slate-600 hover:underline hover:text-black'
            >
              Escape Rooms
            </a>
          </li>
          <li>
            <a
              href='https://52frames.com/photographer/13983'
              className='text-slate-600 hover:underline hover:text-black'
            >
              Photography
            </a>
          </li>
          <li>
            <a
              href='https://www.boozynewsie.com'
              className='text-slate-600 hover:underline hover:text-black'
            >
              Cocktails
            </a>
          </li>
        </ul>
      </div>
      <footer
        className='flex p-5 bg-slate-500 text-white justify-between font-body sm:flex-nowrap
      flex-wrap'
      >
        <div className='flex flex-col flex-grow-0 basis-1/4 mr-5'>
          <h2 className='font-bold text-lg font-header tracking-wider'>
            Contact and Links
          </h2>
          <ul className='list-inside flex justify-between flex-grow-0'>
            <a
              className='hover:underline hover:text-black'
              href={resume}
              download
            >
              Resume
            </a>
            <span>/</span>
            <a
              href='mailto:dangalerosen@gmail.com'
              className='hover:underline hover:text-black'
            >
              Email
            </a>
            <span>/</span>
            <a
              href='https://github.com/dangrous/'
              className='hover:underline hover:text-black'
            >
              GitHub
            </a>
            <span>/</span>
            <a
              href='https://www.linkedin.com/in/dgalerosen/'
              className='hover:underline hover:text-black'
            >
              LinkedIn
            </a>
            <span>/</span>
            <a
              href='https://www.instagram.com/dangrous/'
              className='hover:underline hover:text-black'
            >
              Instagram
            </a>
          </ul>
        </div>
        <p className='self-end mt-5 sm:mt-0'>
          This website is created with Gatsby.js and styled with Tailwind.css
        </p>
      </footer>
    </main>
  );
};

export const Head = () => {
  return (
    <>
      <title>DANGRO.US - Daniel Gale-Rosen</title>
      <meta
        name='description'
        content="Hi there, I'm Daniel Gale-Rosen. I'm a full-stack developer."
      />
    </>
  );
};

export default IndexPage;
