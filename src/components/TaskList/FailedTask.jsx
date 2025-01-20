import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 bg-purple-500 h-full w-[300px] p-8 rounded-xl'>
                <div className='flex justify-between'>
                    <h3 className='bg-red-500  justify-center px-2 py-0.5 rounded'>{data.taskCategory}</h3>
                    <h4>{data.taskDate}</h4>
                </div>
                <div className='mt-4'>
                    <h2 className='text-2xl font-semibold'>{data.taskName}</h2>
                    <br />
                    <p className='font-medium text-md text-teal-50'>{data.taskDescription}</p>
                </div>
                <div className='flex justify-center bg-red-600 mt-8 w-full px-2 py-1 rounded-md'>
                    <h4>Failed</h4>
                </div>
    </div>
  )
}

export default FailedTask