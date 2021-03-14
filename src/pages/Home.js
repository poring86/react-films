import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import FilmList from '../components/FilmList'


const Home = () => {
    const films = useSelector(state => state.films.filteredFilms)


    return (
        <Container>
            { films.length > 0 ? (
                <Grid container spacing={3}>
                    <FilmList films={films} />
                </Grid>
            ) : (
                <Grid container justify="center">
                    <strong>No results found!</strong>
                </Grid>
            )}
        </Container>
    )
}

export default Home