export default (state, action) => {
    console.log(state);
    switch (action.type) {
        case "WITH_DRAW":
            return {
                ...state,
                totalAmount: state.totalAmount - action.amount
            };
        default:
            return state;
    }
}