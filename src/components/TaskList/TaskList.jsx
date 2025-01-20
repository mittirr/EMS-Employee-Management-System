import React from 'react';
import Slider from "react-slick";
import AcceptedTask from './AcceptedTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';


const TaskList = ({data}) =>{



    return(
        
        <div id='tasklist' className='flex items-center justify-start overflow-x-auto h-[45%] mt-12 w-full gap-4'>
            
            {data.tasks.map((e, index) => {
                if(e.newTask){
                    if(e.acceptedTask){
                        if(e.taskCompleted){
                            return <CompleteTask key={index} data={e}/>
                        }
                        if(e.failedTask){
                            return <FailedTask key={index} data={e}/>
                        } else {
                            return <AcceptedTask key={index} data={e}/>
                        }
                    }if(e.failedTask){
                        return <FailedTask key={index} data={e} />
                    } else {
                    return <NewTask key={index} data={e}/>
                    }
                }

                if(e.acceptedTask){
                    if(e.taskCompleted){
                        return <CompleteTask key={index} data={e}/>
                    }
                    if(e.failedTask){
                        return <FailedTask key={index} data={e}/>
                    }
                    else{
                        return <AcceptedTask key={index} data={e}/>
                    }
                }
                
                if(e.taskCompleted){
                    return <CompleteTask key={index} data={e}/>
                }
                if(e.failedTask){
                    return <FailedTask key={index} data={e}/>
                }
            })}
        </div>

    )

}

export default TaskList;