import {userAPI} from "../../Api/Api";
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
            dispatch(userSlice.actions.setError(e));
            console.log(e)
        }
    }
}