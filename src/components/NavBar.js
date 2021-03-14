import { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch } from 'react-redux'
import { useLocation, useHistory, Link } from 'react-router-dom'

import logo from '../resources/img/logo.png'

import { setFilteredFilmsAction } from '../store/actions/films'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 100
    },
    image: {
        marginTop: 5
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const NavBar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    const [filter, setFilter] = useState('')


    const searchFilm = (value) => {
        setFilter(value)

        dispatch(setFilteredFilmsAction(value))

        if (location.pathname !== '/') {
            history.push('/')
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <Typography className={classes.title} variant="h6" noWrap>
                        React Films
                    </Typography>
                    <Typography className={classes.title} variant="subtitle1" noWrap>
                        Trending Films
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={filter}
                            onChange={e => searchFilm(e.target.value)}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar