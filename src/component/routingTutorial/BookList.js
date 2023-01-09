import React from 'react';
import { useParams, useLocation, useSearchParams } from "react-router-dom"
import { Link } from 'react-router-dom';

export default function BookList() {
    const location = useLocation()
    const { id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const number = searchParams.get("n")
    console.log(number)
    return (
        <>
            <div>
                BookList
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <h1>Book {id}</h1>
            </div>
            <div>
                <h4>state present in link</h4>
                <p>{location.state ? location.state.bookName : 'no state present'}</p>
            </div>
            <div>
                <h4>search present in link</h4>
                <p>{location.search ? location.search : 'no search present'}</p>
            </div>
            <div>
                <h4>fetch query from link present in link</h4>
                <p>{number ? number : 'no query present'}</p>
            </div>

        </>
    )
}
