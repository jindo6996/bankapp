import React from 'react';
import {store} from './store';
const ButtonGroup = ({amounts}) => (
<section className="App__buttons">
    {amounts.map((amount,i) =>(
        <button
            data-amount = {amount}
            key={`btn`-i}
            className="amount"
            onClick={dispatchBtnAction}
        >
            WITHDRAW ${amount}
        </button>
    ))}
</section>
);
function dispatchBtnAction(e) {
    const amount = e.target.dataset.amount;
    store.dispatch(setAmount(amount));
}
const setAmount = amount => ({type: "WITH_DRAW", amount});
export default ButtonGroup;