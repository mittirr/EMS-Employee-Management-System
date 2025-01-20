import React from 'react';

const TaskStatuses = ({data}) =>{
    return(
        <div className='flex screen justify-between gap-5'>
            <div className='mt-20 w-[50%] bg-blue-400 py-12 px-10 font-medium rounded-xl'>
                <h2 className='text-5xl'>{data.taskStatuses.newTasks}</h2>
                <h3 className='text-2xl'>New Tasks</h3>
            </div>
            <div className='mt-20 w-[50%] bg-yellow-500 py-12 px-10 font-medium rounded-xl'>
                <h2 className='text-5xl'>{data.taskStatuses.acceptedTasks}</h2>
                <h3 className='text-2xl'>Accepted</h3>
            </div>
            <div className='mt-20 w-[50%] bg-emerald-400 py-12 px-10 font-medium rounded-xl'>
                <h2 className='text-5xl'>{data.taskStatuses.completedTasks}</h2>
                <h3 className='text-2xl'>Completed</h3>
            </div>
            
            <div className='mt-20 w-[50%] bg-red-400 py-12 px-10 font-medium rounded-xl'>
                <h2 className='text-5xl'>{data.taskStatuses.failedTasks}</h2>
                <h3 className='text-2xl'>Failed</h3>
            </div>
        </div>
    )
}

export default TaskStatuses;