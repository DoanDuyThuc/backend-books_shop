import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Register.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({});
    const onSubmit = (data) => console.log(data);
    const password = useRef({});
    password.current = watch('password', '');
    return (
        <div className="Login">
            <img src="backgroundlogin.svg"></img>
            <form onSubmit={handleSubmit(onSubmit)}>
                <img className="Logo" src="Logo.svg"></img>
                <p>Chào Mừng bạn!</p>
                <h1>Đăng Kí</h1>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email của bạn"
                    {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                ></input>
                <label className="password" htmlFor="password">
                    Mật khẩu{' '}
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu của bạn"
                    {...register('password', {
                        required: true,
                        minLength: {
                            value: 8,
                        },
                    })}
                ></input>
                <label className="confirmPassword" htmlFor="confirmPassword">
                    Nhập lại mật khẩu{' '}
                </label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Nhập lại mật khẩu"
                    {...register('confirmPassword', {
                        required: true,
                        minLength: 6,
                        validate: (value) => value === password.current,
                    })}
                ></input>
                {Object.keys(errors).length !== 0 && (
                    <ul className="error-container">
                        {errors.email?.type === 'required' && <li>Bạn Chưa Nhập Email</li>}
                        {errors.email?.type === 'pattern' && <li>Bạn Chưa Nhập Đúng Email</li>}
                        {errors.password?.type === 'required' && <li>Bạn Chưa Nhập Mật Khẩu</li>}
                        {errors.confirmPassword?.type === 'required' && <li>Bạn Chưa Lại Nhập Mật Khẩu</li>}
                        {errors.confirmPassword?.type === 'validate' && <li>Bạn Chưa Nhập Đúng Mật Khẩu</li>}
                        {errors.password?.type === 'minLength' && <li>Mật Khẩu Phải Nhiều Hơn 8 Kí Tự</li>}
                    </ul>
                )}

                <button className="submit">
                    ĐĂNG NHẬP <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <p className="textregister">
                    Bạn chưa có tài khoản <NavLink to="/register">Đăng kí</NavLink>
                </p>
            </form>
        </div>
    );
}

export default Register;
