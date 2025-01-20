import React from 'react'

const AcceptedTask = ({data}) => {
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
                <div className='flex justify-between mt-8'>
                    <button className='text-sm rounded-md bg-green-500 px-2 py-1'>Completed</button>
                    <button className='text-sm rounded-md bg-red-500 px-2 py-1'>Failed</button>
                </div>
            </div>
  )
}

export default AcceptedTask