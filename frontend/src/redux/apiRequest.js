import axios from 'axios';
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from './authSlice';
import { productsStart,productsSucces, productsFailed, productsItemStart, productsItemSucces, productsItemFailed } from './productsSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8000/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFailed());
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("http://localhost:8000/auth/register", user);
        dispatch(registerSuccess());
        navigate('/login');
    } catch (error) {
        dispatch(registerFailed());
    }
}

export const getAllProducts = async (dispatch) => {
    dispatch(productsStart());
    try {
        const res = await axios.get("http://localhost:8000/products");
        dispatch(productsSucces(res.data));
    } catch (error) {
        dispatch(productsFailed());
    }
}

export const getProductsItem = async (dispatch, id,navigate) => {
    dispatch(productsItemStart());
    try {
        const res = await axios.get("http://localhost:8000/products/"+id);
        dispatch(productsItemSucces(res.data));
        navigate('/sanpham/'+id)
    } catch (error) {
        dispatch(productsItemFailed());
    }
}