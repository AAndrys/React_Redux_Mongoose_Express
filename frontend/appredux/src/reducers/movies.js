const initialMovies = {
    title: "Tytuły",
    movies: ['pierwszy', 'drugi', 'trzeci']
}

const moviesReducer = (state = initialMovies, action) => {
    switch(action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [...state.movies, action.movie]
            }
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((item, index) => index !== action.payload)
            }
        default:
            return state
    }
}


export default moviesReducer;