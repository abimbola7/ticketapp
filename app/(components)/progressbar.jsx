import React from 'react'

const Progressbar = ({ progress }) => {
  return (
    <div className='w-full h-2.5 bg-gray-200 rounded-full transition-transform duration-200'>
      <div
       className='bg-blue-600 h-2.5 rounded-full transition-transform duration-200'
      style={{
        width : `${progress}%`
      }}>
        
      </div>
    </div>
  )
}

export default Progressbar