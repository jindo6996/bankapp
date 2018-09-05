import {createStore} from "redux";
import reducer from "../reducers";

const init = {
    username: "Nguyễn Tài Đại",
    totalAmount: 69696969
};
export const store = createStore(reducer,init);
