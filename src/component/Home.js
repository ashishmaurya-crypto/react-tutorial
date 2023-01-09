import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate()
    return (
        <>
            {/* Handling Navigation */}
            <nav className='mt-5'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/routinghome">routing-tutorial</Link></li>
                    <li><Link to="/reduxhome">redux-tutorial</Link></li>
                </ul>
            </nav>
        </>
    )
}
