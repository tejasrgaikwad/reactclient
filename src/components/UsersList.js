import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const UsersList = ()=> {

    const [users, setUsers] = useState([]);  

    useEffect(() =>{
        getUsers();
    }, []);

    const getUsers = async () =>{
        const response = await axios.get(`http://localhost:3001/users`);
        console.log(response);
        setUsers(response.data);
    }

    /*
    Write delete api call function
    */

    return (
        <div className="columns mt-5">
            <div className="column is-half">
            <Link to="add" className="button is-success"> Add</Link>
                
            <table className="table is-stripped is-fullwidth mt-2">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user, index) =>(
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`edit/${user._id}`} className="button is-info is-small mr-1">Edit</Link>
                                {/** add delete button onclick call delete api pass parameter as id. */}    

                            </td>
                        </tr>
                    ))}                    
                </tbody>
            </table>
            </div>
        </div>
    );
}


export default UsersList;
