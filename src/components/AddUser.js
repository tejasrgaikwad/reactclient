import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddUser = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    const saveUser = async (event) =>{
        event.preventDefault();
        await axios.post(`http://localhost:3001/users`, {
            name,
            email
        });

        navigate("/");
    }

    return(
        <div className="columns mt-5">
            <div className="column is-half">
                <form onSubmit={saveUser}>
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

export default AddUser;