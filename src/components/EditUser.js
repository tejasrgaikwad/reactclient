import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditUser = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(()=> {getUserById();}, [])


    const getUserById = async ()=>{
        const response = await axios.get(`http://localhost:3001/users/${id}`)
        console.log('respnose.data', response.data);
        setName(response.data.name)
        setEmail(response.data.email)
    }


    const updateUser = async (event) =>{
        event.preventDefault();
        await axios.patch(`http://localhost:3001/users/${id}`, {
            name,
            email
        });

        navigate("/");
    }

    return(
        <div className="columns mt-5">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input"  value={name} onChange={(event) => setName(event.target.value)}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input"  value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );

}

export default EditUser;