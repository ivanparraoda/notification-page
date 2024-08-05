import Header from './components/Header'
import UserListing from './components/UserListing'
import React, { useState, useEffect } from 'react'

function App() {
  const [read, setRead] = useState(0)
  const [data, setData] = useState([])

  const handleRead = () => {
    const updateRead = data.map((item) => ({
      ...item,
      read: true
    }))
    setData(updateRead)
    setRead(0)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json')
        const result = await response.json()
        setData(result)
        setRead(result.filter((item) => !item.read).length) // Corrected to show unread count
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='flex flex-col bg-white p-6 shadow-xl max-w-2xl  mt-6 rounded-lg'>
        <Header read={read} handleRead={handleRead} />
        <UserListing data={data} />
      </div>
    </div>
  )
}

export default App
