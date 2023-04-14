import { useState } from 'react';

import { UserType } from '../../../types';

export default function useUsers() {
  const [users, setUsers] = useState<UserType[]>([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.log);
  };

  return { users, fetchUsers };
}
