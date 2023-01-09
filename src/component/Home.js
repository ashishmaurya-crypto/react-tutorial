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
                    <li><Link to="/">all-Input-tutorial</Link></li>
                    <li><Link to="/">callback-conditional argument-tutorial</Link></li>
                    <li><Link to="/">map-tutorial</Link></li>
                    <li><Link to="/">filter-tutorial</Link></li>
                    <li><Link to="/">array-tutorial</Link></li>
                    <li><Link to="/">object-tutorial</Link></li>
                    <li><Link to="/">api-integration-tutorial</Link></li>
                </ul>
            </nav>
        </>
    )
}
