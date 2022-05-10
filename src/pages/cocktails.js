import * as React from 'react'

const CocktailsPage = () => {
  return (
    <main className='h-screen bg-gradient-to-br from-orange-100 to-yellow-50'>
      <div className='flex mx-auto container flex-col'>
        <h1 className='text-8xl text-center'>Escape Rooms and Puzzles</h1>
        <p>I make some neat things</p>
        <a href='/'>Home</a>
        <h2>Other Endeavors</h2>
        <a href='/escapes'>Escape Rooms</a>
        <a href='/photos'>Photography</a>
        <footer>
          This website is created with Gatsby.js and styled with Tailwind.css
        </footer>
      </div>
    </main>
  )
}

export default CocktailsPage
