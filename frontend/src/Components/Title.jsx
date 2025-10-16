import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3 text-3xl sm:text-4xl font-prata'>
      <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span> </p>
      <p className='w-10 sm:w-12 h-[4px] bg-gray-700'></p>
      
    </div>
  )
}

export default Title
