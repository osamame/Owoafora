import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListBook() {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooks();
    }, []);

    function getBooks() {
        axios.get('http://localhost/owoafora/react-php/api/users').then(function(response) {
            setBooks(response.data);
        });
    }

    return (
        <div>
            <div className="center-margin">
            <h1>List Books</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Total Pages</th>
                        <th>Isbn</th>
                        <th>Publisher</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((user, key) =>
                        <tr key={key}>
                            <td>{user.BookTitle}</td>
                            <td>{user.Author}</td>
                            <td>{user.TotalPages}</td>
                            <td>{user.ISBN}</td>
                            <td>{user.Publisher}</td>
                            <td>
                                <Link to={`book/${user.Id}/comment`} style={{marginRight: "10px"}}>View Comments</Link>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
            </div>
        </div>
    )
}