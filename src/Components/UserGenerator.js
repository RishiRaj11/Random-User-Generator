import React, { useState } from 'react'
import GenerateButton from './GenerateButton';
import "./UserGenerator.css";
import UsersList from './UsersList';
const UserGenerator = () => {
    const userdata = [];
    const [userCount, setUserCount] = useState(0);
    const [users, setUsers] = useState(userdata);
    return (
        <div>
            <GenerateButton userCount={userCount} setUserCount={setUserCount} />
            <UsersList userCount={userCount} setUsers={setUsers} users={users} />
        </div>
    )
}

export default UserGenerator;