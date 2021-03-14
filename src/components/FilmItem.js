import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'

import { config } from '../config'
import { useHistory } from "react-router-dom"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
})

const FilmItem = ({ film }) => {
    const classes = useStyles()
    const history = useHistory()

    let filmResume = film.overview.substr(0, 120)
    filmResume = filmResume.concat('...')

    const clickHandler = () => {
        history.push(`/film-detail/${film.id}`)
    }

    return (
        <Card onClick={clickHandler} className={classes.root} style={{ backgroundColor: film.vote_average > 6 ? "#fff9c4" : "transparent" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="500"
                    image={`${config.imageBaseUrl}${film.poster_path}`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {film.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {filmResume}
                    </Typography>
                    <br />
                    <Typography gutterBottom component="h3">
                        Rate: {film.vote_average}
                    </Typography>
                    <Typography gutterBottom component="p" color="textSecondary">
                        Release date: {dayjs(film.release_date).format('MMMM D, YYYY')}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default FilmItem
