import React from 'react'

const Header = ({ read, handleRead }) => {
  return (
    <header className='flex justify-between items-center mb-8  md:px-4'>
      <div className='flex items-center relative'>
        <h1 className=' flex  text-lg sm:text-xl md:text-2xl font-bold text-very-dark-blue'>
          Notifications
          <span className='  bg-blue w-6 h-6  text-white rounded-lg text-xs sm:text-sm text-center font-bold pt-1 mt-1 md:pt-0 ml-2'>
            {read}
          </span>
        </h1>
      </div>
      <button
        onClick={handleRead}
        className='text-dark-grayish-blue hover:text-grayish-blue text-xs sm:text-sm'
      >
        Mark all as read
      </button>
    </header>
  )
}

export default Header
