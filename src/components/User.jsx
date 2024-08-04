import React from 'react'

const User = ({ user }) => {
  return (
    <div
      className={`${
        user.read ? 'bg-white' : 'bg-light-grayish-blue-2'
      } flex gap-4 p-2 md:p-4 rounded-xl items-center`}
    >
      <img
        className='w-12 h-12 sm:w-14 sm:h-14 mb-auto'
        src={user.avatarImg}
        alt='User Avatar'
      />
      <div className='flex-1'>
        <p className='text-gray-600 text-xs sm:text-sm'>
          <span className='font-bold text-very-dark-blue hover:text-blue hover:cursor-pointer'>
            {user.user}{' '}
          </span>
          {user.text}
          {user.action && (
            <span className='font-semibold text-dark-grayish-blue hover:text-blue hover:cursor-pointer'>
              {user.action}
            </span>
          )}
          {user.group && (
            <span className='font-bold text-blue hover:cursor-pointer'>
              {user.group}
            </span>
          )}
          <span
            className={`${
              user.read
                ? ''
                : 'rounded-full ml-2 px-1 w-1 h-1 text-[.50rem] font-medium bg-red-500 text-white'
            }`}
          ></span>
        </p>
        <p className='text-grayish-blue text-xs sm:text-sm'>{user.date}</p>
        {user.message && (
          <p className='text-dark-grayish-blue hover:bg-slate-100 cursor-pointer text-xs sm:text-sm mt-2 sm:mt-4 border p-2 sm:p-4 rounded-md'>
            {user.message}
          </p>
        )}
      </div>
      {user.picture && (
        <img
          className='w-8 sm:w-10 ml-auto cursor-pointer'
          src={user.picture}
          alt='User Picture'
        />
      )}
    </div>
  )
}

export default User
