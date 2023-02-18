import React from 'react';
import { BrowserRouter, Switch, Route , Button} from 'react-router-dom';
import Header from '../Components/Header';
import AddBook from '../Components/AddBook';
import BooksList from '../Components/BooksList';
// import { Button } from 'bootstrap';


export default AppRouter;

import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route component={BooksList} path="/" exact={true} />
                        <Route component={AddBook} path="/add" />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}