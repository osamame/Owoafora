import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateBook() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/owoafora/react-php/api/user/save', inputs).then(function(response){
            navigate('/');
        });
    }
    return (
        <div>
            <div className="center-margin-create">
            <h1>Create Book</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Book Title: </label>
                            </th>
                            <td>
                                <input type="text" name="booktitle" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Author: </label>
                            </th>
                            <td> 
                                <input type="text" name="author" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Total Pages: </label>
                            </th>
                            <td>
                                <input type="number" name="totalpage" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Isbn: </label>
                            </th>
                            <td>
                                <input type="text" name="isbn" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Publisher: </label>
                            </th>
                            <td>
                                <input type="text" name="publisher" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Release Date: </label>
                            </th>
                            <td>
                                <input type="date" name="releasedate" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
        </div>
    )
}