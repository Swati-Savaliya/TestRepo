// UserProfile.jsx
import React, { useState, useEffect } from 'react';

// Higher-Order Component that adds a loading indicator
const withLoading = (WrappedComponent) => {
  return (props) => {
    const { isLoading } = props;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

// Base presentational component that displays user data
const UserDisplay = ({ lifecycleMessage, error, user, changeUser, currentUserId }) => (
  <div>
    <h1>User Profile</h1>
    <p><strong>{lifecycleMessage}</strong></p>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {user && (
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    )}
    <button onClick={changeUser}>Change User</button>
    <p>Current User ID: {currentUserId}</p>
  </div>
);

const EnhancedUserDisplay = withLoading(UserDisplay);

const UserProfile = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(1);
console.log("currentUserId",currentUserId);

  const changeUser = () => {
    setCurrentUserId(prevUserId => (prevUserId === 1 ? 2 : 1));
  };

  // Simulate data fetching when currentUserId changes
  useEffect(() => {
    setIsLoading(true);
    // Simulated asynchronous fetch
    const timer = setTimeout(() => {
      // For demonstration, toggle user data based on currentUserId
      setUser(
        currentUserId === 1
          ? { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' }
          : { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' }
      );
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentUserId]);

  // Render the enhanced component and pass all required props
  return (
    <EnhancedUserDisplay 
      isLoading={isLoading} 
      error={error} 
      user={user} 
      changeUser={changeUser} 
      currentUserId={currentUserId} 
    />
  );
};

// export default UserProfile;
export default React.memo(UserProfile);
