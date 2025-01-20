import React, { useContext, useEffect , useState} from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';
import { stringify } from 'postcss';


const App = () => {

    const [user, setUser] = useState(null)
    const [loggedInUserData, setLoggedInUserData] = useState(null)
    const [userData, setUserData] = useContext(AuthContext);

    useEffect(() => {
      
        const loggedInUser = localStorage.getItem("loggedInUser");

        if(loggedInUser){
            const userData = JSON.parse(loggedInUser);
            setUser(userData.role)
            setLoggedInUserData(userData.data)
        }
      
    }, [])
    
    
    
    // const handleLogin = (email, password) => {
    //     if(userData && userData.admins.find((event) => event.email == email && event.password == password)){
    //         const admin = userData.admins.find((event) => event.email == email && event.password == password)
    //         setUser("admin")
    //         setLoggedInUserData(admin)
    //         localStorage.setItem("loggedInUser", JSON.stringify({role: "admin", data: admin}))
    //     }else if(userData){
    //         const employee = userData.employees.find((event) => event.email == email && event.password == password)
    //         if(employee){
    //             setUser("employee")
    //             setLoggedInUserData(employee);
    //             localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data: employee}))
    //         }
            

    //     }else{
    //         alert("invalid credentials")
    //     }
    // }

    const handleLogin = (email, password) => {
        if (email == 'admin@example.com' && password == '123') {
          setUser('admin')
          localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
        } else if (userData) {
          const employee = userData.find((e) => email == e.email && e.password == password)
          if (employee) {
            setUser('employee')
            setLoggedInUserData(employee)
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
          }
        }
        else {
          alert("Invalid Credentials")
        }
      }

    


    return (
        <>
        {!user ? <Login handleLogin={handleLogin}/> : ''}
        {user == "admin" ? <AdminDashboard changeUser={setUser}/> : (user == "employee"? <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/> : null) }
        
        </>
    )

}

export default App;
