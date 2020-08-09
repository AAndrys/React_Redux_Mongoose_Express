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
export { increment, decrement, signIn, logout, decrementOfNumber }