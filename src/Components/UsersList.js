import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./UsersList.css";
const UsersList = (props) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUser(res.data));
    }, []);

    useEffect(() => {
        const oneUser = user.filter((ele) => ele.id == props.userCount);
        props.setUsers([...props.users, ...oneUser]);
    }, [props.userCount]);

    return (
        <div className="list">
            <hr></hr>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Website</td>
                    <td>City</td>
                </tr>

                {props.users.map((item, i) => (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                        <td>{item.address.city}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default UsersList;
