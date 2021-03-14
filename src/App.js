import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import Routes from './routes/router'
import filmsReducer from './store/reducers/films'


const rootReducer = combineReducers({
    films: filmsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)))

function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default App
