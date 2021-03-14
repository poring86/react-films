import axios from 'axios'
import _ from 'lodash'

import { config } from '../../config'

export const SET_FILMS = 'SET_FILMS'

export const SET_FILTERED_FILMS = 'SET_FILTERED_FILMS'

export const setFilmsAction = () => {
    return async dispatch => {
        try {
            const res = await axios.get(`${config.baseUrl}trending/movie/day?sort_by=vote_average.desc&api_key=${config.TMDBapiKey}`)
            let films = res.data.results
            films = _.orderBy(films, ['vote_average'], ['desc'])

            dispatch({
                type: SET_FILMS,
                films
            })
        }
        catch (e) {
            console.log(e)
        }

    }
}

export const setFilteredFilmsAction = (filter) => {
    return async dispatch => {
        dispatch({
            type: SET_FILTERED_FILMS,
            filter
        })
    }
}