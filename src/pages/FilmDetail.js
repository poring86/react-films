import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'

import { config } from '../config'

const FilmDetail = () => {
    const { id } = useParams()
    const history = useHistory()

    const selectedFilm = useSelector(state => state.films.films.find(film => film.id === parseInt(id)))
    return (
        <Container>
            <Grid container spacing={3}>
                {selectedFilm && (
                    <>
                        <Grid item xs={12} align="center">
                            <img src={`${config.imageBaseUrl}${selectedFilm.poster_path}`} alt={selectedFilm.poster_path} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h1">
                                {selectedFilm.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                {selectedFilm.overview}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="overline" display="block">
                                Release date: {dayjs(selectedFilm.release_date).format('MMMM D, YYYY')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <strong>
                                Rate: {selectedFilm.vote_average}
                            </strong>

                        </Grid>

                    </>
                )}
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => {
                        history.push('/')
                    }}>
                        Return
                    </Button>
                </Grid>
            </Grid>

        </Container>
    )
}

export default FilmDetail