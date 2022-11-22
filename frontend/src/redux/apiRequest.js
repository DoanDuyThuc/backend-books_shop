import axios from 'axios';
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from './authSlice';
import { addCartsFailed, addCartsStart, addCartsSucces, deleteCartFailed, deleteCartStart, deleteCartSucces, getCartsFailed, getCartsStart, getCartsSucces, updateQualityFailed, updateQualityStart, updateQualitySucces } from './CartsSlice';
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

export const addProductsCarts = async (products, dispatch, navigate) => {
    dispatch(addCartsStart());
    try {
        await axios.post("http://localhost:8000/carts/add",products);
        dispatch(addCartsSucces());
        navigate('/carts')
    } catch (error) {
        dispatch(addCartsFailed());
    }
}

export const getAllCarts = async (dispatch) => {
    dispatch(getCartsStart());
    try {
        const res = await axios.get("http://localhost:8000/carts");
        dispatch(getCartsSucces(res.data));
    } catch (error) {
        dispatch(getCartsFailed());
    }
}

export const updateCartsQuality = async (id,newQuality, dispatch,navigate) => {
    dispatch(updateQualityStart());
    try {
        await axios.put("http://localhost:8000/carts/uquality/"+id,newQuality);
        dispatch(updateQualitySucces());
        navigate('/carts')
    } catch (error) {
        dispatch(updateQualityFailed());
    }
}

export const deleteCarts = async (id, dispatch) => {
    dispatch(deleteCartStart());
    try {
        await axios.delete("http://localhost:8000/carts/delete/"+id);
        dispatch(deleteCartSucces());
    } catch (error) {
        dispatch(deleteCartFailed());
    }
}
