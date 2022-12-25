import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate()
    return (
        <>
            {/* Handling Navigation */}
            <nav className='mt-5'>
                <ul className='d-flex justify-content-around'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/books/34">Books34</Link></li>
                </ul>
            </nav>
            <div>
                <h1>Home</h1>
            </div>
            <div className='border mt-5'>
                <h4>Handling Navigation</h4>
                <p><b>replace :</b>
                    The replace prop is a boolean that when set to true will cause this link to replace the current page in the browser history. Imagine you have the following browser history.</p>
                <button onClick={()=> {navigate("/books", { replace: false, state: { bookName: "Fake Title" }})}}>move (replace : false)</button>
                <button onClick={()=> {navigate("/books", { replace: true, state: { bookName: "Fake Title" }})}}>move (replace : true)</button>
                <p>for search query</p>
                <button onClick={()=> {navigate("/books?n=32#id", { replace: false})}}>move (for query)</button>
            </div>
            <div className='border mt-5'>
                <h4>how to use outlet</h4>
                <Link to="/articlehome">articlehome</Link>
            </div>
        </>
    )
}
