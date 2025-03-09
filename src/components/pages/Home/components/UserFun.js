// import React, { useState, useEffect } from 'react';

// const UserProfile = () => {
//   // State variables
//   const [user, setUser] = useState(null);            // To store user data
//   const [loading, setLoading] = useState(true);      // To show loading status
//   const [error, setError] = useState(null);          // To handle errors
//   const [lifecycleMessage, setLifecycleMessage] = useState('Component is being constructed');
//   const [currentUserId, setCurrentUserId] = useState(1); // User ID for fetching users

//   // Fetch user data based on the currentUserId
//   const fetchUserData = (userId) => {
//     setLoading(true);
//     setError(null);
//     setLifecycleMessage('Fetching user data...');

//     // Simulate an API call with a delay
//     setTimeout(() => {
//       fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(response => response.json())
//         .then(data => {
//           setUser(data);
//           setLoading(false);
//           setError(null);
//           setLifecycleMessage('User data has been fetched');
//         })
//         .catch(error => {
//           setError('Failed to fetch user data');
//           setLoading(false);
//         });
//     }, 1000);
//   };

//   useEffect(() => {}, [])

//   // Lifecycle-like effect for mounting
//   useEffect(() => {
//     // setLifecycleMessage('componentDidMount: Component has mounted');
//     fetchUserData(currentUserId);

//     // Cleanup function for componentWillUnmount (if necessary)
//     return () => {
//       setLifecycleMessage('componentWillUnmount: Component will be unmounted');
//     };
//   }, [currentUserId]); // Empty dependency array, so this effect runs only once when the component mounts

// //   // Effect for handling updates (when the currentUserId changes)
// //   useEffect(() => {
// //     setLifecycleMessage('componentDidUpdate: User ID has been changed, fetching new data');
// //     fetchUserData(currentUserId);
// //   }, [currentUserId]); // Dependency array contains currentUserId, so this effect runs whenever currentUserId changes

//   // Method to change user (trigger an update)
//   const changeUser = () => {
//     setCurrentUserId(prevUserId => (prevUserId === 1 ? 2 : 1)); // Toggle between user ID 1 and 2
//   };

//   return (
//     <div>
//       <h1>User Profile</h1>

//       {/* Display the lifecycle message */}
//       <p><strong>{lifecycleMessage}</strong></p>

//       {/* Display loading message */}
//       {loading && <p>Loading...</p>}

//       {/* Display error message if any */}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {/* Display user data once loaded */}
//       {user && (
//         <div>
//           <h2>{user.name}</h2>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//         </div>
//       )}

//       {/* Button to change user */}
//       <button onClick={changeUser}>Change User</button>
//       <p>Current User ID: {currentUserId}</p>
//     </div>
//   );
// };

// export default UserProfile;


import React, { useState, useEffect } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [newTask, setNewTask] = useState('');
  
  
  // State to store the new task input

  let a = [1,2,3,4,5]

  // Effect to calculate remaining tasks and completed tasks
  useEffect(() => {
    // Code to update the remaining and completed tasks count (could use console.log or state for display)
  }, [tasks]); // Re-run effect when tasks list changes

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        name: newTask,
        completed: false,
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.name}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <p>Tasks Remaining: {tasks.filter((task) => !task.completed).length}</p>
      <p>Tasks Completed: {tasks.filter((task) => task.completed).length}</p>
    </div>
  );
};

export default TaskManager;

