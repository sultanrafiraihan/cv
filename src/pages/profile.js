import React, { useContext } from 'react';
import { UserContext } from '../userContext';

export function Profile() {
  const { value, setVlue } = useContext(UserContext);
  return (
    <div>
      <h2>Profile</h2>
      <div>{value}</div>
    </div>
  );
}

export default Profile;
