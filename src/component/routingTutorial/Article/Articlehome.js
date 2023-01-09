import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Articlehome() {
    return (
        <>
            <div>
                <div>
                    <nav className='mt-5'>
                        <ul className='d-flex justify-content-around'>
                            <li><Link to="/articlehome/articlefirstpage">page1</Link></li>
                            <li><Link to="/articlehome/articlesecandpage">page2</Link></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>

        </>
    )
}
