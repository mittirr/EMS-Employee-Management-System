import React from 'react';


const employees = [
    
        {
        "id": 1,
        "name": "Akashjeet Mitra",
        "email": "akash.jeet@example.com",
        "password": "123",
        "taskStatuses": {
            "newTasks": 0,
            "completedTasks": 2,
            "acceptedTasks": 1,
            "failedTasks": 0,
        },
        "tasks": [
          {
            "taskName": "Prepare Monthly Report",
            "taskDescription": "Compile the monthly sales report for review.",
            "taskCategory": "Reporting",
            "taskDate": "2024-10-15",
            "taskCompleted": false,
            "newTask": true,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "Client Follow-up",
            "taskDescription": "Call clients for feedback on recent services.",
            "taskCategory": "Client Relations",
            "taskDate": "2024-10-16",
            "taskCompleted": true,
            "newTask": false,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "Team Meeting",
            "taskDescription": "Attend the quarterly team meeting.",
            "taskCategory": "Meeting",
            "taskDate": "2024-10-20",
            "taskCompleted": true,
            "newTask": false,
            "acceptedTask": true,
            "failedTask": false
          }
        ]
      },
      {
        "id": 2,
        "name": "Ridhi Singh",
        "email": "ridhi.singh@example.com",
        "password": "123",
        "taskStatuses": {
            "newTasks": 0,
            "completedTasks": 2,
            "acceptedTasks": 2,
            "failedTasks": 0,
        },
        "tasks": [
          {
            "taskName": "Budget Review",
            "taskDescription": "Evaluate the quarterly budget allocations.",
            "taskCategory": "Finance",
            "taskDate": "2024-10-14",
            "taskCompleted": true,
            "newTask": false,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "Update Database",
            "taskDescription": "Add new clients to the database.",
            "taskCategory": "Data Entry",
            "taskDate": "2024-10-15",
            "taskCompleted": false,
            "newTask": true,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "Marketing Strategy Meeting",
            "taskDescription": "Discuss strategies for next quarter.",
            "taskCategory": "Meeting",
            "taskDate": "2024-10-18",
            "taskCompleted": false,
            "newTask": true,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "Social Media Update",
            "taskDescription": "Schedule posts for the upcoming month.",
            "taskCategory": "Marketing",
            "taskDate": "2024-10-19",
            "taskCompleted": true,
            "newTask": false,
            "acceptedTask": true,
            "failedTask": false
          }
        ]
      },
      {
        "id": 3,
        "name": "Babar Chele",
        "email": "babar.chele@example.com",
        "password": "123",
        "taskStatuses": {
            "newTasks": 0,
            "completedTasks": 2,
            "acceptedTasks": 1,
            "failedTasks": 0,
        },
        "tasks": [
          {
            "taskName": "Product Design",
            "taskDescription": "Create wireframes for the new product.",
            "taskCategory": "Design",
            "taskDate": "2024-10-13",
            "taskCompleted": true,
            "newTask": false,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "User Testing",
            "taskDescription": "Organize a session with test users.",
            "taskCategory": "Testing",
            "taskDate": "2024-10-15",
            "taskCompleted": false,
            "newTask": true,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "Team Collaboration",
            "taskDescription": "Meet with the team to discuss design improvements.",
            "taskCategory": "Meeting",
            "taskDate": "2024-10-18",
            "taskCompleted": true,
            "newTask": false,
            "acceptedTask": true,
            "failedTask": false
          }
        ]
      },
      {
        "id": 4,
        "name": "Snigdha Debnath",
        "email": "snigdha.debnath@example.com",
        "password": "123",
        "taskStatuses": {
            "newTasks": 0,
            "completedTasks": 2,
            "acceptedTasks": 1,
            "failedTasks": 1,
        },
        "tasks": [
          {
            "taskName": "Inventory Check",
            "taskDescription": "Ensure all items are accounted for in storage.",
            "taskCategory": "Logistics",
            "taskDate": "2024-10-10",
            "taskCompleted": true,
            "newTask": false,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "Supplier Coordination",
            "taskDescription": "Reach out to suppliers for upcoming orders.",
            "taskCategory": "Logistics",
            "taskDate": "2024-10-12",
            "taskCompleted": false,
            "newTask": true,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "Order Fulfillment",
            "taskDescription": "Assist with fulfilling pending customer orders.",
            "taskCategory": "Operations",
            "taskDate": "2024-10-16",
            "taskCompleted": false,
            "newTask": true,
            "acceptedTask": false,
            "failedTask": true
          },
          {
            "taskName": "Logistics Strategy Meeting",
            "taskDescription": "Participate in the monthly logistics meeting.",
            "taskCategory": "Meeting",
            "taskDate": "2024-10-20",
            "taskCompleted": true,
            "newTask": false,
            "acceptedTask": true,
            "failedTask": false
          }
        ]
      },
      {
        "id": 5,
        "name": "Debojit Das",
        "email": "debojit.das@example.com",
        "password": "123",
        "taskStatuses": {
            "newTasks": 0,
            "completedTasks": 2,
            "acceptedTasks": 1,
            "failedTasks": 0,
        },
        "tasks": [
          {
            "taskName": "Customer Support",
            "taskDescription": "Respond to customer support emails.",
            "taskCategory": "Support",
            "taskDate": "2024-10-12",
            "taskCompleted": true,
            "newTask": false,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "Website Maintenance",
            "taskDescription": "Update website for improved loading times.",
            "taskCategory": "IT",
            "taskDate": "2024-10-14",
            "taskCompleted": false,
            "newTask": true,
            "acceptedTask": true,
            "failedTask": false
          },
          {
            "taskName": "Security Update",
            "taskDescription": "Run system security updates.",
            "taskCategory": "IT",
            "taskDate": "2024-10-16",
            "taskCompleted": true,
            "newTask": false,
            "acceptedTask": true,
            "failedTask": false
          }
        ]
      }
    ];


const admins = [
    
    {
        "id": "admin1",
        "name": "Admin User",
        "email": "admin@example.com",
        "password": "123"
      }

] ;

export const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admins",JSON.stringify(admins))
}
  
export const getLocalStorage = () => {
    const employees =JSON.parse(localStorage.getItem("employees"))
    const admins =JSON.parse(localStorage.getItem("admins"))

    return {employees, admins};
}