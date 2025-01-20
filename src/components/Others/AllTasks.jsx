import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../context/AuthProvider';



const AllTasks = () => {
    const [userData, setUserData] = useContext(AuthContext)

    return(
        <div className='bg-[#1C1C1C] w-full mt-6 p-4 rounded ' id='alltasks'>

            <div className='bg-purple-700 rounded flex items-center p-2 px-6 justify-between text-xl mb-2'>
                <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
                <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium'>Completed Task</h5>
                <h5 className='w-1/5 text-lg font-medium'>Failed Task</h5>
            </div>
            {userData.map((e, index) => {
                return <div key={index} className='border-purple-300 rounded border-2 flex p-2 px-6 justify-between text-xl mb-2'>
                            <h2 className='w-1/5 text-lg font-medium pl-4'>{e.name}</h2>
                            <h3 className='text-teal-200 w-1/5 text-lg font-medium pl-8'>{e.taskStatuses.newTasks}</h3>
                            <h5 className='text-yellow-200 w-1/5 text-lg font-medium pl-10'>{e.taskStatuses.acceptedTasks}</h5>
                            <h5 className='text-green-400 w-1/5 text-lg font-medium pl-14'>{e.taskStatuses.completedTasks}</h5>
                            <h5 className='text-red-600 w-1/5 text-lg font-medium pl-10'>{e.taskStatuses.failedTasks}</h5>
                        </div>
            })}
            
        </div>
    )
}

export default AllTasks;