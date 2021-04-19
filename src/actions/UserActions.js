import {USER_URL} from "../api/constants";
import { FETCH_USER, UPDATE_USER, UPDATE_USER_FAIL,FETCH_USER_FAIL} from "./actionConstants";

export const fetchUserProfile = (userId) => async dispatch  => {
    const errorObj = {
        hasError: true,
        errorMessage: "Failed to fetch user details...Please try again"
    };
    try{
        const user = await fetch(USER_URL + userId,{});
        user.json().then(data =>{
            console.log("User data" + data);
            dispatch({type: FETCH_USER, payload: data});
        });
    }catch(e){
        dispatch({
            type: FETCH_USER_FAIL,
            payload: errorObj
        })
    }
};

export const updateUserProfile = (userId,user) => async dispatch => {
    const errorObj = {
        hasError: true,
        message: "Failed to update user...Please try again"
    };
    try{
        const updateUserResponse = await fetch(USER_URL+ userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (updateUserResponse.status === 200) {
            return dispatch({
                type: UPDATE_USER,
                payload: {
                    hasError: false,
                    message: "User details updated successfully!"
                }
            })
        }else{
            dispatch({
                type: UPDATE_USER_FAIL,
                payload: errorObj
            })
        }
    }catch(e){
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: errorObj
        })
    }
};