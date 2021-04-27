import React, { useEffect, useState } from 'react';
import { auth } from './config/fbconfig';
import Home from './components/home/home';
import SignIn from './signin/SignIn';
import { Navbar } from './components/layout/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './signin/SignUp';
import Favorites from './components/notes/Favorites';
import NotesDetail from './components/notes/NotesDetail';
import EditForm from './components/notes/EditForm';

const RouterHere = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged(userAuth => {
            const user = {
                uid: userAuth?.uid,
                email: userAuth?.email
            }
            if (userAuth) {
                setUser(user);
            } else {
                setUser(null)
            }
        })
        return unSubscribe;
    }, [])
    const HomeComponent = user ? <Home /> : <SignIn />;
    return (
        <div>
            <Router >
                {user?<Navbar />:''}
                <Switch>
                    <Route exact path='/' >
                        {HomeComponent}
                    </Route>
                    <Route exact path='/favorite-notes'>
                        <Favorites />
                    </Route>
                    <Route exact path='/note/:id/'>
                        <NotesDetail />
                    </Route>
                    <Route exact path='/edit-form/:id/'>
                        <EditForm />
                    </Route>
                    <Route exact path='/sign-up' >
                        <SignUp />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default RouterHere
