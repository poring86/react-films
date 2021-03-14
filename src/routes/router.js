import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Home from '../pages/Home'
import FilmDetail from '../pages/FilmDetail'

import NavBar from '../components/NavBar'
import { setFilmsAction } from '../store/actions/films'




const Routes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getFilmList = async () => {
            await dispatch(setFilmsAction())
        }
        getFilmList()
    }, [dispatch])

    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/film-detail/:id">
                    <FilmDetail />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes