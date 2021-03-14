import Grid from '@material-ui/core/Grid'

import FilmItem from './FilmItem'


const FilmList = ({ films }) => {
    return (
        films.map((film, index) => {
            return (
                <Grid item md={3} sm={6} xs={12} key={index}>
                    <FilmItem film={film} />
                </Grid>
            )
        })
    )
}

export default FilmList