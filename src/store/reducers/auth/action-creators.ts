import axios from 'axios';

import { IUser } from '../../../models/IUser';
import { AppDispatch } from '../../index';

import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from './types';

export const AuthActionCreators = {
    SetUser: (user: IUser): SetUserAction => ({
        type: AuthActionEnum.SET_USER,
        payload: user,
    }),
    SetIsAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionEnum.SET_AUTH,
        payload: auth,
    }),
    SetIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING,
        payload,
    }),
    SetError: (payload: string): SetErrorAction => ({
        type: AuthActionEnum.SET_ERROR,
        payload,
    }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.SetIsLoading(true));
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json');
                const mockUser = response.data.find(user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.SetUser(mockUser));
                    dispatch(AuthActionCreators.SetIsAuth(true));
                } else {
                    dispatch(AuthActionCreators.SetError('Неверный логин или пароль'));
                }
                dispatch(AuthActionCreators.SetIsLoading(false));
            }, 1000);
        } catch (e) {
            dispatch(AuthActionCreators.SetError('Произошла ошибка при логине'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(AuthActionCreators.SetUser({} as IUser));
        dispatch(AuthActionCreators.SetIsAuth(false));
    },
};
