import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Comment() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [commentsList, setCommentsList] = useState([]);
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getBook();
        getComment();
    }, []);

    function getBook() {
        axios.get(`http://localhost/owoafora/react-php/api/user/${id}`).then(function (response) {
            setInputs(response.data);
        });
    }

    function getComment() {
        axios.get(`http://localhost/owoafora/react-php/api/user/comment/${id}`).then(function (response) {
            setCommentsList(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setComments(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost/owoafora/react-php/api/user/${id}/comment`, comments).then(function (response) {
            console.log(response.data);
            getComment();
        });
    }

    return (
        <div>
            <div className="center-margin-create">
                <h4>Book Details</h4>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>BookTitle: </label>
                            </th>
                            <td>
                                <span>{inputs.BookTitle}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Author: </label>
                            </th>
                            <td>
                                <span>{inputs.Author}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>TotalPages: </label>
                            </th>
                            <td>
                                <span>{inputs.TotalPages}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>ISBN: </label>
                            </th>
                            <td>
                                <span>{inputs.ISBN}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Publisher: </label>
                            </th>
                            <td>
                                <span>{inputs.Publisher}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>ReleaseDate: </label>
                            </th>
                            <td>
                                <span>{inputs.ReleaseDate}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <h6>Please Place A Comment About This Book</h6>
                <br/>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <th>
                                <label>Commented By: </label>
                            </th>
                            <td>
                                <input type="text" name="commentby" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Comment: </label>
                            </th>
                            <td>
                                <textarea rol="50" col="5" name="comments" className="width-100" onChange={handleChange}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button type="submit">Comment</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <br/><br/>
                <h6>Comment Posted About This Book</h6>
                <br/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Comment</th>
                            <th>Commented By</th>
                            <th>Date Posted</th>
                        </tr>
                    </thead>
                    <tbody>
                    {commentsList.map((comment, key) =>
                            <tr key={key}>
                                <td>{comment.Comments}</td>
                                <td>{comment.CommentedBy}</td>
                                <td>{comment.DateCreated}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}