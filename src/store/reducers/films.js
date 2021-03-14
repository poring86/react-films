import { SET_FILMS, SET_FILTERED_FILMS } from '../actions/films'

const initialState = {
    films: [],
    filteredFilms: [],
    filtering: false
}

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films: action.films,
                filteredFilms: action.films
            }
        case SET_FILTERED_FILMS:

            let filteredFilms = state.films

            if (action.filter !== '') {
                filteredFilms = filteredFilms.filter(film => film.title.toLowerCase().includes(action.filter.toLowerCase()))
            }

            return {
                ...state,
                filteredFilms

            }
        default:
            return state
    }
}

export default filmsReducer