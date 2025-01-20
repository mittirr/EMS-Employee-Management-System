import React, { useContext , useState} from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskName, setTaskName] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskAssignto, setTaskAssignto] = useState('')
    const [taskCategory, setTaskCategory] = useState('')
    const [taskDiscription, setTaskDiscription] = useState('')

    // const [newTask, setNewTask] = useState({})

    const submitHandler = (event) => {
        event.preventDefault();


        const newTask = {
            taskName,
            taskDiscription,
            taskCategory,
            taskDate,
            taskCompleted: false,
            newTask: true,
            acceptedTask: false,
            failedTask: false
        };

        const data = userData;
        
        
        
        data.forEach((elem) =>{
            if(elem.name == taskAssignto){
                elem.tasks.push(newTask);
                elem.taskStatuses.newTasks = elem.taskStatuses.newTasks + 1;     
            }
        })
        
        setUserData(data)
        
        localStorage.setItem("employees",JSON.stringify(userData))
        console.log(data);

        setTaskName('')
        setTaskDate('')
        setTaskAssignto('')
        setTaskCategory('')
        setTaskDiscription('')

        
    }

    

    return (
        <div className='mt-10 bg-[#1C1C1C] rounded'>
            
            <form className='flex flex-wrap items-start justify-between' onSubmit={(event) => {
                submitHandler(event)
            }}>

                <div className='w-1/2 p-4'>
                    <div className='mb-6'>
                        <h3 className='mb-1 text-md'>Task title</h3>
                        <input value={taskName} onChange={(e) => {
                            setTaskName(e.target.value)
                        }} className='p-1 w-[90%] bg-transparent border-[1px] rounded-sm border-gray-400' type="text" placeholder='Fix the bugs' />
                    </div>
                    <div className='mb-6'>
                        <h3 className='mb-1 text-md'>Date</h3>
                        <input value={taskDate} onChange={(e) => {
                            setTaskDate(e.target.value)
                        }}className='p-1 w-[90%] bg-transparent border-[1px] rounded-sm border-gray-400' type="date" />
                    </div>
                    <div className='mb-6'>
                        <h3 className='mb-1 text-md'>Assign to</h3>
                        <select value={taskAssignto} onChange={(e) => {
                            setTaskAssignto(e.target.value)
                        }} name="selectedEmployee" className='w-[90%] p-1 bg-transparent border-[1px] rounded-sm border-gray-400'>
                            {userData.map((e, idx) => {
                                return <option value={e.name} className='text-black' key={idx}>{e.name}</option>
                            })}
                        </select>
                    </div>
                    <div className='mb-6'>
                        <h3 className='mb-1 text-md'>Category</h3>
                        <input value={taskCategory} onChange={(e) => {
                            setTaskCategory(e.target.value)
                        }}className='w-[90%] p-1 bg-transparent border-[1px] rounded-sm border-gray-400' type="text" placeholder='e.g. dev, fix, test' />
                    </div>
                </div>
            
                
                <div className='w-1/2 p-4'>
                    <div className='mb-6'>
                        <h3 className='mb-1 text-md'>Discription</h3>
                        <textarea value={taskDiscription} onChange={(e) => {
                            setTaskDiscription(e.target.value)
                        }}className='border-gray-400 p-1 bg-transparent border-[1px] rounded-sm w-full h-56 mb-6' name="" id="" placeholder='What is the task about' />
                        <button className='bg-emerald-500 rounded-lg text-2xl font-medium p-1.5 w-full'>Create task</button>
                    </div>
                </div>

            </form>
            
            
            
        </div>
    )

}

export default CreateTask;