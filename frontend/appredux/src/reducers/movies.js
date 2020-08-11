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
        default:
            return state
    }
}


export default moviesReducer;