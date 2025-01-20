import React from 'react';
import Header from '../Others/Header';
import CreateTask from '../Others/CreateTask';
import AllTasks from '../Others/AllTasks';

const AdminDashboard = (props) => {
    return(
        <div className='p-10 '>
            <Header data={"Admin"} changeUser={props.changeUser}/>
            <CreateTask/>
            <AllTasks />
        </div>
    )
}

export default AdminDashboard;