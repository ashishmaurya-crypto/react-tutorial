import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Home from '../component/Home';
import BookList from '../component/BookList';
import NotFound from '../component/NotFound';
import NewBook from '../component/NewBook';
import Articlehome from '../component/Article/Articlehome';
import ArticleFirstPage from '../component/Article/ArticleFirstPage';
import ArticleSecandPage from '../component/Article/ArticleSecandPage';


export default function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
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

                </Routes>
            </BrowserRouter>
        </>
    )
}
