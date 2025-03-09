import React, { useState, useMemo, useCallback } from 'react';

const UsersList = () => {
  const [query, setQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  // A static list of users
  const users = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'Diana Prince' },
    { id: 5, name: 'Evan Davis' },
  ];

  // useMemo: Filter the users list based on the search query.
  // This computation will re-run only when 'query' changes.
  const filteredUsers = useMemo(() => {
    console.log('Filtering users for query:', query);
    return users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  // useCallback: Create a memoized callback that handles user selection.
  // This function depends on the current query value.
  const handleSelectUser = useCallback((user) => {
    console.log(`User selected: ${user.name} (Current query: "${query}")`);
    setSelectedUser(user);
  }, [query]);

  return (
    <div>
      <h1>Users List</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search users"
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name}{' '}
            <button onClick={() => handleSelectUser(user)}>
              Select
            </button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h2>Selected User:</h2>
          <p>{selectedUser.name}</p>
        </div>
      )}
    </div>
  );
}

export default UsersList;
