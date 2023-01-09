import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Home from '../component/Home';
import RoutingHome from '../component/routingTutorial/RoutingHome';
import BookList from '../component/routingTutorial/BookList';
import NotFound from '../component/NotFound';
import NewBook from '../component/routingTutorial/NewBook';
import Articlehome from '../component/routingTutorial/Article/Articlehome';
import ArticleFirstPage from '../component/routingTutorial/Article/ArticleFirstPage';
import ArticleSecandPage from '../component/routingTutorial/Article/ArticleSecandPage';
// 
import Increment from '../component/reduxTutorial/index';


export default function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/routinghome' element={<RoutingHome/>} />
                    <Route path="/books" element={<BookList />} />
                    {/* Dynamic Routing */}
                    <Route path="/books/:id" element={<BookList />} />
                    {/* not found page */}
                    <Route path="*" element={<NotFound />} />
                    {/* nested routing */}
                    <Route path="/books">
                        <Route index element={<BookList />} />  {/* try this http://localhost:3000/books*/}
                        <Route path=":id" element={<BookList />} /> {/* try this http://localhost:3000/books/456 */}
                        <Route path="new" element={<NewBook />} /> {/* try this http://localhost:3000/books/new */}
                    </Route>
                    {/* outlet */}
                    <Route path="/articlehome" element={<Articlehome />}>
                        <Route path="/articlehome/articlefirstpage" element={<ArticleFirstPage />} /> 
                        <Route path="/articlehome/articlesecandpage" element={<ArticleSecandPage />} />
                    </Route>

                    {/* redux page */}
                    <Route path='/reduxhome' element={<Increment/>} />

                </Routes>
            </BrowserRouter>
        </>
    )
}
