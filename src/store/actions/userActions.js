import {userAPI} from "../../api/api";
import {userSlice} from "../slices/userSlice";

export const userAuth = (username, password) => {
    return async (dispatch) => {
        try {
            dispatch(userSlice.actions.setLoad(true));
            const resTokens = await userAPI.authUser(username, password);
                localStorage.setItem('token', resTokens.data.bearerToken);
                localStorage.setItem('refreshToken', resTokens.data.refreshToken);
            const resUser = await userAPI.checkUser();
            dispatch(userSlice.actions.setUser(resUser.data));
            dispatch(userSlice.actions.setAuth(true));
            dispatch(userSlice.actions.setLoad(false));
        } catch (e) {
            dispatch(userSlice.actions.setAuth(false));
            dispatch(userSlice.actions.setError(e.response.data.message));
        }
    }
}

export const checkAuth = () => {
    return async (dispatch) => {
        try {
            if(localStorage.getItem('token')) {
                dispatch(userSlice.actions.setLoad(true));
                const resUser = await userAPI.checkUser();
                dispatch(userSlice.actions.setUser(resUser.data));
                dispatch(userSlice.actions.setAuth(true));
                dispatch(userSlice.actions.setLoad(false));
            } else {
                dispatch(userSlice.actions.setAuth(false));
            }
        } catch (e) {
            dispatch(userSlice.actions.setAuth(false));
            dispatch(userSlice.actions.setError(e.response.data.message));
        }
    }
}