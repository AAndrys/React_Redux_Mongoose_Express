//COUNTER REDUCER
const increment = () => {
    return {
        type: 'INCREMENT'
    };
};
const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}
const decrementOfNumber = (number) => {
    return {
        type: 'DECREMENT_OF_NUMBER',
        payload: number
    }
}
//LOGGED REDUCER
const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}
const logout = () => {
    return {
        type: 'SIGN_OUT'
    }
}
//MOVIES REDUCER
const addMovie = (newMovie) => {
    return {
        type: 'ADD_MOVIE',
        movie: newMovie
    }
}
const removeMovie = (index) => {
    return {
        type: 'REMOVE_MOVIE',
        payload: index
    }
}
export { increment, decrement, signIn, logout, decrementOfNumber, addMovie, removeMovie }